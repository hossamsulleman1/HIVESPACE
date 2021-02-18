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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function LoginPage() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Happening now
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Welcome home, or to your new home.
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
        {/* hyper link terms of service and that jsut go on adobe where they use google auth and link
         */}
      </CardContent>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Semptia Login"
      />
      {/* foooter */}
    </Card>
  );
}

export default AuthPage;

// privacy policy
// https://policies.google.com/privacy?hl=en

// tos
// https://policies.google.com/terms?hl=en
