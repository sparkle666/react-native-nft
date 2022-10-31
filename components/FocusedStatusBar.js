import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import React from 'react'

const FocusedStatusBar = (props) => {

  const focused = useIsFocused()
  focused ? <StatusBar animated = {true} {...props} /> : null
}

export default FocusedStatusBar