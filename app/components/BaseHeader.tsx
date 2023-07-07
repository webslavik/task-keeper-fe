import Link from 'next/link';
import { ROUTES } from '@/app/constants';

const BaseHeader = () => {
    return (
        <div className='flex justify-between items-center px-12 py-4 bg-white shadow-md'>
            <Link href={ROUTES.home} className='font-semibold'>
                T.K.
            </Link>
            <div className=''>
                <Link href={ROUTES.registration} className='py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none'>
                    Sign up
                </Link>
            </div>
        </div>
    )
};

export default BaseHeader;
