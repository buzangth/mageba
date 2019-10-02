const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new Schema({
    itemName: String,
    itemDescription: String,
    itemPrice: Number,
    itemQuantity: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }

})

mongoose.model('items',itemSchema);