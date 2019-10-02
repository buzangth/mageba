const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    orderKey:String,
    orderStatus:Boolean,
    orderDate:Date,
    _item: { type: Schema.Types.ObjectId, ref: 'Item' },
   // _user: { type: Schema.Types.ObjectId, ref: 'User' }

})

mongoose.model('products',orderSchema);