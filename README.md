<<<<<<< HEAD
## kingsmensoftware.com
- pushes to the gh-pages branch will reflect on public site

## Google Analytics
- https://analytics.google.com/analytics/web/#report/visitors-actives/a82197225w121672528p127310630/
- log in with the kingsmensoftware@gmail.com account

## Slack
- #website


## To run locally:
- `gem install jekyll`
- `gem install bundler` if it's not already installed
- `bundle install`
- `bundle exec jekyll serve`
- go to `localhost:4000/kingsmensoftware/`

## Setting Up Your Local Environment:
- Use `git clone` to clone the repository to your machine
- Change directories into the repository using `cd kingsmensoftware`
- Add a remote to the staging/QA environment:
   - Copy the clone URL for devellocus.github.io
   - Run the command `git remote add <remote-name> <url>` where `remote-name` is the name you specify and `url` is the devellocus URL you just copied

## To develop and push changes:
Only use the `master` branch. When changes are pushed to `master`, an automated task will build and push the new changes to the `gh-pages` branch.

- Before pushing changes to master, push and validate them in the QA environment. Follow the steps below
   - Build your changes using `bundle exec jekyll build` or `bundle exec jekyll serve`
   - Stash your changes and check for changes in the repo:
      - `git add .`
      - `git stash save <change-message>`
      - `git fetch`
      - `git pull`
   - Apply your stashed changes
      - `git stash apply`

   - Commit your changes to QA:
      - `git add .`
      - `git commit -m <commit-message>`
      - `git push <remote-name> master`
      
 - Once you have verified your changes, run `git push origin master` to push the changes to the master branch
      
      
=======
# uxportfolio
UX Portfolio Website
>>>>>>> e40ea7b5dd6a6b48ce3e1e5751c37c1be14ed7f3
