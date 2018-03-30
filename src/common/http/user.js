import { AsyncStorage } from 'react-native'

const baseUrl = async function () {
  let value = await AsyncStorage.getItem('isDevMode')
  value = (value && value.length) ? value === 'dev' : false
  return value ? 'http://35.193.78.240' : 'http://vaultlogic.com'
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
  return fetch(url + '/url', {
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
      console.log('updatePushNotificationToken', response)
      return response.status == 200 ? true : false;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default { usernameAvailable, signUp, updatePushNotificationToken };
