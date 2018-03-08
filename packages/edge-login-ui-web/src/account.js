// @flow

import type {
  EdgeUiAccount,
  EdgeManageWindowOptions,
  EdgeWalletInfo
} from './edge-login-ui-index.js'
import { showFrame, hideFrame } from './iframe.js'

import postRobot from 'post-robot'

function nop () {}

/**
 * Returns a context API object with all the required methods.
 */
export function makeAccountApi (frame: HTMLIFrameElement): EdgeUiAccount {
  return {
    appId: 'blah',
    username: '<username>',

    // Lifetime:
    logout () {
      postRobot.send(frame, 'logout', {})
    },

    // Account credentials:
    openManageWindow (opts: EdgeManageWindowOptions = {}) {
      const { onClose = nop } = opts

      const innerOpts = {
        onClose () {
          hideFrame(frame)
          onClose()
        }
      }

      showFrame(frame)
      postRobot
        .send(frame, 'open-login-window', innerOpts)
        .catch(e => innerOpts.onClose())
    },

    // All wallet infos:
    walletInfos: {},
    createWallet (): Promise<EdgeWalletInfo> {
      throw new Error('not implemented')
    }
  }
}
