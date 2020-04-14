import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../hooks/useStyles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Showcase2 = () => {
  const classes = useStyles();
  return (
    <div className={classes.showcaseContent}>
      <Container maxWidth='sm'>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          Showcase Type 2
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <div className={classes.showcaseButtons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Showcase2;