import React, { useState } from 'react';
import FormInput from 'components/form-input';

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
            <h2>I already have an account</h2>
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
                <input type="submit" value="Submit Form" />
            </form>
        </SignInBlock>
    )
}

export default SignIn;