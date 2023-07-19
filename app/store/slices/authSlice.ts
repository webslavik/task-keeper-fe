import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_ITEMS } from '@/app/constants';

const initialState = {
    isAuthorized: false,
    accessToken: null,
    user: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.isAuthorized = true;
            state.user = payload.user;
            state.accessToken = payload.accessToken;

            localStorage.setItem(LOCAL_STORAGE_ITEMS.accessToken, payload.accessToken);
            localStorage.setItem(LOCAL_STORAGE_ITEMS.userData, JSON.stringify(payload.user));
        },
        logout(state) {
            state.isAuthorized = false;
            state.user = {};
            state.accessToken = null;

            localStorage.removeItem(LOCAL_STORAGE_ITEMS.accessToken);
            localStorage.removeItem(LOCAL_STORAGE_ITEMS.userData);
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
