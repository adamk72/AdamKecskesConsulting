import { GET_SOCIAL_INFO } from './actionTypes';
import React from 'react';
import { FaAt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

export function getSocialInfo() {
  // this is static date; in the future I may bind it to something more dynamic.
  const payload = {
    IconList: [<FaAt />, <FaGithub />, <FaLinkedin />, <FaPhone />],
    ContentList: [
      {
        href:
          'mailto://adam@kecskes.net?subject=Business%20Inquiry%20from%20Website',
        icon: 'FaAt',
        text: 'Email',
      },
      {
        href: 'https://github.com/adamk72',
        icon: null,
        text: 'GitHub',
      },
      {
        href: 'https://linkedin.com/in/adamkecskes/',
        icon: null,
        text: 'LinkedIn',
      },
      {
        href: 'tel://512-662-2969',
        icon: null,
        text: '512-662-2969',
      },
    ],
  };
  return { type: GET_SOCIAL_INFO, payload };
}
