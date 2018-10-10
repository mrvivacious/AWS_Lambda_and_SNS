{
    "interactionModel": {
        "languageModel": {
            "invocationName": "share love",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": [
                        "cancel please",
                        "please cancel",
                        "Cancel"
                    ]
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": [
                        "please help me",
                        "please help",
                        "Help me",
                        "Help"
                    ]
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": [
                        "please stop",
                        "logout",
                        "exit",
                        "quit",
                        "stop"
                    ]
                },
                {
                    "name": "ShareLoveIntent",
                    "slots": [
                        {
                            "name": "recipient",
                            "type": "recipient"
                        }
                    ],
                    "samples": [
                        "ask share love to send a message to {recipient}",
                        "ask share love to message {recipient}",
                        "share love with {recipient}",
                        "activate share love and send some love to {recipient}",
                        "activate share love and share love {recipient}",
                        "use share love to share some love with {recipient}",
                        "ask share love to share a message to {recipient}",
                        "use share love to share love with {recipient}",
                        "ask share love to share love with {recipient}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "recipient",
                    "values": [
                        {
                            "name": {
                                "value": "Me",
                                "synonyms": [
                                    "Myself"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "dialog": {
            "intents": [
                {
                    "name": "ShareLoveIntent",
                    "confirmationRequired": false,
                    "prompts": {},
                    "slots": [
                        {
                            "name": "recipient",
                            "type": "recipient",
                            "confirmationRequired": false,
                            "elicitationRequired": false
                        }
                    ]
                }
            ]
        }
    }
}
