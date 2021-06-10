# GitHub Search
## Description 
This is a simple application I made as part of the interview process for Hotel Engine. It uses GitHub's REST API to let users search for repositories based on keywords or phrases. Given a search query, the app will return the top 30 results- determined either by GitHub's `Best Match` sorting method or the number of stars. Users can then click on a result to view more details about that repository. 

## Installation
To run this project locally first [get a personal API key for GitHub](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token). Once you have that do the following: 

 -  `git clone`  this repository
 - `cd` into github-search
 - run `npm install` in the root directory
 - run `touch .env` in the root directory
 - open `.env` and add the following code `REACT_APP_GH_KEY=<<your key>>`
 NOTE: `.env` should already be listed in `.gitignore` but if you plan to push your version of this project to a remote repo you should double-check. If it's missing, add it.
 - run `npm start` in the root directory
 - GitHub Search should now be accessible at http://localhost:3000

## Technologies and Libraries Used
This application was written with React and TypeScript. It uses [React Router](https://reactrouter.com/) to organize multiple routes, and [React Toastify](https://www.npmjs.com/package/react-toastify) to handle error messages. 

## Future Iterations
I built this app in just over six hours of work time spread out over two days. I'm proud of my work but there are several things I would like to change if I had more time:
### Testing
This is the biggest issue with GitHub Search. I don't have any automated tests, which is a huge weakness. Although I've done extensive user testing on my own, automated testing would make the finished product about 100% more robust. If I had maybe three more hours I think I could whip up a pretty nice test suite using Jest for unit tests and Cypress for end-to-end and integration testing. 
### State Management 
With an app this small state management tools like Redux or the Context API can feel like overkill. I was able to avoid using these tools without too much prop-drilling, BUT this presents a scalability issue. Adding even two more features could start to cause headaches. At first I planned to use Redux but opted not to since I'd never used it with TypeScript, and while I think that was the right decision for me I'd love to take some time to implement it now. 
### UI
Quite frankly I'm not very happy with the UI. I think it gets the job done, it's responsive, and it supports intuitive user-flows, but I just don't like how it looks. When I began styling, I had already been working for over five hours, so I opted to design something really simple that conveyed the information I needed. I would love to spend another hour or two overhauling the CSS, maybe using something like Sass to DRY it up, and making it look more modern and impressive. Some simple changes like adding a loading screen, which would take less than 15 minutes, could really improve the UX too. 
### Cleaner API Calls
My API calls get the job done perfectly, but I think they're the weakest blocks of code in this project. Some lines look very similar, and could maybe be DRYed up, and there's a couple instances of me interpolating params into a url, which I think looks a bit sloppy. I think it would take me less than an hour to clean these blocks up, maybe by using something like Axios or using async/await.
### TypeScript 
I've only been using TypeScript since April, so I'm still new to it. I generally prefer it over plain JavaScript, but sometimes with async functions I still have to do some guesswork. There are a few instance of the type `any` in the project I wish I could get rid of. I would love to take just a half hour or less and see if I can figure out exactly what types of data I should be expecting in those functions, and type-check them properly. 

## Contributors
All the code here was written by me, [Boone Epstein](https://github.com/deadbelly). If you don't work for Hotel Engine I'm not sure why you're reading this but feel free to reach out with any questions. 
