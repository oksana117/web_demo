let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let CustomerModel = require("../models/customer.js")
let Customer = CustomerModel.CustomerSchema;
let path = require('path');

module.exports = router;

module.exports.displayCustomerList = (req, res, next) => {
    Customer.find((err, customerList) => {
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('customer/list', {
                title: 'Customers List',
                CustomerList: customerList});      
        }
    });
}



module.exports.displayAddPage = (req, res, next) => {
    res.render('customer/add', {title: 'Add Customer'})          
}



module.exports.processAddPage = (req, res, next) => {
    let newCustomer = Customer({
      "firstName": req.body.fname,
      "lastName": req.body.lname,
      "email": req.body.email,
      "gender": req.body.gender,
      "city": req.body.citySel,
      "birthday": req.body.birthday
    });

    Customer.create(newCustomer, (err, Customer) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/customer-list');
        }
    });

}



module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Customer.findById(id, (err, customerToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.render('customer/edit', {title: 'Edit Customer Information', customer: customerToEdit})
        }
    });
}



module.exports.processEditPage =  (req, res, next) => {
    let id = req.params.id

    let updatedCustomer = Customer({
        "_id": id,
        "firstName": req.body.fname,
        "lastName": req.body.lname,
        "email": req.body.email,
        "gender": req.body.gender,
        "city": req.body.citySel,
        "birthday": req.body.birthday
      
    });

   
    
    Customer.updateOne({_id: id}, updatedCustomer, {}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/customer-list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Customer.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             
             res.redirect('/customer-list');
        }
    });
}









