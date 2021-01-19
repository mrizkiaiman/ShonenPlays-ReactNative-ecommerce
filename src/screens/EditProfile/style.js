import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  uploadPhotoContainer: tailwind('flex-row items-center p-5 mt-2 bg-white'),
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#F3F3F3',
    ...tailwind('justify-center items-center'),
  },
  informationContainer: {
    ...tailwind('p-4 bg-white mt-2'),
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
})
