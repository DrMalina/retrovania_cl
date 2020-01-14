const mongoose = require('mongoose');
const Cart = require('models/Cart');

async function persist(req, res, next) {
  try {
    const { _id } = req.user;
    const userId = mongoose.Types.ObjectId(_id);

    if (req.body && req.body.cart) {
      const products = req.body.cart.map(({ _id: id }) => {
        return mongoose.Types.ObjectId(id);
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
