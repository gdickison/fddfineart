import {isValidSignature, SIGNATURE_HEADER_NAME} from '@sanity/webhook'

export default async function handler(req, res) {
  try {
    console.log('req.body', req.body)
    const body = readBody(req)
    const signature = request.headers[SIGNATURE_HEADER_NAME]
    const secret = process.env.SECRET_REVALIDATE_TOKEN
    if(!isValidSignature(body, signature, secret)){
      return res.status(401).json({ message: 'Invalid request' })
    }
    const {slug} = req.body
    await res.revalidate(`/product-details/${slug}`)
    console.log('slug', slug)
    res.status(200).json({ message: 'Painting details revalidated' })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
