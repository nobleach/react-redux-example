import {
  PRODUCT_LOAD,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_FAIL
} from '../actions/productActionTypes';

const initialState = {
  loaded: false
};

export default function product(state = initialState, action = {}) {
  switch (action.type) {
    case PRODUCT_LOAD:
      return {
        ...state,
        loading: true
      };
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case PRODUCT_LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}
