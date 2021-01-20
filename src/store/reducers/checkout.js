const defaultState = {
  checkout: [],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        checkout: action.payload,
      }
    default:
      return state
  }
}
