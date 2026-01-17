import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { id } = req.query;
  const MAX = 170;

  let claimed = await kv.get(`promo:${id}`);
  claimed = Number(claimed || 0);

  if (claimed >= MAX) {
    return res.status(200).send("FULL");
  }

  await kv.set(`promo:${id}`, claimed + 1);
  res.status(200).send("OK");
}
