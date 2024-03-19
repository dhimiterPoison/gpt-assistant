import { fridgeItems } from '@/lib/mockdata';
import React from 'react';
import {
	createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import RecipeSuggestions from './RecipeSuggestions';
import FridgeItemComponent from './FridgeItem';
import GroceriesFilter from './GroceriesFilter';

const FridgePage = async () => {
	// const supabase = createClientComponentClient();
	const cookieStore = cookies();
	const supabase = createServerComponentClient({
		cookies: () => cookieStore,
	});

	let { data: fridge, error } = await supabase.from('fridge').select('*');

	console.log(fridge);
	return (
		<div className='min-h-full flex-col'>
			<RecipeSuggestions />
			<div>
				<h2 className='text-xl font-semibold pt-4'>Groceries</h2>
				<GroceriesFilter />
				<div className='groceries-list flex flex-col gap-2'>
					{fridge?.map((el) => <FridgeItemComponent key={el.id} item={el}/>)}
				</div>
			</div>
		</div>
	);
};

export default FridgePage;
