import CartActionTypes from './cart.types';

export const toggleCartHidden  = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = category => ({
    type: CartActionTypes.ADD_ITEM,
    payload: category
});

export const removeItem = category => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: category
});

export const clearItemFromCart = category => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: category
})