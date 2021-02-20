import React from 'react';

import SignIn from 'components/sign-in';
import SignUp from 'components/sign-up';

import SignInAndSignUpBlock from 'styles/sign-in-and-sign-up-block'

function SignInAndSignUpPage() {
    return (
        <SignInAndSignUpBlock className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </SignInAndSignUpBlock>
    )
}

export default SignInAndSignUpPage;