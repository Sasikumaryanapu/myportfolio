import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Container=styled(Box)`
height:200px;
background-color:blueviolet;
color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Content=styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between;
gap:60px;`


const Links=styled(Link)`
 color:white;
 text-decoration:none;
 font-size:20px;
 font-family:sans-serif;
`

const Lin=styled(Link)`
 color:white;
 width:200px;
 height:200px;
 text-decoration:none;
 background-color:bluevolet;
 border:none;
 font-family:sans-serif;
`


function Footer() {
  return (
    <Container>
      <Box>
      <Typography sx={{textAlign:"center"}}> Am a junior Fullstack Developer <br/> who's looking for an opportunity <br/><br/>
      </Typography>
      </Box>
          <Box>
        <hr style={{display:"block",height:"4px",width:"1000px",backgroundColor:"pink"}} />
        </Box>
          <Content>
      <Links to="/skills">skills</Links>
      <Links to="/education">Education</Links>
      <Links to="/projects">projects</Links>
      <Links to="/contact">contact</Links>
      </Content>
      <br/>
      <Box >
        <Lin href="#"><LinkedInIcon/></Lin>
        <Lin href="#"><TwitterIcon/></Lin>
        <Lin href="#"><GitHubIcon/></Lin>
      </Box>
      
    </Container>
  )
}

export default Footer