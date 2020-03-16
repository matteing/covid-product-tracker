import { getProduct } from "../../lib";
module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  try {
    return res.status(200).json(await getProduct(req.query.slug));
  } catch (e) {
    console.log(e);
    res.status(500);
  }
  res.end();
};
