import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from './components/pages/ShopPages/Shop';
import Header from './components/header/header';
import SignIn_SignOut from './components/pages/SignIn_SignOut/SignIn_SignOut';
import { auth, createUserProfilDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
//import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './components/pages/checkout/checkout';
import { checkUserSession } from './redux/user/user-actions';
import { dispatch } from '../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs';

/*const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)*/

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
    <div className="App">

      <Header />

      <Switch>
        <Route exact path = '/' component = { HomePage } />
        <Route path = '/shop' component = { Shop } />
        <Route exact path = '/checkout' component = { CheckoutPage } />
        <Route exact path = '/signin' render = {() => this.props.currentUser ? ( <Redirect to='/' />) : ( <SignIn_SignOut />)} />
        
      </Switch>   

    </div>
  );
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);