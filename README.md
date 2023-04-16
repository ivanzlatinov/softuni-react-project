# Travel Oasis React project made by Ivan Zlatinov



## Available Scripts

In the project directory, you can open 2 terminals and run :

### `cd client to open client folder than type npm start`

Runs the app in the development mode.

### `cd server to open server folder than type node server.js `

Runs the server to be used for data fetching.

## Description

This app is designed to resemble a travel company. The users are able to create listings, and  view others' listings or edit/delete their own listings.

## Guests

The guests of this page are able to look at the catalog but not the details and reach pages such as home, about us, login and register 

### Home
Buttons leading to catalog and create page, but if there is no logged in user create buttons leads to login
Beneath there are some of the listings with details button ,but there has to be a logged in user to access them 

### Details

Preview the selected trip's destination, price, description, number of people which the trip is for and number for contacts.

### Register and Login

In order for the guests to be able to successfully register and/or log in, they are required to fill in a valid email and a password, consisting of at least 5 characters.

## Users

The logged-in users can add new listings, which they can also edit or delete. 


### Create

The users are able to create new listings, containing title, price, image link, people which the trip is for and phone for contacts. All the inputs have validation which have to be met.

### Edit

Users can edit their listings which also have validation