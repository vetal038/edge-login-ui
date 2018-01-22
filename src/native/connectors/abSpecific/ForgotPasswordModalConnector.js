import { connect } from 'react-redux'

import * as Constants from '../../../common/constants'
import { MyModal } from '../../components/common/'

export const mapStateToProps = (state, ownProps) => {
  return {
    headerText: 'Password Recovery',
    icon: Constants.TRASH_O,
    iconType: Constants.FONT_AWESOME,
    actionLabel: 'Next',
    cancelLabel: 'Cancel',
    hideCancelX: true
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cancel: ownProps.cancel,
    action: ownProps.action
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyModal)
