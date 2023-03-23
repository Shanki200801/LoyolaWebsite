import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import redBgImg from '../../Assets/coursesBgImage.webp'
import Image from 'next/image';
import styles from './courses.module.css'
import { Grade } from '@mui/icons-material';

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
    <div>
      <Grid container >
        <Grid xs={12}><p className='grid place-items-center my-20' style={{height: '15vh', width: '80vw', borderWidth: '0.1rem'}}>IconComponent</p></Grid>
      </Grid>
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