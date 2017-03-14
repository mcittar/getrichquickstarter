

### Minimum Viable Product - Kickstarter Clone
  * Hosting on Heroku
  * New account creation, login, and guest/demo login
  * A production README
  * Projects
  * Backing projects & rewards
  * Search
  * Categories / Discover feature


### Design Documents:
  * [WireFrames](https://github.com/mcittar/fullstack_proposal/tree/master/docs/wireframes)
  * [React Components](https://github.com/mcittar/fullstack_proposal/blob/master/docs/component-hierarchy.md)
  * [Sample State](https://github.com/mcittar/fullstack_proposal/blob/master/docs/sample-state)
  * [Database Schema](https://github.com/mcittar/fullstack_proposal/blob/master/docs/schema.md)
  * [API Endpoints](https://github.com/mcittar/fullstack_proposal/blob/master/docs/api-endpoints.md)



### Implementation Timeline

### Phase 1: Back-end configuration and front-end user authentication (2 days)

**Objective:** Create a functioning backend
* The navbar will have the website's name and icon, sign up, and sign in buttons.
* Website name and icon should link back to the root view.
* Clicking sign up or sign in buttons will display sign in form or redirect to root once signed in.

### Phase 2: Home Page and PopularProjects Index (2 days)

**Objective:** Set up styled project index on home page
* Root view should feature a carousel of featured projects
* Each project should display the project's name, tagline, and image

### Phase 3: Project Details Page (2 days)

**Objective:** Display view of individual projects
* Details will include all information about the project
* Details will render a project component

### Phase 4: Create Project (2 days)

**Objective:** Once logged in, users have the ability to create a project
* Project form will include title, project description, funding duration, and funding goal
* Once created, a project will be visible in the project index and have its own display page

### Phase 5: Search and Discover Features (1 / 1.5 days)

**Objective:** Dynamically populating search bar
* Search results include projects and users
* Search results have their own route and display page
* Search bar is styled and easy to use
* Discover feature allows users to search by specific categories

### Phase 6: User Interaction (1 day)

**Objective:** Users can back projects and leave comments
* Contribution will be added to the project's funding status bar
* Users can leave permanent comments on a project page
