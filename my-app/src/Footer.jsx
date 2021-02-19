import React from "react";
import Grid from "@material-ui/core/Grid";

function Footer() {
  return (
    <Grid container>
      <Grid item xs={12}>
        {/* logo with text */}
      </Grid>

      <Grid item xs={12}>
        <p>COMPANY</p>
      </Grid>

      <Grid item xs={12}>
        <p>COMMUNITIES</p>
      </Grid>

      <Grid item xs={12}>
        <p>USEFUL LINKS </p>
      </Grid>

      <Grid item xs={0} md={2}>
       {/* whitespace */}
      </Grid>

      <Grid item xs={12}>
        {/* social logos */}
      </Grid>

      <p>© 2021 Semptia UK</p>
    </Grid>
  );
}

export default Footer;

// copy this footer https://www.spotify.com/uk/
