import React from 'react'

import { Box, Button, TextField } from '@mui/material';
import { FormControl, FormLabel } from '@mui/joy';
import styled from '@emotion/styled';

import logo from '../../assets/Logo.png';

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
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
`;

const Login = () => {
  return (
      <Component>
        <Box>
          <Image src={logo} alt="Logo" width="350"/>
          <Wrapper>
            <TextField id="email" label="Email" variant="standard" required />
            <TextField id="passowrd" label="Password" variant="standard" type="password" autoComplete="current-password" required />
            <Button variant="contained">Login</Button>
            <Button>Create an Account</Button>
          </Wrapper>
        </Box>
      </Component>
  )
}

export default Login