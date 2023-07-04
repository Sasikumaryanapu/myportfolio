import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Box, Typography } from '@mui/material';
import {Card,CardActionArea,CardContent} from "@mui/material"
import styled from '@emotion/styled';
import contact from "./contact.png"
import React from 'react'


const Container=styled(Box)`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:140px;
  margin-bottom:40px;
`

function Education() {
  return (
    <Container>
      <Box>
        <Typography variant='h4' sx={{fontWeight:"550",paddingLeft:"40px",paddingBottom:"20px"}}>About Me</Typography>
        <img src={contact} width="300px" height="300px"/>
      </Box>
      <Box>
        <Typography variant='h6'>Here is my educational journey throughout my career, i hold a Bachelor's degree <br/>in Computer Science
        </Typography>
        <br/>
      <Tabs>
    <TabList>
      <Tab>B.Tech</Tab>
      <Tab>Junior College</Tab>
      <Tab>S.S.C</Tab>
    </TabList>
    <TabPanel>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Computer Science Engineering
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Avanthi Instiute Of Engineering And Technology<br/> JNTUK ,Visahkapatnam ,Andhra Pradesh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </TabPanel>
    <TabPanel>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Maths , Physics , Chemistry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Narayana Junior College <br/> Visahkapatnam ,Andhra Pradesh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </TabPanel>
    <TabPanel>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           High School
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Jubilee English Medium <br/> Visahkapatnam ,Andhra Pradesh
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </TabPanel>
  </Tabs>
      </Box>
    
  </Container>
  )
}

export default Education