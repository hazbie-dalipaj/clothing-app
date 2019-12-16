import React from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';
//import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSingInStart, emailSignInStart } from '../../redux/user/user-actions';
import { connect } from 'react-redux';

class SignIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    const { emailSignInStart } = this.props;
    emailSignInStart(email, password);
    /*try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
            email: '',
            password: ''
        });
    } catch (error) {
        console.error(error);
    }*/
    this.setState({ email: '', password: ''})
}

handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]:value})
}

    render(){
        const { googleSingInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2>I aleady have an account</h2>
                <span>Sign in your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />

                    <FormInput name='password' type='password' value={this.state.password} handleChange = {this.handleChange} label='password' required />

                    <div className='buttons'>
                        <CustomButton>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSingInStart} isGoogleSignIn>
                            {''}
                            Sign In with Google {''}
                        </CustomButton>
                    </div>  
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSingInStart: () => dispatch(googleSingInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn);

    