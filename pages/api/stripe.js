// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['US'],
        },
        line_items: req.body.cartItems.map(item => {
          return {
            price_data: {
              currency: 'usd',
              unit_amount: item.itemPrice * 100,
              tax_behavior: 'inclusive',
              product_data: {
                name: item.original ? `${item.title} - Original` : `${item.title} - Print`,
                description: item.original ? `${item.original_dimensions}` : `${item.selectedSize.size} - ${item.selectedMedia.media} - ${item.selectedFrame.frame}`,
                images: item.image[0]
              }
            },
            quantity: 1
          }
        }),
        success_url: `${req.headers.origin}/purchase_success?success=true&original=${req.body.cartItems.find(o => o.original === true) ? 'sold' : 'available'}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/purchase_success?canceled=true`
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}