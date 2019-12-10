import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartDropdown = ({cartItems, history, dispatch }) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <div className='empty-message'>Your cart is empty</div>       
            }
        </div> 
     <CustomButton onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden());
        }
        } >GO TO CHECKOUT</CustomButton>    
    </div>
)

//const mapStateToProps = ({ cart: {cartItems}}) => ({
    //cartItems
//});

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter (connect( mapStateToProps) (CartDropdown));