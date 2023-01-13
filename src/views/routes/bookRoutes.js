const express = require('express');
const bookRouter = express.Router();

function router(nav){
    var books = [{
        title: 'CEO',
        genre: 'Biography',
        author: 'Washington',
        read: false
    }];
    
    bookRouter.route('/').get((req, res) => {
        res.render('books',
            {
                nav,
                title: 'Services',
                books
            })
    });
    
    bookRouter.route('/:id').get((req, res) => {
        const {id} = req.params
        res.render('bookListView',
        {
            nav,
            title: 'Service',
            book: books[id]
        })
    });

    return bookRouter;
}

module.exports = router;
