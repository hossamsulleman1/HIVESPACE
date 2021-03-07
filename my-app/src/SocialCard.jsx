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
    <Grid
      container
      justify="space-evenly"
      alignItems="flex-start"
      alignContent="flex-start"
      direction="row"
    >
      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://www.snapchat.com/add/placeholder810"
        />
      </Grid>

      

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://www.linkedin.com/in/hossam-sulleman-42712217a/"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://www.instagram.com/hs.su017/"
          bgColor="#ff5a01"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://github.com/hossamsulleman1"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://www.youtube.com/channel/UCs-z4pyYHo9qXJxgWtYfSCQ"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://soundcloud.com/jhb-bbf"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://open.spotify.com/user/4a64ax9sdwc6x3w7zi3f319ey?si=tepnH7ImTbCYPt7OQ9MbKQ"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://twitter.com/horrors03353220"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="https://www.facebook.com/hossam.sulleman.5"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url=" https://wa.me/07738646154"
          network="whatsapp"
        />
      </Grid>

      <Grid>
        <SocialIcon
          className={classes.SocialIcon}
          url="mailto:hossamsulleman@gmail.com"
        />
      </Grid>
    </Grid>
  );
}

export default SocialCard;
