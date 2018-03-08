// @flow

import type {
  EdgeLoginWindowOptions,
  EdgeUiContext,
  EdgeUiContextOptions
} from './edge-login-ui-index.js'
import { makeFrame, showFrame, hideFrame } from './iframe.js'
import { makeAccountApi } from './account.js'

import postRobot from 'post-robot'
function nopLogin (account: any) {}

/**
 * Sets up the iframe, attaches to it, and returns a context API.
 */
export function makeEdgeUiContext (
  opts: EdgeUiContextOptions
): Promise<EdgeUiContext> {
  const frame = makeFrame(opts.assetsPath)

  return postRobot
    .send(frame, 'make-context', opts)
    .then(reply => makeContextApi(frame))
}

function nop () {}

/**
 * Returns a context API object with all the required methods.
 */
function makeContextApi (frame: HTMLIFrameElement) {
  return {
    openLoginWindow (opts: EdgeLoginWindowOptions = {}) {
      const { onClose = nop, onLogin = nopLogin } = opts

      const innerOpts = {
        onLogin () {
          console.log('LOGIN')
          onLogin(makeAccountApi(frame))
          hideFrame(frame)
        },
        onClose () {
          console.log('CLOSE')
          hideFrame(frame)
          onClose()
        }
      }

      showFrame(frame)
      postRobot
        .send(frame, 'open-login-window', innerOpts)
        .catch(e => innerOpts.onClose())
    }
  }
}
