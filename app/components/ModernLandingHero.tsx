import { Button } from '@/app/components/ui/button';
import { ButtonMovingBorder } from '@/components/ui/moving-border-button';
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRef } from 'react';
import FloatingHeroSection from './FloatingTitleSection';
import FloatingTitleSection from './FloatingTitleSection';
import { Input } from '@/components/ui/input';

// const logged = false;
export default function ModernLandingHero() {
	return (
		<div className='hero flex h-full w-full flex-col'>
			<div className='h-20 shrink-0'></div>
			{/* <FloatingTitleSection /> */}
			<div className='flex w-full flex-col justify-center gap-4 self-center p-8 lg:w-2/3'>
				{/* {logged ? <div>
					<span className='text-xl'>Hi user name</span>
				</div> : null} */}
				<div className='text-justify text-lg tracking-normal'>
					<span className='text-3xl font-semibold'>
						Focus your energies on <br />
						what <em className='font-bold'>really</em> matters.
					</span>
					<br />
					<br />
					<span className='text-xl'>
						Make <em>peace</em> with ADHD and take advantage of your
						creativity. <br />
						<br />
						Build systems <strong>tailored</strong> on Your Self,{' '}
						<br />
						store your thoughts, ideas, and feelings in a{' '}
						<strong>safe</strong> place <br />
						and let Self help you organizing your time so you can
						use your energies more consciusly.
					</span>
				</div>
				<div className='CTA flex w-full flex-col-reverse items-center justify-center gap-4 py-4 lg:py-8'>
					<div className='flex flex-col items-center'>
						<Button variant='link' className=' text-base underline'>
							Tell me more
						</Button>
						<ArrowDownIcon
							className=''
							strokeWidth={2}
						></ArrowDownIcon>
					</div>

					<Link
						href='/dashboard'
						className='flex w-full items-center justify-center gap-4 '
					>
						<Input
							className='hidden h-full rounded-full shadow-sm shadow-green-900 border border-slate-200  px-8 text-base md:block'
							placeholder='Type your email'
						></Input>
						<ButtonMovingBorder
							variant='outline'
							className='rounded-full border-green-900 border-none shadow-md shadow-green-600 bg-green-100 text-base font-bold text-primary duration-200 ease-in-out active:scale-110'
						>
							Join waitlist
							<ArrowRightIcon
								className='ml-2'
								strokeWidth={2}
							></ArrowRightIcon>
						</ButtonMovingBorder>
					</Link>
				</div>
				<div className='image aspect-square w-full bg-emerald-600/50'>
					svg animation to represent systems building
				</div>
			</div>
		</div>
	);
}
