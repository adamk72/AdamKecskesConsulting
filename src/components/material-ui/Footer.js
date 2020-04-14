import React from 'react';
import Copyright from '../../apis/Copyright';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../hooks/useStyles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        <span className='navigation'>Adam Kecskes Consulting</span>
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        Dare Mighty Things.
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
