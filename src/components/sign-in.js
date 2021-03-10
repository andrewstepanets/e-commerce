import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../components/form-input';
import CustomButton from './custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../redux/user/user.actions';

import SignInBlock from '../styles/sign-in-block.styles';




function SignIn({ googleSignInStart, emailSignInStart }) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault();

        const { email, password } = data;


        emailSignInStart(email, password);
    }
    function handleChange(e) {

        const { value, name } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <SignInBlock className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={data.email}
                    label="email"
                    required
                    handleChange={handleChange} />
                <FormInput
                    type="password"
                    name="password"
                    value={data.password}
                    label="password"
                    required
                    handleChange={handleChange} />
                <div className="buttons">
                    <CustomButton
                        type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </SignInBlock >
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    })),
})

export default connect(null, mapDispatchToProps)(SignIn);