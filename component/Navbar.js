import { AppBar, Grid, Tab, Toolbar, Typography, Button,Box, useMediaQuery, useTheme} from '@mui/material'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Drawer1 from './Drawer1';
// import { useTheme } from '@emotion/react';
const Navbar = ({links}) => {
    const [val,setValue]=useState();
    const theme=useTheme();
    // console.log(theme);
    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
    

  return (
   <>
   <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(220,22,63,1) 0%, rgba(31,63,212,1) 35%, rgba(153,13,184,1) 100%)'}}>
    <Toolbar>
        { isMatch ? <>
            <Typography>
    <ShoppingCartCheckoutIcon/>
    </Typography>
            <Drawer1 links={links}/>
        </>:
        <Grid  sx={{placeItems:'center'}} container >
            <Grid item xs={2}>
<Typography>
    <ShoppingCartCheckoutIcon/>
    </Typography>
            </Grid>
            <Grid item xs={6}>
                <Tabs indicatorColor='secondary' textColor="inherit" value={val}
                 onChange={(e,val)=>setValue(val)}>
{links.map((link,index)=>
(
    <Tab key={index} label={link}/>
)
)}
                </Tabs>
            </Grid>
<Grid item xs={1}/>
<Grid item xs={3}>
    <Box display="flex">
        <Button sx={{marginLeft:'auto', background:'rgba(233,31,83,1)'}}variant="contained"> Login </Button>
        <Button sx={{marginLeft:1, background:'rgba(233,31,83,1)'}} variant="contained"> Signup </Button>
    </Box>
</Grid>
        </Grid>
}
    </Toolbar>
   </AppBar>
   </>
  )
}

export default Navbar