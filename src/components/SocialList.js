import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  return (
    <React.Fragment>
      <ListGroup>
        {socialInfo.ContentList.map((item, index) => (
          <ListGroup.Item key={index}>
            <Button href={item.href}>
              {item.icon} {item.text}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    socialInfo: dispatch(getSocialInfo()),
  };
};

export default connect(null, mapDispatchToProps)(SocialList);
