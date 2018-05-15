import { AsyncStorage } from 'react-native'
import * as Constants from '../constants'

const baseUrl = async function () {
  let value = await AsyncStorage.getItem('isDevMode')
  value = (value && value.length) ? value === 'dev' : Constants.DEFAULT_MODE
  return value ? 'http://18.130.29.48:8088' : 'http://18.130.29.48:8088'
}

async function getToken (username, password) {
  const url = await baseUrl()
  return fetch(url + '/oauth/token?grant_type=password&username=' + username + '&password=' + password, {
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

async function isUsernameAvailable(username) {
  const url = await baseUrl()
  return fetch(url + '/registration/' + username, {
      method: 'GET'
    })
    .then((response) => {
      console.log('usernameAvailable', response)
      return response.json();
    })
    .then((result) => {
      console.log('result', result)
      return result;
    })
.catch((error) => {
    console.error(error);
  return false;
});
}

async function signUp(data) {
  const url = await baseUrl()
  return fetch(url + '/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      console.log('signUp', response)
      return (response.status == 200 || response.status == 201) ? true : false;
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

export default { getToken, isUsernameAvailable, signUp, updatePushNotificationToken };
