import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/Icons/google.svg'
//Components
import Input from '../../components/Input'
import Button from '../../components/Button'
//Functions
import AsyncStorage from '@react-native-community/async-storage'
import {SignIn} from '../../services/Authenthication'
import Toast from '../../utils/Toast'

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const signInOnSubmit = () => {
    SignIn(email, password)
      .then(async (response) => {
        await AsyncStorage.setItem('token', response.token)
        Toast({title: 'Success', text: 'Logged in'})
        navigation.navigate('BottomTabs', {screen: 'Home'})
      })
      .catch(console.log)
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
