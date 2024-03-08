import React from 'react'
import RecipeSuggestionItem from './RecipeSuggestionItem'

const RecipeSuggestions = () => {
  return (
	<div className='flex flex-col'>
    <h2 className='text-xl font-semibold'>Recipe suggestions</h2>
    <div className='flex w-full h-32 bg-slate-100 overflow-x-scroll py-1 px-2 gap-4'>
      <RecipeSuggestionItem>1</RecipeSuggestionItem>
      <RecipeSuggestionItem>2</RecipeSuggestionItem>
      <RecipeSuggestionItem>3</RecipeSuggestionItem>
      <RecipeSuggestionItem>4</RecipeSuggestionItem>
      <RecipeSuggestionItem>5</RecipeSuggestionItem>
      
    </div>
  </div>
  )
}

export default RecipeSuggestions