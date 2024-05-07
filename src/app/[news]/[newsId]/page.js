import { getSingleNews } from '@/utils/getSingleNews';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetails = async ({params}) => {
    
    const {data : singleNews} = await getSingleNews(params.newsId)
    
    return (
        <Box sx={{ flexGrow: 1 }} className="my-5">
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Image src={singleNews.thumbnail_url} width={800} height={500} alt='news' />

          <Grid container spacing={2} className='mt-2'>
        <Grid item lg={6}>
          <Image src={singleNews.image_url} width={800} height={500} alt='news' />
        </Grid>
        <Grid item lg={6}>
        <Image src={singleNews.image_url} width={800} height={500} alt='news' />
        </Grid>
        
      </Grid>
        </Grid>

        <Grid item lg={6} className='space-y-6'>
          <Typography variant='h4'>
            {singleNews.title}
          </Typography>
          <Container className='flex gap-5 items-center'>
          <Image src={singleNews.author.img} width={40} height={40} alt='news' className='rounded-full' />
            <Typography >
                {singleNews.author.name} 
            </Typography>
            -
            <Typography>
             {singleNews.author.published_date}
            </Typography>
          </Container>
          <Typography style={{
            textAlign:"justify",
            whiteSpace:"pre-line"
          }} variant='h5'>
            {singleNews.details}
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default NewsDetails;