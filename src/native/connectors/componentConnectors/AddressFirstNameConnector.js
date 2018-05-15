import { connect } from 'react-redux'
import { FormField } from '../../components/common/'
import * as loginAction from '../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    value: state.create.firstName,
    error: state.create.firstNameErrorMessage,
    label: 'First Name',
    returnKeyType: 'next',
    autoCorrect: false,
    autoFocus: ownProps.autoFocus,
    forceFocus: ownProps.forceFocus,
    onFocus: ownProps.onFocus,
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: data => dispatch(loginAction.validateFirstName(data)),
    onSubmitEditing: ownProps.onFinish
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormField)
