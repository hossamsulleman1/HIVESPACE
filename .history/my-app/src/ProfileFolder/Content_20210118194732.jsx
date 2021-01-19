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
}));

function Content(props) {
  const classes = useStyles();
  // const [authInfo , setAuthInfo] = useContext(SemContext)
  return (
    <Container>
      <BottomAppBar></BottomAppBar>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className="headingdiv">
            <p className="HomeTitleSmall">HEY WHATS UP,</p>
            <Typography variant='h6' className="HomeTitle">{props.Name}</Typography>
            {/* <p >{props.Name}</p> */}
          </div>

          <Divider className={classes.divider}></Divider>
          {/* change to black divider */}
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
        <Grid justify="flex-start" item xs={6}>
          <div className="avatardiv">
            {/* <Avatar className={classes.large} src={props.photoURL}>
              <FaceIcon></FaceIcon>
            </Avatar>
            <br/>
<br/> */}
            <div className="flexbox">
              <ChipSet></ChipSet>
            </div>

            <div className="friendsdiv">
              <div className="justifycenter">
                <Divider className={classes.divider}></Divider>

                <p className="SubHeading">ALL FRIENDS</p>
                <Divider className={classes.divider}></Divider>
                <br></br>
                <Button>Add Friends</Button>
              </div>

              <div className="friendsdiv2">
                <Container>
                  <FriendsAvatarList></FriendsAvatarList>
                </Container>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

     
    </Container>
  );
}

export default Content;
