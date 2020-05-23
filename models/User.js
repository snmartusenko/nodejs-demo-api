const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypter = require('../helpers/crypter');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    email: {
        type: String,
        required: false,
        max: 255
    },
    hashedPassword: {
        type: String,
        required: true,
        max: 255
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});


UserSchema.methods.passwordIsValid = function (pass) {
    return pass === crypter.decrypt(this.hashedPassword);
}

//Export model
module.exports = mongoose.model('User', UserSchema);
