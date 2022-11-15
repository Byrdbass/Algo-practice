​
# Change Password Alert
## Overview
We recently integrated with an API that lets us know when email addresses have been involved in a password breach on other sites. Now that we know the recent breaches the user has been involved in, we want to show an alert on their Dashboard if they have been involved in any.

 ## Tasks
Add a new card to the Dashboard page with the title "Alerts". When a user logs in, we want to display the Alerts card with different content depending on whether they have been involved in any breaches (suggestPasswordChange value is set in their auth metadata).

## Alerts Card (No breaches)
If the user has no breaches (suggestPasswordChange is not set) make the Alerts card background color white and show the following message inside the card body:

No alerts
## Alerts Card (Has breaches)
If a user has been involved in any breaches we want to make the background color of the Alerts card yellow and include the following information in the card body:

Your email was involved in a breach on the following sites:

- <Breach added date> – <Breach name>
- ...

Although your information on our site is safe, we
recommend you change your password in case your AppCo
account shares a password with any of the sites above.

[button to change password]  [button to dismiss]
(The breaches to display are in breachedAccounts in the auth metadata.)

Hook up dismiss button
If the alert contains a dismiss button, the button should "dismiss" the alert for the rest of the user's session. (Change the Alerts card to the No Breaches version) You can do this by clearing suggestPasswordChange from the auth metadata.

Here is a wireframe illustrating the flow for the requested changes

wireframe.png

Click here to see the wireframe in a new tab

Notes:

You don't have to make a pixel-perfect copy of the wireframe above, as long as the content and functionality are present, that is what we're most interested in.
The Change Password button does not need to have any functionality
Helpful Information
Auth object
The auth object which was mentioned several times above is created by the buildAuth function in src/components/LoginForm.jsx.

Test users
You can use the following accounts to test, which are located in src/components/LoginForm.jsx. The safe user is hardcoded to return no breaches, and the unsafe user is hardcoded to return 3 breaches.

User with no breaches ("Safe User")
Email: safe@example.com
Password: pw
User with breaches ("Unsafe User")
Email: test@example.com
Password: pw
Bootstrap Card Info
Here is the documentation on the cards that we use.

Other notes
No login logic changes needed
You won't need to change login logic or hit an API in this challenge. Instead, focus on the front end / user interface changes needed to implement the feature.

Javascript Console
To see logging output for the Web Preview, click on the web preview console button:
image.png

To use a debugger, open your browser's Javascript console / devtools.

Hot Reloading
You may disable hot reloading by clicking the green Auto switch on the Web Preview.

Web preview errors?
If you see Web Preview 404 errors, please disable any content blockers you may have running and try reloading the page.

