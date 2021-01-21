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
import FriendsAvatarList from "./ProfileFolder/FriendsAvatarList";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  chip: {
    padding: theme.spacing(2),
    margin: "5px",
    marginTop: "30px",
    marginBottom: "30px",
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
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ChipSet(props) {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Trying to get a phone call?</h2>
      <p id="simple-modal-description">07738646154</p>
    </div>
  );

  return (
    <div>
      <br />
      <br />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Grid container direction="column" justify="center" alignItems="center">
        {/* <Grid item xs={12}> */}
        <Avatar className={classes.large} src={props.photoURL} />
        {/* </Grid>
        <Grid item xs={12}> */}
        <div>
          <Chip
            className={classes.chip}
            variant="outlined"
            size="large"
            // avatar={<Avatar>M</Avatar>}
            icon={CallIcon}
            label="Call Now"
            onClick={handleOpen}
          />
          <Chip
            className={classes.chip}
            variant="outlined"
            size="large"
            // avatar={<Avatar>M</Avatar>}
            icon={CallIcon}
            label="Connect"
            // go to another page where users do all that
            // onClick={handleClick}
          />
        </div>
        <FriendsAvatarList></FriendsAvatarList>
        {/* </Grid> */}
      </Grid>
    </div>
  );
}

export default ChipSet;
