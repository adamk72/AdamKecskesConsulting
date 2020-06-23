import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  return (
    <ListGroup>
      {socialInfo.ContentList.map((item, index) => (
        <ListGroup.Item key={index}>
          <Button href={item.href}>
            {item.icon[0]} {item.text}{' '}
            {/*had to add index to item.icon lest the compiler think it's an arry to be keyd*/}
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    socialInfo: dispatch(getSocialInfo()),
  };
};

export default connect(null, mapDispatchToProps)(SocialList);
