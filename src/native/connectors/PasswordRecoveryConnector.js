import { connect } from 'react-redux'

import * as actions from '../../common/actions/'
import PasswordRecoveryAppComponent from '../components/PasswordRecoveryAppComponent'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    showHeader: ownProps.showHeader,
    accountObject: ownProps.accountObject
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initializePasswordRecovery: account =>
      dispatch(actions.initializePasswordRecovery(account))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  PasswordRecoveryAppComponent
)
