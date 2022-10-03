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
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price_data: {
              currency: 'usd',
              unit_amount: req.body.cartTotalPrice * 100,
              tax_behavior: 'inclusive',
              product_data: {
                name: `${req.body.cartItems[0].title} - Original`,
                images: [req.body.cartItems[0].image]
              }
            },
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/purchase_success?success=true`,
        cancel_url: `${req.headers.origin}/purchase_success?canceled=true`
        // automatic_tax: {enabled: true},
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