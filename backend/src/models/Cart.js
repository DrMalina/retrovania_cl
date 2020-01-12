const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: 'game' }],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Cart = mongoose.model('cart', schema);

module.exports = Cart;
