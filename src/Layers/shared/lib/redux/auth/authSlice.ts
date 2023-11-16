import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    isLog: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setLog: (state, action) => {
            state.isLog = action.payload;
        }
    }
})

const { actions, reducer } = authSlice;
export const { setAuth, setLog } = actions;
export default reducer;
