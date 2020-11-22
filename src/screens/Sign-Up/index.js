import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/Icons/googleIcon.svg'
//Components
import Input from '../../components/Input'
import Button from '../../components/Button'
//Services
import SignUpAPI from '../../services/Authenthication/signUp'

export default function SignUp({navigation}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const signInOnSubmit = () => {
    SignUpAPI(firstName, lastName, email, password)
      .then(async (response) => {
        navigation.navigate('SignIn')
      })
      .catch(console.log)
  }

  const inputList = [
    {
      value: firstName,
      onChangeText: setFirstName,
      placeholder: 'First name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      autoCapitalize: 'none',
    },
    {
      value: lastName,
      onChangeText: setLastName,
      placeholder: 'Last name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      autoCapitalize: 'none',
    },
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
      title: 'Sign up',
    },
    {
      onSubmit: () => navigation.navigate('Home'),
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
          {/* <Text style={styles.headerText}>Come and join us!</Text> */}
          <Text style={styles.headerText}>
            Please fill all the required data to sign up
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
          Already have an account?{' '}
          <Text
            onPress={() => navigation.goBack()}
            style={styles.functionalText}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
