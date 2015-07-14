import {
  PRODUCT_LOAD,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_FAIL
} from './productActionTypes';

function loadFromServer(client) {
  return client.get('/product')
    .then((result) => {
        return result;
    });
}

export function load() {
  return {
    types: [PRODUCT_LOAD, PRODUCT_LOAD_SUCCESS, PRODUCT_LOAD_FAIL],
    promise: (client) => loadFromServer(client)
  };
}
