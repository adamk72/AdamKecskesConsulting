import React from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

const options = {
  overrides: {},
};

export default function Markdown(props) {
  return <MarkdownToJsx options={options} {...props} />;
}
