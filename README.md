# MEDIATRACKERR - YOUR MEDIA, MANAGED EASILY

<img src="MTvid.gif">

## MediaTrackerr is a web app inventory software tool for both books and readable media, for both individuals and organizations, that allows its users to easily keep track of their book and media inventory.

### Team Members: David Rowe (Project Lead/Developer), Sijia Li (Scrum Master/Developer), Daniel Giampaolo (Developer), Jada Allen (Developer), and Emily Arnold (Developer)

#### Work Flow:

4/08/22 - Refined our main library view page and has made significant improvements to our add media page. Our product is looking more and more like a deployable product in the marketplace. Remove/delete buttons have been converted to trash can icons.

4/07/22 - Significant improvements made to our frontend. Forms and overall app appearance are more polished and professional looking.

4/06/22 - Enhanced both the performance and appearance of our library view list along with the addition of a book search filter feature that will allow users to search and quickly find a book within their existing inventory, this feature will be especially helpful when the list becomes long.

4/05/22 - Added new functionality with the addition of a delete feature that allows users to remove a book from their library list.

4/05/22 - Added a much more refined and polished front-end for our app. The navi bar has been enhanced and our UI theme looks great!

4/04/22 - Our login bug issue has been resolved... :) The user's token was not always being stored in the browser's local storage because 'unwanted' events were taking place during the "onSubmit" function execution. Implementing the e.preventDefault() function in our log-in code resolved the issue. See this resource for a full explanation of how preventDefault() works with our code: https://sebhastian.com/react-preventdefault/

- Dave

4/02/22 - Daniel pushed new code that enhances our app's functionality such as the ability to store book data with a user and populating our library view list with the user's book inventory.

3/30/22 - User login functionality has been implemented. At this point, a user can register on our app and then log-in. So far the main 'media view' page is the only page that is restricted to authorized users... if you try to view that page without being logged-in then our program will automatically redirect to the log-in page. I have left this feature off of the other pages for now that so testing and development will be easier. Also, the 'log-in' page redirects to the 'view media' page automatically if you are logged-in.

Create your own user account or use our existing login account; username: test   password: test

If viewing the main 'media view' page without being logged-in is desired then in the (LibView.js) file, comment out the short-hand 'if' statement on line 27 just before the '?' mark. This will allow you to view that particular browser page without being logged-in.

Known Issue: Error messages in the backend don't always propagate to the browser... So if a user makes a mistake in the register or login process then the action will simply fail with a reset page and no messages to indicate the reasons.

Known Issue: Sometimes during the login process, the authorization token is not stored in localStorage and the user must resubmit info to get logged in. Usually doesn't happen more than two consecutive times in a row... so you might think you mistyped your password but there's an issue. Error is very intermittent... need to investigate issue more.

- Dave

2/28/2022 - CIS4914 - MediaTrackerr Webapp - Added some functionality (Page Router Navigation and Add/Search media functionality via Google Books API) -NEED TO INSTALL additional dependencies: npm install axios, npm install react-router-dom. 'npm update' will bring your local version up to date.

- Dave
