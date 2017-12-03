var embibe_config = {
  development: {
    prefix: 'dev',
    user_ms: {
      host: 'http://localhost',
      port: 3001,
      base_url: 'http://localhost:3001/user_ms/'
    },
    horizontal_ms: {
      host: 'http://localhost',
      port: 3005,
      base_url: 'http://localhost:3005/horizontal_ms/v1/embibe/en'
    },
    content_ms: {
      host: 'http://localhost',
      port: 3004,
      base_url: 'http://localhost:3004/content_ms/v1/embibe/en'
    },    
  }
}[process.env.NODE_ENV];