import { connect } from 'react-redux'

import * as actions from '../../../common/actions'
import { FourDigitInputComponent } from '../../components/abSpecific/'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    pin: state.create.pin,
    error: state.create.pinErrorMessage
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeText: data => dispatch(actions.validatePin(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FourDigitInputComponent
)
