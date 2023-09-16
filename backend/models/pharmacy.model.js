const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drugSchema = new Schema({
    name: { type: String, required: true },
    dosage: { type: String, required: false },
    expirationDate: { type: Date, required: true },
    quantity: { type: Number, required: true }
});

const pharmacySchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true},
    drugs: [drugSchema]
});

const Pharmacy = mongoose.model('Pharmacy', pharmacySchema);

module.exports = Pharmacy;