const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
let dbURI = 'mongodb://127.0.0.1:27017/travlr';
const readLine = require('readline');

//mongoose.set('useUnifiedTopology', true);
const connect = () => {
  setTimeout(() => mongoose.connect(dbURI, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
    // Not supported 
    //useCreateIndex: true
  },).then((res) => {
    console.log("Database Connected");
  }).catch(error => {console.log(error);
}))};

//if (process.env.NODE_ENV === 'production') {
//  dbURI = process.env.MONGODB_URI;
//}
//mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close( () => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts                                 
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

// Opening the connection removed the schema is not registered
connect();

require('./travlr');

