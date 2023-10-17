const Store = require('../models/store.model')

module.exports.createStore = (request, response) => {
    Store.create(request.body) 
        .then(store => response.json(store))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllStores = (request, response) => {
    Store.find({}).sort({storeNumber: 1})
        .then(stores => {
            console.log(stores)
            response.json(stores)
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getStore = (request, response) => {
    Store.findOne({_id:request.params.id})
        .then(store => response.json(store))
        .catch(err => response.json(err));
}

module.exports.updateStore = (request, response) => {
    Store.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true, context:'query'})
        .then(updatedstore => response.json(updatedstore))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteStore = (request, response) => {
    Store.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}