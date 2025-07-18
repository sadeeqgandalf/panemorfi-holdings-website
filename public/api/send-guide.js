// Netlify Function for sending acquisition guides
// This handles the email delivery when deployed to Netlify

const { sendAcquisitionGuide } = require('../../src/api/email-service');

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const request = JSON.parse(event.body);
    const result = await sendAcquisitionGuide(request);
    
    return {
      statusCode: result.success ? 200 : 500,
      headers,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Server error'
      })
    };
  }
};