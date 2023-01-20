// import * as React from "react";
import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
import Card from "./Card";
import axios from "axios";
import { Button } from "@mui/material";

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [navValue, setNavValue] = useState("");
  const [news, setNews] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function businessHandle(e) {
    setNavValue(e.currentTarget.getAttribute("value"));
  }

  useEffect(() => {
    axios
      .get(`https://inshorts.deta.dev/news?category=${navValue}`)
      .then((response) => setNews(response));
    // console.log("ggggggggggg", navValue);
  }, [navValue]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img
              style={{
                height: "7vh",
                marginTop: "2vh",
                marginLeft: "35vw",
              }}
              src="https://www.adgully.com/img/400/201804/inshorts-logo.jpg"
              alt=""
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem value="" onClick={businessHandle}>
            <Button>All News</Button>
          </ListItem>
          <ListItem value="business" onClick={businessHandle}>
            <Button> Buisness</Button>
          </ListItem>
          <ListItem value="entertainment" onClick={businessHandle}>
            <Button> Entertainment</Button>
          </ListItem>
          <ListItem value="health" onClick={businessHandle}>
            <Button> Health</Button>
          </ListItem>
          <ListItem value="science" onClick={businessHandle}>
            <Button>Science</Button>
          </ListItem>
          <ListItem value="sport" onClick={businessHandle}>
            <Button>Sports</Button>
          </ListItem>
          <ListItem value="technology" onClick={businessHandle}>
            <Button> Technology</Button>
          </ListItem>
        </List>
        <Divider />
      </Drawer>

      <DrawerHeader />
      <div style={{ marginTop: "7%", cursor: "pointer" }} open={open}>
        <Card navValue={navValue} newsData={news.data} />
      </div>
    </Box>
  );
}
