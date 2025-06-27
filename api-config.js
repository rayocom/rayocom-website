// API Configuration for OpenAPI Specs Update
module.exports = {
  // Production API URLs (default)
  production: {
    Rayocom_AUTH_API_URL: 'https://auth.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data.Rayocom.ai'
  },
  
  // Development API URLs - using dev.Rayocom.ai
  development: {
    Rayocom_AUTH_API_URL: 'https://dev.Rayocom.ai/docs/auth',
    Rayocom_CONFIG_API_URL: 'https://dev.Rayocom.ai/docs/config',
    Rayocom_APP_DATA_API_URL: 'https://dev.Rayocom.ai/docs/app-data'
  },
  
  // Staging API URLs  
  staging: {
    Rayocom_AUTH_API_URL: 'https://auth-staging.Rayocom.ai',
    Rayocom_CONFIG_API_URL: 'https://config-staging.Rayocom.ai',
    Rayocom_APP_DATA_API_URL: 'https://data-staging.Rayocom.ai'
  }
}; 