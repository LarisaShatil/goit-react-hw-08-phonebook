import React from 'react';
import { Helmet } from 'react-helmet';
import HeroImage from '../components/HeroImage/HeroImage';



const styles = {
  container: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    fontSize: '2rem',
    textAlign: 'center',
    backgroundImage: 'radial-gradient(ellipse, #a355d3, #eb4c54)',
    color: 'transparent',
    backgroundClip: 'text',
    WebkitBackgroundClip:'text',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <Helmet>
      <title>Main</title>
    </Helmet>
    <div style={styles.box}>
      <h1 style={styles.title}>
        Welcome to the Phonebook!
      </h1>
      <HeroImage />
    </div>

  </div>
);

export default HomeView;