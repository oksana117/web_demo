let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let customerController = require('../controllers/customer');


/* GET Route for the Order List Page - read operation */
router.get('/', customerController.displayOrderList);


/* GET Route for displaying  Add Page - create operation */
router.get('/add', customerController.displayAddPage);

/* POST Route for processing Add Page - create operation */
router.post('/add', customerController.processAddPage);

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id', customerController.displayEditPage);

/* POST Route for processing Edit Page - update operation */
router.post('/edit/:id',  orderController.processEditPage);

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id',  orderController.performDelete);

module.exports = router;
