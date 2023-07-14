import { createSlice } from "@reduxjs/toolkit";

const accessTokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0IiwiZXhwIjoxNjg5MzM1MjQxfQ.US5qT2JU2Zfe1sGXAncNbS1T4nU-x-EW7y2fLpO6A5s';

const initialState = {
    isAuthorized: false,
    accessToken: accessTokenMock,
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
