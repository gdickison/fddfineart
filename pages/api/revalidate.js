import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook'

export default async function handler(req, res) {
console.log('req.body', req.body)
  try {
    const signature = request.headers[SIGNATURE_HEADER_NAME]
    if(!isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.SECRET_REVALIDATE_TOKEN
      )
    ){
      return res.status(401).json({ message: 'Invalid request' })
    }

    await res.revalidate(`/product-details/${req.body.slug}`)
    console.log('slug', req.body.slug)
    res.status(200).json({ message: 'Painting details revalidated' })
  } catch (err) {
    return res.status(500).send(req.body)
  }
}
