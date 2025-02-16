import { Category } from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Category.find());
  }

  if (method === "POST") {
    const { name } = req.body;
    const categoryDoc = await Category.create({
      name,
    });
    res.json(categoryDoc);
  }

  if (method === "PUT") {
    const { name, _id } = req.body;
    const categoryDoc = await Category.updateOne(
      { _id },
      {
        name,
      }
    );
    res.json(categoryDoc);
  }

  if (method === "DELETE") {
    const { _id } = req.query;
    await Category.deleteOne({ _id });
    res.json("ok");
  }
}
