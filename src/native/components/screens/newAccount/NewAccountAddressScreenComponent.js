import React, { Component } from 'react'
import { View, Text, ScrollView, Keyboard } from 'react-native'
import { Button } from '../../common'
import AddressFirstNameConnector
  from '../../../connectors/componentConnectors/AddressFirstNameConnector'
import AddressLastNameConnector
  from '../../../connectors/componentConnectors/AddressLastNameConnector'
import AddressAddressConnector
  from '../../../connectors/componentConnectors/AddressAddressConnector'
import AddressCityConnector
  from '../../../connectors/componentConnectors/AddressCityConnector'
import AddressStateConnector
  from '../../../connectors/componentConnectors/AddressStateConnector'
import AddressZipConnector
  from '../../../connectors/componentConnectors/AddressZipConnector'
import HeaderConnector
  from '../../../connectors/componentConnectors/HeaderConnector'
import SafeAreaView from '../../common/SafeAreaViewGradient.js'

export default class NewAccountAddressScreenComponent extends Component {
  componentWillMount () {
    this.setState({
      isProcessing: false,
      focusFirstName: true,
      focusLastName: false,
      focusAddress: false,
      focusCity: false,
      focusState: false,
      focusZip: false,
    })
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({
        isProcessing: false
      })
    }
  }

  render () {
    const { NewAccountUsernameScreenStyle } = this.props.styles
    return (
        <SafeAreaView>
            <View style={NewAccountUsernameScreenStyle.screen}>
                <HeaderConnector style={NewAccountUsernameScreenStyle.header} />
                <ScrollView>
                  <View style={NewAccountUsernameScreenStyle.pageContainer}>
                      <View style={[NewAccountUsernameScreenStyle.instructions, {height: 30}]}>
                          <Text style={[NewAccountUsernameScreenStyle.instructionsText, {paddingBottom: 0}]}>
                            Enter Your Address:
                          </Text>
                      </View>
                      <AddressFirstNameConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        autoFocus={this.state.focusFirstName}
                        forceFocus={this.state.focusFirstName}
                        onFocus={this.onSetNextFocus.bind(this, 'focusFirstName')}
                        onFinish={this.onSetNextFocus.bind(this, 'focusLastName')} />
                      <View style={{height: 5}}></View>

                      <AddressLastNameConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        forceFocus={this.state.focusLastName}
                        onFocus={this.onSetNextFocus.bind(this, 'focusLastName')}
                        onFinish={this.onSetNextFocus.bind(this, 'focusAddress')} />
                    <View style={{height: 5}}></View>

                      <AddressAddressConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        forceFocus={this.state.focusAddress}
                        onFocus={this.onSetNextFocus.bind(this, 'focusAddress')}
                        onFinish={this.onSetNextFocus.bind(this, 'focusCity')}/>
                      <View style={{height: 5}}></View>

                      <AddressCityConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        forceFocus={this.state.focusCity}
                        onFocus={this.onSetNextFocus.bind(this, 'focusCity')}
                        onFinish={this.onSetNextFocus.bind(this, 'focusState')} />
                      <View style={{height: 5}}></View>

                      <AddressStateConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        forceFocus={this.state.focusState}
                        onFocus={this.onSetNextFocus.bind(this, 'focusState')}
                        onFinish={this.onSetNextFocus.bind(this, 'focusZip')} />
                      <View style={{height: 5}}></View>

                      <AddressZipConnector
                        style={NewAccountUsernameScreenStyle.inputBox}
                        forceFocus={this.state.focusZip}
                        onFocus={this.onSetNextFocus.bind(this, 'focusZip')}
                        onFinish={this.onNextPress.bind(this)} />

                      <View style={NewAccountUsernameScreenStyle.shim} />
                      <Button
                        onPress={this.onNextPress.bind(this)}
                        downStyle={NewAccountUsernameScreenStyle.nextButton.downStyle}
                        downTextStyle={ NewAccountUsernameScreenStyle.nextButton.downTextStyle }
                        upStyle={NewAccountUsernameScreenStyle.nextButton.upStyle}
                        upTextStyle={NewAccountUsernameScreenStyle.nextButton.upTextStyle}
                        label={'NEXT'}
                        isThinking={this.state.isProcessing}
                        doesThink />
                  </View>
                </ScrollView>
            </View>
        </SafeAreaView>
  )
  }

  //Arrow func doesn't work for some reason
  onSetNextFocus (focus) {
    const newState = {
      ...{
        focusFirstName: false,
        focusLastName: false,
        focusAddress: false,
        focusCity: false,
        focusState: false,
        focusZip: false,
      }, [focus]: true
    };
    this.setState(newState)
  }

  onNextPress () {
    this.setState({
      isProcessing: true
    })
    Keyboard.dismiss()
    this.setState({
      focusFirstName: false,
      focusLastName: false,
      focusAddress: false,
      focusCity: false,
      focusState: false,
      focusZip: false,
    })

    if (!this.props.firstName) {
      this.props.validateFirstName(this.props.firstName)
    }
    if (!this.props.lastName) {
      this.props.validateLastName(this.props.lastName)
    }
    if (!this.props.address) {
      this.props.validateAddress(this.props.address)
    }
    if (!this.props.city) {
      this.props.validateCity(this.props.city)
    }
    if (!this.props.state) {
      this.props.validateState(this.props.state)
    }
    if (!this.props.zip) {
      this.props.validateZip(this.props.zip)
    }

    setTimeout(() => {
      this.setState({
        isProcessing: false
      })
      if (this.props.firstNameErrorMessage) {
        return
      }
      if (this.props.lastNameErrorMessage) {
        return
      }
      if (this.props.addressErrorMessage) {
        return
      }
      if (this.props.cityErrorMessage) {
        return
      }
      if (this.props.stateErrorMessage) {
        return
      }
      if (this.props.zipErrorMessage) {
        return
      }
      this.props.nextScreen()
    }, 200)
  }
}
