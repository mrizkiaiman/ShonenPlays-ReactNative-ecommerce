import {StyleSheet} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {
    height,
    backgroundColor: 'white',
  },
  banner: {
    height: height * 0.4,
    backgroundColor: Colors.deeperGreen,
  },
  bannerContentContainer: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  bannerShonenText: {
    ...Fonts.H2,
    fontSize: 40,
    color: 'white',
  },
  bannerPlaysText: {
    ...Fonts.H2,
    fontSize: 40,
    color: Colors.semiYellow,
  },
  welcomeUserText: {
    ...Fonts.regularBlack,
    color: 'white',
    marginTop: 10,
  },
})
