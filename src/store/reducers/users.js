const defaultState = {
  users: [
    {
      first_name: 'M. Rizki',
      last_name: 'Aiman',
      email: 'm.rizki.aiman@gmail.com',
      password: 'mrizkiaiman',
    },
  ],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
