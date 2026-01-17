import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const id = Math.random().toString(36).slice(2, 8);

  // initialize counter for this link
  await kv.set(`promo:${id}`, 0);

  res.status(200).json({
    link: `${req.headers.origin}/p/${id}`,
    cap: 170
  });
}
