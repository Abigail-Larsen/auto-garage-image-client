# auto-garage-image-client

This is an anonymous voting app where you can create votes, vote with a code, and see the results of a vote. 

This app uses React on the front end, Node on the backend, and SQl for the DB. Each poll has a key of a random word that gives someone access to vote or see the results. 

To run this app, you will need to have the server running at port 9000. 

**App is primarily composed of functional components that use React Hooks:**

>  At least the useState, useEffect, and useContext hooks are demonstrated
>   1. useState was used for all of the creation components to hold state until ready to send to backend

**At least 3 different routes are used properly with at least one redirected route and one guarded route**

> the routes I used:
> `src/components/index.js`
> 1. 9 routes
> 2. redirect

**A UI framework (we have been using Material UI recently) is used that provides a layout and components including:**
>
> Used Material UI

***A navigation bar at the top of the layout***
>
> `src/components/index.js`

***A side drawer that expands and contracts***
>
> `src/components/header/index.js`

***A modal dialog***
>
> `src/components/index.js`

***A form that includes validation***
>
> `src/components/voteWithCode/vote/index.js`


***Components are styled in a scoped manner of your choice***
>
> All components are using Material ui and Emotion

***A large list of data is retrieved from an API using the Axios package***
>
> The list is retrieved in `` and that info is displayed in ``

***At least one large list of data is rendered as discrete React components – not just a text list***
>
> `src/components/completed/index.js`
> `src/components/results/index.js`

***Redux or the Context API is used to store data***
> 
> idk

***App source code is in GitHub***
>
> https://github.com/yabbbb/auto-garage-image-client

***App is deployed using Netlify or something similar***
>
> Used Heroku CLI to deploy and host