import React, { useState } from 'react'
import {Avatar, Grid,Paper,TextField,Button} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const paperStyle={padding:20,height:'max-content',width:280 ,margin:'20px auto'}
    const avatarStyle={backgroundColor:'#63d299'}
    const textBoxStyle={marginBottom:15}
    const navigation=useNavigate();
    const [userdata,setData]=useState({username:"",email:"",password:"",confirm_password:""});
function handleSubmit(e)
{
  console.log(userdata);
  if(userdata.username.length==0 || userdata.email.length==0 || userdata.password.length==0)
  {
    alert("Fill all fields");
    navigation("/")
  }
 else if(userdata.password!=userdata.confirm_password)
  {
         alert("Check your password");
         navigation("/")
  }
  else
  {
      try {

        axios({
            method:'POST',
            url:"http://localhost:5000/signup",
            data:{
                username:userdata.username,
                email:userdata.email,
                password:userdata.password,
                confirm_password:userdata.confirm_password
            }
        })
        
      } catch (error) {
          console.log("Error while sending form data",error)
      }

      navigation("/login")
     }

}
function handleChange(e)
{
    
   let{name,value}=e.target;
   setData({...userdata,[name]:value});
}
  return (
   <Grid>
    <Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
      <h2>Sign in</h2>
    <TextField style={textBoxStyle}  name="username" label='username' variant='outlined' fullWidth required onChange={handleChange}/>
    <TextField style={textBoxStyle} name='email' label='email' variant='outlined'fullWidth required onChange={handleChange}/>
    <TextField style={textBoxStyle} name='password' label='password' type='password' variant='outlined'fullWidth required onChange={handleChange}/>
    <TextField style={textBoxStyle} name='confirm_password' label='confirm password' type='password' variant='outlined' fullWidth required onChange={handleChange}/>
    <Button variant='contained' color='success' style={{marginTop:10}} onClick={handleSubmit}>Sign in</Button>
      </Grid>
      <div style={{margin:10}}>
        <span>Already have an account?  </span>
       <Link to="/login">Log in</Link>
      </div>
    </Paper>
   </Grid>
  )
}
