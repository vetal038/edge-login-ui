import { connect } from 'react-redux'
import LinkedComponent from '../../../components/screens/newAccount/NewAccountAddressScreenComponent'
import * as actions from '../../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    styles: ownProps.styles,
    workflow: state.workflow,
    username: state.create.username,
    usernameErrorMessage: state.create.usernameErrorMessage,
    firstName: state.create.firstName,
    firstNameErrorMessage: state.create.firstNameErrorMessage,
    lastName: state.create.lastName,
    lastNameErrorMessage: state.create.lastNameErrorMessage,
    address: state.create.address,
    addressErrorMessage: state.create.addressErrorMessage,
    city: state.create.city,
    cityErrorMessage: state.create.cityErrorMessage,
    state: state.create.state,
    stateErrorMessage: state.create.stateErrorMessage,
    zip: state.create.zip,
    zipErrorMessage: state.create.zipErrorMessage
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      nextScreen: () => dispatch(actions.nextScreen()),
      validateFirstName: data => dispatch(actions.validateFirstName(data)),
      validateLastName: data => dispatch(actions.validateLastName(data)),
      validateAddress: data => dispatch(actions.validateAddress(data)),
      validateCity: data => dispatch(actions.validateCity(data)),
      validateState: data => dispatch(actions.validateState(data)),
      validateZip: data => dispatch(actions.validateZip(data)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
