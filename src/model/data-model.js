const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    _id: {
        required: true,
        type: String
    },
    key: {
        type: String
    },
    value: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: { 
        type: Array
    }
})

module.exports = new mongoose.model('records', dataSchema);