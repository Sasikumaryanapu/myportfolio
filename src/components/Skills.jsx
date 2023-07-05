import React from 'react'
import myimg from "./Myimgg.png"
import { Box,Card,CardActionArea,CardContent,CardMedia, Typography } from '@mui/material';
import styled from '@emotion/styled';
import html from "../Images/html.png"
import reactjs from "../Images/reactjs.png"
import css from "../Images/css.png"
import sass from "../Images/sass.png"
import mongodb from "../Images/mongodb.png"
import expressjs from "../Images/expressjs.png"
import nodejs from "../Images/nodejs.png"
import javascript from "../Images/javascript.png"
import Footer from './Footer';





const Container=styled(Box)`
width:760px;
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 justify-content:space-between;
 margin-top:116px;
 margin-bottom:40px;
 margin-left:360px;
 gap:45px;

`
function Skills() {

  const image=[
    {
      img:reactjs,
      name:"reactjs"    
    },
    {
      img:nodejs,
      name:"nodejs"
    },
    {
      img:expressjs,
      name:"expressjs"
    },
    {
      img:mongodb,
      name:"mongodb"

    },
    {
      img:html,
      name:'html'
    },
    {
      img:css,
      name:'css'
    },
    {
      img:javascript,
      name:'javascript'
    },
    {
      img:sass,
      name:"sass"
    }
  ]

  return (
    <>
    <Container textAlign={"center"} >
       {
        image.map(img=>(
          <Card sx={{ width:140 }}>
      <CardActionArea>
        <CardMedia sx={{height:140}} 
         image={img.img}>
        </CardMedia>
        <Typography variant='h6' >{img.name}</Typography>
      </CardActionArea>
    </Card>
        ))
       }
  </Container>
  <Footer/>
  </>
  )
}

export default Skills;

<Card sx={{ width:140 }}>
      <CardActionArea>
        <CardMedia sx={{height:140}} 
         image={myimg}>
        </CardMedia>
        <CardContent>hi am sasi</CardContent>
      </CardActionArea>
    </Card>