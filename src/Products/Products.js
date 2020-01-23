import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchProducts from './fetchProducts';
import { getProductsError, getProducts, getProductsPending } from './reducer';
import Spinner from '../UI/Spinner';
import ProductsList from './ProductsList';
import ErrorBoundary from '../UI/ErrorBoundary/ErrorBoundary';

const ErrorView = () => <div>ERROR</div>;
class Products extends Component {
  async componentDidMount() {
    const { fetchProducts } = this.props;

    try {
      await fetchProducts();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { pending, error, products } = this.props;
    console.log('');
    console.log({ pending, error, products });

    return (
      <ErrorBoundary>
        {pending ? <Spinner /> : <ProductsList products={products} />}
      </ErrorBoundary>
    );
  }
}

Products.propTypes = {
  error: PropTypes.bool,
  pending: PropTypes.bool,
  products: PropTypes.array,
  fetchProducts: PropTypes.func
};

const mapStateToProps = state => {
  return {
    error: getProductsError(state.productsReducer),
    products: getProducts(state.productsReducer),
    pending: getProductsPending(state.productsReducer)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => fetchProducts(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
