import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProducts from './fetchProducts';
import { getProductsError, getProducts, getProductsPending } from './reducer';
import Spinner from '../UI/Spinner';
import ProductsList from './ProductsList';
import ErrorBoundary from '../UI/ErrorBoundary/ErrorBoundary';

class Products extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;

    try {
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { pending, error, products } = this.props;

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

const mapStateToProps = state => ({
  error: getProductsError(state.productsReducer),
  products: getProducts(state.productsReducer),
  pending: getProductsPending(state.productsReducer)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
