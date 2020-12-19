import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import RightIcon from '../../assets/Icons/rightDirection.svg'
import ShowPasswordIcon from '../../assets/Icons/showPassword.svg'
import HidePasswordIcon from '../../assets/Icons/hidePassword.svg'

export default function Input({
  value,
  onChangeText,
  placeholder,
  customContainerStyle,
  type,
  passwordConfig,
  autoCapitalize,
}) {
  const {width} = Size
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('border-0.8 border-dgray rounded'),
      width: width * 0.9,
      ...customContainerStyle,
    },
    input: {
      ...tailwind('font-normal p-4'),
      width: width * 0.75,
    },
    passwordToggle: {
      right: 0,
      marginRight: width * 0.04,
    },
    formContainer: {
      ...tailwind(
        'flex-row justify-between items-center border-0.8 border-dgray rounded',
      ),
      paddingVertical: 2.7,
    },
  })

  return type === 'box' ? (
    passwordConfig ? (
      <View
        style={{
          ...styles.mainContainer,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={!passwordConfig.showPassword}
          autoCapitalize="none"
          placeholderTextColor={'#777777'}
        />
        {passwordConfig.showPassword ? (
          <TouchableOpacity
            onPress={() =>
              passwordConfig.setShowPassword(!passwordConfig.showPassword)
            }
            style={styles.passwordToggle}>
            <HidePasswordIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              passwordConfig.setShowPassword(!passwordConfig.showPassword)
            }
            style={styles.passwordToggle}>
            <ShowPasswordIcon />
          </TouchableOpacity>
        )}
      </View>
    ) : (
      <View style={styles.mainContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={'#777777'}
          autoCapitalize={autoCapitalize}
        />
      </View>
    )
  ) : (
    type === 'form' && (
      <View style={{...styles.formContainer, ...customContainerStyle}}>
        <Text style={{...styles.input, ...tailwind('text-dgray')}}>
          {placeholder}
        </Text>
        <RightIcon style={{marginRight: 10}} />
      </View>
    )
  )
}
