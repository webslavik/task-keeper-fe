import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_ITEMS } from '@/app/constants';

const initialState = {
    isAuthorized: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.isAuthorized = true;

            state.accessToken = payload.accessToken;
            localStorage.setItem(LOCAL_STORAGE_ITEMS.accessToken, payload.accessToken);
        },
        logout(state) {
            state.isAuthorized = false;
            state.accessToken = null;

            localStorage.removeItem(LOCAL_STORAGE_ITEMS.accessToken);
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
