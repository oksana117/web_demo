let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let orderController = require('../controllers/customer');


/* GET Route for the Order List Page - read operation */
router.get('/', orderController.displayOrderList);


/* GET Route for the Order FIlter List Page - read operation */
router.get('/filter', orderController.displayFilterOrderList);

/* POST Route for the Order Filter List Page - read operation */
router.post('/filter', orderController.processFilterOrderList);

/* GET Route for displaying  Add Page - create operation */
router.get('/add', orderController.displayAddPage);

/* POST Route for processing Add Page - create operation */
router.post('/add', orderController.processAddPage);

/* GET Route for displaying  Edit Page - update operation */
router.get('/edit/:id',  orderController.displayEditPage);

/* POST Route for processing Edit Page - update operation */
router.post('/edit/:id',  orderController.processEditPage);

/* GET Route to perform   Deletion Page - delete operation */
router.get('/delete/:id',  orderController.performDelete);

module.exports = router;
