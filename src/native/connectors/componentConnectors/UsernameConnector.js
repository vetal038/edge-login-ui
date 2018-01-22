import { connect } from 'react-redux'

import * as loginAction from '../../../common/actions'
import { FormField } from '../../components/common/'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    value: state.create.username,
    error: state.create.usernameErrorMessage,
    label: 'Username',
    returnKeyType: 'go',
    autoCorrect: false,
    autoFocus: true // ownProps.autoFocus,
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: data => dispatch(loginAction.validateUsername(data)),
    onSubmitEditing: ownProps.onFinish
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormField)
