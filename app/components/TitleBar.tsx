import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProfilePic from '@/public/images/profile.jpg'

const TitleBar = () => {
	return (
		// <div className='logo flex items-center p-4 lg:hidden'>
		// <Link href="/" className='flex flex-col'>
		// 	<span className='text-2xl font-semibold'>Self</span>
		// 	<span className='text-sm'>your life at a glance</span>
		// </Link>
		// </div>
		<div className='w-full flex p-4 items-center lg:hidden'>
			<div className='w-8 h-8'>

			</div>
			<Link href='/' className=' mx-auto'>
				<div className='logo text-center'>
					<span className='text-2xl font-semibold'>Self</span>
					<br />
					<span>your life at a glance</span>
				</div>
			</Link>
			<Link href={`/account`}>
				<Image src={ProfilePic}
					alt='Profile Picture'
					className='w-8 h-8 rounded-full'
				/>
			</Link>
		</div>
	)
}

export default TitleBar