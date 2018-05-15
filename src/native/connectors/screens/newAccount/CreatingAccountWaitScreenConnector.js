import { connect } from 'react-redux'
import LinkedComponent from '../../../components/screens/newAccount/CreatingAccountWaitScreenComponent'
import * as actions from '../../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    username: state.create.username,
    password: state.create.password,
    createSuccess: state.login.creationSuccess,
    createErrorMessage: state.create.createErrorMessage
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    nextScreen: () => dispatch(actions.nextScreen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
