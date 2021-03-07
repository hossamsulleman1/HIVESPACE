import React from "react";
import Grid from "@material-ui/core/Grid";
import TunedCard from "./TunedCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "90px",
  },
}));

const TunedGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={20}
        alignContent="center"
        alignItems="center"
        wrap="flex-wrap"
      >
        <Grid xs={12} md={4} sm={6}>
          <TunedCard
            logo="https://images.squarespace-cdn.com/content/v1/5c8fa167f4e5317be304dce3/1579455262572-PSF4QAZP3D0JL8ZMI521/ke17ZwdGBToddI8pDm48kHldqyjDwaeS7kYSmaCmglZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmxIv-U8QkF7Aqck8oUqvfAAOvy8DUzW3k1lLKw2Wu7uCpNBpi2q7oKJPU7loduYjD/Mind+Logo.PNG"
            image="https://www.mind.org.uk/media-a/4018/cropped-logo.png"
            description="Running 27 miles in 27 days for the mental health charity all donations are welcome"
            link="https://givepenny.com/hossam_sulleman_27_27"
          />
        </Grid>

        <Grid xs={12} md={4} sm={6}>
          <TunedCard
            description="New music avaible now follow the link bellow to stream all is appreciated <3 "
            image="https://i1.sndcdn.com/artworks-L0W7CMzUxX2kqzWJ-HUD3zA-t500x500.jpg"
            logo="https://mpng.subpng.com/20190609/ibv/kisspng-logo-font-brand-clip-art-trademark-francesco-tristano-contact-5cfda0624d6629.175959541560125538317.jpg"
            link="https://soundcloud.com/jhb-bbf"
          />
        </Grid>

        <Grid xs={12} md={4} sm={6}>
          <TunedCard
            description="Enquire for website developement and network & web app security "
            logo="https://media.discordapp.net/attachments/723843651071115324/801758994015322132/apple-touch-icon.png"
            image="https://media.discordapp.net/attachments/723843651071115324/817092041539321910/unknown.png"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TunedGrid;
