// server.js
import contactServer from './client.js'

// function getUser(userId, url) {

//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       userId: userId
//     }
//   };

//   return contactServer(url, requestOptions);
// }



async function postUser(data, url){
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:data
  };
  return await contactServer(url, request)
}

export default postUser;
