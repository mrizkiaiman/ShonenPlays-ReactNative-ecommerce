import {getCart_API} from '../../../services/cart'

export const fetchCart = (data) => {
  return async (dispatch, getState) => {
    const fetchedCart = await getCart_API()
    dispatch({type: 'UPDATE_STATE_CART', payload: fetchedCart[0]})
  }
}

export const updateCart = (data) => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_CART', payload: data})
  }
}
