import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React from 'react'

const FocusedStatusBar = (props) => {

  const focused = useIsFocused()
  return focused ? <StatusBar animated = {true} {...props} /> : null
}

export default FocusedStatusBar