import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import * as Google from 'expo-google-app-auth'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/Icons/google.svg'
//Components
import {Formik} from 'formik'
import {Input, Button} from '../../components'
//Functions
import {Toast, isEmail} from '../../utils'
import {addUser} from '../../store/actions/users'

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const usersFromRedux = useSelector((state) => state.users.data)
  const dispatch = useDispatch()
  const signInOnSubmit = () => {
    const isVerified = usersFromRedux.some(
      (user) => user.email == email && user.password == password,
    )
    if (isVerified) {
      Toast({title: 'Success', text: 'Logged in'})
      navigation.navigate('BottomTabs', {screen: 'Home'})
    } else if (isEmail(email) == false)
      Toast({title: 'Failed', text: 'Incorrect email format', type: 'error'})
    else
      Toast({title: 'Failed', text: 'Wrong email or password', type: 'error'})
  }

  const googleSignIn = async () => {
    Toast({title: 'Success', text: 'Logged in'})
    navigation.navigate('BottomTabs', {screen: 'Home'})
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
      onSubmit: () => googleSignIn(),
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
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(value) => console.log(value)}>
          {({handleChange, handleSubmit}) => (
            <>
              <View style={styles.inputsContainer}>
                <Input
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  type="box"
                  customContainerStyle={{marginBottom: 20}}
                  autoCapitalize="none"
                />
                <Input
                  placeholder="Password"
                  type="box"
                  autoCapitalize="none"
                  onChangeText={handleChange('password')}
                  passwordConfig={{showPassword, setShowPassword}}
                />
              </View>
              {buttonList.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </>
          )}
        </Formik>
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
