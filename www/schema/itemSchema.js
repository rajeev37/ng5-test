var mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    itemDone: {
        type: Boolean,
        required: true
    }
});

const Item = module.exports = mongoose.model('item', ItemSchema);
