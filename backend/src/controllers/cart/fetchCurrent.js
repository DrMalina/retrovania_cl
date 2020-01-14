const Cart = require('models/Cart');

async function fetchCurrent(req, res, next) {
  try {
    const { _id: userId } = req.user;

    const cart = await Cart.findOne({ userId })
      .select('products')
      .populate('products.productId')
      .lean();

    const products = cart ? cart.products : [];

    const flattenedProductsData = products.map(({ productId, ...rest }) => ({
      ...productId,
      ...rest,
    }));

    res.status(200).send({ cart: flattenedProductsData });
  } catch (err) {
    next(err);
  }
}

module.exports = fetchCurrent;
