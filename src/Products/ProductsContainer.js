import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProducts from './fetchProducts';
import { getProductsError, getProducts, getProductsPending } from './reducer';
import Products from './Components/Products';

const mapStateToProps = state => ({
  error: getProductsError(state.productsReducer),
  products: getProducts(state.productsReducer),
  pending: getProductsPending(state.productsReducer)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
