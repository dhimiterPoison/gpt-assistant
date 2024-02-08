'use client';
import { AccountSwitcher } from '@/app/components/AccountSwitcher';
import { Nav } from '@/app/components/ui/nav';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { LayoutDashboard, ListTodo, Target, Wind } from 'lucide-react';
import { Manrope } from 'next/font/google';
import Link from 'next/link';

export const primaryRoutes = [
	{
		title: 'Glance',
		label: '',
		icon: EyeClosedIcon,
		variant: 'ghost',
		path: '/dashboard',
	},
	{
		title: 'Projects',
		label: '4',
		icon: Target,
		variant: 'ghost',
		path: '/projects',
	},
	{
		title: 'Tasks',
		label: '9',
		icon: ListTodo,
		variant: 'ghost',
		path: '/tasks',
	},
];


const accounts = [{
	label: "Dhimiter Helmi",
	email: "dhimiter.helmi@gmail.com",
	icon: (
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>DhimRealm</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
		</svg>
	),
}, {
	label: "Alicia Koch",
	email: "alicia@example.com",
	icon: (
		<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<title>Vercel</title>
			<path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
		</svg>
	),
},];

interface SidebarProps {
	isCollapsed: boolean;
}

const manrope = Manrope({ subsets: ['latin'] });

const Sidebar = ({ isCollapsed }: SidebarProps) => {
	return (
		<div className={`flex h-full w-60 flex-col transition-all duration-300 ease-in-out shadow ${manrope.className}`}>
			<div className='logo flex items-center p-4'>
				<Link href="/" className='flex flex-col'>
					<span className='text-2xl font-semibold'>Self</span>
					<span className='text-sm'>your life at a glance</span>
				</Link>

				{/* <Image src={DWHubLogo} alt="DW Hub Logo" className=""/> */}
			</div>
			<div className='my-auto'>
			<Nav
				// @ts-ignore COME ON
				links={primaryRoutes}
				isCollapsed={false}
				title=''
			/>
			
			</div>
			<div
				className={cn(
					'flex h-[52px] items-center justify-center',
					isCollapsed ? 'h-[52px]' : 'px-2'
				)}
			>
				<AccountSwitcher
					isCollapsed={isCollapsed}
					accounts={accounts}
				// actions={accountActions}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
