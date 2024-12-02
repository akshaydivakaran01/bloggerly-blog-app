import React from 'react'
import "./Login.css"

import Box from '@mui/material/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import logo from '../../assets/Logo.png';

const Login = () => {
  return (
    <div className="container">
      <Box>
          <img src={logo} alt="Logo"/>
          <br /><br /><br /><br />
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <br /><br />
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
      </Box>
    </div>
  )
}

export default Login