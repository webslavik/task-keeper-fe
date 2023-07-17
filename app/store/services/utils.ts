import { logout } from './../slices/authSlice';
import { store } from './../store';
import { ROUTES, HTTP_CODE_UNAUTHORIZED } from '@/app/constants';

// @ts-ignore
export const handleUnauthorizeError = fetchQuery => async (args, api, extraOptions) => {
    const result = await fetchQuery(args, api, extraOptions)

    if (result.error && result.error.status === HTTP_CODE_UNAUTHORIZED) {
        await store.dispatch(logout());
        window.location.href = ROUTES.root;

        return {error: result.error};
    }

    return result;
}

// @ts-ignore
export const getAuthHeader = (headers, { getState }) => {
    const accessToken = (getState() as any).auth.accessToken;

    if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
    }

    return headers;
}