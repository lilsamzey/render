const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql'); // Yeni ekledik
const config = require('./config'); // Yeni ekledik

// const activityLogsRoutes = require('./routes/activityLogsRoutes');
// const studentsRoutes = require('./routes/studentsRoutes');
// const teachersRoutes = require('./routes/teachersRoutes');
// const coursesRoutes = require('./routes/coursesRoutes');
// const usersRoutes = require('./routes/usersRoutes');
// const adminsRoutes = require('./routes/adminsRoutes');
// const chatRoutes = require('./routes/chatRoutes');
// const filesRoutes = require('./routes/filesRoutes');
// const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Yeni ekledik
const dbConfig = {
    server: config.server,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    options: {
      trustServerCertificate: true
    }
  };

// Yeni ekledik
sql.connect(dbConfig, err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Database connected successfully');
  }
});

// app.use('/activitylogs', activityLogsRoutes);

// app.use('/students', studentsRoutes);
// app.use('/teachers', teachersRoutes);
// app.use('/courses', coursesRoutes);
// app.use('/users', usersRoutes);
// app.use('/admins', adminsRoutes);
// app.use('/chat', chatRoutes);
// app.use('/files', filesRoutes);

// // Yeni ekledik
// app.use('/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
