const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const { title } = require('process');
const bookRouter = express.Router();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = [{
  title: 'CEO',
  genre: 'Biography',
  author: 'Washington',
  read: false
}];

bookRouter.route('/').get((req, res) => {
  res.render('books',
    {
      nav: [{ link: '/books', title: 'Services' },
      { link: '/authors', title: 'Authors' }],
      title: 'Services',
      books
    })
});

bookRouter.route('/single').get((req, res) => {
  res.send('Single books')
});

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  res.render('index', {
    nav: [{ link: '/books', title: 'Services' },
    { link: '/authors', title: 'Authors' }],
    title: 'NyumbaKumiApp Hub'
  }
  );
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
