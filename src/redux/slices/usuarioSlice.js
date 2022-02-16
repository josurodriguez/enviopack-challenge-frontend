import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        "data": {
            "id": 0,
            "username": "",
            "firstName": "",
            "lastName": "",
            "credit": 0,
        },
        "shoppingCart": []
    },
    reducers: {
        loadUser: (state, action) => {
            state.data = action.payload
        },
        addToCart: (state, action) => {
            state.shoppingCart = [...state.shoppingCart, { ...action.payload, isAdd: true }]
        },  
        removeToCart: (state, action) => {
            state.shoppingCart = state.shoppingCart.filter((item) =>
                (item.id !== action.payload.id) ? item : null
            )
        },
        debitCredit: (state, action) => {
            state.shoppingCart = []
            state.data = { ...state.data, credit: action.payload }
        },
    },
});

export const { addToCart, loadUser, removeToCart, debitCredit } = userSlice.actions
export default userSlice.reducer;