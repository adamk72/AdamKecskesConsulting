import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import Markdown from '../apis/Markdown';
import MainTitle from '../content/MainTitle'
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
      <MainTitle />
      <div className='basic-md-container'>
        <Markdown>{content}</Markdown>
      </div>
    </ResponsiveContainer>
  );
};

export default BasicMdPage;
