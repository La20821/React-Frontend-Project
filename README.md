# Purpose Getting Started with Create React App

The purpose of this the front end portion of this project is to use React.js to build out neccessary components that contain the tasks of what we want to do with the data being stored on our back end API. React is responsible for the user Interface of what the client interacts with while visiting and maneuvering through the web page. In this project, I used React to build out components that would allow users to create and account and store the clothing items they would like to keep in their online digital closet. This app allows users to pick through their closet from wherever they are to decide what combination of items they would like to wear for any special occasion or event.  

## Getting Started
### Wireframe
![image](https://user-images.githubusercontent.com/68744076/102639362-8fa96600-411e-11eb-83b0-86eb6bdf8faf.png)

## Starting Steps
1. I first created my react app and downloaded the neccessary dependencies. I, then set up my app.js along with entering the starter codes the main components I knew I would need for app functionality.
2. Second, I returned to my app. js to begin creating the functions required to provide functionality throughout the app between the backend data and front end components.
3. Third, I passed in neccessary data through props inside of my componenets to render required API data. 

## Componenents
|**Components**| **Description**|
|--------------|----------------|
| Header       | Static information or images rendered at the top of page|
| Footer       | Static information rendered at bottom of screen|
| Sign Up      | Allows a new user to create an account|
| Log In       | Allows an existing user to access their account|
| Item         | Contains the stored data of the items previosly added as well as any new addtions to user closets|
| Item Details | Displays the information for a single item|

## Technology Used
* React
* Heroku
* Command Line
* PG Admin
* Visual Studio Code

## App Guide/User Stories
- As a user, I should be able log in to my account.
- As a user, I should be able to add an item to my online closet.
- As a user, I should be able to create an account.
- As a user, I should be able to edit an item. 
- As a uesr, I should be able to delete an item.


## Issues
The main issues I encountered while working with React was rendering the data I needed. It took me while to determine how to pass in that data correctly from my backend local port. I learned alot about the interaction between Express and React and and had to spend some time ensuring that I understand how they both work together while not overlapping in responsibility. 
