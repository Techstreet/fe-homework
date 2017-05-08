# fe-homework

The purpose of this assignment is to demonstrate your skill in building a front-end application in reactjs. Your task is to build out a page framework, with header, sidebar, and main editing area, then build out a form for creating a new user, and a component that displays users created in the current session. There is no back-end service. You'll want to validate user input, not allow incomplete records to be created, and display appropriate error and confirmation messages.

## Suggested approach
- Fork this repository.
- Create a local repository.
- Link the local to the github repository.
- Create the overall page framework.
- Build out the individual screens, as detailed below.
- Commit frequently so we can see your thought process.
- Make sure you push your final changes and that everything runs error free.
- Let us know when complete.

## Home Page - Create New User
- The Home page (with Create New User) consists of a header, navigation on the left and page content
- On the left, in navigation, the link under Category 1 should route to the page Create User form page and the link under Category 2 should route to the page Edit User Page.
- The Create New User button should route to the Create User Form Page. 
- The Edit existing User Form should redirect to Edit User Page
- Logout link should redirect to a plain page with a message saying "Logout Successful" 
- The icon on the left top “Application Name” Should act as Home Page link. No matter where you are on the application, when clicked, should bring the user to the home page (Page 1 of PDF)

## Second Page - Create New User
- Set up User Form w/ validation (Form should show error message if fields are left blank)
- Once the user is created, the user details should show right under the form. The users First & Last name should show up.
- Next to each user that shows up, an edit link should be present which when clicked will take you to the third page (Edit User Page). 
- Optional - Have the edit link redirect to User Edit form page with form being populated with user details (first name, last name, email address)

## Edit Existing User Form
- Set up edit existing user form w/ validation (Form should show error message if the email address, first name or last name does not match existing user)
- Upon clicking save button, the updated user should be saved and displayed right below the form. 
