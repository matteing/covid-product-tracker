import { getProduct } from "../../lib";
module.exports = async (req, res) => {
  res.status(200).json(await getProduct(req.query.slug));
};
