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
}));

function SocialCard() {
  const classes = useStyles();


  

  return (
    // <div className={classes.root}>
    //   <Grid container alignItems="center" spacing={4}>
    //     <Grid container item alignItems="center" xs={12} spacing={2}>
    //       <FormRow />
    //     </Grid>
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
        {/* <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid> */}
    //   </Grid>
    // </div>

<div>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />
<SocialIcon url="https://www.snapchat.com/add/placeholder810" />

</Grid>
</div>

  );
}

export default SocialCard;
