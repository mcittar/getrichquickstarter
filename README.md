# GetRichQuickStarter

[Live Version](https://getrichquickstarter.herokuapp.com/#/)

GetRichQuickStarter is a crowd sourcing application inspired by KickStarter. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend. It was build end-to-end in 2 weeks while I was at App Academy.

## Features
  * Browse Projects
  * Review Project Details
  * Pledge on Projects
  * Search for Projects
  * Discover Projects based on Category
  * Post Comments on Projects

## Overview
  * Users can browse a selection of projects
  * Each project has a list of reward tiers that a user can choose to pledge into
  * Each project also has a comment section where users can leave comments
  * Users can create new projects and rewards
  * Navbar has built in search functionality
  * Discover allows search by Categories

## Outline

### Landing Page
  ![Home Page](https://github.com/mcittar/getrichquickstarter/blob/master/app/assets/images/home.png)
  * Landing page features a graphical welcome and displays all available projects
  * User can login, signup, or use demo account from navbar.
  * Clicking search icon toggles search mode, allows project searches

### Project Detail Page
  ![Project](https://res.cloudinary.com/ddy9eynci/image/upload/v1493398448/Screen_Shot_2017-04-28_at_9.52.00_AM_phm8kw.png)
  ![Project Details](https://res.cloudinary.com/ddy9eynci/image/upload/v1493398575/Screen_Shot_2017-04-28_at_9.55.27_AM_dfshf5.png)
  * Dynamically shows current details about a project
  * Allows user to pledge into rewards and leaves comments
  * Display a video or picture and description of the project

### Create a New Project
  * Allows Users to create new projects and rewards
  * Connects to cloudinary API, allowing images to be hosted and retrieved online

### Discover
  * Provides search by Category feature

## Future Directions
  * Add User profile, tracking for projects that user is Backing
  * Add credit card authentication and create wallets for Users
  * Add additional search parameters (Location, Company, etc...)
  * Flesh out form creation page, including a rich text editor allowing for videos and images to embedded in main description field

  ##### See the development [README](docs/README.md) for a list of components, wireframes, sample state, and DB schema.
