/**
 * Share Love lambda template
 * Written for UIUC CS@ILLINOIS SAIL 2018
 * @author Vivek Bhookya
 **/

// We now have access to the Alexa API
'use strict';
const Alexa = require('alexa-sdk');

// Handlers are the intents we make active when this Lambda is called.
// Handlers can be thought of as subroutines specific to this program. 
// We inform the Alexa cloud of our handlers and their functions with the following code 
exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

// The details of the skill(s) associated with this Lambda
// TODO: Fill in your skill name. Do you want to change the message intro (INITIAL_MESSAGE) ?
const APP_ID = undefined;
let SKILL_NAME = '';
let INITIAL_MESSAGE = 'Hi! Here\'s a message for you: \n';
let HELP_MESSAGE = 'Ask me to send a message to a name of your friend!';
let HELP_REPROMPT = 'Ask me to send a message to a name of your friend.';
let STOP_MESSAGE = 'Goodbye!';

// TODO: Your phone number for debugging purposes. Add the numbers of the people
//  you want to message!
// Phone number should follow the E.164 format
// https://en.wikipedia.org/wiki/E.164
let myNumber = '+1XXXYYYZZZZ';

// Messages that are delivered
// TODO: Add your own! Here are some to serve as an inspiration
const data = [
    "You are a champion.",
    "You are awesome.",
    "You inspire many.",
    "You are a meaningful and special individual.",
    "Don't forget to smile, you are beautiful!",
    "You did a good job today.",
    "You are a role model and a great friend.",
    "I am glad I know you."
];

// HANDLERS
// TODO: What is the name of your intent?
const handlers = {
    'LaunchRequest': function () {
        this.emit('NAMEOFYOURINTENT');
    },
    'NAMEOFYOURINTENT': function () {
        // Currently only texts "You are a champion."
        // TODO: How can we choose a random message? Hint: Math.random()
        let messageBody = INITIAL_MESSAGE + data[0];

        // Handle the recipient of the message
        // This line extracts the value of the recipient we specified and stores it
        /// as a string. We use the string to match our list of numbers against below
        let recipient = this.event.request.intent.slots.SLOTNAME.value;
        let phoneNumber = '';   // Declaration, to be initialized after determining our recipient

        // Debugging purposes
        // http://aws.amazon.com/cloudwatch
        console.log("The recipient is " + recipient);

        // I am the recipient
        if (recipient == 'me' ||  recipient == 'Me' ||  recipient == 'myself') {
            phoneNumber = myNumber;
        }

        // Sample code for handling the phone number of a friend
        else if (recipient == 'FRIEND') {
            phoneNumber = FRIEND_NUMBER;    // Initialize FRIEND_NUMBER above!
        }

        // If Alexa failed to decipher the name or the name used isn't a slot value,
        else {
            this.response.speak('Sorry, I dont know that name. Did you remember to include this name in the slot values in the developer console?');
            this.emit(':responseReady');
        }

        // The phone number and message to be sent is stored as such
        //  because of the way SNS.publish() accepts arguments
        let params = { PhoneNumber: phoneNumber,
                       Message: messageBody };

        // Send the message!
        // Currently, this will send out:
        // + "Hi! Here's a message for you:"
        // + "You are a champion."
        // Line 1 will change if you edit the INITIAL_MESSAGE
        // The message itself (line 2) can be rotated around. Did you solve that TODO?
        deliverMessage(params, myResult=>{
        this.response.speak('Message sent to: ' + recipient + '.');
        this.emit(':responseReady');
        });
    },

// Other intents
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

// Helper function that handles SNS and delivers the message
function deliverMessage(params, callback) {
    // Initializing AWS and SNS to fulfill our task
    let AWS = require('aws-sdk');
    let AWSregion = 'us-east-1';
    AWS.config.update({region: AWSregion});

    let SNS = new AWS.SNS();

    // Send the message!
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#publish
    SNS.publish(params, function(err, data){
        console.log('sending message to ' + params.PhoneNumber.toString());

        if (err) {
            console.log(err, err.stack);
        }

        callback('Success!');
    });
}
