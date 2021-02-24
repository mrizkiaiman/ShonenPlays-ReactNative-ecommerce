import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
//Components
import {Input, ErrorMessage} from '../index'
import {useFormikContext} from 'formik'
//Functions

export default ({name, errorMessageCustomStyles, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
  return (
    <View style={styles.mainContainer}>
      <Input
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage
        visible={touched[name]}
        text={errors[name]}
        customStyles={errorMessageCustomStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
