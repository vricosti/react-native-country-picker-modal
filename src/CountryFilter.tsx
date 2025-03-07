import React from 'react'
import { TextInput, StyleSheet, TextInputProps, Platform } from 'react-native'
import { useTheme } from './CountryTheme'

const styles = StyleSheet.create({
  input: {
    height: 48,
    width: '70%',
    ...Platform.select({
      web: {
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOffset: 0,
      },
    }),
  },
})

export type CountryFilterProps = TextInputProps

export const CountryFilter = ({
  autoFocus = false,
  placeholder = 'Enter country name',
  ...rest
}: CountryFilterProps) => {
  const {
    filterPlaceholderTextColor,
    fontFamily,
    fontSize,
    onBackgroundTextColor,
  } = useTheme()

  const props = {
    autoFocus,
    placeholder,
    ...rest,
  }

  return (
    <TextInput
      testID='text-input-country-filter'
      autoCorrect={false}
      placeholderTextColor={filterPlaceholderTextColor}
      style={[
        styles.input,
        { fontFamily, fontSize, color: onBackgroundTextColor },
      ]}
      placeholder={placeholder}
      autoFocus={autoFocus}
      {...props}
    />
  )
}

