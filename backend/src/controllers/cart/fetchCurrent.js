const Cart = require('models/Cart');

async function fetchCurrent(req, res, next) {
  try {
    const { _id: userId } = req.user;

    const cart = await Cart.findOne({ userId }).populate('products');

    const products = cart ? cart.products : [];

    res.status(200).send({ cart: products });
  } catch (err) {
    next(err);
  }
}

module.exports = fetchCurrent;
