import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg001.jpg'), position: 'center' },
    { url: require('../assets/images/bg002.jpg'), position: 'center' },
    { url: require('../assets/images/bg003.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
