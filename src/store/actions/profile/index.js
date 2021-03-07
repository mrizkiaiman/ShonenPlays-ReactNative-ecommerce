export const updateProfile = ({updatedObj}) => {
  return (dispatch, getState) => {
    dispatch({type: 'UPDATE_STATE_ORDERS', payload: updatedObj})
  }
}
