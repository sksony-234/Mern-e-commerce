import React from 'react';
import { Button, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <div>
        <Grid 
            className="bg-black text-white text-center mt-10"
            container
            sx={{bgcolor:"black", color:"white", py:3}}
        >
            <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h6'>
                      Company
                  </Typography>
                  <Typography variant='h6'>
                    <Button className='pb-2' variant='h6'>ABOUT</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>BLOG</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>PRESS</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>JOBS</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>PARTNERS</Button>
                  </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h6'>
                      Solutions
                  </Typography>
                  <Typography variant='h6'>
                    <Button className='pb-2' variant='h6'>Marketing</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Analytics</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Commerce</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Insights</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Supports</Button>
                  </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h6'>
                      Orders
                  </Typography>
                  <Typography variant='h6'>
                    <Button className='pb-2' variant='h6'>Cart items</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Order history</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Canceled Items</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Status</Button>
                  </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                  <Typography className='pb-5' variant='h6'>
                      Info
                  </Typography>
                  <Typography variant='h6'>
                    <Button className='pb-2' variant='h6'>Contact Us</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Legal rights</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Terms</Button>
                  </Typography>
                  <Typography className='pb-2' variant='h6'>
                    <Button className='pb-2' variant='h6'>Privacy</Button>
                  </Typography>
            </Grid>
            <Grid className='pt-20' item xs={12}>
              <Typography
                variant='body2'
                component="p"
                align="center"
              >
                &copy; 2023 Sudhanshu kumar. All rights reserved.
              </Typography>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer