# Assessment3 #

## This is the database of group.

## The develop environment ##
* npm init
* npm install --save-dev babel-cli babel-preset-env
* touch .babelrc
* add {"presets": ["env"]}
* npm install --save-dev babel-watch
* add "dev": "babel-watch nameOfUrOwnFile.js" in the first bracket
* npm install experss
* npm install mongoose
* npm install cors

## To run database
* make sure you install mongoodb here https://www.mongodb.com/download-center?jmp=nav#community
* npm run dev in project directory
* open another terminal and type "mongod"
* recommended tools -- robo 3T
* add new connection
* right click connection -> create database -> open database - collection -> create collection -> insert document
* to test, open browser and type localhost:4000/groups (or other port you define), input the url
* recommened using Postman to try CRUD methods

## Version Link ##
| Version      | Short description |
| ------------- |:-------------:| 
|[V1.0](https://github.com/hongnangyanbily/assessment3/tree/1.0)| The Angular mockup for week 5 lab|
|[V2.0](https://github.com/hongnangyanbily/assessment3/tree/2.0)| The Group database for week 6 lab|
|[V3.0](https://github.com/hongnangyanbily/assessment3/tree/3.0)| The User databasae for week 6 lab|
***note : There are two different database built for week 6 lab***

## Code Principle
### This is the principle our group agree to implement while developing this project.
### The principles include code quality, design and group work.
### All principles are figured out by our group together.

1.  Always assign meaning names and follow the name format, no matter components, files or objects. The reason doing so is for better understanding and further code checking.

2.  Always comment code. Use appropriate comment style so that it is easy to back track and review code.

3.  Try to avoid repeating. As this is not a small single proejct, it is necessary to divide complex functions into small pieces instead of writing long code in several files.

4.  Ensure simplicity of code, that means, avoid meaningless and unnecessary and packages, service, functions, etc. This is to reduce misunderstanding.

5.  Check code regularly. As our group is updating the project weekly, it is important to go through previous code and make possible adjustment. Sometimes developing a function requires change of previous code or structure so checking every week helps.

6.  Design the pattern for next development. Try to improve the code quality and enhance project performance.

7.  Always update and bring up a detailed map for proejct module, class and method. Therefore, we can have a quick understand for peers' work.

8.  Use console log message when necessary as it is useful to find bug and check error asynchronously.

9.	Build simple user interface. The css style does not have to be complicated but clean and well-structured. We are trying to avoid messy components in the interface.

10. Keep our development tools up-to-date. As in different stage (building database, connect with server, etc), extra tools or packages are required. It is vital to keep them up-to-date and everyone in the group is supposed to use the same version to avoid unnecessary version conflicts.

11.	Never copy and paste code. It is fine to watch online courses and follow the sample project. However, we should adjust the code based on our own understanding, instead of copying exactly the same code, which can be considered as plagiarism.

12.	Update readme file with every update of our project. This is to make sure users know how to install, build and use it.

13.	Avoid separating functional parts to different group member, for example, A is doing database, B is responsible for css. Everyone is expected to participate, such as, A is doing USER database, B focuses on GROUP database.

14.	Contribute equally. Although it is quite impossible to commit exactly the same number of lines of code, everyone needs to contribute enough. Being fair on this stage means everyone spends similar time on learning and working together.

15.	Avoid sudden change. Currently, we all agree on using MEAN stack (MongooDB + Express + Angular JS + Node JS). It is not appropriate to change it to React or some other database during the process.
