import {FetchCartList} from '../../../services/cart'

export const getCart = (data) => {
  return async (dispatch, getState) => {
    const fetchedCart = await FetchCartList()
    dispatch({type: 'UPDATE_STATE_CART', payload: fetchedCart[0]})
  }
}

export const updateCart = (data) => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_CART', payload: data})
  }
}
