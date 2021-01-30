export const addProduct = (product) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    let payload = {
      products: [],
      total: 0,
      shippingAddress: {},
      shippingMethod: {},
      discount: 0,
      date: new Date(),
      status: 1,
      id_order: '',
    }
    if (Object.keys(newCheckout).length === 0) {
      payload.products.push(product)
      payload.total = product.price * product.qty
      dispatch({type: 'UPDATE_STATE_CHECKOUT', payload})
    } else {
      if (newCheckout.products.length === 0) newCheckout.products.push(product)
      else {
        for (let i = 0; i < newCheckout.products.length; i++) {
          if (newCheckout.products[i]._id === product._id) {
            newCheckout.products[i].qty++
            break
          } else {
            newCheckout.products.push(product)
            break
          }
        }
      }

      let sum = newCheckout.products.reduce(function (
        accumulator,
        currentValue,
      ) {
        return accumulator + currentValue.price * currentValue.qty
      },
      0)
      newCheckout.total = sum
      dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
    }
  }
}

export const removeProduct = (product) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    newCheckout.products.forEach((currentProduct, index) => {
      if (currentProduct._id === product._id) {
        newCheckout.products.splice(index, 1)
        newCheckout.total -= product.price * product.qty
      }
    })
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const updateProductQty = (product, action) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    for (let i = 0; i < newCheckout.products.length; i++) {
      if (newCheckout.products[i]._id === product._id) {
        if (action === '+') {
          newCheckout.products[i].qty++
          newCheckout.total += product.price
          break
        } else {
          newCheckout.products[i].qty--
          newCheckout.total -= product.price
          break
        }
      }
    }
    dispatch({type: 'UPDATE_STATE', payload: newCheckout})
  }
}
