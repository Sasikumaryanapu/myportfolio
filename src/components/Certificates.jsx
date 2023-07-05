import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "./Footer";
// import expressjs from "../Images/expressjs.png"
import nodejs from "../Images/nodejs.png"
import javascript from "../Images/javascript.png"

const Container=styled(Box)`
color:black;
font-family:sans-serif;
width:610px;
height:465px;
text-align:center;
padding-left:80px;
padding-top:80px;`

const Img=styled(Slider)`
border:3px solid #3BF7DBs;
border-radius:10px 40px;
position:relative;
top:-30px;  
`


const Img1=styled.img`
border-radius:10px 40px;`

const Skills = () => {

const settings = {
	infinite: true,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	lazyLoad: true,
	autoplay: true,
autoplaySpeed: 2000,

};

const images = [{
  id: 1,
  src: nodejs,
  alt: "Image 1"
},
{
  id: 2,
  src: nodejs,
  alt: "Image 2 "
},
{
  id: 3,
  src: javascript,
  alt: "Image 3"
}
];
return (
	<>
  <Container>
	<Box className="tag">
		<h1>Certificates</h1>
	</Box>
	<Box>
		<Img {...settings}>
		{images.map((item) => (
			<Box key={item.id}>
			<Img1 src={item.src} width="600px" height="300px" alt={item.alt} />
			</Box>
		))}
		</Img>
		
	</Box>
	<Box>
	<Typography>These are my achivements that i have earned with my knoweledge <br/>and the talent that i have aquired over the years.
		<br/>These certificates are proof of my work over the last few years</Typography>
		</Box>
  </Container>
  <Footer/>
		</>
)
}
export default Skills;
