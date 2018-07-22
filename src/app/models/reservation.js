
const mongoose = require('../../database');

const ReservationSchema = new mongoose.Schema({
    //User que reservou
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    //Laboratirio
    laboratory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lab',
        require: true,
    },
    //Observações da reserva.
    observations: {
        type: String,
        require: false,
        default: "Não há observações para essa reserva.",
    },
    data: {
        // no momento, não estarei utilizando esse campo,
        type: Date,
        require: false,
        default: Date.now
    }
},{ timestamps: true });


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;