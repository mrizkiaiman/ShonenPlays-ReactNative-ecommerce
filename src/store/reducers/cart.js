const defaultState = {
  cart: [],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        cart: action.payload,
      }
    default:
      return state
  }
}
