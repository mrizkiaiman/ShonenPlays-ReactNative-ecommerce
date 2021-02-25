import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import * as Google from 'expo-google-app-auth'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/Icons/google.svg'
//Components
import {Button, FormField, FormButton, Form} from '../../components'
//Functions
import {Toast, FormValidation} from '../../utils'
import {addUser} from '../../store/actions/users'
import {tailwind} from '../../style/tailwind'

export default function SignInScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false)
  const usersFromRedux = useSelector((state) => state.users.data)

  const dispatch = useDispatch()
  const signInOnSubmit = ({email, password}) => {
    const isVerified = usersFromRedux.some(
      (user) => user.email == email && user.password == password,
    )
    if (isVerified) {
      Toast({title: 'Success', text: 'Logged in'})
      navigation.navigate('BottomTabs', {screen: 'Home'})
    } else {
      Toast({title: 'Failed', text: 'Wrong email/password', type: 'error'})
    }
  }

  const googleSignIn = async () => {
    Toast({title: 'Success', text: 'Logged in'})
    navigation.navigate('BottomTabs', {screen: 'Home'})
  }

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
        <Form
          initialValues={{email: '', password: ''}}
          onSubmit={(email, password) => signInOnSubmit(email, password)}
          validationSchema={FormValidation.SignIn}>
          <View style={styles.inputsContainer}>
            <FormField
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              type="box"
              customContainerStyle={tailwind('mb-5')}
              errorMessageCustomStyles={{marginTop: -16, marginBottom: 14}}
            />
            <FormField
              name="password"
              placeholder="Password"
              type="box"
              autoCapitalize="none"
              passwordConfig={{showPassword, setShowPassword}}
            />
          </View>
          <FormButton
            styling={{
              buttonStyle: styles.signInButton,
              textStyle: styles.signInButtonText,
            }}
            title="Sign in"
          />
        </Form>
        <Button
          onSubmit={() => googleSignIn()}
          styling={{
            buttonStyle: styles.connectWithGoogleButton,
            textStyle: styles.connectWithGoogleButtonText,
          }}
          title="Connect with Google"
          additionalComponents={{position: 'left', comps: <GoogleIcon />}}
        />
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
