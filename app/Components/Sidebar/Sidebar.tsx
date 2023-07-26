'use client'

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RouteCard from '../RouteCard/RouteCard';

const drawerWidth = 300;


export default function Sidebar({routes}){

    return(
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {routes && routes.map((location, index) => (
              // <ListItem key={text} disablePadding>
              //   <ListItemButton>
              //     <ListItemIcon>
              //       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              //     </ListItemIcon>
              //     <ListItemText primary={text} />
              //   </ListItemButton>
              // </ListItem>
              <RouteCard start={location.start} destination={location.destination}/>
            ))}
          </List>
        </Box>
      </Drawer>
    )
}