const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    orderKey:String,
    orderStatus:Boolean,
    orderDate:Date,
    _product: { type: Schema.Types.ObjectId, ref: 'Product' },
   // _user: { type: Schema.Types.ObjectId, ref: 'User' }

})

mongoose.model('products',orderSchema);