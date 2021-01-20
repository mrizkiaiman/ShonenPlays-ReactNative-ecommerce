import React, {useRef} from 'react'
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import hardcode from './helpers/hardcode'
//Styling
import styles from './style'
import {Size} from '../../style'
const {width, height} = Size
import {tailwind} from '../../style/tailwind'
//Assets
import {
  EditProfileIcon,
  ChangePasswordIcon,
  WishlistIcon,
  ShippingAddressIcon,
  HelpIcon,
  LogoutIcon,
} from '../../assets/Icons/MoreMenu'
//Components
import {Modalize} from 'react-native-modalize'
import {TabScreenHeader, ModalHeader} from '../../parts'
import {Menu, EditProfileModal, ChangePasswordModal} from './components'
//Functions
import {WhatsAppLink} from '../../utils'

export default ({navigation}) => {
  const {firstName, lastName, mail, img} = hardcode
  const editProfileModal = useRef(null)
  const changePasswordModal = useRef(null)

  const modalAction = (action, type) => {
    let modal
    if (type === 'editProfile') {
      modal = editProfileModal.current
    } else if (type === 'changePassword') {
      modal = changePasswordModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }

  const menuFirstRow = [
    {
      name: 'Edit Profile',
      icon: <EditProfileIcon />,
      customOnSubmit: () => modalAction('open', 'editProfile'),
    },
    {
      name: 'Change Password',
      icon: <ChangePasswordIcon />,
      customOnSubmit: () => modalAction('open', 'changePassword'),
    },
  ]

  const menuSecondRow = [
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

  const menuThirdRow = [
    {
      name: 'Help',
      icon: <HelpIcon />,
      customOnSubmit: () => WhatsAppLink(),
    },
    {
      name: 'Logout',
      icon: <LogoutIcon />,
      customOnSubmit: () => navigation.navigate('SignIn'),
    },
  ]

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Pro',
            orangeText: 'file',
          }}
        />
        <View style={styles.profileContainer}>
          <Image style={styles.profilePhoto} source={{uri: img}} />
          <View style={styles.profileNameContainer}>
            <Text style={styles.nameText}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.emailText}>{mail}</Text>
          </View>
        </View>
        <View style={styles.menuListContainer}>
          {menuFirstRow.map((menu, index) => (
            <Menu key={index} menu={menu} />
          ))}
        </View>
        <View style={styles.menuListContainer}>
          {menuSecondRow.map((menu, index) => (
            <Menu key={index} menu={menu} />
          ))}
        </View>
        <View style={{...styles.menuListContainer, marginBottom: 8}}>
          {menuThirdRow.map((menu, index) => (
            <Menu key={index} menu={menu} />
          ))}
        </View>
      </ScrollView>
      <Modalize
        ref={editProfileModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'editProfile')}
            saveMethod={() => console.log('Test')}
            title="Edit Profile"
          />
        }
        modalHeight={height / 1.25}>
        <EditProfileModal Hardcode={hardcode} />
      </Modalize>
      <Modalize
        ref={changePasswordModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'changePassword')}
            saveMethod={() => console.log('Test')}
            title="Change Password"
          />
        }
        modalHeight={height / 1.25}>
        <ChangePasswordModal />
      </Modalize>
    </>
  )
}
