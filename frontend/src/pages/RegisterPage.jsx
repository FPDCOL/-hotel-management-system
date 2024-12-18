
import React, { useState } from 'react';
import{TextField,Button,IconButton} from '@mui/material';
//import {Visibility,VisibilityOff} from '@mui/icons-material';
import '../styles/AuthStyle.css'
import {Link} from 'react-router-dom';

const RegisterPage = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[Fname,setFname]=useState('');
    const[Sname,setSname]=useState('');
    const[register,setRegister]=useState('');
    const handleEmailCHange=(event)=>{
        setEmail(event.target.value);
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    const handleFnameChange=(event)=>{
        setFname(event.target.value)
    }
    const handleSnameChange=(event)=>{
        setSname(event.target.value)
    }
  return (
    <div>
        <div className='auth-page d-flex justify-content-center align-items-center vh-100'>
                <div className='card p-4 m-4 shadow rounded'>
                    <div className='text-center mb-4'>
                        <img src='/logo192.png' width='80' alt='logo'/>
                    </div>
                    <h3 className='text-center mb-3 text-primary font-bold'>Paradise View</h3>
                    <form>
                        <TextField label='First Name'  variant='outlined' margin='normal' value={Fname} onChange={handleFnameChange} fullWidth/>
                        <TextField label='Surname'  variant='outlined' margin='normal' value={Sname} onChange={handleSnameChange} fullWidth/>
                        <TextField label='Email' type='email' variant='outlined' margin='normal' value={email} onChange={handleEmailCHange} fullWidth/>
                        <TextField label='Password' type='password' variant='outlined' margin='normal' value={password} onChange={handlePasswordChange} fullWidth/>
                        <div className='mt-2'>
                            <Button className='px-3 py-2 rounded-3' variant='contained' color='primary' type='submit' fullWidth>{register? 'regestering' :'register'}</Button>
                        </div>
                        <div className='mt-2'>
                            <Button className='px-3 py-2 rounded-3' variant='outlined' color='secondary' type='submit' fullWidth>Login</Button>
                        </div>
                    </form>
                </div>
              
            </div>
      
    </div>
  )
}

export default RegisterPage
