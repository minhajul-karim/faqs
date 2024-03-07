import { Container, InputAdornment, TextField } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

export default function FaqSearch() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <TextField
        fullWidth
        id="outlined-basic"
        variant="outlined"
        placeholder="How can we help you?"
        className={classes.textFiled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: "#94A3B8" }} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textFiled: {
      marginTop: 100,
      borderRadius: "8px",
      border: "1px solid #CBD5E1",
      background: "#FFF",
      boxShadow:
        "0px 8px 32px 0px rgba(0, 0, 0, 0.06), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
    },
  })
);
