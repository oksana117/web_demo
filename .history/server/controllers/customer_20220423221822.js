let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let CustomerModel = require("../models/customer.js")
let Customer = CustomerModel.C