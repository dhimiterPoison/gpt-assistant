/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VKxvR2Favee
 */
import { Button } from '@/app/components/ui/button';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import ModernLandingHero from './ModernLandingHero';

const manrope = Manrope({ subsets: ['latin'] });
export default function LandingPage() {
	return (
		<div className='relative min-h-[100svh] overflow-y-scroll'>
			<div className='header fixed left-0 top-0 w-full p-4 z-20'>
				<header className='fade flex  w-full items-center justify-between rounded-3xl bg-green-950/30 p-2 pl-6'> {/*bg-[#c7d1ce]*/}
					<div className='flex items-center space-x-4'>
						<h1
							className={`text-lg font-semibold text-slate-50 dark:text-gray-200 ${manrope.className}`}
						>
							<Link href='/' className='flex items-end '>
								<span className='text-3xl'>Self</span>
								<span className='flex text-lg'>
									, your life at a glance
								</span>
							</Link>
						</h1>
					</div>
					<nav className='flex items-center space-x-6'>
						{/* <Link
						className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
						href='#'
					>
						Upload
					</Link>
					<Link
						className='text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
						href='#'
					>
						Output
					</Link>*/}
						{/* <Link
						className='hover:text-gray-800 hover:underline dark:hover:text-gray-200'
						href='#'
					>
						Log In
					</Link> */}
						<Button className='rounded-full bg-green-950'>
							<Link href='/dashboard'>Sign in</Link>
						</Button>
					</nav>
				</header>
			</div>
			<ModernLandingHero />
			{/* <ModernLanding /> */}
		</div>
		// 	<section className='landing-page flex w-full py-12 h-2/3 items-center'>
		// 	<div className='container px-4 md:px-12'>
		// 		<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
		// 			<div className='flex flex-col justify-center space-y-4'>
		// 				<div className='hero space-y-2'>
		// 					<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
		// 						Meet Your New AI Assistant
		// 					</h1>
		// 					<p className='max-w-[600px] text-gray-800 md:text-xl dark:text-gray-400'>
		// 						Our AI assistant helps you organize your life by managing
		// 						tasks, integrating with your calendar, and setting personal
		// 						reminders.
		// 					</p>
		// 				</div>
		// 				<div className='flex flex-col gap-2 min-[400px]:flex-row'>
		// 					<Link
		// 						className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
		// 						href='#'
		// 					>
		// 						Get Started
		// 					</Link>
		// 					<Link
		// 						className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
		// 						href='#'
		// 					>
		// 						Learn More
		// 					</Link>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
		// <section className='w-full py-12 bg-gray-100 dark:bg-gray-800'>
		// 	<div className='container px-4 md:px-6'>
		// 		<div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
		// 			<div className='flex flex-col items-center text-center'>
		// 				<ActivityIcon className='h-12 w-12 mb-4' />
		// 				<h2 className='text-2xl font-bold mb-2'>Task Management</h2>
		// 				<p className='text-gray-500 dark:text-gray-400'>
		// 					Keep track of your tasks and get reminders to stay on top of
		// 					your work.
		// 				</p>
		// 			</div>
		// 			<div className='flex flex-col items-center text-center'>
		// 				<CalendarIcon className='h-12 w-12 mb-4' />
		// 				<h2 className='text-2xl font-bold mb-2'>Calendar Integration</h2>
		// 				<p className='text-gray-500 dark:text-gray-400'>
		// 					Sync your calendar to view and manage your schedule all in one
		// 					place.
		// 				</p>
		// 			</div>
		// 			<div className='flex flex-col items-center text-center'>
		// 				<BellIcon className='h-12 w-12 mb-4' />
		// 				<h2 className='text-2xl font-bold mb-2'>Personal Reminders</h2>
		// 				<p className='text-gray-500 dark:text-gray-400'>
		// 					Set personal reminders so you never forget important events and
		// 					deadlines.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
}

function ActivityIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M22 12h-4l-3 9L9 3l-3 9H2' />
		</svg>
	);
}

function BellIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
			<path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
		</svg>
	);
}

function CalendarIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
			<line x1='16' x2='16' y1='2' y2='6' />
			<line x1='8' x2='8' y1='2' y2='6' />
			<line x1='3' x2='21' y1='10' y2='10' />
		</svg>
	);
}
