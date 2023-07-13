import { Inter } from 'next/font/google';
import ReduxProvider from './store/ReduxProvider';
import BaseHeader from './components/BaseHeader';
import Loader from './components/shared/Loader';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Task Keeper',
    description: 'Awesome Todo app for you!',
};

type Props = {
    children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang='en'>
            <body className={`${inter.className} h-screen bg-slate-100`}>
                <ReduxProvider>
                    <Loader />

                    <BaseHeader />

                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
};

export default RootLayout;
