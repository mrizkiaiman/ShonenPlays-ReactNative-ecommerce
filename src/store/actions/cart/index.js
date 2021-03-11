import {FetchCartList} from '../../../services/cart'

export const getCart = (data) => {
  return async (dispatch, getState) => {
    const fetchedCart = await FetchCartList()
    console.log({fetchedCart})
    dispatch({type: 'UPDATE_STATE_CART', payload: fetchedCart})
  }
}
