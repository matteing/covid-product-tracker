import { getForCategory } from "../../lib";
module.exports = async (req, res) => {
  res
    .status(200)
    .json(
      await getForCategory(
        req.query.id,
        req.query.offset ? req.query.offset : null
      )
    )
    .end();
};
