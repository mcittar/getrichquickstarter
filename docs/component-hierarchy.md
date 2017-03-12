## Component Hierarchy

**HomeContainer**
- NavBarContainer
- FeaturedProjectsContainer
  * ProjectBlurbs

**AuthFormContainer**
 - AuthForm

**CategoriesContainer**
 - CategoryIndex

**ProjectContainer**
 - ProjectHeader
 - ProjectVideo
 - ProjectRewards
  * ProjectRewardImages
    + ProjectRewardImageIndex
  * ProjectPledges
    + ProjectPledgeIndex

**SearchResultsContainer**
 - Search
 - ProjectsDisplayContainer
   * ProjectBlurbs

**NewProjectContainer**
  - NewProjectForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/categories/:categoryId | "ProjectsDisplayContainer" |
| "/project/:projectId" | "ProjectContainer" |
| "/project/new"	"NewProjectForm" |
| "/categories/ | "CategoriesContainer" |
| "/search-results" | "ProjectsDisplayContainer"
| "/search" | "Search" |
