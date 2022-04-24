let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let CustomerModel = require("../models/customer.js")
let Customer = CustomerModel.CustomerSchema;
let path = require('path')

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
      "id": req.body.id,
      "created": req.body.created,
      "status": req.body.status,
      "customer": req.body.customer,
      "SKU": req.body.SKU,
      "photo": req.body.photo,
      "condition": req.body.condition,
      "size": req.body.size,
      "type": req.body.type,
      "origin_address": req.body.origin_address,
      "shipping_address":req.body.shipping_address
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

    Order.findById(id, (err, orderToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.render('order/edit', {title: 'Edit the order', order: orderToEdit})
        }
    });
}



module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedOrder = Order({
      "_id": id,
      "id": req.body.id,
      "created":req.body.created,
      "status": req.body.status,
      "customer": req.body.customer,
      "SKU": req.body.SKU,
      "photo": req.body.photo,
      "condition": req.body.condition,
      "size": req.body.size,
      "type": req.body.type,
      "origin_address": req.body.origin_address,
      "shipping_address":req.body.shipping_address
      
    });
    
    Order.updateOne({ _id: id }, updatedOrder, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/order-list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Order.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             
             res.redirect('/order-list');
        }
    });
}









