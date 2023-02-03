# Bug Tracker

A nodejs + ejs application to track issues/bugs for a project.

## Features

- Home Page:
    - Shows the list of Projects.
    - Button to create a new Project.
- Create Project Form accepts the following fields to create a project:
  - Name
  - Description
  - Author

- Bugs list Page
    - When user clicks on the show bugs button on a project, the user is redirected to this page which shows all the bugs reported and a report bug button.
    - User can perform following actions on this page:
      - Filter by multiple labels
      - Filter by reported by
      - Search by title and description
      - Refresh to show all bugs again.
    - Report Bug Form accepts the following fields:
      - Title
      - Description
      - Reported By
      - Due Date
      - Status (Open, In progress, Closed)
      - Severity(High, Medium, Low)
      - Lables
- Flash messages after actions accordingly

## Deployment

To deploy this project run

```bash
npm start
```

Hosted on

https://bug-tracker-uz6y.onrender.com/

## Tech Stack

Node.js, Express.js, MongoDB, EJS
