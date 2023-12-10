import { Avatar, Grid, Paper, TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
const paperStyle={padding:20,height:'max-content',width:280,margin:'50px auto'};
const [userdata,setData]=useState({username:'',password:''});
const navigation=useNavigate();
function handleSubmit(e)
{
   e.preventDefault();
 
   if(userdata.username.length==0 || userdata.password.length==0)
   {
       alert("Please fill all fields");
   }
   else
   {
  
      axios({
      method:'POST',
      url:"http://localhost:5000/login",
      data:{
        username:userdata.username,
        password:userdata.password
      }
     }).then((response) =>{
         alert(response.data)
      
     }).catch(error =>{
      console.log(error);
     })
    
    
  }
  
   
}

function handleChange(e)
{
      
     let {name,value}=e.target;
      setData({...userdata,[name]:value});
}
  return (
     <Grid >
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' item xs={12}>
        <Avatar style={{backgroundColor:'#63d299'}}><Person2OutlinedIcon/></Avatar>
        <h2>Login</h2>
        <TextField  name='username' label='username' variant='outlined' fullWidth style={{marginBottom:15}} onChange={handleChange}></TextField>
      <TextField  name='password' label='password' variant='outlined' type='password' fullWidth style={{marginBottom:15}} onChange={handleChange}></TextField>
        <Button variant='contained' color='success' style={{marginTop:10}} onClick={handleSubmit}>Log in</Button>
        </Grid>
      </Paper>
     </Grid>
  )
}
