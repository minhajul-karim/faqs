import { Button, Container } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import contactUsBg from "./contact_us_bg.png";

export default function ContactUs() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.contactUsContainer}>
      <section className={classes.contactUsSection}>
        <h2 className={classes.contactUsTitle}>Didn’t find an answer?</h2>
        <p className={classes.contactUsDescription}>
          Our team is just an email away and ready to answer your questions!
        </p>
        <Button variant="contained" className={classes.primaryBtn}>
          contact us
        </Button>
      </section>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactUsContainer: {
      maxWidth: 1440,
      backgroundImage: `url(${contactUsBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    contactUsSection: {
      padding: "100px 0",
      textAlign: "center",
    },
    contactUsTitle: {
      color: "#231F20",
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "-0.12px",
    },
    contactUsDescription: {
      color: "#231F20",
      fontFamily: "Montserrat",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "28px",
    },
    primaryBtn: {
      width: "250px",
      height: "56px",
      padding: "10px 32px",
      borderRadius: "8px",
      background: "#E11B23",
      color: "#FFF",
      fontFamily: "Montserrat",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "24px",
      textTransform: "uppercase",
      marginTop: 20,
      boxShadow:
        " 0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
      "&:hover": {
        background: "#E11B23",
      },
    },
  })
);
