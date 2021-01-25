export const addWishlist = (product) => {
  return (dispatch, getState) => {
    let newWishlist = getState().wishlist.data.slice()
    newWishlist.push(product)
    dispatch({type: 'UPDATE_STATE', payload: newWishlist})
  }
}

export const removeWishlist = (product) => {
  return (dispatch, getState) => {
    let newWishlist = getState().wishlist.data.slice()
    newWishlist.products.forEach((currentWishlist, index) => {
      if (currentWishlist._id === product._id) {
        newWishlist.splice(index, 1)
      }
    })
    dispatch({type: 'UPDATE_STATE', payload: newWishlist})
  }
}
