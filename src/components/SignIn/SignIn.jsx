import React, {useState} from 'react';
import FormInput from '../FormInput/FormInput';
import './SignIn.scss';
import CustomButton from '../CustomButton/CustomButton';
import { googleSingInStart, emailSignInStart } from '../../redux/user/user-actions';
import { connect } from 'react-redux';

const SignIn = ({emailSignInStart, googleSingInStart}) => {
    /*constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        };
    }*/
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
    event.preventDefault();    
    emailSignInStart(email, password);
}

    const handleChange = event => {
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name]:value})
}

        return(
            <div className='sign-in'>
                <h2>I aleady have an account</h2>
                <span>Sign in your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput name='email' type='email' value={email} handleChange={handleChange} label='email' required />

                    <FormInput name='password' type='password' value={password} handleChange = {handleChange} label='password' required />

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

const mapDispatchToProps = dispatch => ({
    googleSingInStart: () => dispatch(googleSingInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps) (SignIn);

    