import {StyleSheet, Dimensions} from 'react-native'
import {Buttons, Colors, Fonts} from '../../style'

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
    height,
  },
  mainContainer: {
    marginHorizontal: width * 0.05,
    marginTop: 50,
  },
  headerTextContainer: {
    marginBottom: 20,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitleText: {
    fontFamily: 'Oxanium_600SemiBold',
    fontSize: 40,
    marginBottom: 0,
    color: '#fbcf5c',
    textDecorationColor: 'black',
    textShadowColor: 'black',
    textShadowOffset: {
      width: 50,
      height: 50,
    },
  },
  spLogo: {
    width: 35,
    height: 35,
    marginStart: 10,
  },
  headerText: {
    ...Fonts.regularBlack,
    color: Colors.gray,
    marginBottom: 8,
    fontSize: 18,
  },
  inputsContainer: {
    marginBottom: 24,
  },
  signInButton: {
    ...Buttons.submitButton,
    backgroundColor: Colors.deeperGreen,
    marginBottom: 10,
  },
  signInButtonText: {
    ...Buttons.submitButtonText,
  },
  connectWithGoogleButton: {
    ...Buttons.whiteBorderedSubmitButton,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 0.8,
    marginBottom: 28,
  },
  connectWithGoogleButtonText: {
    ...Buttons.submitButtonText,
    color: Colors.gray,
    marginStart: 15,
  },
  navigateToSignUpText: {
    ...Fonts.regularBlack,
    color: Colors.gray,
    fontSize: 16,
    textAlign: 'center',
  },
  functionalText: {
    ...Fonts.functional,
  },
})
