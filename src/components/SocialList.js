import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  console.log(socialInfo);
  return (
    <React.Fragment>
      <ListGroup>
        {socialInfo.ContentList.map((item, index) => (
          <ListGroup.Item key={index}>
            <Button href={item.href}>
              {socialInfo.IconList[index]} {item.text}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    socialInfo: getSocialInfo(),
  };
};

export default connect(mapStateToProps)(SocialList);
