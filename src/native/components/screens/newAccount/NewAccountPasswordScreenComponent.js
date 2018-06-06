import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Text, TouchableOpacity } from 'react-native'
import { Button, Icon } from '../../common'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector'
import PasswordConnector
  from '../../../connectors/componentConnectors/PasswordConnector.js'
import PasswordConfirmConnector
  from '../../../connectors/componentConnectors/PasswordConfirmConnector'
import PasswordStatusConnector
  from '../../../connectors/abSpecific/PasswordStatusConnector'
import SkipModalConnector
  from '../../../connectors/abSpecific/SkipModalConnector'
import * as Constants from '../../../../common/constants'
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'
import SafeAreaView from '../../common/SafeAreaViewGradient.js'
/* type Props = {
  styles: any,
  confirmPasswordErrorMessage: string,
  passwordStatus: any,
  password: string,
  confirmPassword: string
} */

export default class NewAccountPasswordScreenComponent extends Component {
  componentWillMount () {
    this.setState({
      isProcessing: false,
      focusFirst: true,
      focusSecond: false,
      passwordHidden: true,
      confirmPasswordHidden: true
    })
  }
  render () {
    const { NewAccountPasswordScreenStyle } = this.props.styles
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView
          style={NewAccountPasswordScreenStyle.screen}
          keyboardShouldPersistTaps={Constants.ALWAYS}
          contentContainerStyle={NewAccountPasswordScreenStyle.mainScrollView}
        >
          <HeaderConnector style={NewAccountPasswordScreenStyle.header} />
          <View style={NewAccountPasswordScreenStyle.subtitleContainer}>
            <Text style={NewAccountPasswordScreenStyle.subtitleText}>Step 2/3</Text>
          </View>
          {this.renderMain(NewAccountPasswordScreenStyle)}
          {this.renderModal(NewAccountPasswordScreenStyle)}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    )
  }
  renderMain (styles) {
    if (this.state.focusSecond) {
      return (
        <KeyboardAvoidingView
          style={styles.pageContainer}
          contentContainerStyle={styles.pageContainer}
          behavior={'position'}
          keyboardVerticalOffset={-150}
        >
          {this.renderInterior(styles)}
        </KeyboardAvoidingView>
      )
    }
    return (
      <View style={styles.pageContainer}>
        {this.renderInterior(styles)}
      </View>
    )
  }
  renderInterior (styles) {
    return (
      <View style={styles.innerView}>
        <PasswordStatusConnector style={styles.status} />
        <View style={{position: 'relative', width: Constants.LOGIN_LABEL_WIDTH, height: Constants.LOGIN_LABEL_HEIGHT, marginBottom: 10}}>
          <PasswordConnector
            style={styles.inputBox}
            secureTextEntry={this.state.passwordHidden}
            autoFocus={this.state.focusFirst}
            onFinish={this.onSetNextFocus.bind(this)}
          />
          <TouchableOpacity
            style={[{position:'absolute', right: 0, bottom: 0, paddingHorizontal:5}]}
            onPress={()=> this.onPasswordHidden('passwordHidden')}
          >
            <Icon
              style={{color: Constants.PURPLE}}
              name={this.state.passwordHidden ? Constants.EYE : Constants.EYE_SLASH}
              size={24}
              type={Constants.FONT_AWESOME}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputShim} />
        <View style={{position: 'relative', width: Constants.LOGIN_LABEL_WIDTH, height: Constants.LOGIN_LABEL_HEIGHT, marginBottom: 10}}>
          <PasswordConfirmConnector
            style={styles.inputBox}
            secureTextEntry={this.state.confirmPasswordHidden}
            autoFocus={this.state.focusSecond}
            onFinish={this.onNextPress.bind(this)}
          />
          <TouchableOpacity
            style={[{position:'absolute', right: 0, bottom: 0, paddingHorizontal:5}]}
            onPress={()=> this.onPasswordHidden('confirmPasswordHidden')}
          >
            <Icon
              style={{color: Constants.PURPLE}}
              name={this.state.confirmPasswordHidden ? Constants.EYE : Constants.EYE_SLASH}
              size={24}
              type={Constants.FONT_AWESOME}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputShim} />
        <Button
          onPress={this.onNextPress.bind(this)}
          downStyle={styles.nextButton.downStyle}
          downTextStyle={styles.nextButton.downTextStyle}
          upStyle={styles.nextButton.upStyle}
          upTextStyle={styles.nextButton.upTextStyle}
          label={'NEXT'}
          isThinking={this.state.isProcessing}
          doesThink
        />
      </View>
    )
  }
  renderModal (style) {
    if (this.props.workflow.showModal) {
      return <SkipModalConnector />
    }
    return null
  }
  onPasswordHidden = (password) => {
    this.setState({
      [password]: !this.state[password]
    })
  }
  onSetNextFocus () {
    this.setState({
      focusFirst: false,
      focusSecond: true
    })
  }
  onNextPress () {
    this.setState({
      isProcessing: true
    })
    if (!this.props.password) {
      const obj = {
        password: '',
        passwordStatus: {
          noLowerCase: true,
          noNumber: true,
          noUpperCase: true,
          passed: false,
          secondsToCrack: 0,
          tooShort: true
        },
        error: Constants.PASSWORD_REQUIRED_ERROR
      }
      this.props.updatePassword(obj)
    }
    if (!this.props.confirmPassword) {
      var obj2 = {
        password: '',
        error: Constants.CONFIRM_PASSWORD_REQUIRED_ERROR
      }
      this.props.updateConfirmPassword(obj2)
    }
    if (!this.props.passwordStatus) {
      // TODO Skip component
      this.setState({
        isProcessing: false
      })
      return
    }
    if (this.props.error !== '' || this.props.error2 !== '') {
      this.setState({
        isProcessing: false
      })
      return
    }
    if (this.props.password && this.props.password !== this.props.confirmPassword) {
      this.setState({
        isProcessing: false
      })
      this.props.checkTheConfirmPassword()
      return
    }
    this.props.nextScreen()
  }
}
