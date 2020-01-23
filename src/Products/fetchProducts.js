import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from './actions';

const API_ENDPOINT = 'http://dummy.restapiexample.com/api/v1/employees';

const fetchProducts = async dispatch => {
  dispatch(fetchProductsPending());

  try {
    const response = await fetch(API_ENDPOINT);
    const { data: products } = await response.json();
    dispatch(fetchProductsSuccess(products));

    return products;
  } catch (error) {
    console.error(error);
    dispatch(fetchProductsError(error));
  }
};

export default fetchProducts;
