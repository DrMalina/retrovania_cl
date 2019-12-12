const Cart = require('models/Cart');

async function fetchCurrent(req, res, next) {
  try {
    const { _id: userId } = req.user;
    const cart = await Cart.findOne({ userId }).populate('products');

    res.status(200).send({ cart });
  } catch (err) {
    next(err);
  }
}

module.exports = fetchCurrent;
