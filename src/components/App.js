import React, { useEffect, useState, useCallback } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from '../hooks/useStyles';

import Navigation from './Navigation';
import Footer from './Footer';
import Aside from './Aside';
import Showcase from './Showcase';
import Callout from './Callout';
import Feature from './Feature';
import Main from './Main';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import post1 from '../blog-post.1.md';
import post2 from '../blog-post.2.md';
import post3 from '../blog-post.3.md';
const rawMdPosts = [post1, post2, post3];

const sections = [
  { title: 'Blog', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'About', url: '#' },
];
const titles = [
  'Operational Optimizer',
  'Software Architect',
  'Entropy Manager',
];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];
const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [doneWithPosts, setDoneWithPosts] = useState(false);

  const fetchPosts = useCallback(() => {
    if (!doneWithPosts) {
      fetch(rawMdPosts[posts.length])
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else return Promise.reject("Didn't fetch text correctly");
        })
        .then((text) => {
          if (posts.length === rawMdPosts.length - 1) {
            setDoneWithPosts((d) => (d = true));
          } else {
            setPosts([...posts, text]);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [posts, doneWithPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <CssBaseline />
        <Navigation title='Adam Kecskes Consulting' sections={sections} />
        <main>
          <Showcase titles={titles} />
          <Callout />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <Feature key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='From the firehose' posts={posts} />
            <Aside
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
        <Footer />
      </Container>
    </React.Fragment>
  );
}
