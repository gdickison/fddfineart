// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from "../../lib/client";

export default async function originalSold(req, res) {
  const { _id } = JSON.parse(req.body)

  try {
    client.patch(_id)
    .set({
      original_available: false
    })
    .commit()
  } catch(error) {
    return res.status(500).json({message: 'Could not update painting', error})
  }
  res.status(200).json({ message: 'Painting updated as sold' })
}
