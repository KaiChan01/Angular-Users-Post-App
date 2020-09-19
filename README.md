# UsersPostsApp

This project was coding exercise to create a simple user login and post forum app.
For this project I used the Angular Materials library for the inputs components and CSS for styling and positioning.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.


## Screenshot demo

### Login page
On landing, the user will be greeted with the login page. The user will not be able to load the "posts" page until they have logged in.
If they try, they will be redirected to this page.

![Login Page](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Login.PNG)

### Login error handling
The user must enter a valid email format in the input and the input must not be empty.
Form control is used to detect if the input has been touched, appropriate error messages are displayed.
The loggin button will be enabled only when a valid email has been provided.

![Invalid Email](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/No%20Email.PNG)

![Touched Input](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Touched.PNG)

### Login submit
The entered email is sent to the "users" endpoint for validation

Unsuccessful (A message is shown to the user)

![Failed login](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Bad%20email.PNG)

Successful (user is redirected to posts page)

![Successful login](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/User%20posts.PNG)

### Posts page
As per the requirement, the posts page contains 2 tabs, "Users posts" and "Other posts"
As well as being to see own posts, the user can also enter new ones on this page (Example: Testing new post")
New posts are only stored locally, as per requirements.

![New Post](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Posting%20new%20post.PNG)

Also error handling for the posts inputs 
![Post error handling](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Post%20Error%20Handling.PNG)

### Other Posts
In other posts, we can see posts made by other users.
The posts display their username, title and body.

![Other posts](https://github.com/KaiChan01/Angular-Users-Post-App/blob/master/ScreenShots/Other%20posts.PNG)


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
