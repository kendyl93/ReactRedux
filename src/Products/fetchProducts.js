import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
  FETCH_PRODUCTS_PENDING
} from './actions';

const fetchProducts = dispatch => {
  console.log({ dispatch });
  dispatch(fetchProductsPending());
  fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then(res => {
      console.log({ res });
      if (res.error) {
        throw res.error;
      }
      const products = res.data;

      dispatch(fetchProductsSuccess(products));

      return products;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

export default fetchProducts;
