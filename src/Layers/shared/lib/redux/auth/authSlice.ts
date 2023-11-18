import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    isLog: boolean;
}

const initialState: AuthState = {
    isAuth: false,
    isLog: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
        state.isAuth = action.payload;
    },
    setLog: (state, action: PayloadAction<boolean>) => {
        state.isLog = action.payload;
    }
}
});

const { actions, reducer } = authSlice;
export const { setAuth, setLog } = actions;
export default reducer;

