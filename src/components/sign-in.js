import React, { useState } from 'react';




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
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    required
                    onChange={handleChange} />
                <label>Email</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    required
                    onChange={handleChange} />
                <label>Password</label>
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default SignIn;