import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../hooks/useStyles';

const Header = () => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Header
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
