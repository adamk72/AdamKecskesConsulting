import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { Image, Grid } from 'semantic-ui-react';

import useStyles from '../hooks/useStyles';

export default function Showcase(props) {
  const classes = useStyles();
  const { titles } = props;

  return (
    <Paper className={classes.showcase}>
      <div />
      <Grid column={14} stackable>
        <Grid.Column width={7} style={{ marginLeft: '10px' }}>
          <Image src='images/mrs_mcquaries_chair_sydney_australia.jpg' />
        </Grid.Column>
        <Grid.Column width={7} style={{ paddingTop: '80px' }}>
          {titles.map((title) => (
            <>
              <span className='showcaseTitle'>
                <p>{title}</p>
              </span>
            </>
          ))}
        </Grid.Column>
      </Grid>
    </Paper>
  );
}

Showcase.propTypes = {
  post: PropTypes.object,
};
