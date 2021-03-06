import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from './actions';

const API_ENDPOINT = 'http://dummy.restapiexample.com/api/v1/employees';
const FETCH_OPTIONS = { method: 'GET' };

const fetchProducts = (endpoint = API_ENDPOINT) => {
  return async dispatch => {
    dispatch(fetchProductsPending());

    try {
      const response = await fetch(endpoint, FETCH_OPTIONS);
      const { data: products } = await response.json();

      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch(fetchProductsError(error));
    }
  };
};

export default fetchProducts;
