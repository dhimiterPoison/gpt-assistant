import { ButtonMovingBorder } from '@/components/ui/moving-border-button';
import React from 'react';
import { getXataClient } from '@/lib/xata';
import { Badge } from '@/components/ui/badge';
import { CircleArrowDown, CircleArrowUp } from 'lucide-react';
import { formatDate,formatExpirationDate } from '@/lib/date';

const xata = getXataClient();

const PlaygroundPage = async () => {
	const categories = await xata.db.categories.getMany();

	// let transactions = await xata.db.transactions
	// 	.select(['*', 'category_id.*'])
	// 	.getMany();

	// transactions.sort(
	// 	(a, b) => a.effective_date.getTime() - b.effective_date.getTime()
	// );

	return (
		<div className='flex h-full w-full flex-col gap-8 lg:flex-row'>
			<div className='flex h-full w-full flex-col items-start justify-start p-4'>
				<span className='text-lg font-semibold'>Transactions</span>
				<div className='flex flex-col gap-2'>
					{/* below each row of the table there should be a + that appears
						in order to add new transactions in that timeframe. but that can be 
						a very long range. i could not know the date. why should i do it like this?

						is this better than a button on top of the table that says "add transaction"?
					*/}
					{/* {transactions.map((transaction) => (
						<div
							key={transaction.id}
							className={`grid grid-cols-[auto_1fr_1.5fr_2fr_100px] items-center gap-2 p-1`}
						>
							<div>
								{transaction.type == 'income' ? (
									<CircleArrowUp fill='green' color='white' />
								) : (
									<CircleArrowDown fill='red' color='white' />
								)}
							</div>
							<Badge>{transaction.category_id?.name}</Badge>
							<span>{formatExpirationDate(transaction.effective_date)}</span>
							<span>{transaction.description}</span>
							<div className='text-right'>
								<span>{transaction.currency}</span>
								<span>{transaction.amount}</span>
							</div>
						</div>
					))} */}
				</div>
			</div>
			<div className='flex h-full flex-col items-start justify-start p-4'>
				<span className='text-lg font-semibold'>Categories</span>
				<div className='flex flex-col gap-2'>
					{categories.map((category) => (
						<div
							key={category.id}
							className={`flex items-center border p-1 bg-[var(${category.color})]`}
						>
							{category.name}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PlaygroundPage;
