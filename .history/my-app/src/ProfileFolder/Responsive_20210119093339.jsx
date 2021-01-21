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

        <Grid item sm={6} xs={12}>
            {/* name grid */}
            <p className="HomeTitleSmall">HEY WHATS UP,</p>
            {/* home title is 100px and should be used on xl displays */}
            <Typography variant="h6" className="HomeTitle">
              {props.Name}
            </Typography>
        </Grid>
 
        <Grid item sm>
              {/* avatar grid  */}
         <div>
             <div>


             </div>
             div
         </div>
          </Grid>
 
 
  <Divider className={classes.divider}></Divider>

          <Grid item sm>
              {/* social grid */}

          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Responsive;
