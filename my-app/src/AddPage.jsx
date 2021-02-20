import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import QRCode from "./QRCode";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import UUIDInput from "./UUIDInput";
import Fab from "@material-ui/core/Fab";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
    // marginRight: "10px",
  },
  Title: {
    margin: 40,
    fontSize: 60,
  },
  margin: {
    margin: 40,
  },
  subheader: {
    marginBottom: 10,
    marginTop: 40,
  },
  Button: {
    marginBottom: 10,
  },
  QRpaper: {
    paddingLeft: 15,
    paddingRight: 1,
    paddingBottom: 15,
    paddingTop: 20,
  },
  marginTop: {
    marginTop: 35,
    padding: 20,
    paddingLeft: 40,
    paddingRight:40,
  },
  FabAdd: {
    marginTop: 35,
    padding: 20,
    paddingLeft: 40,
    paddingRight:60,
  },
}));

function AddPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Grid container>
          <Grid item>
            {/* this is where the header will be  */}
            {/* nav ect */}
          </Grid>
          {/* grids can be items grids containers or both at the same time  */}
          <Grid item container>
            {/* on small screens this will take up 2 but on extra smnall screens this will take up 0 as specified   */}
            <Grid item xs={0} sm={2} />

            <Grid item xs={12} sm={8} md={10}>
              {/* this is where the content will be  */}
              {/* <Content/> */}

              <IconButton edge="end" color="inherit">
                <ArrowBackIcon></ArrowBackIcon>
              </IconButton>
              <Typography variant="h4" className={classes.Title}>
                Add Friends
              </Typography>

              <Grid item container>
                <Grid item className={classes.margin} xs={12}>
                  <Typography className={classes.subheader} variant="h4">
                    Using Unique ID
                  </Typography>

                  <UUIDInput></UUIDInput>

                  <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="add"
                    className={classes.FabAdd}
                  >
                    <GroupAddIcon></GroupAddIcon>
                    
                    <Typography className={classes.ButtonText}>
                    ADD
                    </Typography>

                    
                   
                  </Fab>

                  {/* qr code  */}
                  {/* qr code for link with params of uuid  */}

                  <Typography className={classes.subheader} variant="h4">
                    Add by logging in ?
                  </Typography>

                  <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="add"
                    className={classes.marginTop}
                  >
                    <VpnKeyIcon></VpnKeyIcon>

                    <Typography className={classes.ButtonText}>
                    Log in
                    </Typography>

                    
                  </Fab>

                  <Typography className={classes.subheader} variant="h4">
                    dont have a account ?
                  </Typography>

                  <Fab
                    variant="extended"
                    size="large"
                    color="primary"
                    aria-label="add"
                    className={classes.marginTop}
                  >
                    <FiberNewIcon></FiberNewIcon>

                    <Typography className={classes.ButtonText}>
                    Sign Up
                    </Typography>
                    
                  </Fab>
                </Grid>

                <Grid
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "100vh" }}
                  item
                  className={classes.margin}
                  xs={12}
                >
                  <Paper variant="outlined" className={classes.QRpaper}>
                    <Typography variant="h4">
                      {" "}
                      Scan me to add instantly. 🥶{" "}
                    </Typography>
                    <br />
                    <QRCode value="www.google.com" />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={0} sm={2} />
            {/* ^these xs 2 are for the side gutters on the app */}
          </Grid>
        </Grid>
        {/* <Footer></Footer> */}
      </Paper>
      <Footer></Footer>
    </div>
  );
}

export default AddPage;
