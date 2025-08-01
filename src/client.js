import axios from 'axios';

async function contactServer(url, request) {
  try {
    console.log('Sending to server:', request.body);
    console.log('URL:', url);

    const response = await axios({
      url: url,
      method: request.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(request.headers || {}) // merge custom headers if any
      },
      data: request.body // ✅ THIS is how you pass body data in Axios
    });

    return response.data;
  } catch (error) {
    console.error('Error contacting server:', error.message);
  }
}

export default contactServer;