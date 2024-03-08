import React, { ReactNode } from 'react';

const RecipeSuggestionItem = ({children}: {children: ReactNode}) => {
	return (
		<div className='suggestion-item relative h-full w-2/5 shrink-0 bg-slate-300'>
			{children}
			<div className='absolute bottom-2 right-2 bg-green-900 rounded-full px-2 '>
				<span className='text-white text-sm text-center'>view</span>
			</div>
		</div>
	);
};

export default RecipeSuggestionItem;
