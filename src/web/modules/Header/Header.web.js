import t from 'lib/web/LocaleStrings'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from 'react-toolbox/lib/app_bar'
import Link from 'react-toolbox/lib/link'
import Navigation from 'react-toolbox/lib/navigation'
import { sprintf } from 'sprintf-js'

import styles from './Header.webStyle'

const actions = [

]

class Header extends Component {
  componentWillMount () {
    try {
      const vendorName = window.parent.abcuiContext.vendorName || 'Sample App'
      this.props.vendorName = vendorName
    } catch (e) {
      console.log('Error with finding vendorName: ', e)
    }
  }

  render () {
    return (
      <AppBar title='Sample App' leftIcon='menu' fixed className={styles.appBar}>
        <Navigation type='horizontal' actions={actions} className={styles.navigation}>
          <Link className={styles.headerAppName} label={sprintf(t('fragment_setup_header_left'), this.props.vendorName)} />
          <Link href='https://airbitz.co/app' target='_blank' className={styles.headerPoweredAirBitz} label={t('fragment_setup_header_right')} />
        </Navigation>
      </AppBar>
    )
  }
}

export default connect(state => ({

}))(Header)
