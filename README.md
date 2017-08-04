## OkSuited

OkSuited is a web application inspired by the popular site OkCupid and built using Ruby on Rails for backend development, a Postgresql database, and ReactJS with a Redux architectural framework on the frontend.  It is inspired as a site for users to find compatible people to have lunch with.

## SPLASHPAGE

Users are first prompted to a log in/sign up page in which they walk through the steps to find a lunchpal. These steps identify a users eating speed, gender, age and location in order to better help pair them with other users.  Users are also asked to input a unique username and password greater than 6 characters. For existing users, the log in button in the top right prompts a log in modal to render on the screen. After logging in, users are directed to their respective profile page where they can answer questions to better improve their match percentages with other users.  Users are also able to search for matches by a number of parameters including their age, gender, and even their eatings speed.se a gender and sexuality, followed by some general information about themselves including their age and location.

![Alt text](https://user-images.githubusercontent.com/26631708/28739337-05b0f39a-73af-11e7-9ddf-d25167139f7a.png "Optional title")


From the profile page, users are able to complete a multitude of events.  Users can add their profile picture (which also is stored in the navigation bar and serves to redirect them back to their profile page whenever they click their bright and sparkling image), fill out food-related information such as a brief summary, and five foods that they cannot live without. Their information is stored and is available for other users to view.

![Alt text](https://user-images.githubusercontent.com/26631708/28739330-f8ce551e-73ae-11e7-967e-01e3508ae381.png "Optional title")


In order to better pair users, OkSuited extracts information about them by asking them varying food-related questions.  Questions are assigned to a point value depending on level of importance.  Users are also asked to assign which answers they will accept. From there the algorithm will find users with common questions answered and tallies up points based on the users answers aligning with the x-users acceptable answers.  Both the x-user and original multiply their individual percentages together and the geometric mean is the calculated match percentage.

![Alt text](https://user-images.githubusercontent.com/26631708/28739318-dbe89108-73ae-11e7-9277-4099678a0a03.png "Optional title")

The browse page displays all of the potential new lunchmates a user can view.  Users are able to view other profiles by clicking on the selected profile.  The main functionality lies within the search bar.  Users can search by age, gender, and most importantly eating speed. This allows users to once and for all find the perfect lunch companion to the exact specifications that they prefer.

## Technology

## Backend

OkSuited runs on Ruby on Rails and is hosted on Heroku.  The backend is to provide RESTful APIs and respond with JSON data.

The database server is run through Postgresql RDBMS.

Cloudinary is utilized for image attachment, processing, and storing.

BCrypt is utilized for password-salting and hashgin in order to provide a secure authentication system.

## Frontend

As a single-page application, OkSuited utilizes the React.js framework and follows the Flux architecture to deliver the frontend.

npm

Node package manager (npm) is used to install all of the frontend dependencies.

Webpack

Webpack efficiently bundles all of the frontend components and Flux parts. The bundled file is located in /app/assets/javascripts and included in the main application.js file.

jQuery

jQuery is responsible for making the AJAX requests to the rails server.

Other frontend dependencies utilized in OkSuited:

  * React DOM
  * React History
  * React Modal




## Future Directions for the Project

Search

Implement ways that users can search by distance.  This would require parsing their zip code and identifying their respective regions of habitat.  A Googgle API linking to a map that displays the approximate regions will also be a priority to implement seeing as this would allow people the ability to find people that work relatively nearby.

Messaging

A message page that allows users to view received and sent messages.  Upon clicking on the conversation users would be directed to a chat page that would afford users the ability to chat with other users.

Block or Hide Other Users

As is standard these days for people-to-people interaction applications. I would like to implement a feature that allows users the ability to block other users.
