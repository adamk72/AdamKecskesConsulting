import React from 'react';
import Copyright from '../apis/Copyright';
import Typography from '@material-ui/core/Typography';
import useStyles from '../hooks/styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography
        variant='subtitle1'
        align='center'
        color='textSecondary'
        component='p'
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;