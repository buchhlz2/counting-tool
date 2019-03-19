# Simple Counting Tool

## Project Summary
This simple app allows a user to paste their text and receive an output for word or character count.

## Technical Overview
The Counting Tool app leverages vanilla JavaScript, Express, and surge.sh to simply host the site at [http://counting-tool.surge.sh/](http://counting-tool.surge.sh/).

Although it is a rather simple app that was developed in a couple of hours, the intent is to help those rather new to web development understand some of the basic steps needed to build and deploy an app with JavaScript and Express. For clarity purposes, the following highlights the project file structure:

```bash
├── index.html
├── server.js
├── public
│   ├── css
│   │   ├── style.css
│   ├── js
│   │   ├── main.js
├── index.html
├── node_modules
├── README.md
├── package.json
├── CNAME
```

Each of these files has a specific purpose:

- `server.js` -- this file is used by [Express](https://expressjs.com/), which is a Node.js backend framework
- `index.html` -- the frontend where text is pasted/written and the user choose to count words or characters
- `public` -- folder houses static files that are served in Express
- `style` -- not used in this project but created for clarity purposes
- `main.js` -- logic for the application and DOM interaction
- `package.json` (and `package-lock.json`) -- this project uses [npm](https://www.npmjs.com/get-npm) to install and keep track of package dependencies, which are what these files are used for
- `CNAME` -- although optional, [surge.sh](https://surge.sh/) is a very simple tool to publish apps to the internet. Without going into too much detail, a CNAME file defines the domain name that surge.sh creates/points to.

## Steps to Recreate

### Initial Setup
Open up the command line and follow the steps below:

1. Create the project directory and go to it
`mkdir counting-tool && cd counting-tool`
2. If Node.js or npm are not installed, either download them [here](https://www.npmjs.com/get-npm) or install using Homebrew (instructions for Homebrew included)
`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
`brew install node`
Note: to check that everything worked correctly, run `node -v` and `npm -v` in the terminal
3. Create the `package.json` file using the follow command, which defines the metadata of the app
`npm init`
4. Install dependencies for the app
`npm install express`
5. Create the remaining files and directories as described in the Technical Overview section

If there is a desire to push this project to Github, follow the steps below:
1. `git init`
2. Create a `.gitignore` file and add files/folders that should not be pushed to Github (e.g., node_modules can become rather bloated over time, and the npm tool with package.json ensures a user will pull the right dependencies anyways)
3. Add all files to the Github repo
`git add .`
4. Commit the files staged
`git commit -m "first commit"`
5. Add the remote link to Github in order to push it to a Github account
`git remote add origin <LINK_TO_REPO>`
6. Push the repo...and that's it!!
`git push -u origin master`

### Publish the App
Once the project is complete from a coding perpsective, there's an optional final step to publish the app using [surge.sh](https://surge.sh/); ensure a user account has been created, which is part of the command line interaction:
1. Within the CNAME file, choose a domain name for the site; this tutorial uses and publishes the site to [counting-tool.surge.sh/](http://counting-tool.surge.sh/)
2. Start the surge project -- there will be a series of configuration prompts
`surge`

That's it! Now, when a user goes to [counting-tool.surge.sh/](http://counting-tool.surge.sh/), the app is live.

## Final Thoughts
The intent of this application was to create a very simple application with JavaScript, Express, and publish it via surge. There were assumptions made when designing the counting tools to keep things simple; for example, the input is expected to be grammatically correct in order to correct delimit by spaces. Overall, it should give someone new to web development a basic understanding of how to structure and build a test application.

Increasing the complexity of the project could entail using more interactive frontend development libraries (e.g., React.js), user login/authentication flows, making it a full-stack app (e.g., MERN with Mongo.db), creating a desktop app (e.g., with Electron), etc.
