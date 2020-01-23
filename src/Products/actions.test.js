import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { fetchProductsPending, fetchProductsError } from './actions';
import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './actionsTypes';
import fetchProducts from './fetchProducts';

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

const mockStore = configureMockStore([thunk]);

describe('changePurchaseStatus', () => {
  it('handles changing a purchase status and fetches all purchases', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    await fetchProducts(dispatch);
    expect(dispatch).toBeCalledWith({ type: 'CHANGE_PURCHASE_STATE_STARTED' });
    expect(dispatch).toBeCalledWith({
      type: 'CHANGE_PURCHASE_STATE_SUCCESS',
      meta: { id: 'rylauNS2GG', status: 'sent' }
    });
    expect(dispatch).toBeCalledWith({ type: 'FETCH_ALL_PURCHASES_STARTED' });
  });
});
