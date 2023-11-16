import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    isLog: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true;
        },
        setLog: (state, actions) => {
            state.isLog = actions.payload;
        }
    }
})

const { actions, reducer } = authSlice;
export const { setAuth, setLog } = actions;
export default reducer;
