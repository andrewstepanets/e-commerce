import React, { useState } from 'react';
import FormInput from 'components/form-input';
import CustomButton from 'components/custom-button';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import SignUpBlock from 'styles/sign-up-block.styles';

function SignUp() {
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

    try {

      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      setData({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {

      console.error(error);

    }
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

export default SignUp;