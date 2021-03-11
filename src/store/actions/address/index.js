import {getAddress_API} from '../../../services/address'

export const fetchAddress_redux = () => {
  return async (dispatch) => {
    const fetchedAddress = await getAddress_API()
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: fetchedAddress})
  }
}

export const updateAddress_redux = (data) => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: data})
  }
}

export const addAddress = (address) => {
  return (dispatch, getState) => {
    let newAddresses = getState().address.data.slice()
    address._id = newAddresses.length
    newAddresses.push(address)
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: newAddresses})
  }
}

export const removeAddress = (address) => {
  return (dispatch, getState) => {
    let newAddresses = getState().address.data.slice()
    newAddresses.forEach((currentAddress, index) => {
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
      if (newAddresses[i]._id === address._id) {
        newAddresses.splice(i, 1)
        newAddresses.push(address)
        break
      }
    }
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: newAddresses})
  }
}
