import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image';
import styles from './courses.module.css'
import { Grade } from '@mui/icons-material';

//Images
import redBgImg from '../../Assets/coursesBgImage.webp'
import artsAndHumanities from '../../Assets/artsAndHumanities.webp'
import certificateCourses from '../../Assets/certificateCourses.webp'
import commerce from '../../Assets/commerce.webp'


const Courses = () => {
  return (
    <div className='grid place-items-center' style={{ backgroundImage: `url(${redBgImg.src})`, height: '100vh' }}>
      <Container className='grid place-items-center' maxWidth="xl">
        <TextComponent/>
        <IconComponent/>
        <DeptBtnComponent/>
      </Container>
    </div>
  )
}

const TextComponent = ()=>{
  return(
    <div>
      <Grid container >
        <Grid xs={12}><p className='grid place-items-center mb-30' style={{height: '15vh', width: '80vw', borderWidth: '0.1rem'}}>TextComponent</p></Grid>
      </Grid>
    </div>
  )
}

const IconComponent = ()=>{
  return(
    <div style={{marginTop: '10vh', marginBottom: '10vh'}}>
       <Stack direction="row" spacing={10}>
       <div className='grid place-items-center'>
        <div className= "text-purple-100 font-semibold iconTxt text-4xl" style={{position: 'absolute', zIndex: 1, maxWidth: 200, textAlign: 'center', textShadow: '2px 0 5px #000'}}>
          Arts & Humanities
        </div>
        <Avatar className=" opacity-95"alt="Arts & Humanities" src={artsAndHumanities.src} sx={{width:200, height:200}}/>
       </div>

       <div className='grid place-items-center'>
        <div className= "text-white font-semibold iconTxt text-4xl" style={{position: 'absolute', zIndex: 1, maxWidth: 200, textAlign: 'center', textShadow: '2px 0 5px #000'}}>
          Commerce
        </div>
        <Avatar className=" opacity-95" alt="Arts & Humanities" src={commerce.src} sx={{width:200, height:200}}/>
       </div>

       <div className='grid place-items-center'>
        <div className= "text-white font-semibold iconTxt text-4xl" style={{position: 'absolute', zIndex: 1, maxWidth: 200, textAlign: 'center', textShadow: '2px 0 5px #000'}}>
          Certificate Courses
        </div>
        <Avatar className=" saturate-200 opacity-90" alt="Arts & Humanities" src={certificateCourses.src}  sx={{width:200, height:200}}/>
       </div>
      </Stack>
    </div>
  )
}

const DeptBtnComponent = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button className=" font-mono bg-white text-deptBtnColor rounded-sm hover:bg-white hover: text-deptBtnColorHover"
       variant="contained"
        color="success"
        href="http://www.loyolacollegeblr.com/Teaching-Staff.html"
        style={{fontSize: '1.25rem', fontWeight: '500', borderRadius: '2px', padding: '8px 25px 12px'}}>Departments and Majors</Button>
    </Stack>
  )  
}

export default Courses