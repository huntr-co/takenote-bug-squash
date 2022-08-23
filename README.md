# TakeNote Bug Squash - Full Stack Assessment

## Intro

We've developed this assessment to test out your ability to quickly orient yourself
within a medium sized project's codebase. We've selected the open source
(TakeNote)[https://github.com/taniarascia/takenote] project for this test; it is
a simple note taking application built with React, Redux, Redux-Saga, ExpressJS, and Node.

The persistence layer of the project is pretty unique and unusual; when a note is
added or modified it saves that information into a Github repository into
JSON files (it does this by hooking up to Github's API and actually committing the
update into the existing json file 🤯). Because of the unusual persistence layer here,
we won't be touching most of this section of the application.

## The Test

We've introduced *11 bugs* into the codebase. These bugs are scattered across the front
and backend portions of the codebase; the bulk of them in the front end. These bugs
are apparent when running the project by either crashing the front/back-end, or
visually look off.

The test: try to find and fix as many of these bugs within the allotted time.

## Installation

### Clone the repo
```bash
git clone git@github.com:huntr-co/takenote-bug-squash
cd takenote-bug-squash
npm i
```

### Setup GitHub OAuth for data persistence

Go to your GitHub profile settings, and click on **Developer Settings**.

Click the **New OAuth App** button.

- **Application name**: TakeNote Development
- **Homepage URL**: `http://localhost:3000`
- **Authorization callback URL**: `http://localhost:3000/api/auth/callback`

Create a `.env` file in the root of the project, and add the app's client ID and secret.

```bash
CLIENT_ID=xxx
CLIENT_SECRET=xxxx
```

### (For Mac only) Disable Airplay Receiver sharing to open up port 5000

Running the app in Mac will crash due to port 5000 being used. To fix this:
Go to System Settings > Sharing > Disable 'AirPlay Receiver'.

### Run the app

In the development environment, an Express server is running on port `5000` to handle all API calls, and a hot Webpack dev server is running on port `3000` for the React frontend. To run both of these servers concurrently, run the `dev` command.

```bash
npm run dev
```

Go to `localhost:3000` to view the app.

> API requests will be proxied to port `5000` automatically.
