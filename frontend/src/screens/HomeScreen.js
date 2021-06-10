import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../data/products';

const HomeScreen = () => {
  return (
    <>
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1 className='text-center my-3 display-4'>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
