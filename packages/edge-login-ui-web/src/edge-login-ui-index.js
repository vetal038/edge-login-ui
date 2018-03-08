// @flow
/* eslint-disable no-use-before-define */

import type { EdgeWalletInfo } from 'edge-core-js'

export { makeEdgeUiContext } from './context.js'

// context ------------------------------------------------------------

export type EdgeUiContextOptions = {
  apiKey: string,
  appId: string,
  assetsPath: string,

  // Deprecated. We use our info server for this now:
  vendorName?: string,
  vendorImageUrl?: string
}

export type EdgeLoginWindowOptions = {
  +onLogin?: (account: EdgeUiAccount) => mixed,
  +onClose?: () => mixed
}

export type EdgeUiContext = {
  openLoginWindow(opts: EdgeLoginWindowOptions): void
}

// account ------------------------------------------------------------

export type { EdgeWalletInfo } from 'edge-core-js'

export type EdgeManageWindowOptions = {
  +onClose?: () => mixed
}

export type EdgeUiAccount = {
  appId: string,
  username: string,

  // Lifetime:
  logout(): void,

  // Account credentials:
  openManageWindow(opts?: EdgeManageWindowOptions): void,

  // All wallet infos:
  walletInfos: { [walletId: string]: EdgeWalletInfo },
  createWallet(): Promise<EdgeWalletInfo>
}
