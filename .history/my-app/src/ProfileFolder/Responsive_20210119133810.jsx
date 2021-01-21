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

function Responsive(props) {
  const classes = useStyles();

  return (
    <Container>
      <BottomAppBar></BottomAppBar>
      <div>
        {/* king div */}

        <Grid>

            <div>

            </div>
      
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
