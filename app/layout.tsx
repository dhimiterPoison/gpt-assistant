import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import LandingPage from './components/LandingPage';
import MobileNavigation from './components/MobileNavigation';
import RouteTitle from './components/RouteTitle';
import Sidebar from './components/Sidebar';
import TitleBar from './components/TitleBar';
import { TooltipProvider } from './components/ui/tooltip';
import './globals.css';
import { GeistSans } from 'geist/font/sans';
import PlausibleProvider from 'next-plausible';

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Self - glance',
	description:
		'Dump your thoughts, ideas, and feelings in a safe place and let Self help you organizing your time so you can focus your energies on what really matters.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isLogged = true;
	return (
		<html lang='en' className=''>
			<body
				className={`${GeistSans.className}bg-slate-50 relative flex h-[100svh] w-full flex-col lg:flex-row overflow-hidden`}
			>
				<TooltipProvider>
					{!isLogged ? (
						<LandingPage />
					) : (
						<>
							<Sidebar isCollapsed={false} />
							<TitleBar />
							<div className='router-content gutter-both-egdes flex h-full w-full flex-col overflow-y-scroll p-0 lg:py-4'>
								<RouteTitle />
								{children}
								<div className='h-20 opacity-0 '></div>
								<MobileNavigation type='anchor' />
							</div>
						</>
					)}
				</TooltipProvider>
				<Analytics></Analytics>
				<PlausibleProvider
					domain='selfglance.com'
					trackOutboundLinks={true}
					taggedEvents={true}
				/>
			</body>
		</html>
	);
}
