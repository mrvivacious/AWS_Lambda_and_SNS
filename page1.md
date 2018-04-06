# Setup VUI in Developer Console 


<p>Now go back to <a href="http://developer.amazon.com">developer.amazon.com</a></p>

Once you've signed in, click on "Developer Console" on the top right of the blue bar. Search for "Alexa Skills Kit" on the top gray menu. 

### The Developer Console 
<p>You will be using the developer console to set up the Voice User Interface (VUI)</p>

<ol> 
<li>Press the blue "Create Skill" button on the right side of the screen</li>

<li>Enter a skill name and press "Next"</li>

<li>Of the four options, choose "Custom", then press the blue "Create Skill button at the top right"</li>

<li>From the menu on the left side of your screen, press "Add" next to the "Intents" option</li>
 
<li>Enter a name for your intent in camel case followed by the word "Intent" i.e. ShareLoveIntent</li>

<li>Come up with utterances, or phrases a user might say to Alexa to invoke your skill. In this case, for example a 
sample utterance might be "Ask ShareLove to share love with {ContactName}". Be sure to include the name of your skill
in the utterance along with a target. In the provided example, the target is {ContactName} which is actually a slot type 
discussed more in the next step. Just make sure the target is inlcuded inside curly braces {}. Make sure all of your
utterances use the same target name.</li>

<li>After adding utterances, go to the menu on the left again and press "Add" next to the "Slot Types". option</li>

<li>Enter a name for your Slot Type, make sure you type it exactly as you did in the curly braces of your utterances.</li>
 
<li>Now add values for your Slot Type. The values will be the recipients of your messages. Examples of values inlude:
Mom, Dad, Jacob, Ashley, etc. Do not add all recipients in one line. After adding each recipient, press the add button on the
right side of the bar to continue adding individual values.</li>

<li>Finally, using the menu on the left hand side, navigate back to your custom Intent. Below your utterances, there will
be a table of "Intent Slots". You should see your Slot in this table. Now you must connect the Slot Type to the utterances
by using the dropdown menu under "SLOT TYPE" and selecting your custom Slot name that shows up.</li>

<li>Congratulations, the VUI is now set up!</li>
</ol>

### <a href="https://github.com/mrvivacious/AWS_Lambda_and_SNS/blob/master/page2.md">AWS Lambda</a>
