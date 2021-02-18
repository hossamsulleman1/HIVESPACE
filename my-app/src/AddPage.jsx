import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingBottom: 50,
  },
}));

function AddPage(props) {
  const classes = useStyles();
  return (
    <div className="CenterBox">
      <Paper variant="outlined" className={classes.Paper}>
        <Grid item container>
          <Grid item xs={12} sm={6}>
            <p>add using uuid</p>

            <p>add using qr code</p>
            {/* qr code  */}
            {/* qr code for link with params of uuid  */}
          </Grid>

          <Grid item xs={12} sm={6}>
            <p>Add by logging in ?</p>

            <p>dont have a account ?</p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default AddPage;
