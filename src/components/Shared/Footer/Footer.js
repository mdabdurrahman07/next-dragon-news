"use client"
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Twitter } from '@mui/icons-material';
import Link from "next/link";
import { useEffect, useState } from "react";


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
    pathName:"/category"
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

const Footer = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(interval);
      }, []);

      const year = currentDateTime.getFullYear();
    return (
        <Box className="bg-[#011321] w-full text-center px-5 py-6">
            <Container>
                {/* social links */}
            <Box sx={{
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
         
          </Box>
            {/* social links */}
            {/* nav-links */}
          <Box className="w-full">
            {navItems.map((items) => (
               <Link key={items} href={items.pathName}>
                <Button className='text-white'>
                    {items.route}
                </Button>
               </Link>
              ))}
          
          </Box>
           {/* nav-links */}
           {/* copyright */}
           <Typography className="text-[#67717A]" textAlign="center">
           ©{year} Dragon News. Design & Develop by MD Abdur Rahamn Nur Jamil
           </Typography>
           {/* copyright */}
            </Container>
        </Box>
    );
};

export default Footer;