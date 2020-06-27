import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  return (
    <ButtonToolbar>
      <ButtonGroup className='mr-1'>
        {socialInfo.ContentList.map((item, index) => (
          <Button
            href={item.href}
            key={index}
            className={item.hideOnMobile ? 'd-none d-md-inline' : null}
          >
            {item.icon[0]} {item.text}{' '}
          </Button>
        ))}
      </ButtonGroup>
    </ButtonToolbar>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    socialInfo: dispatch(getSocialInfo()),
  };
};

export default connect(null, mapDispatchToProps)(SocialList);
