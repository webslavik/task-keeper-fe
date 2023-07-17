export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const HTTP_CODE_UNAUTHORIZED = 401;

const AUTHORIZATION_BASE_ROUTE = '/authorization';
const DASHBOARD_BASE_ROUTE = '/dashboard';
export const ROUTES = {
    root: '/',
    registration: `${AUTHORIZATION_BASE_ROUTE}/signup`,
    dashboard: DASHBOARD_BASE_ROUTE,
    createTask: `${DASHBOARD_BASE_ROUTE}/create`,
};

export const LOCAL_STORAGE_ITEMS = {
    accessToken: 'accessToken',
};
