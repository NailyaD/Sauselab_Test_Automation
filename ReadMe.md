# QA Engineer test

### This is a sample project to test a web application using Cypress. In this project the e2e test for buying an article from https://www.saucedemo.com/ website was implemented.

### To start testing download the project and run 'npm install'

# Important Note:

### In order to run the test smoothly you need to 

#### open Cypress ('npx cypress open') 
#### go to Cypress-> Developer tools -> View Appdata
#### delete this folder: Cypress/cy/production/browsers/chrome-stable/interactive/Default/Service Worker/CacheStorage

### as it causes an issue with eternal loading of https://www.saucedemo.com web-site. This is a known issue occurring primarily with this web site.

