# Git to EB
Test project for setting up a CI/CD pipeline between GitHub and AWS ElasticBeanstalk via CircleCI

## Goal & Purpose
The goal for this project is to successfully establish a CI/CD pipeline between GitHub and AWS. The goal is for the following procedure to work out:

1. Changes are pushed to master
2. CircleCI picks up the changes and pulls the latest repository
3. CircleCI does all the testing and building, if successful it deploys the code to Amazon's ElasticBeanstalk

This is an infrastructure exercise for myself so that I can apply this automation to other projects I'll work on in the future