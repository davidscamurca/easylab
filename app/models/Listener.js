const mongoose = require('../../database');

const ListenerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    reserveId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reservation',
        require: true
    },
},{ timestamps: true });

const Listener = mongoose.model('Listener', ListenerSchema);

module.exports = Listener;