import React, {Component} from 'react'

import Footer from '../Footer/Footer.web'
import Header from '../Header/Header.web'

class LayoutTemplate extends Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer className='dialogFooter' />
      </div>
    )
  }
}

export default LayoutTemplate
