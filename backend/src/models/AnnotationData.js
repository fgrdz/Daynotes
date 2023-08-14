const { Schema, model } = require('mongoose');
const mongoose = require('moongose');

const AnnotationDataSchema =  new Schema({
    title: String,
    notes: String,
    priority: Boolean
});

module.exports = model('Annotations', AnnotationDataSchema);
