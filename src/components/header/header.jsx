import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header-style';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'> SIGN IN </OptionLink>
            }
            <CartIcon />                      
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown /> 
        }
       
       
    </HeaderContainer>
    
)
//const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  //  currentUser,
    //hidden
//})

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps) (Header);