import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  asideAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  asideSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Aside(props) {
  const classes = useStyles();
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.asideAboutBox}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant='h6' gutterBottom className={classes.asideSection}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display='block'
          variant='body1'
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
      <Typography variant='h6' gutterBottom className={classes.asideSection}>
        Social
      </Typography>
      {social.map((network) => {
        return (
          <Link display='block' variant='body1' href='#' key={network.name}>
            <Grid container direction='row' spacing={1} alignItems='center'>
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        );
      })}
    </Grid>
  );
}

Aside.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
