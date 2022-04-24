let mongoose = require('mongoose');

let CustomerSchema = mongoose.Schema({
      
    firstName:
    {
        type: String,
        default: "",
        trim: true,
        required: "first name is required"
    },
    lastName:
    {
        type: String,
        default: "",
        trim: true,
        required: "last name is required"
    },
    email:
    {
        type: String,
        default: "",
        trim: true,
        required: "email address is required",
    },
    gender:
    {
        type: String,
        default: "",
        trim: true,
        required: "gender is required",
    },
    city:
    {
        type: String,
        default: "",
        trim: true,
    },
    birthday:
    {
        type: Date,
        trim: true,
    }
}, {
    collection:"order"
});

