# Authorize SNS with IAM
<p>
Let's go back to the <a href="http://aws.amazon.com">homepage</a>
</p>

<p>
Again, click on "Services" at the top of the screen and search for "IAM".
<br>Please click IAM.
</p>

### Identity and Access Management

<p>
You are now in the IAM console. IAM can be thought of as the bookkeeper of which permissions needed to interface with other services are assigned to the roles you've created.
<br>Let's add the SNS permission to our lambda_basic_execution role.
</p>

<ol>
<li>Under "IAM Resources," select Roles. You should be on a screen that displays your lamba_basic_execution role. Please click on this role.</li>
<li>Click on the blue "Attach policy" button. Search for SNS.</li>
<li>Select the checkmark box for <b>AmazonSNSFullAccess</b> and click "Attach policy" at the bottom of your screen.</li>
<li>Awesome, we've just told IAM to authorize our Lambda role to interface with SNS! We can now utilize SNS to deliver SMS or email notifications.</li>
</ol>

### C o d e

<p>
  Let's go back to Lambda and set up the full SNS script 😍
</p>

### <a href="https://github.com/mrvivacious/AWS_Lambda_and_SNS/blob/master/page4.md">Let's write code</a>
