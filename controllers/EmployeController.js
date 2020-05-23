const Employe = require('../models/Employe');


exports.getAll = async function (req, res) {
    let models = await Employe.find()
        .catch(err => console.log(err.message))
    return models ? res.json(models) : [];
};


exports.getOne = async function (req, res) {
    let model = await Employe.findById(req.params.id)
        .catch(err => console.log(err.message))
    return model ? res.json(model) : res.status(404).end();
};


exports.create = async function (req, res) {
    let model = await Employe.create(req.body)
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        })
    return model ? res.json(model) : [];
};


exports.delete = async function (req, res) {
    let model = await Employe.findOneAndDelete({
        _id: req.params.id
    })
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        })
    return model ? res.json(model) : res.status(404).end();
};


exports.update = async function (req, res) {
    let model = await Employe.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true,})
        .catch(err => {
            console.log("TCL: err", err.message);
            return res.status(400).json(err);
        });
    return model ? res.json(model) : res.status(404).end();
};
