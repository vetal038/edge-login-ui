import { connect } from 'react-redux'
import { FormField } from '../../components/common/'
import * as loginAction from '../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    value: state.create.lastName,
    error: state.create.lastNameErrorMessage,
    label: 'Last Name',
    returnKeyType: 'next',
    autoCorrect: false,
    forceFocus: ownProps.forceFocus,
    onFocus: ownProps.onFocus,
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: data => dispatch(loginAction.validateLastName(data)),
    onSubmitEditing: ownProps.onFinish
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormField)
