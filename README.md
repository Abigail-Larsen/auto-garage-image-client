# auto-garage-image-client

This is an anonymous voting app where you can create votes, vote, and see the results of a vote. 

This app uses React and graphql on the frontend, Node and graphql on the backend, and SQl for the DB. Each poll has a unique id that gives someone access to vote or see the results. 

To run this app, pull down the main branch and run `yarn build` then `yarn start`



1.    Effectively use conditional logic, JavaScript array methods, and front-end framework elements to render large lists on the web client.

    - `src/components/getAllVotes.jsx`

    - `src/components/header/index.jsx`

    - `src/components/results/resultType/percentage.jsx`

    - `src/components/about/photoCollage.jsx`



2.    Work with the proper libraries (e.g. VueJS, React) to create and manage the front-end portion of your project using a real development toolset.

    - used React



3.    Work with NPM and NodeJS to create and manage the back-end portion of your project.

    - `src/nodeServer`

    - `server.js`



4.    "Seed" script provides way to populate the datastore after the Docker install and launch.

5.    Properly use Git for your source version control with an established record of commits.

    -`https://github.com/yabbbb/auto-garage-image-client`



6.    Present a User Interface route or "page" that allows the user to: 

    1.    CREATE a meaningful (at least 5 data fields) resource through a REST endpoint that is stored in the datastore
        - `src/sharedQueries/queries`

    2.    Read or GET meaningful data from 3 different REST endpoints
        - `src/sharedQueries/queries`

    3.    UPDATE at least 1 portion of meaningful data through the appropriate endpoint
        - `src/sharedQueries/queries`

    4.    DELETE some resource via the proper endpoint
        - `src/sharedQueries/queries`

7.    Present a separate User Interface route or "page" that allows the user to:

    1.    CREATE a meaningful (at least 5 data fields) resource through a GraphQL endpoint that is stored in the datastore
        - `src/sharedQueries/mutations`

    2.    Read or GET meaningful data from with at least 3 different query options from the GraphQL endpoint.
        - `src/sharedQueries/queries`

    3.    UPDATE at least 1 portion of meaningful data through an appropriate GraphQL mutation.
        - `src/sharedQueries/mutations`

    4.    DELETE some resource using a proper GraphQL mutation.
        - `src/sharedQueries/mutations`

8.    You will submit the GitHub URL for your project with a detailed ReadMe explaining how to install and run your server(s) on Docker or from your deployed sites.