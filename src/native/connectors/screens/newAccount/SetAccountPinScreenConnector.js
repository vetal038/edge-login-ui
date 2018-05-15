import { connect } from 'react-redux'
import LinkedComponent from '../../../components/screens/newAccount/SetAccountPinScreenComponent'
import * as loginAction from '../../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    username: state.create.username,
    password: state.create.password,
    pin: state.create.pin,
    firstName: state.create.firstName,
    lastName: state.create.lastName,
    address: state.create.address,
    city: state.create.city,
    state: state.create.state,
    zip: state.create.zip,
    pinError: state.create.pinError,
    workflow: state.workflow
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: (data) => dispatch(loginAction.createUser(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
