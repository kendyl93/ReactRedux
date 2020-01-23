import { fetchProductsPending, fetchProductsError } from './actions';
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actionsTypes';

describe('actions', () => {
  it('should create an action which reruns pending type', () => {
    const pendingAction = {
      type: FETCH_PRODUCTS_PENDING
    };

    expect(fetchProductsPending()).toEqual(pendingAction);
  });

  it('should create an action which reruns an error type and an error itself', () => {
    const errorAction = {
      type: FETCH_PRODUCTS_ERROR,
      error: true
    };

    expect(fetchProductsError(true)).toEqual(errorAction);
  });
});
