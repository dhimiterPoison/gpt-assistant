import { ButtonMovingBorder } from '@/components/ui/moving-border-button';
import React from 'react';

const PlaygroundPage = () => {
	return (
		<div className='flex h-full w-full items-center justify-center'>
			<ButtonMovingBorder
				borderRadius='1.75rem'
				className='border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white'
			>
				Borders are cool
			</ButtonMovingBorder>
		</div>
	);
};

export default PlaygroundPage;
