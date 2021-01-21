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

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item sm={3}>
          {/* doesnt squish on ipad squish on iphone x fix avatar ect */}
          <SocialIcon url="https://instagram.com/placeholder810?r=nametag" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>LinkedIn</p>
        <div className='floatright'>
            
        <Icon icon={linkedinIcon} />
</div>
    </Paper> */}
        </Grid>
        <Grid item sm={3}>
          <SocialIcon url="https://www.snapchat.com/add/placeholder810" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Discord</p>
        <div className='floatright'>
            
        <Icon icon={discordIcon} />
</div> */}
          {/* </Paper> */}
        </Grid>
        <Grid item sm={3}>
          <SocialIcon url="https://www.linkedin.com/in/hossam-sulleman-42712217a/" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Instagram</p>
        <div className='floatright'>
            
        <Icon icon={instagramIcon} />
</div>
    </Paper> */}
        </Grid>
        <Grid item sm={3}>
          <SocialIcon
            url="https://www.instagram.com/hs.su017/"
            bgColor="#ff5a01"
          />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Snapchat</p>
        <div className='floatright'>
            
        <Icon icon={snapchatIcon} />
</div>
    </Paper> */}
        </Grid>
        <Grid item sm={3}>
          <SocialIcon url="https://github.com/hossamsulleman1" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>
        <Grid item sm={3}>
          <SocialIcon url="https://www.youtube.com/channel/UCs-z4pyYHo9qXJxgWtYfSCQ" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>

        <Grid item sm={3}>
          <SocialIcon url="https://soundcloud.com/jhb-bbf" />

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>

        <Grid item sm={3}>
          {/* <SocialIcon url="http://linkedin.com/in/jaketrent" /> */}

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>

        <Grid item sm={3}>
          {/* <SocialIcon url="http://linkedin.com/in/jaketrent" /> */}

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>

        <Grid item sm={3}>
          {/* <SocialIcon url="http://linkedin.com/in/jaketrent" /> */}

          {/* <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper> */}
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={4}>
        <Grid container item alignItems="center" xs={12} spacing={2}>
          <FormRow />
        </Grid>
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
      </Grid>
    </div>
  );
}

export default SocialCard;
