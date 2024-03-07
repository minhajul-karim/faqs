import React, { Component } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  OutlinedInput,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
//@ts-ignore
import footerLogo from "./image_logo.png";

class AppFooter extends Component {
  render() {
    return (
      <div>
        <Box style={MainStyles.mainDiv as React.CSSProperties}>
          <Box style={MainStyles.firstDiv}>
            <Box style={MainStyles.footerLeftDiv as React.CSSProperties}>
              <Box style={MainStyles.logoStyle}>
                <img src={footerLogo} />
              </Box>
              <Box style={MainStyles.logoPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </Box>
            </Box>
            <Box style={MainStyles.contactBlocks}>
              <Box style={MainStyles.contactDiv as React.CSSProperties}>
                <Typography style={MainStyles.headings}>Contact Us</Typography>
                <Box style={MainStyles.footerList}>
                  <Typography style={MainStyles.listItems}>
                    Our Story
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Become a Franchise
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Head Office
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Mobile Apps{" "}
                  </Typography>
                </Box>
              </Box>
              <Box style={MainStyles.contactDiv as React.CSSProperties}>
                <Typography style={MainStyles.headings}>Policies</Typography>
                <Box style={MainStyles.footerList}>
                  <Typography style={MainStyles.listItems}>
                    Terms & Conditions
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Become a Franchise
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Allergen Information
                  </Typography>
                  <Typography style={MainStyles.listItems}>
                    Privacy Policy
                  </Typography>
                </Box>
              </Box>
              <Box style={MainStyles.infoDiv}>
                <Box>
                  <Typography style={MainStyles.infoHeading}>
                    Sign Up for Wingo’s Newsletter
                  </Typography>
                  <Typography style={MainStyles.infoPara}>
                    Get information of our discounts and latest deals in a
                    lightning speed
                  </Typography>
                </Box>
                <Box>
                  <form noValidate autoComplete="off">
                    <FormControl style={MainStyles.emailInput}>
                      <OutlinedInput
                        style={MainStyles.emailPlaceholder}
                        placeholder="Enter your e-mail address"
                      />
                    </FormControl>
                  </form>
                </Box>
                <Box>
                  <Button style={MainStyles.formBtn} variant="contained">
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <hr style={MainStyles.footerHr} />
          <Box style={MainStyles.secondDiv}>
            <Typography style={MainStyles.secondPara}>
              © 2024 Wingo’s | All Rights Reserved
            </Typography>
          </Box>
        </Box>
      </div>
    );
  }
}

export default AppFooter;

const MainStyles = {
  mainDiv: {
    // maxWidth: "1440px",
    // margin: "0 auto",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "centre",
    alignItems: "centre",
    padding: "24px 0px 0px 0px",
    gap: "40px",
    backgroundColor: "#231F20",
    color: "#ffffff",
  },
  firstDiv: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px 40px 0px 24px",
  },
  footerLeftDiv: {
    width: "460px",
    height: "161px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  logoStyle: {
    width: "151.75px",
    height: "80px",
  },
  logoPara: {
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19.2px",
  },

  contactBlocks: {
    display: "flex",
    justifyContent: "space-between",
    width: "839px",
    height: "254px",
  },
  headings: {
    fontFamily: "Kaushan Script, cursive",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "36px",
  },
  secondDiv: {
    width: "auto",
    margin: "-15px auto",
  },
  footerList: {
    marginTop: "24px",
  },
  listItems: {
    fontFamily: "Montserrat",
    fontSize: "medium",
    padding: "8px 6px 8px 6px",
    gap: "8px",
  },
  contactDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
  },
  infoDiv: {
    width: "315px",
  },
  infoHeading: {
    width: "100%",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "16px",
  },
  infoPara: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "8px",
  },
  emailInput: {
    width: "315px",
    marginTop: "32px",
    height: "56px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
  },
  emailPlaceholder: {
    color: "#94A3B8",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
  },
  formBtn: {
    width: "250px",
    padding: "10px 32px 10px 32px",
    backgroundColor: "#E11B23",
    borderRadius: "8px",
    color: "#ffffff",
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "19.2px",
    height: "56px",
    marginTop: "32px",
  },
  footerHr: {
    backgroundColor: "#E2E8F0",
    height: "0.5px",
    // border: "none",
    margin: "0.5px 0px",
  },
  secondPara: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#ffffff",
  },
};
