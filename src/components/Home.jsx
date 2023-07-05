import React from 'react'
import {Box, Typography,Link} from "@mui/material"
import Typical from 'react-typical'
import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from './Footer';
import Myimg from "./Myimgg.png"

const Container=styled(Box)`
text-align:start;
margin:200px;
margin-bottom:71px;
display:flex;
flex-direction:row;
justify-content:space-between;
`

const Typo=styled(Typography)`
color:blueviolet;
font-family:sans-serif;
font-size:48px;
`

const Typ=styled(Typical)`
color:blueviolet;
font-family:sans-serif;
font-size:25px;
`

const Imag=styled.img`
 width:680px;
 height:400px;            
 margin-top:-100px;
 margin-left:-400px;
 margin-bottom:-30px;
`


const Links=styled(Link)`
 color:blueviolet;
`

function Home() {
  return (
    <>
    <Container>
      <Box>
      <Box>
      <Typo>Hi , I'm Sasi Kumar</Typo>
      <Typ
        steps={['Full-Stack developer', 1000, 'Frontend developer', 1000,'Backend developer',1000]}
        loop={Infinity}
        wrapper="p"
      />
      </Box>
      <Box >
        <Links href="#"><LinkedInIcon/></Links>
        <Links href="#"><TwitterIcon/></Links>
        <Links href="#"><GitHubIcon/></Links>
      </Box>
      </Box>
      <Box>
        <Imag src={Myimg} alt="sasi"/>
      </Box>
    </Container>
    <Footer/>
    </>
  )
}

export default Home