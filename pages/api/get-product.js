import { getProduct } from "../../lib";
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  try {
    const product = await getProduct(req.query.slug);
    console.log(product);
    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
  res.end();
};
