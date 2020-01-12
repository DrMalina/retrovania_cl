const mongoose = require('mongoose');
const Cart = require('models/Cart');

async function persist(req, res, next) {
  try {
    const { _id: userId } = req.user;

    if (req.body.cart.length) {
      const products = req.body.cart.map(({ _id }) => {
        return mongoose.Types.ObjectId(_id);
      });

      const cart = await Cart.findOneAndUpdate({ userId }, { products }, { new: true });

      if (!cart) {
        await Cart.create({
          userId,
          products: req.body.cart,
        });
      }
    }

    res.status(201).send();
  } catch (err) {
    next(err);
  }
}

module.exports = persist;
