// @flow
/** @jsx h */

import type { EdgeUiAccount, EdgeUiContext } from 'edge-login-ui-web'
import { makeEdgeUiContext } from 'edge-login-ui-web'
import { Component, h } from 'preact'

import { AccountScene } from './scenes/AccountScene.js'
import { WelcomeScene } from './scenes/WelcomeScene.js'

export type MainProps = {}
export type MainState = {
  account: EdgeUiAccount | void,
  context: EdgeUiContext | void
}

/**
 * The top-level component in the demo.
 * Manages the edge context and app state, switching between screens as needed.
 */
export class Main extends Component<MainProps, MainState> {
  constructor (props: MainProps) {
    super(props)
    this.state = { account: void 0, context: void 0 }

    // Create the Edge context:
    makeEdgeUiContext({
      apiKey: '0b5776a91bf409ac10a3fe5f3944bf50417209a0', // 'your_key_here',
      appId: 'com.mydomain.myapp',
      assetsPath: './iframe'
    }).then(context => this.setState({ context }))
  }

  onLogin = (account: EdgeUiAccount) => {
    this.setState({ account })
  }

  onLogout = () => {
    this.setState({ account: void 0 })
  }

  render () {
    // Select the appropriate screen to render based on login state:
    const scene = this.state.account ? (
      <AccountScene
        context={this.state.context}
        account={this.state.account}
        onLogout={this.onLogout}
      />
    ) : (
      <WelcomeScene context={this.state.context} onLogin={this.onLogin} />
    )

    return (
      <div id="page">
        <div id="header">Edge Login Demo</div>
        {scene}
      </div>
    )
  }
}
