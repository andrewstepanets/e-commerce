import React, { useState } from 'react';
import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';

import { signInWithGoogle } from 'firebase/firebase.utils';

import SignInBlock from 'styles/sign-in-block.styles';




function SignIn() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        setData({
            email: '',
            password: ''
        })
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
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </SignInBlock>
    )
}

export default SignIn;