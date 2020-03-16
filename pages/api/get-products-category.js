import { getForCategory } from "../../lib";
export default async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  try {
    const products = await getForCategory(
      req.query.id,
      req.query.offset ? req.query.offset : null
    );
    console.log(products);
    return res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
  res.end();
};
