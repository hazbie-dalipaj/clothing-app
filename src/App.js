import React, {useEffect} from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './components/pages/ShopPages/Shop';
import Header from './components/header/header';
import SignIn_SignOut from './components/pages/SignIn_SignOut/SignIn_SignOut';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './components/pages/checkout/checkout';
import { checkUserSession } from './redux/user/user-actions';

/*const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)*/

const App = ({checkUserSession, currentUser}) => {

useEffect(() => {
  checkUserSession();

}, [checkUserSession]);

    return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path = '/' component = { HomePage } />
        <Route path = '/shop' component = { Shop } />
        <Route exact path = '/checkout' component = { CheckoutPage } />
        <Route exact path = '/signin' render = {() => currentUser ? ( <Redirect to='/' />) : ( <SignIn_SignOut />)} />
        
      </Switch>   

    </div>
  );  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);