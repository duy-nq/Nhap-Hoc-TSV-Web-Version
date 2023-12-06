const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://localhost:7212',
      changeOrigin: true,
      secure: false, // This is needed if your server uses a self-signed certificate
    })
  );
};