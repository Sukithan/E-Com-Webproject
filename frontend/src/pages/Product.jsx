import React from 'react';
import { useParams } from 'react-router-dom';
import Product1 from '../components/Product1';
import Product2 from '../components/Product2';
import Product3 from '../components/Product3';
import Product4 from '../components/Product4';
import Product5 from '../components/Product5';
import Product6 from '../components/Product6';
import Product7 from '../components/Product7';
import Product8 from '../components/Product8';
import Product9 from '../components/Product9';

const Product = () => {
  const { id } = useParams();

  return (
    <>
      {id === '1' && <Product1 />}
      {id === '2' && <Product2 />}
      {id === '3' && <Product3 />}
      {id === '4' && <Product4 />}
      {id === '5' && <Product5 />}
      {id === '6' && <Product6 />}
      {id === '7' && <Product7 />}
      {id === '8' && <Product8 />}
      {id === '9' && <Product9 />}
      {/* {id === '2' && <Product2 />} */}
      {/* Add conditions for more products */}
    </>
  );
};

export default Product;
