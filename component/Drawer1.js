import React, { useState } from 'react'
import { Drawer, ListItemIcon, ListItemText,List } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
// import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
const Drawer1 = ({links}) => {
  const[open,setOpen]=useState(false)
  return (
   <>
   <Drawer PaperProps={{
    sx:{backgroundColor:'#4830a3'}
   }} open={open} onClose={()=>setOpen(false)}>
  
   <List>
    {links && links.length > 0 && links.map((link, index)=>
    (
      <ListItemButton onClick={()=>setOpen(false)}
      key={index} divider>
      <ListItemIcon>
        <ListItemText sx={{color:'white'}}>
          {link}
        </ListItemText>
      </ListItemIcon>
    </ListItemButton>
    ))}
   
   </List>
   </Drawer>
<IconButton sx={{marginLeft:'auto',color:'white'}} onClick={()=>setOpen(!open)}>
  <MenuRoundedIcon />
</IconButton>
   
   </>
  )
}

export default Drawer1