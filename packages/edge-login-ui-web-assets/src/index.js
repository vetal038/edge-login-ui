// @flow
/** @jsx h */

import { makeABCUIContext } from './abcui.js'
import type {
  EdgeLoginWindowOptions,
  EdgeUiContextOptions
} from 'edge-login-ui-web'
import postRobot from 'post-robot'

type PostRobotEvent<Data> = {
  source: string,
  origin: string,
  data: Data
}

let context = null
let account = null

postRobot.on('make-context', (event: PostRobotEvent<EdgeUiContextOptions>) => {
  context = makeABCUIContext(
    Object.assign({}, event.data, {
      assetPath: '.',
      vendorImageUrl: './blah.png',
      vendorName: 'blah'
    })
  )
})

postRobot.on(
  'open-login-window',
  (event: PostRobotEvent<EdgeLoginWindowOptions>) => {
    const { onClose = () => {}, onLogin = account => {} } = event.data

    if (!context) {
      throw new Error('No context!')
    }

    context.openLoginWindow((e, newAccount) => {
      if (e) onClose()
      account = newAccount
      onLogin(account)
    })
  }
)

postRobot.on('logout', (event: PostRobotEvent<{}>) => {
  account = null
})

// import { h, render } from 'preact'

// function Screen (props: {}) {
//   return (
//     <div id="foo">
//       <span>Hello, world!</span>
//       <button onClick={e => onClose()}>Click Me</button>
//     </div>
//   )
// }

// const body = document.body
// if (body !== null) render(<Screen />, body)
