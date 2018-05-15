import { connect } from 'react-redux'
import { FormField } from '../../components/common/'
import * as loginAction from '../../../common/actions'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    value: state.create.zip,
    error: state.create.zipErrorMessage,
    label: 'Zip',
    returnKeyType: 'go',
    autoCorrect: false,
    forceFocus: ownProps.forceFocus,
    onFocus: ownProps.onFocus,
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: data => dispatch(loginAction.validateZip(data)),
    onSubmitEditing: ownProps.onFinish
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormField)
