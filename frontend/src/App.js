import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3 px-2'>
        <Container fluid>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
