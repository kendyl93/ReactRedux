import { productsReducer } from '../reducer';
import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_PENDING
} from '../types';

describe('reducer', () => {
  it('should return the initial state', () => {
    const state = undefined;
    const action = {};

    expect(productsReducer(state, action)).toEqual({});
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    const state = {};
    const successAction = {
      type: FETCH_PRODUCTS_SUCCESS
    };

    const expected = {
      pending: false,
      products: undefined
    };

    expect(productsReducer(state, successAction)).toEqual(expected);
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    const state = {};
    const errorAction = {
      type: FETCH_PRODUCTS_ERROR,
      error: 'ERROR'
    };

    const expected = {
      pending: false,
      error: 'ERROR'
    };

    expect(productsReducer(state, errorAction)).toEqual(expected);
  });

  it('should handle FETCH_PRODUCTS_PENDING', () => {
    const state = {};
    const pendingAction = {
      type: FETCH_PRODUCTS_PENDING
    };

    const expected = {
      pending: true
    };

    expect(productsReducer(state, pendingAction)).toEqual(expected);
  });
});
