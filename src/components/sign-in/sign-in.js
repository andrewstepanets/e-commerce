import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles'




function SignIn({ googleSignInStart, emailSignInStart }) {

    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: ''
    })

    const { email, password } = userCredentials;

    async function handleSubmit(e) {
        e.preventDefault();


        emailSignInStart(email, password);
    }
    function handleChange(e) {

        const { value, name } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="email"
                    required
                    handleChange={handleChange} />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="password"
                    required
                    handleChange={handleChange} />
                <ButtonsBarContainer>
                    <CustomButton
                        type="submit">
                        Sign In
                    </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>Sign In With Google</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer >
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({
        email, password
    })),
})

export default connect(null, mapDispatchToProps)(SignIn);