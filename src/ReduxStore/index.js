import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: 'cartmanagement',
    initialState: {
        listOfItems: [],
        listOfItemsStore: [],
        cartItem: [],
    },

    reducers: {
        setListOfItems(state, action) {
            state.listOfItems = action.payload
        },

        setListOfItemsStore(state, action) {
            state.listOfItemsStore = action.payload
        },

        addToCart(state, action) {
            state.cartItem = [...state.cartItem, action.payload]
        },

        incrementQuantity: (state, action) => {
            const { getId } = action.payload;
            const updateQuantity = state.cartItem.find((val) => val.id === getId);
            if (updateQuantity) {
                updateQuantity.count += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const { getId } = action.payload;
            const updateQuantity = state.cartItem.find((val) => val.id === getId);
            if (updateQuantity) {
                updateQuantity.count -= 1;
            }
        },

        removeItem: (state, action) => {
            const { getId } = action.payload;
            return {
                ...state,
                cartItem: state.cartItem.filter((val) => val.id !== getId)
            }
        },


    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store

