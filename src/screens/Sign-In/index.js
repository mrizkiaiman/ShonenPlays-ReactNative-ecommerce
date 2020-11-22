import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/Icons/googleIcon.svg'
//Components
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const inputList = [
    {
      value: email,
      onChangeText: setEmail,
      placeholder: 'Email',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
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
      onSubmit: () => console.log('Test'),
      styling: {
        buttonStyle: styles.signInButton,
        textStyle: styles.signInButtonText,
      },
      title: 'Sign in',
    },
    {
      onSubmit: () => console.log('Test'),
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
          {/* <Text style={styles.headerText}>Let's jump into our store!</Text> */}
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
          <Text style={styles.functionalText}>Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
