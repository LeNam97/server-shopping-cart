const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  // eslint-disable-next-line no-console
  console.log("MongoDB Connected...");
});

module.exports = db
