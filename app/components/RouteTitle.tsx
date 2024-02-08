'use client'
import React from 'react'
 
import { useSelectedLayoutSegment } from 'next/navigation'
 

const RouteTitle = () => {
	const segment = useSelectedLayoutSegment()
	console.log(segment)
  return (
	<h2 className='font-semibold text-xl capitalize'>{segment}</h2>
  )
}

export default RouteTitle