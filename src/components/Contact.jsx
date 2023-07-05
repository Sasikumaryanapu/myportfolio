
import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from "yup"
import styled from '@emotion/styled';
import { Box, Typography,Button } from '@mui/material';
import contact from "./contact.png"
import Footer from './Footer';


const Container=styled(Box)`
display:flex;
justify-content:space-between;
margin:200px;
margin-top:145px;
color:black;
font-family:sans-serif;
height:200px;
  
`
const Boxs=styled(Box)`
 text-align:center; 
 border-radius:10px;
 padding:15px;
`

const Fields=styled(Field)`
color:black;
background-color:transparent;
height:50px;
width:400px;
border:none;
outline:none;
border-bottom:4px solid blueviolet;
font-family:sans-serif;
font-weight:400;
font-size:20px `

const Buttons=styled(Button)`
background-color:"blueviolet;
color:"white";
border-radius:20px;   
&:hover{
  background-color:"white";
  color:"blueviolet";
  border-radius:20px;
}`



function Contact() {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        msg: Yup.string().required('Required')
      });

  return (
    <>
    <Container>
    <Boxs>
      <Typography variant="h4" component="h4" style={{fontFamily:"sans-serif",color:"blueviolet"}}>Contact Me</Typography><br/>
        <Formik initialValues={{
         name: '',
         email: '',
         msg:''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values,onsubmitProps) => {
         // same shape as initial values
         values.msg=" "
         values.name=" "
         values.email=" "
         console.log(values);
         onsubmitProps.setSubmitting(true)
       }}>
            <Form >
                <Fields type="text" name="name" placeholder="username" />
                <br/>
                <ErrorMessage name="name" />
                <br/>
                <Fields type="mail" name="email" placeholder="email"/>
                <br/>
                <ErrorMessage name="email" />
                <br/>
                <Fields type="text" name="msg" placeholder="message" />
                <br/>
                <ErrorMessage name="msg" />
                <br/>  
                <Buttons variant="contained"  sx={{backgroundColor:"blueviolet",'&:hover':{backgroundColor:"white",color:"blueviolet"}}} type="submit" >submit</Buttons>
            </Form>
          
        </Formik>   
        
    </Boxs>
    <img src={contact} alt="contact
    " width="400px" height="400px"/>
    </Container>
    <Footer/>
    </>
  )
}

export default Contact