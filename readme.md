
# It's time to leave
An app which will notify you when to leave for an event, taking your travel time in account.
It uses Google Maps Matrix api to find the travel time and uses Elastic email api to send the email.
___
***This repository constains the Frontend code of the project***

**1. The backend code is present at this repository -  https://github.com/healertrix/itstimetoleave_backend**

**2. The Live Demo of the app is present at - https://itstimetoleave-frontend.pages.dev/**

**3. The Design Document is present at - https://github.com/healertrix/itstimetoleave_backend/blob/main/designdoc.md**

**4. The API Documentation is present at - https://github.com/healertrix/itstimetoleave_backend/blob/main/api.md**




## Installation
Cloning code locally
```sh
git clone https://github.com/healertrix/ItsTimeTOLeave_Frontend.git
```


This will download the frontend code files locally.
This app is by default configured to work with the backend hosted on the cloud.

`To make sure it works with your Local backend server.
Make sure that you change the server_Location variable in index.js file to "http://localhost:3000/schedule"`
`

```js
let server_Location = "http://localhost:3000/schedule";
```


Note: for more help open index.js file and follow the comments on the first line