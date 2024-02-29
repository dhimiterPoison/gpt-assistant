/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fRXBRRrRqDT
 */
import Link from 'next/link';
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
	CardFooter,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/app/components/ui/avatar';
import LandingPage from './components/LandingPage';
import ModernLanding from './components/ModernLanding';
import { account } from '@/lib/mockdata';
import { MicrophoneIcon } from '@/lib/icons';

export default function Component() {
	return (
		<div className='h-full w-full'>
			<h2 className='text-lg font-medium'>Hi {account.name}!</h2>
			<span className=''>
				here you have an overview of your current situation:
			</span>
			<div className=' flex h-full w-full flex-col gap-4 pt-4'>
				<div className='h-1/2 w-full rounded-md bg-blue-200 p-4'>
					Notes history
					<ul className=''>
						<li className='list-inside list-disc indent-8'>
							video
						</li>
						<li className='list-inside list-disc indent-8'>
							audio
						</li>
						<li className='list-inside list-disc indent-8'>text</li>
						<li className='list-inside list-disc indent-8'>
							handwritten
						</li>
					</ul>
				</div>
				<div className='flex w-full gap-4'>
					<div className='h-24 w-1/2 rounded-md bg-green-200'></div>
					<div className='h-24 w-1/2 rounded-md bg-green-200'></div>
				</div>
				<div className='h-60 w-full rounded-md bg-blue-200 p-4'>
					Notes history
					<ul className=''>
						<li className='list-inside list-disc indent-8'>
							video
						</li>
						<li className='list-inside list-disc indent-8'>
							audio
						</li>
						<li className='list-inside list-disc indent-8'>text</li>
						<li className='list-inside list-disc indent-8'>
							handwritten
						</li>
					</ul>
				</div>
				<div className='h-screen w-full rounded-md bg-blue-200 p-4'>
					Notes history
					<ul className=''>
						<li className='list-inside list-disc indent-8'>
							video
						</li>
						<li className='list-inside list-disc indent-8'>
							audio
						</li>
						<li className='list-inside list-disc indent-8'>text</li>
						<li className='list-inside list-disc indent-8'>
							handwritten
						</li>
					</ul>
				</div>
				<div className='h-screen w-full rounded-md bg-blue-200 p-4'>
					Notes history
					<ul className=''>
						<li className='list-inside list-disc indent-8'>
							video
						</li>
						<li className='list-inside list-disc indent-8'>
							audio
						</li>
						<li className='list-inside list-disc indent-8'>text</li>
						<li className='list-inside list-disc indent-8'>
							handwritten
						</li>
					</ul>
				</div>

				<div className='fixed bottom-16 left-0 flex h-24 w-full justify-center'>
					<Button className='flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-900'>
						<MicrophoneIcon />
					</Button>
				</div>
			</div>
		</div>
	);
}

function FlagIcon(props: any) {
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
			<path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z' />
			<line x1='4' x2='4' y1='22' y2='15' />
		</svg>
	);
}

function UploadIcon(props: any) {
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
			<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
			<polyline points='17 8 12 3 7 8' />
			<line x1='12' x2='12' y1='3' y2='15' />
		</svg>
	);
}

function UserIcon(props: any) {
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
			<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
			<circle cx='12' cy='7' r='4' />
		</svg>
	);
}
