import { connect } from 'react-redux'

import * as actions from '../../common/actions/'
import * as Constants from '../../common/constants'
import ChangePasswordAppComponent from '../components/ChangePasswordAppComponent'

export const mapStateToProps = (state, ownProps) => {
  return {
    accountObject: ownProps.accountObject,
    workflow: state.workflow,
    showHeader: ownProps.showHeader
  }
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setWorkflow: () =>
      dispatch(actions.startWorkflow(Constants.WORKFLOW_PASSWORD))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ChangePasswordAppComponent
)
