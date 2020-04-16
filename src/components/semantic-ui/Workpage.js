import React, { useState, useEffect, useCallback } from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Markdown from '../../apis/Markdown';
import importedContent from '../../content/blog-post.1.md';
import { Container } from 'semantic-ui-react';

const Workpage = () => {
  const [content, setContent] = useState('');

  const fetchContent = useCallback((readmePath) => {
    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setContent(text);
      });
  }, []);

  useEffect(() => {
    fetchContent(importedContent);
  }, [fetchContent]);

  return (
    <ResponsiveContainer>
      <Container>
        <Markdown>{content}</Markdown>
      </Container>
    </ResponsiveContainer>
  );
};

export default Workpage;
