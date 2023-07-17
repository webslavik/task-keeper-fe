'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { login } from '@/app/store/slices/authSlice';
import { ROUTES, LOCAL_STORAGE_ITEMS } from '@/app/constants';

const withAuth = (Component: any) => {
    const WithAuth = (props: any) => {
        const [isReady, setIsReady] = useState(false);
        const dispatch = useDispatch();
        const router = useRouter();
        const isAuthorized = useSelector((state: any) => state.auth.isAuthorized);
        const storedAccessToken = useSelector((state: any) => state.auth.accessToken);

        useEffect(() => {
            (async () => {
                const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.accessToken);

                if (!isAuthorized && accessToken === 'undefined') {
                    router.push(ROUTES.root);
                    return null;
                }

                if (accessToken && !storedAccessToken) {
                    await dispatch(login({accessToken}));
                }

                setIsReady(true);
            })();
        }, [isAuthorized, storedAccessToken, dispatch, router]);

        return (
            <>
                {!isReady && <div>Loading...</div>}

                {isReady && <Component {...props} />}
            </>
        )
    }

    return WithAuth;
};

export default withAuth;
