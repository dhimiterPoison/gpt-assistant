import React from 'react'
import TextualChat from './TextualChat';
import FinancesWidget from './FinancesWidget';
import OutputWidget from './OutputWidget';
import AgendaWidget from './AgendaWidget';

const Dashboard = () => {
  return (
	<main className='h-full grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-2 overflow-auto'>
			<section className='col-span-1 row-span-3 flex flex-col p-6 gap-6'>
				<TextualChat></TextualChat>
				<FinancesWidget></FinancesWidget>
			</section>
			{/* output should be expanded only when there is something to show */}
			<section className='col-start-2 row-span-3 p-6 ' id='output'>
				<OutputWidget></OutputWidget>
			</section>
			<section
				className='col-start-1 row-span-4 col-span-2 md:col-start-3 md:row-span-3 md:col-span-1 p-6'
				id='events'
			>
				<AgendaWidget></AgendaWidget>
			</section>
		</main>
  )
}

export default Dashboard