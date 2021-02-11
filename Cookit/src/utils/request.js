import * as navigation from './navigation';


function parseJSON(response) {

  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}


let accessToken = '';

export function setAccessToken(token) {
  accessToken = token;
}

export function getAccessToken() {
  return accessToken;
}


export default function request(url, options) {
  const parsedOptions = Object.assign(
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        sourceCode: storeCode,
        'Device-Type': 'mobile',
      },
    },
    options,
  );
  return fetch(url, parsedOptions)
    .then(parseJSON);
}
