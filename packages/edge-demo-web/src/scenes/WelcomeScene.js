// @flow
/** @jsx h */

import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import { Component, h } from 'preact'

export type WelcomeProps = {
  context: EdgeUiContext,
  onLogin: (account: EdgeUiAccount) => mixed
}

export class WelcomeScene extends Component<WelcomeProps> {
  openLoginWindow = () => {
    this.props.context.openLoginWindow({ onLogin: this.props.onLogin })
  }

  render () {
    return (
      <div id="content">
        <p className="center">
          <button disabled={!this.props.context} onClick={this.openLoginWindow}>
            Login With Edge
          </button>
        </p>
      </div>
    )
  }
}
