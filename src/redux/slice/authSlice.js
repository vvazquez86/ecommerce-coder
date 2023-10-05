import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'autoSlice',
    initialState: {
        usuario: null,
        idToken: null,
    },

    reducers: {
        setUsuario: (state, action) => {
            state.usuario = action.payload;
        },
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
        clearUsuario: (state) => {
            (state.usuario = null),
            (state.idToken = null);
        }
    }
})

export const { setIdToken, setUsuario, clearUsuario } = authSlice.actions;
export default authSlice.reducer;