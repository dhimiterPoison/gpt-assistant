import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { EnterFullScreenIcon, UploadIcon } from '@radix-ui/react-icons';
import React from 'react';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type PersonalData = {
	id: string;
	createdAt: string;
	balance: number;
};
const FinancesWidget = async () => {
	const cookieStore = cookies();
	const supabase = createServerComponentClient({ cookies: () => cookieStore });

	let { data, error } = await supabase
		.from('personal_data')
		.select('*')
		.single();

	console.log(data, error);

	return (
		<Card className='flex flex-col'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle>Finances</CardTitle>
					<Button className='' variant='outline' size='icon'>
						<EnterFullScreenIcon></EnterFullScreenIcon>
					</Button>
				</div>
				<CardDescription>You&apos;re doing great! Keep it up!</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col items-center justify-center p-6 pt-0'>
				{row('Balance', 0)}
				{row('Net worth', 0)}
				<div className='flex w-full justify-between font-semibold pt-4'>
					<span>Budget overview</span>
				</div>
				<div className='finances-bar flex gap-1 w-full py-2 first:rounded-tl-xl even:rounded-r-xl'>
					{/* repeat for each category */}
					<div className='h-8  w-[60%] rounded-l-xl bg-emerald-600'></div>
					<div className='h-8  w-[25%]  bg-rose-600'></div>
					<div className='h-8  w-[15%] rounded-r-xl bg-orange-600'></div>
				</div>
				<div className='flex w-full justify-between font-semibold pt-2'>
					<span>Savings</span>
				</div>
				{/* {row('Budget overview', 0)} */}
				<div className='finances-bar flex gap-1 w-full py-2 first:rounded-tl-xl even:rounded-r-xl'>
					{/* repeat for each category */}
					<div className='h-8  w-[75%] rounded-l-xl bg-blue-600 text-primary-foreground  flex justify-center items-center'>
						75%
					</div>
					<div className='h-8  w-[25%] rounded-r-xl bg-blue-200 flex justify-center items-center'>
						25%
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default FinancesWidget;

const row = (title: string, value: number) => {
	return (
		<div className='flex w-full justify-between font-semibold'>
			<span>{title}</span>
			<span>€ {value ?? 0}</span>
		</div>
	);
};
