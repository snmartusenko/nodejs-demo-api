// Nodejs encryption with CTR
const CONFIG = require('../config.json');
const crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    constPass = CONFIG.CryptPass;

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, constPass)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, constPass)
    let dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}


module.exports = {
    encrypt: encrypt,
    decrypt: decrypt,
}

