4/04/22 - Our login-in bug issue has been resolved... :) The user's token was not always being stored in the browser's local storage because 'unwanted' events were taking place during the "onSubmit" function execution. Implementing the e.preventDefault() function in our log-in code resolved the issue. See this resource for a full explanation of how preventDefault() works with our code: https://sebhastian.com/react-preventdefault/

- Dave

4/02/22 - Daniel pushed new code that enhances our app's functionality such as the ability to store book data with a user and populating our library view list with the user's book inventory.

3/30/22 - User login functionality has been implemented. At this point, a user can register on our app and then log-in. So far the main 'media view' page is the only page that is restricted to authorized users... if you try to view that page without being logged-in then our program will automatically redirect to the log-in page. I have left this feature off of the other pages for now that so testing and development will be easier. Also, the 'log-in' page redirects to the 'view media' page automatically if you are logged-in.

Create your own user account or use our existing login account; username: test   password: test

If viewing the main 'media view' page without being logged-in is desired then in the (LibView.js) file, comment out the short-hand 'if' statement on line 27 just before the '?' mark. This will allow you to view that particular browser page without being logged-in.

Known Issue: Error messages in the backend don't always propagate to the browser... So if a user makes a mistake in the register or login process then the action will simply fail with a reset page and no messages to indicate the reasons.

Known Issue: Sometimes during the login process, the authorization token is not stored in localStorage and the user must resubmit info to get logged in. Usually doesn't happen more than two consecutive times in a row... so you might think you mistyped your password but there's an issue. Error is very intermittent... need to investigate issue more.

- Dave


















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
