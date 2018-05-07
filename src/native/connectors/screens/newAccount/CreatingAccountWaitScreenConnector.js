import { connect } from 'react-redux'
import LinkedComponent from '../../../components/screens/newAccount/CreatingAccountWaitScreenComponent'
import * as actions from '../../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    createSuccess: state.login.creationSuccess,
    username: state.create.username,
    password: state.create.password,
    createErrorMessage: state.create.createErrorMessage
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextScreen: () => dispatch(actions.nextScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
