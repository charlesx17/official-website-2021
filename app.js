const express = require('express');

const { render } = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const pageRouter = require('./routes/pagesRoutes');
const membersRouter = require('./routes/membersRoute');
const { connect } = require('./routes/pagesRoutes');

dotenv.config({ path: './config.env' });

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use('/css', express.static(`${__dirname}/public/css`));
app.use('/css', express.static(`${__dirname}/public/images`));
app.use('/css', express.static(`${__dirname}/public/js`));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

const port = 3000;

app.set('view engine', 'ejs');

app.use('/', pageRouter);
app.use('/members', membersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
