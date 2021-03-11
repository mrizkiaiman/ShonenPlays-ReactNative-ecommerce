export const updateCart = (data) => {
  return (dispatch, getState) => {
    dispatch({type: 'UPDATE_STATE_CART', payload: data})
  }
}
