import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import GoogleAuth from "./FirebaseAuth/GoogleAuth";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
  },
  media: {
    height: 140,
  },
  div: {
    margin: 40,
  },
}));

function AuthPage() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div>
          <Typography gutterBottom variant="h5" component="h2">
            Now is the time to be connected.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Join hive today, give people the oportunity to explore.
          </Typography>
          {/* sign up button here */}
          <br />
          {/* <GoogleLogin></GoogleLogin> */}
          <GoogleAuth></GoogleAuth>
          <Typography variant="body2" color="textSecondary">
            Subject to the Google{" "}
            <Link href="https://policies.google.com/privacy?hl=en ">
              Privacy Policy{" "}
            </Link>{" "}
            and{" "}
            <Link href="https://policies.google.com/terms?hl=en">
              Terms of Service.
            </Link>
          </Typography>
        </div>
        <div>
          <CardMedia
            className={classes.media}
            image="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
            title="Semptia Login"
          />
        </div>
      </div>
    </Container>
  );
}

export default AuthPage;

// privacy policy
// https://policies.google.com/privacy?hl=en

// tos
// https://policies.google.com/terms?hl=en
