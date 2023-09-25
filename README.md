# cs465-fullstack

CS-465 Full Stack Development with MEAN

Module One: Create Website

After reviewing the assignments and final project, I am excited to learn the MEAN stack and explore the aspects of full stack development. The module one section required us into install the tech stack required for the class. I navigated to each download section to install the software. MongoDB wanted me to install Mongo Compass as the graphical IDE. I do not know if I can use Mongo Compass instead of Robo.

I ran statements in PowerShell to check the Node.js, Node Package Manager, and GIT version. I opened a web browser and went to my git hub page. I created a new repository called traveler. I clicked on the down arrow to retrieve the GitHub http address. Then I created a clone of the traveler repository in PowerShell.

I check the status of git in PowerShell and then created a new branch called module one. I was instructed to never work on the main branch. After creating a branch, I installed express generator. Express is an API that is used to create web applications. After the install, I could see a number of files that were added to my repository.

I tried to run my first script and I got an error. I was hoping that I could go my first day without running into an error. Fortunately, I found a fix on stack overflow. After opening PowerShell as administrator, run ‘Set-ExecutionPolicy -ExecutionPolicy RemoteSigned’ and press ENTER. When prompted, type ‘Y’

The web application will contain handlebars. Running the script express –view=hbs --git will show files associated with the web application. Also, it will create a git ignore if one was not created with the repository. I needed to modify the git ignore file. Visual Studio will create some temporary work files whenever we edit and we do not want them in our git hub repository.

Modifying the ignore file required me to search for the common git ignore file under the Global subdirectory. I am not a fan of Visual Studio Code. I prefer VS. For now, I am trying to replicate the instructions adapted for VS. I found the Visual Studio git ignore files. It is recommended to not copy and paste directly from the html page. Click on raw and the paste the code into the git ignore file at the bottom.

After the view handle bars statement, there are two commands mentioned. I installed the Node Package Manager. My application has 7 vulnerabilities (3 High, 4 Critical). 

Update: my experiment with Visual Studio was short lived. The express files and the auto generated files in Visual Studio are different. I added the Visual Studio Code git ignore information. I tried to run the website, but then my computer did not show output similar to the video. It froze.

I looked on stack overflow and it appears that I need to change the config file of npm to the C directory. We will see if that solved my issue. The statement is ‘npm config set prefix 'c:\npm'’. Originally, local host 3000 did not work. I believe setting the config file did work. Irrespective of the error, I currently can view the default express website in my browser.

Next, I copied the images from the traveler folder into the express public folder, replaces images folder, and inserted the style sheet. Refreshing the web page shows the below output.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/229b5e2f-ce98-4263-801e-1d76ae610ba0)

According to this week’s lesson, the demonstrated web application does not look correct. There is not any text wrapping, the font is New Times Roman, and the menu is vertical. We looked at the log output and there was a 404-error associated with the inability to find the style sheet. A simple fix was to change to folder name from stylesheets to css. Refreshing the web page shows the below output.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/7386cda9-92cf-4bc6-bf47-ecd10dcc8b08)

At this point, I have created a web site, imported static content, and the above shows the content being served on a web page. And the last thing to do for this exercise is to save my work. Running git add will stage any new or updated files. When ready, the following statement will push the files to the repository.

git commit -m “Imported Static HTML mark up into Node.js and Express”

Of course, it did not go the way it was supposed to. Before I could push the files to the repository, I had to identify myself to the API. It did not require a user name and password. However, it did require me to set up my git user email and name.

Next, I ran git push to push the files to the repository. There is an error because module 1 does not have an upstream yet. However, git does give the statement to create the upstream.

git push --set-upstream origin module_1

Creating a new branch and uploading changes have become second nature and I am looking forward to exploring MEAN full stack development.

Module 2

The purpose of this section is to refactor a Node.js web application containing static HTML into a proper backend application that uses the MVC architecture. The picture below shows the before and after file structure of the express web application.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/eed5cd3b-ce4f-4335-bb24-e7b55fab9db4)

Create Web Application Folders

Starting with opening up the PowerShell window, switch to the web site directory. Issue the dir command or git status to check the branch. Best practices recommend the application running on the app server instead of the top level directory.

npm install nodemon

The instructions do not show how to install a global installation. To perform a local instance, add the following code to the packages.json file.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/64318f60-fc28-4985-939f-607fbc0cb29d)

In PowerShell, to start Node Mon, type: npm run serve

In Visual Studio Code, create a new folder named app_server. Move the current view and routes folders in app_server. Make sure that app_server is selected when dragging and dropping the folders.

Make a new branch by running the command git checkout -b module_2. The same files and folders are in the new branch. Everything is still the same. NPM has a package called Node mod that makes updating file easier.

Create Controller and Routers

Select the app_server folder and click on add folder. Name the newly created folder ‘controllers’. Inside the controllers folder, create a new file called ‘main.js’.

Typing code . will open up VS code in the current folder. You can work with git commands right in the editor. Create a new top-level folder called app_server. This will be the application code for the backend server. Git will keep track of the changes. Under the app_server folder, I created another folder name controller. Inside the controller folder, a new file name name main.js was created.

The controller will decide what web page will be served to the user. I edited the controller file with the updates in the code shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/220b6ef6-76ac-43e2-88e2-4bb3fda11460)

Next, I edited the index.js file in the routes folder to pass the request for the site default stating page over to the new main controller.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/1cf0e3fa-a2d1-4ddb-a704-6239ef2432cd)

Additionally, I implemented a similar strategy to create a travel page. I added a travel.js file to the controller folder under the app_server folder. I added the below code to the file.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/7d7e4fdc-7e15-4065-afbc-98e92851f104)

This creates a new page called travel. Concordantly, I created a route for the travel page inside the travel.js file. The app.js has to be updated to insert the new app_server folder into the path and add a new route for ‘/travel’.

Creating handlebar views was exciting. I copied the static travel.html to the views folder and renamed the extension to “.hbs” to indicate this will be a Handlebars view. All of the static HTML pages have the same code for a page header and page footer. We can remove redundant code by putting the header and footer layout into a partial.

I created a partials folder inside the views folder. Subsequently, I created a new file called “header.hbs” in the newly created partials folder. I coped the all of the HTML lines for the header and put it inside the new ‘hbs’ file. I did the same thing for the footer. I replaced the code with header and footer enclosed in double brackets ( {{ }} ). To clean up the code, I created a layouts folder under views and moved the layouts.hbs file in there. Lastly, I had to edit the app.js file to register the new partials.

Module 3: Static HTML to Templates With JSON

The first part of Module 3 covers replacing the hard coded HTML trip content with JSON data and a loop using Handlebars directives to render each trip. I created a new top-level folder named ‘data’. Additionally, a new JSON file named ‘trips.json’ with inserted inside the data folder. The instructions stated to copy the static content into the newly created trips JSON file. This encompassed adding three dictionaries inside a list. Each dictionary contained three key/value pairs (name, image, description).

Now, we have to instruct the travel.js controller to use the built-in Node file system. Add the below code to the beginning of the travel.js in the controller folder.

var fs = require(‘fs’);

var trips = JSON.parse(fs.readFileSync(‘./data/trips.json’, ‘utf8’));

Afterwards, add the trips variable as an argument in the render call. I was surprised to discover how an HTML/Handlebars iterates over a JSON file. Remove all but one of the list attributes for the trips in the travel.hbs file. The remaining list uses the ‘this’ operator with dot notation. Replace the image, name, and description fields with the keys from the JSON file. Express will use ‘each’ to iterate over the JSON file and insert the values for each trip.

Module 4: NoSQL Databases, Models, and Schemas

We began module 4 with importing Mongoose to create database schemas. In PowerShell, type and execute the below code:

npm install mongoose

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/5e594437-6256-4495-accc-10e2e6d76a0d)

I created a new folder ‘model’ under the top-level directory app_server. A file name ‘tralr.js’ is located inside the model folder and contains the layout/structure of the database schema. Unfortunately, the database schema structure has to be hard coded in.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/2b2116ab-ccb9-4daf-81ea-c457b3699586)

To interact with the database, we need some additional code. Open up a new tab and search for Simon Holmes getting-MEAN-2. Navigate to the chapter 5 branch, app_server, model, there is a db.js file. It contains the code for interacting with a database. Create a new file ‘db.js’ under the model folder. Copy and paste the code from the GitHub db.js file into the model db.js file. Change line 3 and 57 to:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/9db91d9b-73ba-455d-a9f8-13ed221bc6b4)

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/1afa71c3-cccf-4e5e-9ea2-8a279fd9c55c)

Seeding a database

You can seed a database by hand, but it is error prone. Create a new file in the top level directory travlr named ‘.seedgooserc.js’.

Copy the boiler plate code into the seedgoose.js file. And make the following changes

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/85962631-30ac-47e7-894e-bf2bfc3cd7a2)

In node_modules -> seedgoose -> lib -> genericSeed.js, insert ‘new’ in front of mongoose.Types.ObjectId() on line 119.

Afterwards, run:

.\node_modules\.bin\seedgoose seed

To update a schema or update on conflict run:

.\node_modules\.bin\seedgoose reseed

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/8f2e9c4b-59d8-4725-8702-7cd3376483b7)

Open up MongoDB Compass. The default local host will be in the dialog box. Click on connect. You will see travlr in the file tree on the left side. Click on travlr and you will see the trips schema. Click on it to view the attributes below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/03aac78f-2ab7-41b8-be89-bc1a11c32f3a)








