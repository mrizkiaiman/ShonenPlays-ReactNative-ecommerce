const defaultState = {
  firstName: 'M. Rizki',
  lastName: 'Aiman',
  mail: 'm.rizki.aiman@gmail.com',
  img:
    'https://pbs.twimg.com/profile_images/1332549281740247042/Ww6aPg8I_400x400.jpg',
  userType: 1,
  defaultAddress: {
    name: 'Home',
    address: 'Jalan Soekarno Hatta, komplek BSI, blok C2 No 24, RT 05, RW 05',
    pic: 'Iki',
    phone: '081276111123',
    lat: '123',
    lng: '123',
    city: 'Palembang',
    province: 'South Sumatera',
    postalCode: '123456',
  },
  mobilePhone: '0812345671',
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE_PROFILE':
      return action.payload
    default:
      return state
  }
}
