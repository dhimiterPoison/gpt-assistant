import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProfilePic from '@/public/images/profile.jpg';
import { MonitorUp } from 'lucide-react';

const TitleBar = () => {
	return (
		// <div className='logo flex items-center p-4 lg:hidden'>
		// <Link href="/" className='flex flex-col'>
		// 	<span className='text-2xl font-semibold'>Self</span>
		// 	<span className='text-sm'>your life at a glance</span>
		// </Link>
		// </div>
		<div className='flex w-full items-center p-4 lg:hidden'>
			<Link href={`/account`}>
				<Image
					src={ProfilePic}
					alt='Profile Picture'
					className='h-8 w-8 rounded-full'
				/>
			</Link>
			<Link href='/' className=' mx-auto'>
				<div className='logo text-center'>
					<span className='text-2xl font-semibold'>Self</span>
					<br />
					<span>your life at a glance</span>
				</div>
			</Link>
			<div className='flex h-8 w-8 items-center justify-center'>
				<MonitorUp className='h-6 w-6' strokeWidth={1} />
			</div>
		</div>
	);
};

export default TitleBar;
