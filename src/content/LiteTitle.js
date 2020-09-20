import React from 'react';
import PropTypes from 'prop-types';
import SocialList from '../components/SocialList';

const LiteTitle = ({ mobile, title = "Adam Kecskes", showSocialList = true }) => (
  <div className='liteTitle'>
    <h1>{title}</h1>
    {showSocialList ?
      <SocialList /> : null}
  </div>
);

LiteTitle.propTypes = {
  mobile: PropTypes.bool,
};

export default LiteTitle;
