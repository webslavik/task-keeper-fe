export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const AUTHORIZATION_BASE_ROUTE = '/authorization';
export const ROUTES = {
    home: '/',
    registration: `${AUTHORIZATION_BASE_ROUTE}/signup`,
    dashboard: '/dashboard',
};
