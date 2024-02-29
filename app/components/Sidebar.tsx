'use client';
import { AccountSwitcher } from '@/app/components/AccountSwitcher';
import { Nav } from '@/app/components/ui/nav';
import { Separator } from '@/components/ui/separator';
import { account, accountActions } from '@/lib/mockdata';
import { cn } from '@/lib/utils';
import { EyeClosedIcon } from '@radix-ui/react-icons';
import { ArrowLeftToLine, ArrowRightToLine, CircleDollarSign, LayoutDashboard, ListTodo, MoonStar, Notebook, Settings, SquareUser, Target, Wind } from 'lucide-react';
import { Manrope } from 'next/font/google';
import Link from 'next/link';

export const primaryRoutes = [
	{
		title: 'Glance',
		label: '',
		icon: EyeClosedIcon,
		variant: 'ghost',
		path: '/',
	},
	{
		title: 'My Identity',
		label: '',
		icon: SquareUser,
		variant: 'ghost',
		path: '/identity',
	},
	{
		title: 'My Path',
		label: '',
		icon: Notebook,
		variant: 'ghost',
		path: '/my-path',
	}
];
export const secondaryRoutes = [
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
	{
		title: 'Finances',
		label: '1',
		icon: CircleDollarSign,
		variant: 'ghost',
		path: '/finances',
	},
];

export const tertiaryRoutes = [
	{
		title: 'Inspiration',
		label: '2',
		icon: Wind,
		variant: 'ghost',
		path: '/inspiration',
	}
];

interface SidebarProps {
	isCollapsed: boolean;
}

const manrope = Manrope({ subsets: ['latin'] });

const Sidebar = ({ isCollapsed }: SidebarProps) => {
	return (
		<div className={`hidden lg:flex h-full ${isCollapsed ? 'w-20' : ' w-60'} flex-col transition-all duration-300 ease-in-out shadow ${manrope.className}`}>
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
					isCollapsed={isCollapsed}
					title=''
				/>
				<Separator />
				<Nav
					// @ts-ignore COME ON
					links={secondaryRoutes}
					isCollapsed={isCollapsed}
					title=''
				/>
				<Separator />
				<Nav
					// @ts-ignore COME ON
					links={tertiaryRoutes}
					isCollapsed={isCollapsed}
					title=''
				/>
			</div>
			<div className='mt-auto'>
				<div
					className={cn(
						'flex h-[52px] items-center justify-center',
						isCollapsed ? 'h-[52px]' : 'px-2'
					)}
				>
					<AccountSwitcher
						isCollapsed={isCollapsed}
						account={account}
						actions={accountActions}
					/>
				</div><Nav
					links={[
						{
							title: 'Collapse',
							label: '',
							icon: isCollapsed ? ArrowRightToLine : ArrowLeftToLine,
							variant: 'outline',
							path: '/theme',
							className: 'col-span-2'
						}, {
							title: 'Settings',
							label: '',
							icon: Settings,
							variant: 'outline',
							path: '/settings',
						},
						{
							title: 'Dark',
							label: '',
							icon: MoonStar,
							variant: 'outline',
							path: '/theme',
						}]}
					isCollapsed={isCollapsed}
					title=''
					className={isCollapsed ? '' : 'grid-cols-2'}
				/>
			</div>
			{/* <Separator /> */}

		</div>
	);
};

export default Sidebar;
