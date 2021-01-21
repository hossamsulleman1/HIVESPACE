import React from "react";
import CallIcon from "@material-ui/icons/Call";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import Chip from "@material-ui/core/Chip";
import "./Css/CssCustom.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
// import BottomAppBar from "../BottomBar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  chip: {
    padding: theme.spacing(2),
    margin: "5px",
  },
  paper: {
    paddingBottom: 50,
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

function ChipSet(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <Avatar className={classes.large} src={props.photoURL} />
        </Grid>
        <Grid item xs={12}>
        <Chip className={classes.chip}
        variant="outlined"
        size="large"
        // avatar={<Avatar>M</Avatar>}
        icon={CallIcon}
        label="Call Now"
        // onClick={handleClick} 
         />
        </Grid>
      </Grid>
    </div>

    /* <Grid item xs={12}>

<Avatar className={classes.large} 
//  src={props.photoURL}
 >
              <FaceIcon></FaceIcon>
            </Avatar>


</Grid>

<Grid item xs={12>
  <Chip className={classes.chip}
        variant="outlined"
        size="large"
        // avatar={<Avatar>M</Avatar>}
        icon={CallIcon}
        label="Call Now"
        // onClick={handleClick} 
         />
 </Grid>

     

      */
  );
}

export default ChipSet;
