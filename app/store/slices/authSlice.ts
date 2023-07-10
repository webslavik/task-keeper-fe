import { createSlice } from "@reduxjs/toolkit";

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
        },
        logout(state) {
            state.isAuthorized = false;
            state.accessToken = null;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
