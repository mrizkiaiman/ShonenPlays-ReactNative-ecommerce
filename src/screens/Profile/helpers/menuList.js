import React from 'react'
//Assets
import EditProfileIcon from '../../../assets/Icons/MoreMenu/editProfile.svg'
import ChangePasswordIcon from '../../../assets/Icons/MoreMenu/changePassword.svg'
import WishlistIcon from '../../../assets/Icons/MoreMenu/wishlist.svg'
import ShippingAddressIcon from '../../../assets/Icons/MoreMenu/shippingAddress.svg'
import AboutIcon from '../../../assets/Icons/MoreMenu/about.svg'
import HelpIcon from '../../../assets/Icons/MoreMenu/help.svg'
import LogoutIcon from '../../../assets/Icons/MoreMenu/logout.svg'

export const firstRow = [
  {
    name: 'Edit Profile',
    icon: <EditProfileIcon />,
    screen: 'EditProfile',
  },
  {
    name: 'Change Password',
    icon: <ChangePasswordIcon />,
    screen: 'ChangePassword',
  },
]

export const secondRow = [
  {
    name: 'Wishlist',
    icon: <WishlistIcon />,
    screen: 'Wishlist',
  },
  {
    name: 'Shipping Address',
    icon: <ShippingAddressIcon />,
    screen: 'ShippingAddress',
  },
]

export const thirdRow = [
  {
    name: 'Help',
    icon: <HelpIcon />,
    screen: 'Help',
  },
  {
    name: 'Logout',
    icon: <LogoutIcon />,
    customOnSubmit: () => console.log('Test'),
  },
]
