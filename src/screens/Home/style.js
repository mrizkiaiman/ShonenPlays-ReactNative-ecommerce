import {StyleSheet} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {
    height,
    backgroundColor: 'white',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  banner: {
    height: 350,
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
