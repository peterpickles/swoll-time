var twilio = require('twilio');
var accountSid = 'ACaa26737be264a0c455293271d7e31574'; // Your Account SID from www.twilio.com/console
var authToken = 'f27cbb9270a2b27a039c17968fa00ca5';   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello with node',
    to: '+12063493377',  // Text this number
    from: "+12065020895", // From a valid Twilio number
})
.then((message) => console.log(message.sid));