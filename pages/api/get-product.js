import { getProduct } from "../../lib";
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800");
  return res.status(200).json(await getProduct(req.query.slug));
};
