import Navigation from './components/navigation/Navigation';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang='en' className={montserrat.className}>
				<body>
					<Navigation />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
