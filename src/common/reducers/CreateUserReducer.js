import * as Constants from '../../common/constants'

const initialState = {
  username: null,
  firstName: null,
  firstNameErrorMessage: null,
  lastName: null,
  lastNameErrorMessage: null,
  address: null,
  addressErrorMessage: null,
  city: null,
  cityErrorMessage: null,
  state: null,
  stateErrorMessage: null,
  zip: null,
  zipErrorMessage: null,
  password: null,
  confirmPassword: null,
  pin: '',
  loginPin: null,
  loginSuccess: false,
  creationSuccess: false,
  passwordStatus: null,
  createPasswordErrorMessage: null,
  confirmPasswordErrorMessage: null,
  pinErrorMessage: null,
  usernameErrorMessage: null,
  createErrorMessage: null,
  loginPasswordErrorMessage: null,
  loginPinErrorMessage: null,
  accountObject: null,
  showModal: false
}
export default function (state = initialState, action) {
  switch (action.type) {
    case Constants.CREATE_ACCOUNT_SUCCESS:
      return { ...state, accountObject: action.data, creationSuccess: true }
    case Constants.CREATE_ACCOUNT_FAIL:
      return { ...state, createErrorMessage: action.data }
    case Constants.CREATE_UPDATE_USERNAME:
      return {
        ...state,
        username: action.data.username,
        usernameErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_FIRSTNAME:
      return {
        ...state,
        firstName: action.data.firstName,
        firstNameErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_LASTNAME:
      return {
        ...state,
        lastName: action.data.lastName,
        lastNameErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_ADDRESS:
      return {
        ...state,
        address: action.data.address,
        addressErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_CITY:
      return {
        ...state,
        city: action.data.city,
        cityErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_STATE:
      return {
        ...state,
        state: action.data.state,
        stateErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_ZIP:
      return {
        ...state,
        zip: action.data.zip,
        zipErrorMessage: action.data.error
      }
    case Constants.CREATE_UPDATE_PIN:
      return {
        ...state,
        pin: action.data.pin,
        pinErrorMessage: action.data.error
      }
    case Constants.AUTH_UPDATE_PASSWORD:
      return {
        ...state,
        password: action.data.password,
        passwordStatus: action.data.passwordStatus,
        createPasswordErrorMessage: action.data.error
      }
    case Constants.AUTH_UPDATE_PIN:
      return { ...state, loginPin: action.data }
    case Constants.LAUNCH_NOTIFICATION_MODAL:
      return { ...state, showModal: true }
    case Constants.CLOSE_NOTIFICATION_MODAL:
      return { ...state, showModal: false }
    case Constants.AUTH_UPDATE_CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.data.password,
        confirmPasswordErrorMessage: action.data.error
      }
    case Constants.RESET_APP:
      return initialState
    default:
      return state
  }
}
