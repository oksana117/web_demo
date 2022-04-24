let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

var express = require('express');
var router = express.Router(); 
let customerController = require('../controllers/customer');


/* GET Route for the Order List Page - read operation */
router.get('/', customerController.displayCustomerList);

/* GET Route for displaying  Add Page - create operation */
router.get('/add', customerController.displayAddPage);

/* POST Route for processing Add Page - create operation */
router.post('/add', customerController.processAddPage);

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', customerController.displayEditPage);

/* POST Route for processing Edit Page - update operation */
router.post('/edit/:id',  customerController.processEditPage);

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id',  customerController.performDelete);

module.exports = router;
