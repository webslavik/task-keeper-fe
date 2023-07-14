export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const AUTHORIZATION_BASE_ROUTE = '/authorization';
const DASHBOARD_BASE_ROUTE = '/dashboard';
export const ROUTES = {
    home: '/',
    registration: `${AUTHORIZATION_BASE_ROUTE}/signup`,
    dashboard: DASHBOARD_BASE_ROUTE,
    createTask: `${DASHBOARD_BASE_ROUTE}/create`,
};
