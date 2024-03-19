'use client';
import React, { useRef } from 'react';

const FloatingTitleSection = () => {
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
		</div>
	);
};

export default FloatingTitleSection;



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