import {combineReducers} from 'redux'
import address from './address'
import checkout from './checkout'
import wishlist from './wishlist'
import users from './users'

export default combineReducers({
  address,
  checkout,
  wishlist,
  users,
})
