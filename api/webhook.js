const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.status(400).json({ error: 'Invalid signature' });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    console.log('Payment successful for session:', session.id);

    // Retrieve line items to get theme information
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

    // Extract theme information from line items
    const orderItems = lineItems.data.map(item => ({
      name: item.description.split('Theme: ')[0].trim(),
      theme: item.description.includes('Theme: ') ? item.description.split('Theme: ')[1] : 'No theme specified',
      quantity: item.quantity,
      price: item.amount_total / 100,
    }));

    // Here you would:
    // 1. Save order to database
    // 2. Send order confirmation email to customer
    // 3. Send notification to you with order details

    // For now, just log the order details with themes
    console.log('Order details:', {
      order_id: session.metadata.order_id,
      customer_email: session.customer_details.email,
      customer_name: session.customer_details.name,
      shipping_address: session.shipping_details ? {
        name: session.shipping_details.name,
        address: session.shipping_details.address,
      } : null,
      amount_total: session.amount_total / 100,
      payment_status: session.payment_status,
      items: orderItems,
    });
  }

  res.status(200).json({ received: true });
}
