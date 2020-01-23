import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from './fetchProducts';
import { getProductsError, getProducts, getProductsPending } from './reducer';
import Spinner from '../UI/Spinner';

import ProductsList from './ProductsList';

const ErrorView = () => <div>ERROR</div>;

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestPending: null,
      requestFailed: null,
      products: []
    };
  }

  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { error, pending, products } = nextProps;

    this.setState({
      requestPending: pending,
      requestFailed: error,
      products
    });
  }

  render() {
    const { requestPending, requestFailed, products } = this.state;

    return requestFailed ? (
      <ErrorView />
    ) : requestPending === true ? (
      <Spinner />
    ) : (
      <div className="product-list-wrapper">
        <ProductsList products={products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({ state });
  return {
    error: getProductsError(state.productsReducer),
    products: getProducts(state.productsReducer),
    pending: getProductsPending(state.productsReducer)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => fetchProductsAction(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
