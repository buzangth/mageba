const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    productName: String,
    productDescription: String,
    productPrice: Number,
    productQuantity: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' }

})

mongoose.model('products',productSchema);