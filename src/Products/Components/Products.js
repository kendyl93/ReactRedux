import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ProductsList from './ProductsList';
import ErrorBoundary from '../../UI/Error/ErrorBoundary';
import LoadingOrError from '../../UI/LoadingOrError';

const Products = ({ fetchProducts, pending, error, products }) => {
  const maybeProductsFetched = !pending && products;

  useEffect(() => {
    if (maybeProductsFetched || error) {
      return;
    }

    try {
      fetchProducts();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  });

  const view = maybeProductsFetched ? (
    <ProductsList products={products} />
  ) : (
    <LoadingOrError error={error} />
  );

  return <ErrorBoundary>{view}</ErrorBoundary>;
};

Products.propTypes = {
  error: PropTypes.bool,
  pending: PropTypes.bool,
  products: PropTypes.array,
  fetchProducts: PropTypes.func
};

export default Products;
