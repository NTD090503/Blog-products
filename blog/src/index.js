const express = require('express')
const app = express()
const morgan =  require('morgan');
const port = 3000
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
db.connect();
//const handlebars = require('express-handlebars');
//http logger
app.use(morgan('combined'));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))

//const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

// Cấu hình Handlebars làm view engine
// app.engine('hbs', exphbs.engine(
//   {
//     extname : '.hbs',
//     runtimeOptions: {
//       allowProtoPropertiesByDefault: true, // Cho phép truy cập các thuộc tính "proto" 
//       allowProtoMethodsByDefault: true,    // Cho phép sử dụng các phương thức "proto"
//   }
//   }
// )); 
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
  defaultLayout: 'main', // Nếu bạn có layout mặc định
  layoutsDir: path.join(__dirname, 'resources','views', 'layouts'), // Đường dẫn đến thư mục layouts
  partialsDir: path.join(__dirname, 'resources', 'views', 'partials'), // Đường dẫn đến thư mục partials
  runtimeOptions: {
      allowProtoPropertiesByDefault: true, // Cho phép truy cập các thuộc tính "proto" 
      allowProtoMethodsByDefault: true,    // Cho phép sử dụng các phương thức "proto"
  }
}));

// app.engine('hbs', exphbs.engine({
//   runtimeOptions: {
//       allowProtoPropertiesByDefault: true,
//       allowProtoMethodsByDefault: true
//   }
// }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})