import { createComment } from "../../lib";

export default async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate");
  switch (req.method) {
    case "GET":
      //...
      break;
    case "POST":
      const data = await createComment(
        req.body.id,
        req.body.name,
        req.body.content
      );
      console.log(data);
      return res.status(201).json(data);
      break;
    default:
      res.status(405).end(); //Method Not Allowe d
      break;
  }
};
