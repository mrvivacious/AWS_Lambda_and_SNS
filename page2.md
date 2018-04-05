# Creating the Lambda
<p>
We will go back to <a href="http://aws.amazon.com">aws.amazon.com</a>
</p>

<p>
Once you've signed in, click on "Services" at the top of the screen. Search for "Lambda." It should be the choice with the description, "Run Code without Thinking about Servers."
<br>Please click that option.
</p>

### The Lambda management console

<p>
Welcome! You are now in the Lambda management console. This is where all of your Lambda functions will be located.
</p>

<ol>
<li>Please select, "Create a new function." </li>
<li>Select "Blueprints" from the top columns</li>
<li>Scroll down if needed and click on the "alexa-skill-kit-sdk-factskill" blueprint. This will provide fantastic boilerplate code
for us to build off of.</li>
<li>I like to name my functions as [SkillName] + "Intent," as this helps me keep track of the relationships between my Lambdas and my skills. If you have a better idea in mind, you can name your Lambdas however you wish!</li>
<li>If this is your first Lambda, select "Creat a custom role" in the Role menu. In the screen that opens up, simply click Allow. You just allowed the Lambda service the permissions it needs to run your code, to summarize the IAM significance.</li>
<li>Now, we will select "lambda-basic-execution" in the Existing Role section, should that not have already been selected. This is the role we just created.</li>
<li>Scroll down and give the Create Function button a nice click!</li>
<li>Congratulations! You just made a Lambda function! Yayyyyy</li>
</ol>

### Connect the Alexa trigger
<p>
To activate the Lambda function via Alexa, we have to connect the Alexa Skills Kit trigger. 
</p>
<p>From the Add Triggers column on the lefthand side, look for "Alexa Skills Kit." 
<br>If you can't find it,
 look at the top right of your screen next to "Support." To the left of Support is the name of the AWS region where we are hosting
  our code...it should say, "N. Virginia," as this is the region that supports Lambda. If it is a different region, simply click the region name and select N. Virginia. 
 <br>You should be able to see Alexa Skills Kit in the triggers section now.
</p>

<p>
  Nice work! You just made a Lambda function that can be triggered by any Alexa-enabled device.
</p>

### <a href="https://github.com/mrvivacious/AWS_Lambda_and_SNS/blob/master/page1.md">Let's connect this Lambda to AWS SNS</a>

