import {BASE_URL} from '@env'

export const request = async (url, body) => {
  console.log(`${BASE_URL + url}`);
  console.log("BODY",body)
  const resp = await fetch(`${BASE_URL + url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: body?.body,
  });
  return resp;
};
