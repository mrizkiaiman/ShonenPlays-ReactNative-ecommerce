import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
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
      ...tailwind('border-1 border-gray rounded'),
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
  })

  return (
    type === 'box' &&
    (passwordConfig ? (
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
          placeholderTextColor={tailwind('text-gray')}
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
          placeholderTextColor={tailwind('text-gray')}
          autoCapitalize={autoCapitalize}
        />
      </View>
    ))
  )
}
