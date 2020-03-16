import { getProduct, getFeaturedCategories } from "../../lib";
module.exports = async (req, res) => {
  res.status(200).json(await getFeaturedCategories());
};
