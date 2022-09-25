import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import "./navbar.css"

function Hamburger() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  const styles = {
    paper: {
      backgroundColor:'rgba(255, 255, 255, 0.19'
    }
  }


  return (
    <div style={{backgroundColor:'rgba(255, 255, 255, 0.19)'}} className="hamburgerContainer" >
      <Container  maxWidth="lg" disableGutters="true">
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                md: "block",
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <div style={{backgroundColor:'rgba(255, 255, 255, 0.19)'}}>
          <Drawer
            PaperProps={{

              sx: {
                backgroundColor:"rgba(255, 255, 255, 0.19)"
              }
            }}
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
            
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                // backgroundColor: "#dbc8ff"
              }}
              className="hamburgerMenu" 
              style={{backgroundColor:'rgba(255, 255, 255, 0.19)'}}
              
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ImageIcon sx={{ color: "darkGray" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "darkGray" }} />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon sx={{ color: "darkGray" }} />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </Box>
              {/* {search} */}
            </Box>
          </Drawer>

          </div>
        </Toolbar>
      </Container>
    </div>
  );
}

export default Hamburger