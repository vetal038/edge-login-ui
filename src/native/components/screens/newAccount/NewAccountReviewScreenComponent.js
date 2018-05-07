import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import req from '../../../../common/http/user'
import { Button, WarningBox } from '../../common'
import AccountInfoContainer
  from '../../../connectors/abSpecific/AccountInfoConnector'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector'
import SafeAreaView from '../../common/SafeAreaViewGradient.js'

export default class NewAccountReviewScreenComponent extends Component {

  componentDidMount () {
    setTimeout(async() => {
      AsyncStorage.setItem('vc_username', this.props.username)
      AsyncStorage.setItem('vc_password', this.props.password)

      const vc_token = await req.getToken(this.props.username, this.props.password)
      if (vc_token && vc_token.access_token) {
        AsyncStorage.setItem('vc_token', vc_token.access_token)
      }
    }, 400)
  }

  render () {
    const { NewAccountReviewScreenStyle } = this.props.styles
    return (
      <SafeAreaView>
        <View style={NewAccountReviewScreenStyle.screen}>
          <HeaderConnector style={NewAccountReviewScreenStyle.header} />
          <View style={NewAccountReviewScreenStyle.pageContainer}>
            <View style={NewAccountReviewScreenStyle.instructionsContainer}>
              <Text style={NewAccountReviewScreenStyle.instructionsText}>
                Almost done! Let's write down your account information
              </Text>
            </View>
            <View style={NewAccountReviewScreenStyle.warningBoxContainer}>
              <WarningBox
                style={NewAccountReviewScreenStyle.warningBox}
                message={
                  'If you lose your account information, you’ll lose access to your funds permanently. Write down and store it securely.'
                } // TODO localize
              />
            </View>
            <View style={NewAccountReviewScreenStyle.shim} />
            <View style={NewAccountReviewScreenStyle.detailsContainer}>
              <AccountInfoContainer
                style={NewAccountReviewScreenStyle.accountDetailsBox}
              />
              <View style={NewAccountReviewScreenStyle.shim} />
            </View>

            <Button
              onPress={this.onNextPress.bind(this)}
              downStyle={NewAccountReviewScreenStyle.nextButton.downStyle}
              downTextStyle={NewAccountReviewScreenStyle.nextButton.downTextStyle}
              upStyle={NewAccountReviewScreenStyle.nextButton.upStyle}
              upTextStyle={NewAccountReviewScreenStyle.nextButton.upTextStyle}
              label={'Done'}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
  onNextPress () {
    this.props.nextScreen()
  }
}
