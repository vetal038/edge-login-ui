import { AsyncStorage } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import * as Constants from '../constants'

const baseUrl = async function () {
  let value = await AsyncStorage.getItem('isDevMode')
  value = (value && value.length) ? value === 'dev' : Constants.DEFAULT_MODE
  return value ? 'http://35.193.161.72' : 'http://35.224.177.227'//'http://vaultlogic.com'
}

async function getToken (username, password) {
  const version = DeviceInfo.getVersion()
  console.log('DeviceInfo.getVersion', version)
  const url = await baseUrl()
  return fetch(url + '/api/accounts/oauth/token?grant_type=password&scope=web_client&username=' + username + '&password=' + password, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Constants.APP_TOKEN,
      'version': version
    }
  })
    .then((response) => {
      console.log('getToken username', username, password, response)
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

async function updatePushNotificationToken(token, data, method) {
  const url = await baseUrl()
  const accessToken = await getToken(data.username, data.password)

  return fetch(url + '/api/accounts/device', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + accessToken.access_token
    }
  })
    .then((response) => {
      console.log('updatePushNotificationToken get', response)
      const detectedMethod = response.status === 200 ? 'PUT' : 'POST'
      return fetch(url + '/api/accounts/device', {
        method: detectedMethod || 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + accessToken.access_token
        },
        body: JSON.stringify({token: token.token})
      })
        .then((response) => {
          console.log('updatePushNotificationToken response', response)
          return response.status === 200
        })
        .catch((error) => {
          console.error(error)
          return error
        })
    })
    .catch((error) => {
      console.error(error)
      return error
    })
}

async function deletePushNotificationToken (data) {
  const url = await baseUrl()
  const accessToken = await getToken(data.username, data.password)

  return fetch(url + '/api/accounts/device', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + accessToken.access_token
    }
  })
    .then((response) => {
      console.log('deletePushNotificationToken get', response)
      if (response.status === 200) {
        return fetch(url + '/api/accounts/device', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + accessToken.access_token
          }
        })
          .then((response) => {
            console.log('deletePushNotificationToken delete', response)
            return response.status === 200
          })
          .catch((error) => {
            console.error(error)
            return error
          })
      }
      else {
        return response.status === 200
      }
    })
    .catch((error) => {
      console.error(error)
      return error
    })
}


export default { usernameAvailable, signUp, updatePushNotificationToken, deletePushNotificationToken, getToken };
