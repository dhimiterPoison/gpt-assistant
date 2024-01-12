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

const FinancesWidget = () => {
	return (
		<Card className='flex flex-col'>
			<CardHeader>
				<div className='flex items-center justify-between'>
					<CardTitle>Finances</CardTitle>
					<Button className='' variant='outline' size='icon'>
						<EnterFullScreenIcon></EnterFullScreenIcon>
					</Button>
				</div>
				<CardDescription>You're doing great! Keep it up!</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col items-center justify-center p-6'>
				<div className='finances-bar flex gap-1 w-full first:rounded-tl-xl even:rounded-r-xl even:bg-black'>
					
					<div className='h-8  w-[60%] rounded-l-xl bg-emerald-600'></div>
					<div className='h-8  w-[25%]  bg-rose-600'></div>
					<div className='h-8  w-[15%] rounded-r-xl bg-orange-600'></div>
				</div>
			</CardContent>
		</Card>
	);
};

export default FinancesWidget;
