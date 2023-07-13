'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Button from './shared/Button';
import Link from './shared/Link';
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
                    <Link href={ROUTES.registration}>
                        Sign up
                    </Link>
                )}

                {isAuthorized && (
                    <Button onClick={onLogout}>Log out</Button>
                )}
            </div>
        </div>
    )
};

export default BaseHeader;
