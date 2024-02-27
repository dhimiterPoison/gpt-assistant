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

const inter = Inter({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Self - glance',
	description: 'Dump your thoughts, ideas, and feelings in a safe place and let Self help you organizing your time so you can focus your energies more consciusly.'
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	const isLogged = true;
	return (
		<html lang='en'>
			<body
				className={`${inter.className} relative flex flex-col lg:flex-row w-full h-[100svh] overflow-hidden`}
			>
				<TooltipProvider>
					{!isLogged ? (
						<LandingPage />
					) : (
						<>
							<Sidebar isCollapsed={false} />
							<TitleBar />
							<div className="router-content p-4 flex flex-col gap-4 w-full h-full mb-18 isco funkytoverflow-y-scroll">
								<RouteTitle />
								{children}
							</div>
							<MobileNavigation />
						</>
					)}
				</TooltipProvider>
				<Analytics></Analytics>
			</body>
		</html>
	);
}
