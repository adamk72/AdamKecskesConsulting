import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from '../hooks/useStyles';

export default function Showcase(props) {
  const classes = useStyles();
  const { titles } = props;

  return (
    <Paper
      className={classes.showcase}
      // style={{ backgroundImage: `url(${post.image})` }}
    >
      <div />
      <Grid container spacing={0} direction='row' justify='space-evenly'>
        <Grid item md={6}>
          <CardMedia
            className={classes.cardMedia}
            component='img'
            image='images/mrs_mcquaries_chair_sydney_australia.jpg'
            title='Image title'
          />
        </Grid>
        <Grid item md={4}>
          <div className={classes.showcaseContent}>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {titles.map((title) => (
                <>
                  <span className='showcaseTitle'>{title}</span>
                  <br />
                  <br />
                </>
              ))}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

Showcase.propTypes = {
  post: PropTypes.object,
};
