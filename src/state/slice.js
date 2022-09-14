import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../API';

export const fetchFlowers = createAsyncThunk(
    'shop/FetchFlowers', 
    async function (_, {dispatch}) {
        const response = await http.get('/flowers');
        dispatch(loadItems(response.data))
    }
);

export const addCart = createAsyncThunk(
    'shop/AddCart', 
    async function (id, {dispatch, getState}) {
        const inCart = getState().shop.items.find(item => item.id === id).inCart;
        await http.put(`/flowers/${id}`, {inCart: !inCart});
        dispatch(inCart ? removeFromCart(id) : addToCart(id))
    }
);

export const onDeleteCart = createAsyncThunk(
    'shop/OnDeleteCart', 
    async function (id, {dispatch}) {
        await http.put(`/flowers/${id}`, {inCart: false});
        dispatch(removeFromCart(id))
    }
);

export const addFavorites = createAsyncThunk(
    'shop/addFavorites', 
    async function (id, {dispatch, getState}) {
        const inFavorite = getState().shop.items.find(item => item.id === id).inFavorite;
        await http.put(`/flowers/${id}`, {inFavorite: !inFavorite});
        dispatch(inFavorite ? removeFromFavorites(id) : addToFavorites(id))
    }
);

export const slice = createSlice({
    name: 'shop',
    initialState: {
        items: [],
        cart: [],
        favorites: [],
        cartPrice: 0,
        isLoading: true,
    },
    reducers: {
        loadItems: (state, action) => {
            state.items = action.payload
            state.cart = action.payload.filter(items => items.inCart === true)
            state.favorites = action.payload.filter(items => items.inFavorite === true)
            state.cartPrice = state.cart.reduce((prev, curr) => prev + curr.price, 0)
        },
        addToCart: (state, {payload}) => {
            const item = state.items.find((i) => i.id === payload)
            if (item) {
                item.inCart = true
                state.cart.push(item)
                state.cartPrice += item.price
            }
        },
        removeFromCart: (state, {payload}) => {
            const item = state.items.find((i) => i.id === payload)
            if (item) {
                item.inCart = false
                state.cart = state.cart.filter((item) => item.id !== payload)
                state.cartPrice -= item.price
            }
        },
        addToFavorites: (state, {payload}) => {
            const item = state.items.find((i) => i.id === payload)
            if (item) {
                item.inFavorite = true
                state.favorites.push(item)
            }
        },
        removeFromFavorites: (state, {payload}) => {
            const item = state.items.find((i) => i.id === payload)
            if (item) {
                item.inFavorite = false
                state.favorites = state.favorites.filter((item) => item.id !== payload)
            }
        },
    },
    extraReducers: {
        [fetchFlowers.pending]: (state, action) =>{
            state.isLoading = true;
        },
        [fetchFlowers.fulfilled]: (state, action) =>{
            state.isLoading = false;
            
        },
    },
});


export const { loadItems, addToCart, removeFromCart, addToFavorites, removeFromFavorites } = slice.actions;

export default slice.reducer;
