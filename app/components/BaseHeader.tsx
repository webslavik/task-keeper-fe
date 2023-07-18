'use client';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/app/components/shared/Button';
import Title from '@/app/components/shared/Title';
import Link from '@/app/components/shared/Link';
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
        router.push(ROUTES.root);
    };

    return (
        <div className='flex justify-between items-center px-12 py-4 bg-white shadow-md'>
            <Title type={5}>
                T.K.
            </Title>
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
