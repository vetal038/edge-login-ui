import { connect } from 'react-redux'

import * as actions from '../../../common/actions/index'
import * as Constants from '../../../common/constants'
import { MyModal } from '../../components/common/'

export const mapStateToProps = (state, ownProps) => {
  return {
    style: ownProps.style,
    headerText: 'PIN Changed',
    headerSubtext: 'Pin Successfully Changed',
    middleText: '',
    icon: Constants.EXCLAMATION,
    iconType: Constants.SIMPLE_ICONS,
    actionLabel: 'OK',
    cancelLabel: 'Cancel',
    singleButton: true
  }
}
export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    cancel: () => {
      dispatch(actions.dispatchAction(Constants.CLOSE_NOTIFICATION_MODAL))
      dispatch(actions.cancel())
    },
    action: () => {
      dispatch(actions.dispatchAction(Constants.CLOSE_NOTIFICATION_MODAL))
      dispatch(actions.cancel())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyModal)
