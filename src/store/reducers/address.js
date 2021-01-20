const defaultState = {
  address: [],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        address: action.payload,
      }
    default:
      return state
  }
}
