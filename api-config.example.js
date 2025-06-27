// API Configuration for OpenAPI Specs Update
// Copy this file to api-config.js and update the URLs for your environment

module.exports = {
  // Production API URLs (default)
  production: {
    Rayocom_AUTH_API_URL: 'https://auth.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data.Rayocom.ai'
  },
  
  // Development API URLs
  development: {
    Rayocom_AUTH_API_URL: 'http://localhost:8001',
    Rayocom_CONFIG_API_URL: 'http://localhost:8000',
    Rayocom_APP_DATA_API_URL: 'http://localhost:8002'
  },
  
  // Staging API URLs  
  staging: {
    Rayocom_AUTH_API_URL: 'https://auth-staging.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config-staging.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data-staging.Rayocom.ai'
  }
}; 