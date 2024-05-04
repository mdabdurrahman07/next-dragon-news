import LatestNews from '@/components/UI/LatestNews/LatestNews';
import Sidebar from '@/components/UI/Sidebar/Sidebar';
import { Box, Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
   <>
   <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className='my-5 space-y-3'>
            <h1 className='text-2xl font-medium'>National News</h1>
            <div className='w-[23%] h-[3px] bg-red-500'></div>
          </div>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
        <div className='my-5 space-y-3'>
            <h1 className='text-2xl font-medium'>Side Bar</h1>
            <div className='w-[28%] h-[3px] bg-red-500'></div>
          </div>
         <Sidebar/>
        </Grid>
      </Grid>
    </Box>
   </>
  );
};

export default HomePage;