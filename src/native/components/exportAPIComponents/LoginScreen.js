// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { updateFontStyles } from '../../../common/constants/Fonts'
import { setLocal } from '../../../common/locale'
import reducers from '../../../common/reducers'
import LoginAppConnector from '../../connectors/LogInAppConnector'
import * as Styles from '../../styles'

type Props = {
  context: any,
  locale: string,
  language: string,
  username: string,
  recoveryLogin: boolean,
  accountOptions: any,
  fontDescription: any,
  onLogin(): void,
}

class LoginScreen extends Component<Props> {
  store: any // eslint-disable-line no-undef
  componentWillMount () {
    const locale = this.props.locale || 'US'
    const language = this.props.language || 'en_us'
    const recoveryKey = this.props.recoveryLogin || false
    const username = this.props.username || null
    const accountOptions = this.props.accountOptions || null
    updateFontStyles(this.props)
    setLocal(locale, language)
    const composeEnhancers = typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'core-ui' })
      : compose
    this.store = createStore(
      reducers,
      {},
      composeEnhancers(
        applyMiddleware(
          thunk.withExtraArgument({
            context: this.props.context,
            callback: this.props.onLogin,
            accountOptions,
            username,
            recoveryKey,
            locale,
            language
          })
        )
      )
    )
  }

  render () {
    return (
      <Provider store={this.store}>
        <LoginAppConnector
          context={this.props.context}
          onLogin={this.props.onLogin}
          recoveryLogin={this.props.recoveryLogin}
          styles={Styles}
        />
      </Provider>
    )
  }
}

export { LoginScreen }
