import {combineReducers} from 'redux'
import address from './address'
import checkout from './checkout'
import wishlist from './wishlist'
import users from './users'
import orders from './orders'

export default combineReducers({
  address,
  checkout,
  wishlist,
  users,
  orders,
})
