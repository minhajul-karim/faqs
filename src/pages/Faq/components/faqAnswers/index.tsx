import { Container } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import FaqSearch from "../faqSearch";

export default function FaqAnswers() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.categoriesContainer}>
      <FaqSearch />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores
        quibusdam natus, id aut ratione obcaecati aperiam, repellendus dolor
        quos est dolore officiis. Natus, laboriosam nemo excepturi animi quia
        facilis.
      </p>
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoriesContainer: {
      maxWidth: 1440,
      color: "white",
      marginTop: "-55px",
    },
  })
);
