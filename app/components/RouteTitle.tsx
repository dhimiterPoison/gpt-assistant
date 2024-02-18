'use client'
import React from 'react'
 
import { useSelectedLayoutSegment } from 'next/navigation'
 

const RouteTitle = () => {
	let segment = useSelectedLayoutSegment() || '';
	segment = segment.replace(/-/g, ' ');
	console.log(segment)
  return (
	<h2 className='font-semibold text-xl capitalize'>{segment}</h2>
  )
}

export default RouteTitle