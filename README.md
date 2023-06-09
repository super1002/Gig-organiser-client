# Gig Organiser Client

This is the React frontend for the Gig Organiser (JobSprint) app, which helps users organise and manage their jobs.

## Tools

- React Query for efficient data fetching and caching
- CSS Modules for modular and reusable styles
- React Router for routing and navigation
- TypeScript for type-safe code
- i18next for translations
- Docker setup for easy deployment
- Jest and Testing Library for testing
- Github Actions to run unit tests when merging code

## Installation

To install and run this project, you will need to have Docker installed on your machine.

1. Clone this repository to your local machine:

`git clone https://github.com/mike1234-pixel/gig-organiser-client.git`

2. Navigate to the project directory:

`cd gig-organiser-client`

3. install dependencies:

`npm install`

4. Start your development server (default port 3000):

`npm start`

4. Build the Docker image:

`docker build -t gig-organiser-client`

5. Run the Docker container:

`docker run -it -p 3001:3000 -v ${PWD}/src:/usr/src/app/src gig-organiser-client`

This will run the app in a Docker container and maps the host machine's port 3001 to the container's port 3000. The app running inside the container can be accessed on the host machine at localhost:3001

## Testing

To run the test suite for this project, use the following command:

`npm test`

This will run all unit and integration tests using Jest and Testing Library.
