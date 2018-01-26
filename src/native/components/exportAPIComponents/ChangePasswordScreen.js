import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import { setLocal } from '../../../common/locale'
import reducers from '../../../common/reducers'
import ChangePasswordAppConnector from '../../connectors/ChangePasswordAppConnector'
import * as Styles from '../../styles'

/* type Props = {
  account: any,
  context: any,
  showHeader: boolean,
  locale: string,
  language: string,
  onComplete(): void,
  onCancel(): void,
} */

class ChangePasswordScreen extends Component {
  /* static defaultProps = {
    locale: 'US',
    language: 'en_us',
    accountObject: null,
    showHeader: true
  }
 */
  componentWillMount () {
    const locale = this.props.locale || 'US'
    const language = this.props.language || 'en_us'
    setLocal(this.props.locale, this.props.language)
    this.store = createStore(
      reducers,
      {},
      applyMiddleware(
        thunk.withExtraArgument({
          accountObject: this.props.account,
          context: this.props.context,
          onComplete: this.props.onComplete,
          onCancel: this.props.onComplete,
          locale,
          language
        })
      )
    )
  }
  componentWillReceiveProps (props) {}

  render () {
    return (
      <Provider store={this.store}>
        <ChangePasswordAppConnector
          styles={Styles}
          showHeader={this.props.showHeader}
        />
      </Provider>
    )
  }
}

export { ChangePasswordScreen }
