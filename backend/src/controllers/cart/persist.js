const mongoose = require('mongoose');
const Cart = require('models/Cart');

async function persist(req, res, next) {
  try {
    const { _id } = req.user;
    const userId = mongoose.Types.ObjectId(_id);

    if (req.body && req.body.cart) {
      const products = req.body.cart.map(({ _id: id, from, to }) => {
        return {
          productId: mongoose.Types.ObjectId(id),
          from,
          to,
        };
      });

      const cart = await Cart.findOneAndUpdate({ userId }, { products }, { new: true });

      if (!cart) {
        await Cart.create({
          userId,
          products,
        });
      }
    }

    res.status(201).send();
  } catch (err) {
    next(err);
  }
}

module.exports = persist;
