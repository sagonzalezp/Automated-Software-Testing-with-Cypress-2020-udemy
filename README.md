# Automated-Software-Testing-with-Cypress-2020-udemy
A Cypress course from Udemy

To open the cypress ui type: **npx cypress open**
To run headless tests type: **npx cypress run**

# Course Contents
- Setup Cypress project
- Cypress Basics & API
- E2E Testing framework
- Visual Tegression Testing
- Cucumber and BDD

# Initializing proyect
- Type **npm init**
- configure the project properties
    - package name: automated-software-testing-with-cypress-2020-udemy
    - version: 1.0.0
    - description: (Any descripcion, it's not mandatory)
    - entry point: (index.js)
    - test command:
    - git repository: (your repository)
    - keywords: testing, cypress, automation, course
    - author: 
    - license: (ISC)

# Walkthrough
- cypress.json: Here the default Cypress configuration can be overriden.
- cypress/fixtures/: The fixtures are used as an external piece of static data that can be used in test.
- cypress/integration/: all the test go here.
- cypress/plugin/: external cypress extensions can be stored here. i.e: cucumber.