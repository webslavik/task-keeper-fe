import './globals.css';
import { Inter } from 'next/font/google';
import BaseHeader from './components/BaseHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Task Keeper',
    description: 'Awesome Todo app for you!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <body className={`${inter.className} h-screen bg-slate-100`}>
                <BaseHeader />

                {children}
            </body>
        </html>
    );
};
