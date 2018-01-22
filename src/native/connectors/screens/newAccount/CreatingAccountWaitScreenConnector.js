import { connect } from 'react-redux'

import * as actions from '../../../../common/actions'
import LinkedComponent from '../../../components/screens/newAccount/CreatingAccountWaitScreenComponent'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    createSuccess: state.login.creationSuccess,
    createErrorMessage: state.login.createErrorMessage
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextScreen: () => dispatch(actions.nextScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
