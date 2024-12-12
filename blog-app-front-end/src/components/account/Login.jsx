import React from 'react'
import { useState } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

import logo from '../../assets/Logo.png';


const Component = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled(Box)`
  width: 400px;
  border-radius: 10px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img') ({
  width: 350,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0'
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div, & > button, & > p {
  margin-top: 25px;
  }
`;

const Button1 = styled(Button)`
  text-transform: none;
  background: #000;
  color: #FFF;
  height: 48px;
  border-radius: 10px;
  font-weight: 500;
`;

const Button2 = styled(Button)`
  text-transform: none;
  background: #FFF;
  color: #000;
  height: 48px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`
const signupInitialValues = {
  name: '',
  email: '',
  password:''
}
const Login = () => {

  const [signup, IsSignup] = useState(false);
  const [signupValues, setSignupValues] = useState(signupInitialValues);

  const toggleSignup = () => {
    IsSignup(!signup)
  }

  const onInputChange = (e) => {
    setSignupValues({...signupValues, [e.target.name]: e.target.value });
  }

  const signupUser = () => {
    
  }

  return (
      <Component>
        <Container>
          <Image src={logo} alt="Logo" width="350"/>

          { 
            signup === false ?
              <Wrapper>
                <TextField id="email" label="Email" variant="outlined" required />
                <TextField id="passowrd" label="Password" variant="outlined" type="password" autoComplete="current-password" required />
                <Button1 variant="contained">Login</Button1>
                <Text style={{textAlign: 'center'}}>
                  OR
                </Text>
                <Button2 onClick={() => {
                  toggleSignup()
                }}>Create an Account</Button2>
              </Wrapper> :

            <Wrapper>
              <TextField id="name" name="name" label="Name" variant="outlined" onChange={(e) => onInputChange(e)} required />
              <TextField id="email" name="email" label="Email" variant="outlined" onChange={(e) => onInputChange(e)} required />
              <TextField id="passowrd" name="password" label="Password" variant="outlined" type="password" autoComplete="current-password" onChange={(e) => onInputChange(e)} required />
              <Button1 variant="contained">Signup</Button1>
              <Text style={{textAlign: 'center'}}>
                OR
              </Text>
              <Button2 onClick={() => {
                  toggleSignup()
                }}>Already have an Account</Button2>
            </Wrapper>
          }
        </Container>
      </Component>
  )
}

export default Login