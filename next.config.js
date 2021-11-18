const { redirect } = require("next/dist/server/api-utils")

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'http://127.0.0.1:5000/api/products', // Matched parameters can be used in the destination
      },
      {
        ///api/products/:id
        source: '/api/products/:id',
        destination: 'http://127.0.0.1:5000/api/products/:id', // Matched parameters can be used in the destination      
      },
      {
        ///api/users/login
        source: '/api/users/login',
        destination: 'http://127.0.0.1:5000/api/users/login', // Matched parameters can be used in the destination      
      }
    ]
  },
}
