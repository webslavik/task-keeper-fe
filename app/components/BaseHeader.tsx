'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { ROUTES } from '@/app/constants';
import { logout } from '../store/slices/authSlice';

const BaseHeader = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const isAuthorized = useSelector((state: any) => {
        return state.auth.isAuthorized;
    });

    const onLogout = () => {
        dispatch(logout());
        router.push(ROUTES.home);
    };

    return (
        <div className='flex justify-between items-center px-12 py-4 bg-white shadow-md'>
            <Link href={ROUTES.home} className='font-semibold'>
                T.K.
            </Link>
            <div className=''>
                {!isAuthorized && (
                    <Link href={ROUTES.registration} className='py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none'>
                        Sign up
                    </Link>
                )}

                {isAuthorized && (
                    <button onClick={onLogout}>Log out</button>
                )}
            </div>
        </div>
    )
};

export default BaseHeader;
