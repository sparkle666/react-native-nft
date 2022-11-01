import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {COLORS, SIZES, SHADOWS} from "../constants"

export const CircleButton = ({handlePress, ...props}) => {
  
  const {top} = props

  return (
  <TouchableOpacity style = {{
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
    ...props,
  }}>
    <Text>{top}</Text>
  </TouchableOpacity>
  )
}

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  )
}
