const paymentService = require('../services/paymentService');

exports.handlePayment = async(req,res) => {
   const {price,userId} = req.body;
   try{
    const sessionId = await paymentService.startCheckout({price,userId});
    return res.status(200).json({ok:true, sessionId});
  }
  catch(error){
   return res.status(error.statusCode).json({ok:false, mess:error.message});
  }
}