import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from '../hooks/styles';

import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import ContentCard from './ContentCard';
import Showcase from './Showcase';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sections = [
  { title: 'Blog', url: '#' },
  { title: 'Projects', url: '#' },
  { title: 'About', url: '#' },
];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Navigation title='Adam Kecskes Consulting' sections={sections} />
      <main>
        <Showcase />
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ContentCard />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Aside />
      </main>
      <Footer />
    </React.Fragment>
  );
}
