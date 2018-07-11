const mongoose = require('../../database');

const LabSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    isReserved: {
        type: Boolean,
        required: true,
        //select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,      
    }
});

const Lab = mongoose.model('Lab', LabSchema);

module.exports = Lab;