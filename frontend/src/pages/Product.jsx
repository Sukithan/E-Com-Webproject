import React from 'react';
import { useParams } from 'react-router-dom';
import Product1 from '../products/Product1';
import Product2 from '../products/Product2';
import Product3 from '../products/Product3';
import Product4 from '../products/Product4';
import Product5 from '../products/Product5';
import Product6 from '../products/Product6';
import Product7 from '../products/Product7';
import Product8 from '../products/Product8';
import Product9 from '../products/Product9';
import Product10 from '../products/Product10';

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
      {id === '10' && <Product10 />}
      {/* {id === '2' && <Product2 />} */}
      {/* Add conditions for more products */}
    </>
  );
};

export default Product;
