const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    storeName: { 
        type: String,
        minLength: [3, "Name must contain 3 characters!"], 
        required: [true, "Name must contain 3 characters!"]
    }, 
    storeNumber: {
        type: Number, 
        min: [1, "Must be a number greater than 0"], 
        required: [true, "Must be a number greater than 0"]
    }, 
    open: {type: Boolean}
}, { timestamps: true })

module.exports = mongoose.model('Store', StoreSchema);
