import { AsyncStorage } from 'react-native'
import * as Constants from '../constants'

const baseUrl = async function () {
  let value = await AsyncStorage.getItem('isDevMode')
  value = (value && value.length) ? value === 'dev' : Constants.DEFAULT_MODE
  return value ? 'http://35.193.78.240' : 'http://vaultlogic.com'
}
const appToken = 'dmF1bHQtd2FsbGV0LWFwcDp2YXVsdC13YWxsZXQtYXBw'

async function getToken (username) {
  const url = await baseUrl()
  return fetch(url + '/oauth/token?grant_type=password&username=' + username + '&password=password', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + appToken
    }
  })
    .then((response) => {
      console.log('getToken', response)
      return response.json()
    })
    .then((responseJson) => {
      return responseJson
    })
    .catch((error) => {
      console.error(error)
      return false
    })
}

async function usernameAvailable(username) {
  const url = await baseUrl()
  return fetch(url + '/wallet?username=' + username, {
    method: 'GET'
  })
    .then((response) => {
      console.log('usernameAvailable', response)
      return response.status == 200 ? true : false;
    })
    .catch((error) => {
      console.error(error);
      return false;
    });
}

async function signUp(data) {
  const url = await baseUrl()
  return fetch(url + '/wallet/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "username": data.username,
      "password": data.password,
      "pin":      data.pin
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

export default { usernameAvailable, signUp, updatePushNotificationToken };
