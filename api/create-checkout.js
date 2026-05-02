const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    // Create line items for Stripe checkout
    const lineItems = cart.map((item, index) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          description: item.theme ? `Theme: ${item.theme}` : 'No theme specified',
        },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity || 1,
    }));

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/?canceled=true`,
      customer_email: req.body.customerEmail || undefined,
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      customer_creation: 'always',
      metadata: {
        order_id: Date.now().toString(),
      },
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
