const base_url = 'http://35.193.78.240'

function usernameAvailable(username) {
  return fetch(base_url + '/wallet?username=' + username, {
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

function signUp(data) {
  return fetch(base_url + '/wallet/register', {
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

export default { usernameAvailable, signUp };
