"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { Button, IconButton } from '@mui/material';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Twitter } from '@mui/icons-material';
import Stack from '@mui/material/Stack';



const navItems = [
    {
    route:"Home",
    pathName:"/"
    },
    {
    route:"Pages",
    pathName:"/pages"
    },
    {
    route:"Category",
    pathName:"/categories/news"
    },
    {
    route:"News",
    pathName:"/news"
    },
    {
    route:"Post",
    pathName:"/post"
    },
    {
    route:"Contact",
    pathName:"/contact"
    }
    
];

const Navbar = () => {
   
  
    
    return (
        <AppBar position="static" className='text-center bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt='logo'></Image>
        <Box className="w-full">
            {navItems.map((items) => (
               <Link key={items} href={items.pathName}>
                <Button className='text-white'>
                    {items.route}
                </Button>
               </Link>
              ))}
          
          </Box>
          <Box>
          <Stack direction="row" sx={{
            "& svg":{
                color:"white"
            }
          }}>
          <IconButton>
              <FacebookIcon/>
          </IconButton>
          <IconButton>
              <Twitter/>
          </IconButton>
          <IconButton>
             <YouTubeIcon/>
          </IconButton>
          <IconButton>
            <LinkedInIcon/>
          </IconButton>
          <IconButton>
              <InstagramIcon/>
          </IconButton>
          </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Navbar;