import { combineReducers } from 'redux';
import UserReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteliswt: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)