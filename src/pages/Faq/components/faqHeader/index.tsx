import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import faqHeaderBg from "./faq_header_bg.png";

export default function FaqHeader() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Wingo's FAQs</h1>
    </header>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      height: 400,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${faqHeaderBg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      position: "relative",
      zIndex: 100,
    },
    title: {
      color: "#FFF",
      fontFamily: '"Kaushan Script"',
      fontSize: "70px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "90px",
      letterSpacing: "-1.05px",
    },
  })
);
