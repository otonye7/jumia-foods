import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import resturantReducer from './resturant/resturant.reducer';
import wineReducer from './wine/wine.reducer';
import foodReducer from './food/food.reducer';

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    resturant: resturantReducer,
    wine: wineReducer,
    food: foodReducer
});

export default persistReducer(persistConfig, rootReducer)


