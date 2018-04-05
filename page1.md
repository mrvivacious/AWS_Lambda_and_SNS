# Setup VUI in Developer Console 

### 1. 
<p>After creating an account, click on "Developer Console" on the top right of the blue bar</p>

### 2. 
<p>Click "Alexa Skills Kit" on the top gray bar</p>

### 3. 
<p>Press the blue "Create Skill" button on the right side of the screen</p>

### 4. 
<p>Enter a skill name and press "Next"</p>

### 5.
<p>Of the four options, choose "Custom", then press the blue "Create Skill button at the top right"</p>

### 6. 
<p>From the menu on the left side of your screen, press "Add" next to the "Intents" option</p>

### 7. 
<p>Enter a name for your intent in camel case followed by the word "Intent" i.e. ShareLoveIntent</p>

### 8. 
<p>Come up with utterances, or phrases a user might say to Alexa to invoke your skill. In this case, for example a 
sample utterance might be "Ask ShareLove to share love with {ContactName}". Be sure to include the name of your skill
in the utterance along with a target. In the provided example, the target is {ContactName} which is actually a slot type 
discussed more in the next step. Just make sure the target is inlcuded inside curly braces {}. Make sure all of your
utterances use the same target name.</p>

### 9. 
<p>After adding utterances, go to the menu on the left again and press "Add" next to the "Slot Types". option</p>

### 10. 
<p>Enter a name for your Slot Type, make sure you type it exactly as you did in the curly braces of your utterances.</p>

### 11. 
<p>Now add values for your Slot Type. The values will be the recipients of your messages. Examples of values inlude:
Mom, Dad, Jacob, Ashley, etc. Do not add all recipients in one line. After adding each recipient, press the add button on the
right side of the bar to continue adding individual values.</p>

### 12. 
<p>Finally, using the menu on the left hand side, navigate back to your custom Intent. Below your utterances, there will
be a table of "Intent Slots". You should see your Slot in this table. Now you must connect the Slot Type to the utterances
by using the dropdown menu under "SLOT TYPE" and selecting your custom Slot name that shows up.</p>

### <a href="https://github.com/mrvivacious/AWS_Lambda_and_SNS/blob/master/page2.md">AWS Lambda</a>
