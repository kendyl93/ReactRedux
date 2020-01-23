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
function findAction(store, type) {
  return store.getActions().find(action => action.type === type);
}

export function getAction(store, type) {
  const action = findAction(store, type);
  if (action) return Promise.resolve(action);

  return new Promise(resolve => {
    store.subscribe(() => {
      const action = findAction(store, type);
      if (action) resolve(action);
    });
  });
}

// allows us to easily return reponses and/or success/fail for a thunk that calls a service
const mockServiceCreator = (body, succeeds = true) => () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
  });

describe('authenticate action', () => {
  let store;
  // set up a fake store for all our tests
  beforeEach(() => {
    store = mockStore({ phoneNumbers: [] });
  });

  describe('when a user logs in', () => {
    it('fires a login request action', () =>
      store.dispatch(fetchProducts()).then(() =>
      {
        console.log({AA: store.getActions()})
        return expect(store.getActions()).toContainEqual({
          type: FETCH_PRODUCTS_PENDING
        })
        }
      ));
  });
});
