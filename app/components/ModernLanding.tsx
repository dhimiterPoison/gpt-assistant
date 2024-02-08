'use client';
import { Button } from '@/app/components/ui/button';
import { ArrowDownIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRef } from 'react';

export default function ModernLanding() {
	const plane = useRef<HTMLInputElement>(null);

	const maxRotate = 45;

	const manageMouseMove = (e: any) => {
		const x = e.clientX / window.innerWidth;

		const y = e.clientY / window.innerHeight;

		const perspective = window.innerWidth * 4;

		const rotateX = maxRotate * x - maxRotate / 2;

		const rotateY = (maxRotate * y - maxRotate / 2) * -1;

		if (!plane.current) {
			return;
		}
		plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
	};

	return (
		<div
			className='hero flex flex-col w-screen h-full pt-14 lg:pt-0 lg:pl-24 items-center lg:flex-row lg:items-center lg:justify-start'
			onMouseMove={(e) => {
				manageMouseMove(e);
			}}
		>
			<div ref={plane} className='hero-body'>
				<Text3d primary={'Self,'} secondary={'glance'} />
				<Text3d primary={'your Life'} secondary={'into'} />
				<Text3d primary={'in a'} secondary={'Your'} />
				<Text3d primary={'Glance'} secondary={'Life'} />
			</div>
			<div className='flex flex-col w-full justify-center p-8 gap-4 text-primary-foreground md:w-2/3 lg:w-1/3 lg:h-1/2 '>
				<h2 className='text-justify text-lg tracking-normal'>
					Dump your thoughts, ideas, and feelings in a <b>safe</b> place and let
					Self help you organizing your time so you can focus your energies more
					consciusly.
				</h2>
				<div className='flex justify-center gap-4'>
					<div className='flex flex-col items-center'>
						<Button
							variant='link'
							className='text-primary-foreground underline'
						>
							Tell me more
						</Button>
						<ArrowDownIcon className='ml-2'></ArrowDownIcon>
					</div>

					<Link href="/dashboard"><Button
						variant='outline'
						className='text-primary rounded-full active:scale-110 ease-in-out duration-200'
					>
						Get started
						<ArrowRightIcon className='ml-2'></ArrowRightIcon>
					</Button></Link>
				</div>
			</div>
		</div>
	);
}

function Text3d({
	primary,
	secondary,
}: {
	primary: string;
	secondary: string;
}) {
	return (
		<div className='textContainer '>
			<h1 className='primary'>{primary}</h1>

			<p className='secondary'>{secondary}</p>
		</div>
	);
}
