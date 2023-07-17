import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
};

const sharedSlice = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        finishLoading(state) {
            state.isLoading = false;
        }
    }
});

export const { startLoading, finishLoading } = sharedSlice.actions;
export default sharedSlice.reducer;
