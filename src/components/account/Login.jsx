import React from 'react'

import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';

import logo from '../../assets/Logo.png';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
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

const LoginButton = styled(Button)`
  text-transform: none;
  background: #000;
  color: #FFF;
  height: 48px;
  border-radius: 10px;
  font-weight: 500;
`;

const SignUpButton = styled(Button)`
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

const Login = () => {
  return (
      <Component>
        <Box>
          <Image src={logo} alt="Logo" width="350"/>
          <Wrapper>
            <TextField id="email" label="Email" variant="standard" required />
            <TextField id="passowrd" label="Password" variant="standard" type="password" autoComplete="current-password" required />
            <LoginButton variant="contained">Login</LoginButton>
            <Text style={{textAlign: 'center'}}>
              OR
            </Text>
            <SignUpButton>Create an Account</SignUpButton>
          </Wrapper>
        </Box>
      </Component>
  )
}

export default Login