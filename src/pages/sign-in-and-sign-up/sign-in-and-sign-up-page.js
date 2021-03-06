import React from 'react';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'

function SignInAndSignUpPage() {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUpPage;