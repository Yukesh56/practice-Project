import axios from 'axios';

async function contactServer(url, options) {
  try {
    console.log('from client',options);
    
    const response = await axios({
      url,
      method: options.method,
      headers: options.headers,
      data: options.data,
    });

    return response.data;
  } catch (error) {
    console.error('Error contacting server:', error.message);
  }
}

export default contactServer;