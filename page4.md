# Lambda and SNS
<p>
Please download/copy paste the file called template.js. This is the boilerplate code for this skill's logic. 
<br>We can delete all the default code from the Fact skill template in index.js and paste template.js there. No need to rename the files, don't worry.
</p>

<p>
There are several TODO:s (CTRL+F | CMD+F TODO) in the file. These are tasks that you will complete in a way most likely unique to you. 
<br>The code can be pasted and edited directly in the Lambda code viewer. Save frequently (CTRL+S | CMD+S) and click the orange Save button in the top right corner as well.
</p>

#### TODOs

<ol>
<li>What did you name your skill?</li>
<li>Add your/an easy to access phone number to help you debug whether or not your messages are sending!</li>
<li>Add your own messages! Maybe add jokes or poems to share as well? Have fun 😊</li>
<li>What did you name your intent? This is the same name you used in the Alexa dashboard when setting up the utterances and slot types.</li>
<li>I've set the template to default to the first message in the given dataset. Randomizing messages, that's for you to figure out!</li>
<li>Finally, make sure to fix the SLOTNAME value with the name of the slot that you used.*<?li>
</ol>

<p>
If your code saves correctly and there aren't any errors or warnings, go to your skill in the Alexa Skills Kit dashboard and 
select "Test," located to the right of "Build" on the menu bar. 
<br>You can speak directly into your computer or you can type your phrase in the Alexa simulator. Remember to add your invocation name!
</p>

<p>
Done correctly, Alexa should say that a message has been sent and your phone (if you are testing with your phone) should receive a text message soon after.
</p>

<p>
If there are some odd problems you are running into, check the Skill I/O portal, immediately to the left of the simulator.
<br>Look for code that resembles the following:
</p>

```json
"request": {
		"type": "IntentRequest",
		"requestId": "amzn1.echo-api.request.BlahBlah",
		"timestamp": "2018-04-06T23:08:17Z",
		"locale": "en-US",
		"intent": {
			"name": "ShareLoveIntent",
			"confirmationStatus": "NONE",
			"slots": {
				"recipient": {
					"name": "recipient",
					"value": "me",
```

<p>
In slots.recipient, is "value" what you expected it to be? If not, try pronouncing the name you are saying differently -- I sometimes run into issues where 
I speak too fast, too quiet, or I enunciate sounds difficult for Alexa to pick up. To test your pronounciation, simply speak into the Alexa simulator. It will 
output exactly what Alexa thinks you said, allowing you to experiment with different pronounciations to fit your needs.
<br>Also, is the recipient you specified included in the voice model for this skill? Did you include this name as a recognizable slot value?
</p>

<p>
If you are having other persistent issues, try Google. Also, the <a href="https://github.com/alexa/alexa-cookbook/tree/master/aws/Amazon-SNS">Alexa Cookbook</a> is a great resource for template code.
</p>

### <a href="https://github.com/mrvivacious/AWS_Lambda_and_SNS/blob/master/page5.md">I just successfully used Alexa to send myself a text!</a>

<p>
* = Alexa sends a request formatted in JSON to Lambda. The line, 
<br>let recipient = this.event.request.intent.slots.SLOTNAME.value;
<br>Tells Lambda to get the JSON request associated with this current request (this.event.request), look for the intent requested (.intent),
 search the slots this intent uses (.slots), and finally grabs the values uttered by the user (.SLOTNAME.value). The variable recipient stores the value we found.
 </p>
