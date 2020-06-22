import React from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FaAt, FaGithub, FaPhone, FaLinkedin } from 'react-icons/fa';

const SocialList = ({ items }) => {
  return (
    <React.Fragment>
      <ListGroup>
        <ListGroup.Item>
          <Button href='mailto://adam@kecskes.net?subject=Business%20Inquiry%20from%20Website'>
            <FaAt /> Email
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button href='https://github.com/adamk72'>
            <FaGithub /> GitHub
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button href='https://linkedin.com/in/adamkecskes/'>
            <FaLinkedin />
            LinkedIn
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button href='tel://512-662-2969'>
            <FaPhone /> 512-662-2969
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    socialInfo: state.socialInfo,
  };
};

export default connect(mapStateToProps)(SocialList);
