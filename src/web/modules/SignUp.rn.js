import React, { Component } from 'react'
import { BackAndroid, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import ErrorModal from './ErrorModal/ErrorModal.ui'
import { fadeWhiteOverlay } from './Landing.action'
import Loader from './Loader/Loader.ui'

class SignUpContainer extends Component {
  componentDidMount = () => {
    const self = this
    BackAndroid.addEventListener('hardwareBackPress', function () {
      if (this.props.loader.loading === true) {
        return true
      }
      switch (self.props.scene) {
        case 'username':
          self.props.dispatch(fadeWhiteOverlay())
          Actions.pop()
          break
        default:
          Actions.pop()
      }
      return true
    })
  }

  render () {
    return (
      <View style={style.container}>
        {this.props.children}
        <Loader />
        <ErrorModal />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }

})
export default connect(state => ({
  scene: state.routes.scene.sceneKey,
  loader: state.loader

}))(SignUpContainer)
