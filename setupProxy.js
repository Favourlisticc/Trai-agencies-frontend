const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://trai-agencies-api.onrender.com/api/v1/',
      changeOrigin: true,
    })
  );
};
