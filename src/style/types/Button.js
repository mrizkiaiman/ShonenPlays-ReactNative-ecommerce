import {Dimensions} from 'react-native'
import Colors from './Color'

const {width, height} = Dimensions.get('window')
export default {
  submitButton: {
    width: width * 0.9,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
  },
  submitButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Oxanium_700Bold',
  },
  whiteBorderedSubmitButton: {
    width: width * 0.9,
    height: 48,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.grayBorder,
  },
}
