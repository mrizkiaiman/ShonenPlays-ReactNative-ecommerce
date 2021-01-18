import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  headerInformationContainer: {
    ...tailwind('flex-row justify-between p-4 bg-white'),
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
})
