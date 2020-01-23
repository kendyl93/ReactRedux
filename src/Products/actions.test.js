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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  // it('should dispatch actions of ConstantA and ConstantB', () => {
  //   const expectedActions = [{ type: FETCH_PRODUCTS_PENDING }];

  //   const store = mockStore({});
  //   store.dispatch(fetchProductsPending(store.dispatch));

  //   expect(store.getActions()).toEqual(expectedActions);
  // });
  it('handles changing a purchase status and fetches all purchases', async () => {
    const store = mockStore();
    store.dispatch(configureMockStore());
    expect(await getAction(store, 'CHANGE_PURCHASE_STATE_STARTED')).toEqual({
      type: 'CHANGE_PURCHASE_STATE_STARTED'
    });
    // expect(await getAction(store, "CHANGE_PURCHASE_STATE_SUCCESS")).toEqual({type: "CHANGE_PURCHASE_STATE_SUCCESS", meta: { id: "rylauNS2GG", status: "sent" }});
    // expect(await getAction(store, "FETCH_ALL_PURCHASES_STARTED")).toEqual({type: "FETCH_ALL_PURCHASES_STARTED"});
  });
});
