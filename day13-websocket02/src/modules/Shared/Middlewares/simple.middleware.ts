export const SimpleMiddleware = (req, res, next) => {
  console.log('这是一个简单的Middleware');
  next();
}