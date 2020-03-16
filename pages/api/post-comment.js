import { createComment } from "../../lib";

export default async (req, res) => {
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
