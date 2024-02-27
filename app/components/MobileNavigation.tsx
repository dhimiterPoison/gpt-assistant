'use client';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { Notebook, SquareUser } from 'lucide-react';

type Props = {
	// category: string;
	// routes: { id: number, path: string; title: string }[];
	route: { id: number; path: string; title: string };
};

const routes = [
	{
		id: 2,
		title: 'My Identity',
		label: '',
		icon: <SquareUser strokeWidth={1.5} />,
		variant: 'ghost',
		path: '/identity',
	},
	{
		id: 1,
		title: 'Glance',
		label: '',
		icon: <EyeClosedIcon />,
		variant: 'ghost',
		path: '/dashboard',
	},
	{
		id: 3,
		title: 'My Path',
		label: '',
		icon: <Notebook strokeWidth={1.5} />,
		variant: 'ghost',
		path: '/my-path',
	}
];

const MobileNavigation = () => {
	const [activeRoute, setActiveRoute] = useState('');

	const pathname = usePathname();
	const params = useParams();

	useEffect(() => {
		const hash = window.location.hash;
		const activeRoute = pathname.concat(hash);
		setActiveRoute(activeRoute);
	}, [params, pathname]);

	return (

		<div className='mobile-nav fixed bottom-2 px-2 w-full'>
			<div className='z-50 flex w-full h-16 items-center justify-evenly self-center rounded-xl bg-white border  p-2 shadow-sm lg:hidden '>
				{routes.map((route) => {
					const isActive = activeRoute === route.path;
					const className = `w-6 h-6 ${activeRoute.startsWith(route.path) ? '' : ''}`
					// ? (route.id == 2 || route.id == 4 ? 'fill-primary' : 'text-primary')
					// : 'text-base-content';

					let icon = React.cloneElement(route.icon, { className });
					return (
						<MobileNavButton key={route.id} path={route.path} isActive>
							{icon}
							<span className='text-sm'>{route.title}</span>
						</MobileNavButton>
					);
				})}
			</div></div>
	);
};

export default MobileNavigation;

type MobileNavButtonProps = {
	path: string;
	isActive: boolean;
	children: React.ReactNode;
};

const MobileNavButton = ({
	path,
	isActive,
	children,
}: MobileNavButtonProps) => {
	return (
		<Link
			href={path}
			className='btn flex flex-col items-center justify-center shadow-none w-18 gap-1'
		>
			{children}
		</Link>
	);
};
