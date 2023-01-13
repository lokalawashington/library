const express = require('express');
const bookRouter = express.Router();

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

bookRouter.route('/:id').get((req, res) => {
    const {id} = req.params
    res.render('bookListView',
    {
        nav: [{ link: '/books', title: 'Services' },
        { link: '/authors', title: 'Authors' }],
        title: 'Book',
        book: books[id]
    })
});

module.exports = bookRouter;
