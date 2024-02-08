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
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import LandingPage from './components/LandingPage';
import ModernLanding from './components/ModernLanding';

export default function Component() {
	return <div>Dashboard</div>;
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
