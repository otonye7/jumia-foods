import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import resturantReducer from './resturant/resturant.reducer';
import wineReducer from './wine/wine.reducer';
import foodReducer from './food/food.reducer';
import supermarketReducer from './supermarket/supermarket.reducer';
import collectionReducer from './value-deals/value-deals.reducer';

const persistConfig  = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    cart: cartReducer,
    resturant: resturantReducer,
    wine: wineReducer,
    food: foodReducer,
    supermarket: supermarketReducer,
    collections: collectionReducer
});

export default persistReducer(persistConfig, rootReducer)


