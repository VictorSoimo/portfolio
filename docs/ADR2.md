## ADR 2: Deployment Architecture

# Status

# Context

First, I decided to think about deployment architecture to learn about different technologies  like containers and CI/CD pipelines.
Second, I want to deploy the frontend and backend to separate platforms.
Third, i want to underrstand versioning of software.
Lastly, I wans to be able to automate my build processes but after I understand their architecture and how to debug them
Also worth  noting is that i intend to be posting blogs on my potfolio and any time i finish a new write up I need it to be available on my portfolio.

# Decision

Frontend Deployment: React app deployed to github pages
Backend Deployment: Versioned Docker Container Images deployed to Azure container Services 
CI /CD : Github Actions.
CMS: blogs will be in markdowns inside the backend and later on a CMS will be built for this purpose.



# Rationale

Guthub pages offers a free hosting plan usng my student developer pack so that decision was a no brainer for me
Azure has provided me to access to a range of services I intent to use to host the backend container. This will change after a year or so where I will change the deployment platform or pay for Azure in case i will be having enough funds.
Versioning and feature flags is also a feature i desire to know how to implement in my applications to enable seamless recovery of my appliation in case of any crash by deployin a different docker image.
Automation of CI/CD using Github Actions will effectively introduce me to the deployment pipelines world. 

# Consequences

one. My portfolio will be easily portable.
two. it will be able to update my portfolio according to new blog posts due to deployment automation.
three. recovering from crashes will be faster
four. definitely i will be sucked into learning much about these technologies and I might spend more time setting up the app architecture before actually writng my first web page.