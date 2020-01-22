import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchProductsAction from './fetchProducts';
import { getProductsError, getProducts, getProductsPending } from './reducer';
import Spinner from '../UI/Spinner';

import ProductsList from './ProductsList';

class Products extends Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      requestSuccessful: undefined,
      requestPending: undefined,
      requestFailed: undefined,
      products: []
    };
  }

  componentWillMount() {
    console.log({ AAAA: this.props });
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  // shouldComponentRender() {
  //   const { pending } = this.props;
  //   if (this.pending === false) return false;
  //   // more tests
  //   return true;
  // }
  componentWillReceiveProps(nextProps) {
    console.log({ nextProps });
    this.setState({
      requestSuccessful: nextProps.success,
      requestPending: nextProps.pending,
      requestFailed: nextProps.error,
      products: nextProps.products
    });
  }

  render() {
    const {
      requestSuccessful,
      requestPending,
      requestFailed,
      products
    } = this.state;
    console.log({ STSTSTSTSTST: this.state, PRPRPRPRPR: this.props });

    if (requestPending === undefined) return <Spinner />;

    return (
      <div className="product-list-wrapper">
        {requestFailed && <span className="product-list-error">{error}</span>}
        {products && <ProductsList products={products} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log({ stateA: state.productsReducer });
  return {
    error: getProductsError(state.productsReducer),
    products: getProducts(state.productsReducer),
    pending: getProductsPending(state.productsReducer)
  };
};

const mapDispatchToProps = dispatch => {
  // debugger;
  return { fetchProducts: () => fetchProductsAction(dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
