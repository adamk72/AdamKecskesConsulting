import React from 'react';
import Copyright from '../apis/Copyright';
import SocialList from '../components/SocialList';
const FooterContent = () => {
  return (
    <div className="container center">
      <h4>Contact</h4>
      <SocialList />
      <br />
      <Copyright />
      <br />

      <div className="d-none d-md-inline-block" style={{ marginTop: '1rem', fontSize: '.5rem' }}>
        Icons made by{' '}
        <a
          href='https://www.flaticon.com/authors/freepik'
          title='Freepik'
        >
          Freepik
              </a>{' '}
              &amp;{' '}
        <a href='https://creativemarket.com/eucalyp' title='Eucalyp'>
          Eucalyp
              </a>{' '}
              from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
              </a>{' '}
      </div>
    </div>
  );
};
export default FooterContent;
