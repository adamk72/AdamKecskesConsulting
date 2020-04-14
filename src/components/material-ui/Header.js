import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../hooks/useStyles';

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <header>
      <AppBar position='relative'>
        <Toolbar>
          <AccountCircleIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
