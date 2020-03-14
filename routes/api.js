const express = require('express');

const router = express.Router();

const Product = require('../models/Product');

// Routes
router.get('/', (req, res) => {

    // let temp = localStorage.getItem('username');
    // console.log(temp);

    console.log(req.body);

    Product.find({  })
        .then((data) => {
            // console.log('Data: ', data);
            // let arr = [data];
            res.send(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newProduct = new Product(data);

    newProduct.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;