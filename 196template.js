/**
 * Template
 * From UIUC SAIL 2018
 * CS196 FA18
 * @author Vivek Bhookya
 **/

'use strict';
const Alexa = require('alexa-sdk');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

// Unneeded
const APP_ID = undefined;

let SKILL_NAME = 'Share Love';
let INITIAL_MESSAGE = 'Hi! A message for you: \n';
let HELP_MESSAGE = 'You can say tell me a magical message, or, you can say exit... What can I help you with?';
let HELP_REPROMPT = 'What can I help you with?';
let STOP_MESSAGE = 'Goodbye!';

// Phone numbers
// MUST contain the +1
// TODO
let myNumber = '+1XXXYYYZZZZ';

// Messages that are delivered
const data = [
    "The best way to start doing something is to start doing it.",
    "A period of consistent failure does not necessarily mean that success will never be seen.",
    "If you're always learning, when are you applying?",
    "When you aren't feeling your best, you are prone to fall for the worst",
    "The way you see yourself is not the way others see you...and the way others see you isn't" +
                    " necessarily who you really are.",
    "Commitments and responsibilities cease, but knowledge and love is eternal.",
    "Live and let live. Don't let the lives of others inhibit you from living yours.",
    "Don't hold others to your personal standards, and don't hold yourself to the standards " +
                    "of others.",
    "Never let a desire grow strong enough that you begin questioning yourself.",
    "Acquired pleasures should only supplement an already joyful life.",
    "Hearing your voice always makes my day.",
    "You are a champion.",
    "You are awesome.",
    "You inspire many.",
    "You are a meaningful and special individual.",
    "Don't forget to smile, you are beautiful!",
    "You did a good job today.",
    "You are a role model and a great friend.",
    "I am glad I know you."
];

const handlers = {
    'LaunchRequest': function () {
        this.emit('ShareLoveIntent'); // TODO, name of your intent
    },
    'ShareLoveIntent': function () { // TODO, name of your intent
        // Choose the message to send!
        let messageIndex = Math.floor(Math.random() * data.length);
        let magicalMessage = data[messageIndex];
        const messageBody = INITIAL_MESSAGE + magicalMessage;

        // Handle the recipient of the message
        let recipient = this.event.request.intent.slots.recipient.value.toLowerCase(); // TODO, replace "recipient" with the name you used
        let phoneNumber = '';
    
        console.log("Current recipient is " + recipient);

        // I am the recipient
        if (recipient == 'me' ||  recipient == 'Me' ||  recipient == 'myself') {
            phoneNumber = myNumber;
            recipient == 'myself';
        }
        
        // If Echo failed to decipher the name or I haven't added the name I just used yet,
        else {
            this.response.speak('Sorry, I dont know that name. Nonetheless, you are totally cool for creating this skill.');
            this.emit(':responseReady');
        }

        let params = { PhoneNumber: phoneNumber,
                       Message: messageBody };

        // Send the message!
        deliverMessage(params, myResult=>{
        // var say = myResult;
        this.response.speak('Message sent to: ' + recipient + '. Great!');
        this.emit(':responseReady');
        });
    },
    
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
    let AWS = require('aws-sdk');
    let AWSregion = 'us-east-1';
    AWS.config.update({region: AWSregion});

    let SNS = new AWS.SNS();

    SNS.publish(params, function(err, data){
        console.log('sending message to ' + params.PhoneNumber.toString() );

        if (err) {
            console.log(err, err.stack);
        }

        callback('Success!');
    });
}
