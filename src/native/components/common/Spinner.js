import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const Spinner = props => {
  return (
    <View style={props.style}>
      <ActivityIndicator size={props.size || 'large'} />
    </View>
  )
}

export { Spinner }
