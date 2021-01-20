import {combineReducers} from 'redux'
import cart from './cart'
import address from './address'
import checkout from './checkout'
import wishlist from './wishlist'
import users from './users'

export default combineReducers({
  cart,
  address,
  checkout,
  wishlist,
  users,
})
