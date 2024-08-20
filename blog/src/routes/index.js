
const productRouter = require('./products');
const SiteRouter = require('./site');
const UserRouter = require('./user');
const session = require('express-session');

function route(app){

  app.use(session({
    secret: 'dhct5', // Một chuỗi bí mật để mã hóa session ID
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Đặt true nếu sử dụng HTTPS
}));

// app.get('/', (req, res) => {
//     // Lưu thông tin vào session
//     req.session.user = 'JohnDoe';
//     res.send('Session created');
// });
const checkAuth = (req, res, next) => {
  if (req.session.user) {
      // Người dùng đã đăng nhập
      next();
  } else {
      // Người dùng chưa đăng nhập
      res.status(401).send('Bạn cần phải đăng nhập để truy cập tài nguyên này.');
  }
};
app.get('/profile', checkAuth, (req, res) => {
  res.send(`Chào mừng, ${req.session.user}`);
});

  app.use('/user', UserRouter);
  app.use('/products', productRouter);
  // app.use('/search', SiteRouter);
  app.use('/', SiteRouter);
  // app.get('/products', (req, res) => {
  //   res.render('products')
  // })
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
      
    //   app.get('/createaccount', (req, res) => {
    //     res.render('createaccount')
    //   })
    //   app.get('/search', (req, res) => {
    //     res.render('search')
    //   })
    //   app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    //   })
}

module.exports = route;