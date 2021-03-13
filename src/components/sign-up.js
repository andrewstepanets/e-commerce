import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../components/form-input';
import CustomButton from './custom-button/custom-button.component';

import { signUpStart } from '../redux/user/user.actions';

import SignUpBlock from '../styles/sign-up-block.styles';

function SignUp({ signUpStart }) {
  const [data, setData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  function handleChange(e) {

    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert(`Password don't match`);
      return;
    }

    signUpStart({ displayName, email, password })

  }

  return (
    <SignUpBlock className="sign-up">
      <h2 className="title">
        I don't have an account
        </h2>
      <span>
        Sign up with your email and password
        </span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={data.displayName}
          onChange={handleChange}
          label="Display Name"
          required />
        <FormInput
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          label="Email"
          required />
        <FormInput
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          label="Password"
          required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpBlock>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp);