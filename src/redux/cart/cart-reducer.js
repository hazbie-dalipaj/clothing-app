import CartActionType from './cart-types';
import {addItemToCart, removeItemFromCart} from './cart-utils';

const INITINAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = ( state = INITINAL_STATE, action ) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN: 
        return{
            ...state,
            hidden: !state.hidden
        };

        case CartActionType.ADD_ITEM:
            return{
                ...state,
                //cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case CartActionType.CLEAR_ITTEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };

            case CartActionType.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
                };

        case CartActionType.CLEAR_CART:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}
export default CartReducer;