import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../../redux/cart/cart-selectors';
import CheckoutItem  from '../../checkout-item/checkout-item';
import StripeCheckoutButton from '../../../components/stripe-button/stripe-button';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span className='block'>Product</span>
            </div>
            <div className='checkout-block'>
                <span className='block'>Description</span>
            </div>
            <div className='checkout-block'>
                <span className='block'>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span className='block'>Price</span>
            </div>
            <div className='checkout-block'>
                <span className='block'>Remove</span>
            </div>
        </div>
        
        {cartItems.map(cartItem=>(<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}

        <div className='total'>
            <span>TOTAL: ${total}</span>            
        </div> 
        <div className='test-waring'>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVW: 123           
        </div>  
        <StripeCheckoutButton price={total} />       
    </div>
)

const mapStateToProps=createStructuredSelector({cartItems:selectCartItems, total:selectCartTotal});
export default connect (mapStateToProps) (CheckoutPage);