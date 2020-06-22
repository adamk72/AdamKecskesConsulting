import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FaAt, FaGithub, FaPhone, FaLinkedin } from 'react-icons/fa';
import { getSocialInfo } from '../actions';

const SocialList = ({ socialInfo }) => {
  return (
    <React.Fragment>
      <ListGroup>
        {socialInfo.payload.map((item, index) => (
          <ListGroup.Item key={index}>
            <Button href={item.href}>{item.text}</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    socialInfo: getSocialInfo(),
  };
};

export default connect(mapStateToProps)(SocialList);
