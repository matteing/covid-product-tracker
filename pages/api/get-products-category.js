import { getForCategory } from "../../lib";
export default async (req, res) => {
  const products = await getForCategory(
    req.query.id,
    req.query.offset ? req.query.offset : null
  );
  return res.status(200).json(products);
};
