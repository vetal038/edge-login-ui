// @flow
/** @jsx h */

import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import { Component, h } from 'preact'

export type AccountProps = {
  account: EdgeUiAccount,
  context: EdgeUiContext,
  onLogout: () => mixed
}

export class AccountScene extends Component<AccountProps> {
  openManageWindow = () => {
    this.props.account.openManageWindow({})
  }

  render () {
    return (
      <div id="content">
        <p className="center">
          <button onClick={this.openManageWindow}>Manage Settings</button>
          <button className="secondary" onClick={this.props.onLogout}>
            Logout
          </button>
        </p>
        <h1>Account Information</h1>
        <p>You are logged in, {this.props.account.username}</p>
      </div>
    )
  }
}
