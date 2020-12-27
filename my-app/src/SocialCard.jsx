 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify-icons/simple-icons/facebook';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import snapchatIcon from '@iconify-icons/simple-icons/snapchat';
import instagramIcon from '@iconify-icons/simple-icons/instagram';
import discordIcon from '@iconify-icons/simple-icons/discord';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    width : '180px',
    height : '90px',
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 function SocialCard() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
        <p className='SubHeading'>LinkedIn</p>
        <div className='floatright'>
            
        <Icon icon={linkedinIcon} />
</div>
    </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className='SubHeading'>Discord</p>
        <div className='floatright'>
            
        <Icon icon={discordIcon} />
</div>
    </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className='SubHeading'>Instagram</p>
        <div className='floatright'>
            
        <Icon icon={instagramIcon} />
</div>
    </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className='SubHeading'>Snapchat</p>
        <div className='floatright'>
            
        <Icon icon={snapchatIcon} />
</div>
    </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper>
    
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <p className='SubHeading'>Facebook</p>
        <div className='floatright'>
            
        <Icon icon={facebookIcon} />
</div>
    </Paper>
    
        </Grid>

      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
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

