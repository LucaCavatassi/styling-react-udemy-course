import { useState } from 'react';
import { styled } from "styled-components";
import Button from './Button.jsx';
import StyledInput from './Input.jsx';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs" className='w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 m'>
      <div id='auth-inputs' className='flex flex-col gap-2 mb-6 ' >
            <StyledInput
              label="email"
              invalid={emailNotValid}
              type="email"
              onChange={(event) => handleInputChange('email', event.target.value)}
            />
            <StyledInput
              label="password"
              invalid={passwordNotValid}
              type="password"
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
      </div>


      <div className="flex justify-end gap-4 ">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
