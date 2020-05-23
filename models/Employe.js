const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        max: 100
    },
    lastName: {
        type: String,
        required: false,
        max: 100
    },
    login: {
        type: String,
        required: false,
    },
    workPhone: {
        type: String,
        required: false,
    },
    personalPhone: {
        type: String,
        required: false,
    },
    workEmail: {
        type: String,
        required: false,
    },
    personalEmail: {
        type: String,
        required: false,
    },
    businessLocation: {
        type: String,
        required: false,
    },
    company: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
    },
    hourlyRate: {
        type: Number,
        required: false,
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});


module.exports = mongoose.model('Employe', EmployeSchema);
