export const addAddress = (address) => {
  return (dispatch, getState) => {
    let newAddresses = getState().address.data.slice()
    newAddresses.push(address)
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: newAddresses})
  }
}

export const removeAddress = (address) => {
  return (dispatch, getState) => {
    let newAddresses = getState().address.data.slice()
    newAddresses.products.forEach((currentAddress, index) => {
      if (currentAddress._id === address._id) {
        newAddresses.splice(index, 1)
      }
    })
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: newAddresses})
  }
}

export const updateAddress = (address) => {
  return (dispatch, getState) => {
    let newAddresses = getState().address.data.slice()
    for (let i = 0; i < newAddresses.length; i++) {
      if (currentAddress[i]._id === address._id) {
        newAddresses.splice(index, 1)
        newAddresses.push(address)
        break
      }
    }
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: newAddresses})
  }
}
