import {
  fetchProductsPending,
  fetchProductsError,
  fetchProductsSuccess
} from './actions';
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actionsTypes';

describe('Product actions', () => {
  it('FETCH_PRODUCTS_PENDING', () => {
    const pendingAction = {
      type: FETCH_PRODUCTS_PENDING
    };

    expect(fetchProductsPending()).toEqual(pendingAction);
  });

  it('FETCH_PRODUCTS_ERROR', () => {
    const errorAction = {
      type: FETCH_PRODUCTS_ERROR,
      error: true
    };

    expect(fetchProductsError(true)).toEqual(errorAction);
  });

  it('FETCH_PRODUCTS_SUCCESS', () => {
    const defaultProducts = { bread: 'bread', egg: 'egg' };
    const errorAction = {
      type: FETCH_PRODUCTS_SUCCESS,
      products: defaultProducts
    };

    expect(fetchProductsSuccess(defaultProducts)).toEqual(errorAction);
  });
});
