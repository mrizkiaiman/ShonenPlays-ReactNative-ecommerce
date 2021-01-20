const defaultState = {
  wishlist: [],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        wishlist: action.payload,
      }
    default:
      return state
  }
}
