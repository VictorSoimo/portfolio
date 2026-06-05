## Frontend Deployment
On push to main branch on  frontend/** folder 
--> run tests --> If pass: build and deploy to github pages.

## Backend Deployment
# Scenario 1: Backend code update
On push to main branch on backend folder --> run tests --> If pass: build docker image --> tag with semver if necessary --> deploy image to Azure 

# Scenario 2: Blog markdown update
On push to main with changes in backend/blogs/*.md --> restart container without rebuild or testing