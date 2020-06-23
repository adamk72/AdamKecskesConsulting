import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  return (
    <ButtonToolbar>
      {socialInfo.ContentList.map((item, index) => (
        <ButtonGroup className='mr-1' key={index}>
          <Button href={item.href}>
            {item.icon[0]} {item.text}{' '}
            {/*had to add index to item.icon lest the compiler think it's an arry to be keyd*/}
          </Button>
        </ButtonGroup>
      ))}
    </ButtonToolbar>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    socialInfo: dispatch(getSocialInfo()),
  };
};

export default connect(null, mapDispatchToProps)(SocialList);
