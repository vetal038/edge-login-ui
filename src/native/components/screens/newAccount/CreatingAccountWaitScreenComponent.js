import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import req from '../../../../common/http/user'
// import { LOGO_DOT } from '../../../../native/assets'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector.js'
import { Spinner } from '../../common'
import SafeAreaView from '../../common/SafeAreaViewGradient.js'
// import * as Constants from '../../../../common/constants'

export default class CreatingAccountWaitScreenComponent extends Component {
  componentWillReceiveProps (nextProps) {
    if (nextProps.createSuccess) {
      this.props.nextScreen()
    }
  }

  componentDidMount () {
    setTimeout(async() => {
      AsyncStorage.setItem('gpm_username', this.props.username)
      AsyncStorage.setItem('gpm_password', this.props.password)

      const gpm_token = await req.getToken(this.props.username, this.props.password)
      if (gpm_token && gpm_token.access_token) {
        AsyncStorage.setItem('gpm_token', gpm_token.access_token)
      }
    }, 500)
  }

  render () {
    const { CreatingAccountWaitScreenStyle } = this.props.styles
    return (
      <SafeAreaView>
        <View style={CreatingAccountWaitScreenStyle.container}>
          <HeaderConnector style={CreatingAccountWaitScreenStyle.header} />
          <View style={CreatingAccountWaitScreenStyle.pageContainer}>
            <View style={CreatingAccountWaitScreenStyle.topPad} />
            {!this.props.createErrorMessage && (<View style={CreatingAccountWaitScreenStyle.iconContianer}><Spinner /></View>)}
            <View style={CreatingAccountWaitScreenStyle.headlineConainer}>
              <Text style={CreatingAccountWaitScreenStyle.headlineText}>Good job!</Text>
            </View>
            <View style={CreatingAccountWaitScreenStyle.bodyCopyContainer}>
              <Text style={CreatingAccountWaitScreenStyle.bodyText}>Hang tight while we create</Text>
              <Text style={CreatingAccountWaitScreenStyle.bodyText}>and secure your account</Text>
            </View>
            <View style={CreatingAccountWaitScreenStyle.encriptingContainer}>
              <Text style={CreatingAccountWaitScreenStyle.bodyText}>Encrypting wallet...</Text>
            </View>
            {this.props.createErrorMessage &&
              (<View style={CreatingAccountWaitScreenStyle.encriptingContainer}>
                <Text style={CreatingAccountWaitScreenStyle.errorText}>{this.props.createErrorMessage}</Text>
              </View>)
            }
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
