const processMessage = require('./process-message');

module.exports = (req, res) => {
  if (req.body.originalDetectIntentRequest.source === 'facebook') {
    processMessage(req.body.originalDetectIntentRequest.payload.data);
    res.status(200).end();
  } else {
    res.status(200).end();
  }
};
