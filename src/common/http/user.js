import { AsyncStorage } from 'react-native'
import * as Constants from '../constants'

const baseUrl = async function () {
  let value = await AsyncStorage.getItem('isDevMode')
  value = (value && value.length) ? value === 'dev' : Constants.DEFAULT_MODE
  return value ? 'http://35.193.161.72' : 'http://vaultlogic.com'
}

async function getToken (username, password) {
  const url = await baseUrl()
  return fetch(url + '/api/accounts/oauth/token?grant_type=password&scope=web_client&username=' + username + '&password=' + password, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Constants.APP_TOKEN
    }
  })
    .then((response) => {
      console.log('getToken', response)
      return response.json()
    })
    .then((responseJson) => {
      console.log('getToken responseJson', responseJson)
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}

async function usernameAvailable(username) {
  const url = await baseUrl()
  return fetch(url + '/api/accounts/available?username=' + username, {
    method: 'GET'
  })
    .then((response) => {
      console.log('usernameAvailable', response)
      return response.json()
    })
    .then((responseJson) => {
      console.log('usernameAvailable responseJson', responseJson)
      return responseJson.available
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

async function signUp(data) {
  const url = await baseUrl()
  return fetch(url + '/api/accounts/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": data.username,
      "password": data.password,
      "pin_code": data.pin
    }),
  })
    .then((response) => {
      console.log('signUp', response)
      return response.status == 200 ? true : false;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

async function updatePushNotificationToken(token, data) {
  const url = await baseUrl()
  const access_token = await getToken(data.username)
  return fetch(url + '/wallet/device?key=' + token.token, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + access_token.access_token
    }
  })
    .then((response) => {
      console.log('updatePushNotificationToken', response)
      return response.status == 200 ? true : false;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default { usernameAvailable, signUp, updatePushNotificationToken, getToken };
