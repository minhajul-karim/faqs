import { Container, Grid } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import FaqSearch from "../faqSearch";
import cardBg from "./card_bg.png";
import chickenLegImg from "./chicken_leg.png";
import creditCardImg from "./credit_card.png";
import foodImg from "./food.png";
import orderImg from "./order.png";
import personImg from "./person.png";
import restaurantImg from "./restaurant.png";
import sustainImg from "./sustainability.png";

export default function FaqCategories() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.categoriesContainer}>
      <FaqSearch />
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={5}
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={personImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Learn how to manage your account, update personal information,
              track orders
            </p>
          </div>
          {/* Cards end */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={creditCardImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Get to know everything about Wingo’s gift Cards , Discounts and
              Coupons
            </p>
          </div>
          {/* Cards end */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={restaurantImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Get to know everything about Wingo’s restaurants and franchise
            </p>
          </div>
          {/* Cards end */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={foodImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Explore our menu offerings and find essential allergen
              information.
            </p>
          </div>
          {/* Cards end */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={sustainImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Sustainability practices and initiatives at Wingo restaurants.
            </p>
          </div>
          {/* Cards end */}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* Cards start */}
          <div className={classes.cardContainer}>
            <img alt="person" src={orderImg} />
            <h2 className={classes.cardTitle}>My Account</h2>
            <p className={classes.cardDescription}>
              Learn about our collection and delivery options
            </p>
          </div>
          {/* Cards end */}
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoriesContainer: {
      maxWidth: 1440,
      backgroundImage: `url(${chickenLegImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "white",
      marginTop: "-55px",
    },
    gridContainer: {
      margin: "50px 0",
    },
    cardContainer: {
      maxWidth: "380px",
      height: "329px",
      borderRadius: "24px",
      border: "1px solid #4B4B4B",
      boxShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.20);",
      backdropFilter: "blur(25px)",
      backgroundImage: `url(${cardBg})`,
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      background:
        "linear-gradient(119deg, rgba(255, 255, 255, 0.40) -18.04%, rgba(255, 255, 255, 0.10) 116.16%)",
      textAlign: "center",
      padding: 30,
      boxSizing: "border-box",
    },
    cardTitle: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "32px",
      letterSpacing: "-0.12px",
    },
    cardDescription: {
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "26px",
    },
  })
);
