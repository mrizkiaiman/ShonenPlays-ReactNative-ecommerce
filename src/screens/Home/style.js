import {StyleSheet} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'white',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  //Banner
  banner: {
    height: 350,
    backgroundColor: Colors.deeperGreen,
    paddingHorizontal: 20,
  },
  bannerContentContainer: {
    marginTop: 70,
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
  //Categories
  sectionContainer: {
    marginTop: 175,
    paddingHorizontal: 25,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionContentContainer: {
    flexDirection: 'row',
  },
  titleSectionText: {
    ...Fonts.regularBlack,
    fontFamily: 'Oxanium_600SemiBold',
  },
  functionalText: {
    ...Fonts.functional,
  },
  //Voucher
  voucherImageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.44,
  },
  voucherImage: {
    height: 150,
    width: width * 0.88,
    borderRadius: 10,
    marginBottom: 5,
  },
})
