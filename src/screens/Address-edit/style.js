import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  sectionContainer: tailwind('bg-white px-5 mt-2 border-0.8 border-gray'),
  sectionTitleText: tailwind('font-normal font-semibold my-6'),
  pinLocationContainer: tailwind(
    'flex-row items-center bg-white px-5 mt-2 py-3 border-0.8 border-gray',
  ),
  pinLocationText: tailwind('font-normal'),
})
