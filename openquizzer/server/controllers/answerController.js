const answerService = require('../services/answerService');

exports.addAnswer = async(req,res) => { 
  try{ 
    //assume that the answer body is this for  now, laterjust just change the req.body format.
    const{nickName, answer } = req.body;
    answerService.submitAnswer(nickName,answer);
  }
  catch(error){
    res.status(error.statusCode).json({ ok: false, message: error.message });
  }
};
