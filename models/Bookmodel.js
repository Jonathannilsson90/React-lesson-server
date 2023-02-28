/// title(string),author(string),liked(boolean).
const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
title:{
    type: String,
    required: true,
},
author:{
    type: String,
    required: true,
},
liked:{
    type: Boolean,
    required: true,
},
img:{
type: String,
required: false,
}

})

module.exports = mongoose.model("book",bookSchema)