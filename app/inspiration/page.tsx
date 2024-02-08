import { Card } from '@/components/ui/card'
import React from 'react'
import SuggestionCard from './SuggestionCard'

const cards = [
	{
		id: 1,
		title: 'Rea Earth',
		link: 'https://www.youtube.com/c/ReaEarth',
		image: 'https://yt3.googleusercontent.com/y7LBOgAuPVHD0fF44cPxlv3oKJWAHwD9LLQCXfLgpuAaZ6PZPTqDZyxL13hWnoLc6sX3dheT2L8=s176-c-k-c0x00ffffff-no-rj',
		description: 'A project to help you connect with the earth and nature.'
	},
	{
		id: 2,
		title: 'Meditation',
		link: 'https://www.youtube.com/c/ReaEarth',
		image: 'https://yt3.googleusercontent.com/y7LBOgAuPVHD0fF44cPxlv3oKJWAHwD9LLQCXfLgpuAaZ6PZPTqDZyxL13hWnoLc6sX3dheT2L8=s176-c-k-c0x00ffffff-no-rj',
		description: 'A project to help you connect with the earth and nature.'
	}
];
const InspirationPage = () => {
	return (
		<div className='flex flex-col'>
			<p>Here you can find some suggestions to deepen the understanding of your self.</p>
			<div className='flex flex-wrap gap-8 p-12 justify-evenly'>
				{cards.map((card, index) => {
					return <SuggestionCard key={card.id} {...card}></SuggestionCard>
				})}
			</div>
		</div>
	)
}

export default InspirationPage