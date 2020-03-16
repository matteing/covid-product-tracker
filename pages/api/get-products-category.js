import { getForCategory } from "../../lib";
export default async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  const products = await getForCategory(
    req.query.id,
    req.query.offset ? req.query.offset : null
  );
  return res.status(200).json(products);
};
