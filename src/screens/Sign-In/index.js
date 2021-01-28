import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import {useSelector} from 'react-redux'
import styles from './style'
import AsyncStorage from '@react-native-community/async-storage'
//Assets
import GoogleIcon from '../../assets/Icons/google.svg'
//Components
import {Input, Button} from '../../components'
//Functions
import {SignIn} from '../../services/Authenthication'
import {Toast} from '../../utils'

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const usersFromRedux = useSelector((state) => state.users.data)
  console.log(usersFromRedux)
  const signInOnSubmit = () => {
    const isVerified = usersFromRedux.some(
      (user) => user.email == email && user.password == password,
    )
    if (isVerified) {
      Toast({title: 'Success', text: 'Logged in'})
      navigation.navigate('BottomTabs', {screen: 'Home'})
    } else
      Toast({title: 'Failed', text: 'Wrong email or password', type: 'error'})
  }

  const inputList = [
    {
      value: email,
      onChangeText: setEmail,
      placeholder: 'Email',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      autoCapitalize: 'none',
    },
    {
      value: password,
      onChangeText: setPassword,
      placeholder: 'Password',
      type: 'box',
      passwordConfig: {
        showPassword,
        setShowPassword,
      },
    },
  ]

  const buttonList = [
    {
      onSubmit: () => signInOnSubmit(),
      styling: {
        buttonStyle: styles.signInButton,
        textStyle: styles.signInButtonText,
      },
      title: 'Sign in',
    },
    {
      onSubmit: () => navigation.navigate('BottomTabs', {screen: 'Home'}),
      styling: {
        buttonStyle: styles.connectWithGoogleButton,
        textStyle: styles.connectWithGoogleButtonText,
      },
      title: 'Connect with Google',
      additionalComponents: {
        position: 'left',
        comps: <GoogleIcon />,
      },
    },
  ]

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerTextContainer}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>ShonenPlays</Text>
            <Image
              style={styles.spLogo}
              source={require('../../assets/Logo.png')}
            />
          </View>
          <Text style={styles.headerText}>
            Enter your email and password to sign in
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          {inputList.map((input, index) => (
            <Input key={index} {...input} />
          ))}
        </View>
        {buttonList.map((button, index) => (
          <Button key={index} {...button} />
        ))}
        <Text style={styles.navigateToSignUpText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={styles.functionalText}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
