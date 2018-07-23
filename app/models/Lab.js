const mongoose = require('../../database');

const LabSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    isReserved: {
        type: Boolean,
        required: true,
        default: false,
    },
},{ timestamps: true });

const Lab = mongoose.model('Lab', LabSchema);

module.exports = Lab;