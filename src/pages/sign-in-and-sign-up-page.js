import React from 'react';

import SignIn from 'components/sign-in';
import SignUp from 'components/sign-up';

function SignInAndSignUpPage() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;