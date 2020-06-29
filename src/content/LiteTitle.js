import React from 'react';
import PropTypes from 'prop-types';
import SocialList from '../components/SocialList';

const LiteTitle = ({ mobile }) => (
  <div className='liteTitle'>
    <h1>Adam Kecskes</h1>
    <SocialList />
  </div>
);

LiteTitle.propTypes = {
  mobile: PropTypes.bool,
};

export default LiteTitle;
