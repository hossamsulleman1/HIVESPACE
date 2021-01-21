import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Icon, InlineIcon } from "@iconify/react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  social: {
    width: "100px;",
    height: "100px;",
    paddingRight: 5,
  },
  paper: {
    padding: theme.spacing(2),
    width: "180px",
    height: "90px",
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  SocialIcon: {
    margin: "10px",
  },
}));

function SocialCard() {
  const classes = useStyles();

  return (
    <div className="flexboxCenterWrap">
      {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
> */}
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      <SocialIcon
        className={classes.SocialIcon}
         url="https://instagram.com/placeholder810?r=nametag" 
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.linkedin.com/in/hossam-sulleman-42712217a/"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.instagram.com/hs.su017/"
        bgColor="#ff5a01"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://github.com/hossamsulleman1"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.youtube.com/channel/UCs-z4pyYHo9qXJxgWtYfSCQ"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://soundcloud.com/jhb-bbf"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      <SocialIcon
        className={classes.SocialIcon}
        url="https://www.snapchat.com/add/placeholder810"
      />
      {/* 
</Grid> */}
    </div>
  );
}

export default SocialCard;
