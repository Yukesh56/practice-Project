import contactServer from './client.js'


async function postUser(user, url){
  console.log('from postUser', user, url);
  
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body:user
  };
  return await contactServer(url, request)
}

export default postUser;
