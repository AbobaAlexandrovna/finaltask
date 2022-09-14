import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './slice';

export default configureStore({
    reducer: {
    shop: shopReducer
    },
});
