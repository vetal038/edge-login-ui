import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import * as Constants from '../../../common/constants'

const Spinner = (props) => {
  return (
    <View style={props.style}>
      <ActivityIndicator size={props.size || 'large'} color={props.color || Constants.PURPLE}/>
    </View>
  )
}

export { Spinner }
