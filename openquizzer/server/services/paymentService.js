const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
//stripe checkout session 
exports.startCheckout = async ({priceId,userId}) => {
  if(!priceId || typeof priceId !== 'string'){
    const error = new Error("invalid input");
    error.statusCode = 400;
    throw error;
    }
    //must follow stripe keys otherwise it will ignore them 
    const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    //quantity is required
    line_items: [{priceId, quantity:1}],
    //where to navigate the user on successful payments
    success_url:`${process.env.BASE_URL}/payment-success?sessionId={CHECKOUT_SESSION_ID}`,
    //where to navigate the user on unsuccessful payments
    cancel_url: `${process.env.BASE_URL}/payment-cancel`,
    metadata: {userId} 
  });

  return { sessionId: session.id };
};