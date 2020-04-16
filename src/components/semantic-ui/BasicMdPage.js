import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Markdown from '../../apis/Markdown';
import { Container } from 'semantic-ui-react';

const BasicMdPage = ({ mdContent }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(mdContent)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setContent(text);
      });
  }, [mdContent]);

  return (
    <ResponsiveContainer>
      <Container>
        <Markdown>{content}</Markdown>
      </Container>
    </ResponsiveContainer>
  );
};

export default BasicMdPage;
