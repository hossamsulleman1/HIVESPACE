import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import FriendsAvatarList from "./FriendsAvatarList";
import { useContext } from "react";
import { SemContext } from "../SemContext";
import FaceIcon from "@material-ui/icons/Face";
import BottomAppBar from "../BottomBar";
import ChipSet from "../ChipSet";
import SocialCard from "../SocialCard";
import UserChip from "../UserChip";

const useStyles = makeStyles((theme) => ({
  divider: {
    color: "black",
    // background,color : 'black'
  },
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  typography: {
    h6: {
      // ipad / phone
      fontWeight: 900,
      fontSize: 60,
      fontFamily: ["Inter", "sans-serif"].join(","),
      [theme.breakpoints.down("sm")]: {
        fontSize: 60,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 100,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 130,
      },
    },
    h4: {
      // desktop pc
      fontWeight: 900,
      fontSize: 90,
    },
    h5: {
      fontWeight: 900,
      fontSize: 30,
    },
  },
}));

function Responsive(props) {
  const classes = useStyles();

  return (
    <Container>
      <div>
        {/* king div */}

        <Grid container>
          <Grid item sm={6} xs={12}>
            {/* name grid */}
            <p className="HomeTitleSmall">ONE AND ONLY,</p>
            {/* home title is 100px and should be used on xl displays */}
            <Typography className={classes.}variant="h6">{props.Name}</Typography>
            {/* <p>UUID: 34702-324801</p> */}
            {/* make uuid modal in bottom bar not bottom bar on connect page show users uuid and be like connect with someonje elses uuid  */}
          </Grid>

          <Grid item xs={12} sm={6}>
            {/* avatar grid  */}
            <ChipSet photoURL="https://lh3.googleusercontent.com/a-/AOh14Gh44yE770ieP78t8bjwveUFJR3ihG8mAcY2WA0pRg=s96-c"></ChipSet>
          </Grid>

          <Divider className={classes.divider}></Divider>

          <Grid item xs={12}>
            {/* social grid */}
            <div className="statsdiv">
              <p className="HomeTitleMedium"> Social Media</p>
            </div>
            <br></br>
            <br></br>

            <SocialCard></SocialCard>
            <br></br>
            {/* <Divider className={classes.divider}></Divider> */}

            <div className="statsdiv">
              <p className="HomeTitleMedium">Connect With</p>
              <br></br>
              <br></br>
              <div className="chipset">
                <UserChip></UserChip>
                <br></br>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Responsive;
