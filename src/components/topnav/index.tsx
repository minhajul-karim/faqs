import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Badge,
  Grid,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import logo from "./button_logo.png";
import notificationIcon from "./bell.svg";

export default function TopNavigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // spacing={3}
        >
          <Grid item lg={8} xs={12} className={classes.gridItem}>
            <Link className={classes.link} href="/" underline="none">
              <img alt="logo" src={logo} className={classes.logo} />
            </Link>
            <Link className={classes.link} href="/" underline="none">
              Menu
            </Link>
            <Link className={classes.link} href="/" underline="none">
              Deals
            </Link>
            <Link className={classes.link} href="/" underline="none">
              Restaurants
            </Link>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={`${classes.link} ${classes.menuBtn}`}
              onClick={handleMenuClick}
            >
              Wingo’s Rewards
              <ExpandMoreIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem className={classes.link} onClick={handleMenuClose}>
                Join now
              </MenuItem>
              <MenuItem className={classes.link} onClick={handleMenuClose}>
                How it works
              </MenuItem>
            </Menu>
            <Link className={classes.link} href="/" underline="none">
              About Us
            </Link>
            <Link className={classes.link} href="/" underline="none">
              Help
            </Link>
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
            className={`${classes.gridItem} ${classes.secondGridItem}`}
          >
            <IconButton aria-label="delete">
              <Badge badgeContent={1} color="primary" className={classes.badge}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="delete">
              <Badge
                color="primary"
                badgeContent={4}
                className={`${classes.badge} ${classes.notificationBadge}`}
              >
                <img src={notificationIcon} alt="notification" />
              </Badge>
            </IconButton>
            <Button
              className={classes.signInBtn}
              startIcon={<PersonOutlineIcon />}
            >
              Sign In
            </Button>
            <Button variant="contained" className={classes.primaryBtn}>
              Order Online
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      borderBottom: "1px solid #E2E8F0",
      background: "#FFF",
      boxShadow:
        "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    logo: { height: "50px", width: "140px" },
    profileIcon: {
      backgroundColor: "#409046",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
    secondGridItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 0,
      marginBottom: 20,
      [theme.breakpoints.up("sm")]: {
        justifyContent: "space-evenly",
      },
      [theme.breakpoints.up("lg")]: {
        justifyContent: "space-between",
        paddingLeft: 40,
        marginBottom: 0,
      },
    },
    link: {
      color: "#231F20",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      textTransform: "uppercase",
      margin: "15px 0",
      [theme.breakpoints.up("sm")]: {
        margin: "15px",
      },
    },
    menuBtn: {
      paddingLeft: 0,
      "& .MuiListItem-button": {
        color: "red",
      },
    },
    signInBtn: {
      textTransform: "capitalize",
      color: "#231F20",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },
    primaryBtn: {
      width: "200px",
      height: "56px",
      padding: "16px",
      borderRadius: "8px",
      background: "#E11B23",
      color: "#FFF",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      textTransform: "uppercase",
      "&:hover": {
        background: "#E11B23"
      }
    },
    notificationBadge: {
      "& .MuiBadge-anchorOriginTopRightRectangle": {
        top: "5px",
        right: "5px",
      },
    },
    badge: {
      "& .MuiBadge-colorPrimary": {
        backgroundColor: "#409046",
      },
    },
  })
);
