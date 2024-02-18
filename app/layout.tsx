import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import LandingPage from './components/LandingPage';
import './globals.css';
import Sidebar from './components/Sidebar';
import RouteTitle from './components/RouteTitle';
import { TooltipProvider } from './components/ui/tooltip';

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
				className={`${inter.className} flex w-full h-[100svh] overflow-hidden`}
			>
				<TooltipProvider>
				{!isLogged ? (
					<LandingPage />
				) : (
					<>
						<Sidebar isCollapsed={false} />
						<div className="router-content p-4 flex flex-col gap-4 w-full">
							<RouteTitle />
							{children}
						</div>
					</>
				)}
				</TooltipProvider>

				<Analytics></Analytics>
			</body>
		</html>
	);
}
