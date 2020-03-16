import { getProduct, getFeaturedCategories } from "../../lib";
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  try {
    const categories = await getFeaturedCategories();
    console.log(categories);
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
  res.end();
};
