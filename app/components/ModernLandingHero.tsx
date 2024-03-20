import { Button } from '@/app/components/ui/button';
import { ButtonMovingBorder } from '@/components/ui/moving-border-button';
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRef } from 'react';
import FloatingHeroSection from './FloatingTitleSection';
import FloatingTitleSection from './FloatingTitleSection';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import SelfHeroBackground from '@/public/Self-hero-background.png';

// const logged = false;
export default function ModernLandingHero() {
	return (
		<div className='hero relative flex h-full w-full flex-col'>
			<div className='h-20 shrink-0'></div>
			<Image 
				src={SelfHeroBackground}
				alt='Self hero background'
				className='hero-background fixed top-0 left-0 w-full object-cover z-0'
			/>
			{/* <FloatingTitleSection /> */}
			<div className='flex w-full flex-col justify-center gap-4 z-10 self-center p-8 lg:w-2/3'>
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
					<div className=''>
						<span className='text-xl'>
							Make <em>peace</em> with ADHD and <em>own</em> your
							curiosity and creativity. <br />
						</span>
						{/* <br /> */}
						<span className='text-xl'>
							Build systems <strong>tailored</strong> on Your
							Self, with <strong>Self</strong>.
						</span>
						<div className='svganimation-systems  h-40 w-full py-4 lg:h-48'>
							<div className='h-full w-full bg-emerald-600/50'></div>
						</div>
						<span className='text-lg'>
							Store your thoughts, ideas, and feelings in a{' '}
							<strong>safe</strong> place <br />
							and let Self help you organizing your time so you
							can use your energies more consciusly.
						</span>
					</div>
				</div>
				<div className='CTA flex w-full flex-row items-center justify-center gap-12  py-4 md:flex-col-reverse md:gap-8 lg:py-8'>
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
						className='flex items-center justify-center gap-4 md:w-full '
					>
						<Input
							className='hidden h-full rounded-full border border-slate-200 px-8 text-base  shadow-sm shadow-green-900 md:block'
							placeholder='Type your email'
						></Input>
						<ButtonMovingBorder
							variant='outline'
							className='rounded-full border-none border-green-900 bg-green-100 text-base font-bold text-primary shadow-md shadow-green-600 duration-200 ease-in-out active:scale-110'
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
