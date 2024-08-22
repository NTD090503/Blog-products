
const productRouter = require('./products');
const SiteRouter = require('./site');
const UserRouter = require('./user');
const session = require('express-session');
//const protectedRoutes = require('./protectedRoutes'); // Import route bảo mật



function route(app){

  app.use(session({
    secret: 'dhct5', // Một chuỗi bí mật để mã hóa session ID
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Đặt true nếu sử dụng HTTPS
}));
// router.get('/some-protected-route', authenticateToken, (req, res) => {
//   res.json({ message: 'This is a protected route', user: req.user });
// });
  //app.use('/', protectedRoutes);
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