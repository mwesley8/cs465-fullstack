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

Module 5

Refactor the express code to retrieve information from a database. It will provide access for an Angular front end as well as an Express backend. The logic for access data is exposed as a /app route. Begin by opening PowerShell with a module five branch.

In visual studio, we created a new top-level folder called app_api. This is where the application logic for the api will live. Then we created sub folders named controllers and routes. Take the models folder and move it to the app_api folder. In the controller folder, we created another trips.js file. Line 4 is needed or an error will be thrown.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/9a82c520-13e6-4337-bd7a-6e1445028dd8)

The video does not cover the additional code needed to query the database for a record using the trip code until towards the end. The method is similar to the find function with an additional parameter. Instead of using an empty filter, we pass in a key/value pair snuggled in curly braces. The code is displayed below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/280d94d2-4a6f-4f4b-8957-53ef88744eea)

To use the newly created trips.js file, we need to set up a route. In the routes folder, create a new file called index.js. Inside the route, take a request for trips and pass it to the controller. The route may have multiple controllers. The code is display and commented.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/acce219a-4ba2-423f-b37c-891bdd186cfb)

Modify the app_js file. Add the three lines of code:

require(‘./app_api/models/db’);

const apiRouter = require(‘./app_api/routes/indes’);

app.use(‘/api’, apiRouter);

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/4673ad07-a629-4c30-9d3d-b3297157d4fa)

The above shows that I was able to successfully move the model data from the app_server folder to the app_api folder. The web page displays information retrieved from API database. The tutorial recommends downloading postman to check API endpoints and request.

I navigated to the postman download page:

https://www.postman.com/downloads/ 

and clicked download. The postman application and shortcut were created. I chose not to install the full version and clicked on the lightweight editor.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/0416b114-a3b2-4f63-bd8e-015747098635)

The above picture shows that I am successfully able to make a get request to an API endpoint that returns JSON data from a MongoDB database. For further testing, we added another router to the index.js file under the router folder in the app_api. The new index.js file is shown below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/10c716ad-1a76-4ce6-b275-1edb45d94851)

Adding the unique code for the trip will return the below in postman:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/b0ab3dea-d550-44f1-a9ce-9b9d41ccf4a9)

Lastly, navigate over to seedgooserc and replace the mode base directory to:

app_api/models

The change is displayed below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/32616b2d-bb7e-49f3-8388-0f1287598d22)

Continuation

Now that we have the API set up, we have to refactor the back-end server and controller. To do so run the following scripts:

install npm request

This allows the application to make HTTP request from within the JavaScript code. App_server folder is the application back-end. Replace the code in the travel.js file in the controller folder with the code shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/11654e40-3694-4f77-aded-e9589afc6eea)

Currently, running the application displays the travel.hbs but does not show the information from the database. I will continue to investigate this phenomenon. Update: when I made the GET request for the trips, I was passing it to the handle bar in the wrong format. The autocorrect will put JOSON instead of JSON. Luckily, I was able to output data earlier in the program.

The file is shown below. Line 57 was the culprit.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/d710443a-edec-459a-935a-203bb2870aa8)

I changed the hyper link reference of the image to serve a web page that displays the trips information for more testing.

Module 6 Angular

I am very excited to explore Angular. It is a great tool to list on a resume. Hopefully, the module will go smoothly. The instructions mentioned the PDF covers the process in detail. First, we had to install a specific version of Angular. It appears that Angular has gone through several upgrades and the provided code will not work. Run the following in PowerShell:

Npm install -g angular/cli@v6-lts

Unfortunately, I ran into a problem soon after installing angular. I am getting an error that say ng is not a recognized command line statement. I did some research and it may be related to the problem that I had in module 1. However, after three hours of research, I finally determined my error.

After performing the above statement, find where the NPM folder is located. Mine was located in the ‘C:” directory. I also installed NPM in the travlr application. It was not until I added the path to the environmental variables that I was able to run ng as a cmdlet. The full explanation along with step-by-step instructions can be found here: 

https://stackoverflow.com/questions/37991556/ng-is-not-recognized-as-an-internal-or-external-command

Currently, I am able to run ‘ng’ commands from the system, user, and application terminals. I ran ‘ng version’ to display the current version. The output with the Angular logo is shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/3180b6d3-83eb-460f-b856-e3478186724c)

Next, we had to create a new Angular application. This required using ‘ng new’. The command new directory and/or new Angular application. I ran the following command:

ng new travlr-admin --defaults=true --skipGit=true --skipTests=true --directory app_admin

This command does not work. After some research, run the following command:

ng new travlr-admin --defaults=true --skip-git --skip-tests --directory app_admin

The above command create a new angular application and directory in the travlr application. Below is an output showing the file tree.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/710f91b7-fd88-409c-9b18-61c9907401d9)

The wheels are slowly turning. Create a new folder named ‘css’ under the asset folder in src. Drag the style.css file into the newly created folder. Update the angular.json file to reflect the new path. Specifically, line 53 and 115. Update with the following:

"src/assets/css/styles.css"

Replace the title and message in the index.html file, and in Visual Code type:

cd app_admin

cd ng serve

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/b6735d3f-1119-49d9-b9af-76527a55a2d0)

At this point we have successfully created an Angular application to support the administrative functionality required to support Travlr Getaways!

Create Trip Component

We used a type script file under the src/app folder named trips.ts. The file contains some test trip JSON data that is copied from the contents of the tirps.json created earlier in the top-level data folder. I edited the trips file, replaced the ‘[‘ brackets with ‘{‘, and removed the numbered identifiers.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/a41aafb3-feba-4e79-b1f1-4a578c342e4f)

The modifications in the type script file exports an array that contains key/value pairs (map). The trip listing component imports the type script file and defines a class variable to contain the trips list data. The code is commented and displayed below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/f8f69171-cb75-41ed-ae9d-68cc92232017)

The trip listing component html file needs to have access to the trips array. This is accomplished by adding the trips array to the class file. The variable becomes accessible from within the HTML. Angular uses double curly braces similar to Handelbars.

<pre> {{ trips | json }} </pre>

The app component html will render the trip data.

"<h1>{{ title }}</h1>"

<app-trip-listing></app-trip-listing>

The angle-bracket syntax is known as a selector. Angular will inject the output of the component that contains the selector definition. After editing the component files and using a selector, the front-end should display raw json data.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/ff1b4e3e-3a59-41ef-a7fd-2c7a342c24ae)

Next, copy the images folder from the Express public folder to the assets folder so that they are available to the Angular application. The following code fragment relies heavily on the Bootstrap CSS framework to format the trips.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/af61d01d-3021-4974-a0bc-903e641e9b22)

From the above, the trip-listing component uses an ngFor loop to display the trip listing information in card format. Below is the output after component changes are made to render the trip listings.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/4d43fafa-ae35-45b0-a3bf-d9f2d15dc398)

Refactor Trip Rendering Logic Into an Angular Component

Currently, the trip listing component can only show the trip listing as cards. We want to prevent a coding nightmare when the user wants tor toggle between a c ard view and tabular list view. An alternate approach considers putting the card-rendering logic into a component. Thus, the trip listing page would only need to toggle the correct component to switch the layout. This development process is similar to Separation of Concerns software engineering principle.

I made sure that I was under the app_admin directory in Power Shell. Generate an Angular component called “trip-card” to hold the rendering logic of the card view.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/06114d42-e371-4333-89af-e731a1a77db6)

Following the thought process mentioned earlier, I inserted the rendering logic within the for-loop of the trip-listing component html into the newly created trip-card component. The code removed is replace with a selector.

The flow of logic is the view will loop through each trip and at will call the app trip card component passing it a trip, and the component will have access to that trip and will have access to it. The trip-card type script file is modified to add the Input directive. Now the trip card is accessible anywhere in the application.

Create Trip Data Service

The components will use functions and/or objects that are defined by a ‘service’. A single page application will be used to obtain information from another part of the application in a distributed architecture. We created a REST endpoint earlier in the application. Now we will create an Angular service to handle access to the backend endpoint for trip information.

We need to add directives call the Angular admin site over to the Express backend API. The app_server is located on localhost:3000 and the Angular front-end is located on localhost:4200. That alone qualifies as two different web-sites. We are going to do some cross version resource sharing. The app.js file should resemble what is shown below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/44c103de-6637-47d6-abe4-28bebbccdd19)

Now that we have access to the Angular front end, we will create the single page application or service. Create a new Angular service by running the code below:

ng generate service trip-data

The single page application probably will interact with more than one service. Instead of having a bunch of services, we create a folder that will contain the services. Then move the newly created trip-data type script file into the folder.
Next we created another folder in app named models. Create a type script file name trips.ts. Inside, we are going to create an interface to define the data for a single trip that will be received from the API endpoint as JSON.

Instances of this interface will be used to transfer the HTML form data back to the component. Additionally, the information is passed back and forth with the REST endpoint. The conversion between JSON and Java Script is taken care of automatically by Angular.

We have to make changes to the app module to let the program initiate the single page application. Currently, I get an error when I did not initialize every variable. I followed the instructions found here. However, I am currently having a problem getting HTTP Client to work. It says that it is not a recognized angular module.

In Angular > 4, the response is already in JSON format. You do not need to call .json on the object. Simply use it directly. And example is shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/36ce309d-bf75-4dd2-8d74-1569047c0d75)

Update: I am able to run ng serve again. There were a few problems that I had to fix. HTTP is no longer recognized in my version of Angular. I had to use HttpClientModule from the common subdirectory, list HttpClientModule under imports in the app.module.ts file, and import HttpClient in the trip-data.service.ts file. You can see the changes above. Also, make sure the app.module file looks similar to what is shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/3f5f9489-1926-4e5e-aafc-905f36f11460)

The video skims over running the application with the front and the backend. Using the terminal in Visual Studio Code, run npm serve. This will start the MongoDB server on the backend. Next open up PowerShell. Switch the travlr directory and then to the app_admin directory. Run ng serve. Navigate to localhost:4200 and the angular application should display the trip listing.

Below is screenshot of the application displaying an angular front end connected to a mongo dB back end.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/6f20f0db-b079-476f-b58c-7bbe3d82cfb3)

Navigating over to the terminal in VS Code, we can see that the application is making get request to the MongoDB server. The single page application is running in the browser. Earlier, we added some user output to display the flow of control. Under developer tools in the browser, clicking on the console tab will display the messages shown below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/131b53f2-9c18-43ff-9a1e-58ee2cf92200)

The above shows that I was able to successfully wire the front-end single page application to the backend API endpoint by creating a Trip Data Class and a GET request for it.

Add/Edit Trips

CRUD operations are the basis of angular application. In the section, we will implement code for the user to add and update a trip. We started by running the code:

ng generate component add-trip

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/60e7c8c7-527f-4aab-b3ea-45589f68f1c7)

I added to html code to display a button in the trip-listing component HTML file. The new file is shown below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/72fe3692-f11a-4bc8-8a39-4a27d0bd72a5)

When the button is clicked, the addTrip function is invoked. The function is going to use Angular’s built-in capabilities to navigate the UI to the add-trip-component. The edits below were made to the trip-listing component.ts file.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/760edb58-1889-4bb2-a98b-23712913e8b5)

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/22baaa29-44d4-40a4-b74e-2db3c3bd7b44)

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/fb7e9d95-910a-4c9a-b814-d92b070023b6)

It is best to keep the routing code for various URL in a separate and modular file. We created a app router type script file to contain the logic. The new module must be imported into the main application so that it can be loaded when the Angular application starts. The Reactive Forms Module is needed to support interacting with HTML forms, child controls, and handling form submissions.

A small change is needed to support routing. The router now controls page transitions to include the initial page. Code was added to the add-trip-component that contains the layout for the form the user will fil out to add another trip. I had trouble with the code provided by the instructor. After some research, I was able to find the correct way to access an index signature. A code snippet of the add-trip.component.html file is below:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/70921a1e-01ea-4a11-9a88-2174ac3baa49)

The PDF was correct in mentioning that the code does replicate. Pay special attention to the label, form control name, and place holder. Additionally, make the changes for each attribute contained in the form.

Running the application should display the front-end on localhost:4200 with an add trip button.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/006ead37-0a97-4dcd-a44e-aa32de85f0b5)

Pressing on the add trip button will instruct the router to navigate to the form. The add-trip address and form is displayed below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/4cdcd9a7-e492-4db4-8eb1-bd2fb8dc594f)

The user is able to fill out the form, but they are not able to submit the new trip. We had to set up logic on the front end add a new trip. Similarly, we have to set up logic to add the new trip to the database. A tripsAddTrip method is added to the app_api/controllers/trips.js file. The method is reflected below.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/5beda505-edb2-4e75-b4b8-b9527463d687)

The module exports the tripsAddTrip module to the router.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/93a1e8ae-2aaa-452e-a542-861b5f675e16)

The information is obtained from the front end is received and the attributes associated with each parameter is assigned. Below is a screenshot of the newly added trip.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/acf6a60a-378b-4937-82a1-5fcb3df9df2e)

Navigating over to MongoDB, we can see the newly created trip with its unique identifier.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/36a857f5-8b8b-4628-b069-b5c3ee97a915)

Logic to edit a trip is similar to adding a trip with a conditional statement to check if a matching trip was found. We added a tripsUpdateTrip method in the trips.js file. Now we needed to inform the router in the index.js file about the new method.

Add a new component for editing a trip:

Continuing with performing CRUD operations, we added logic to perfrom updates on a trip (PUT). Run the following commands:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/437ebf95-2ad4-48ef-bc2a-cac3d60affe8)

PowerShell will generate an error stating that more than one module matches. Run the following:

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/f7f9f722-8551-45f5-aeae-7c0b2d9d729d)

The above specifies the main app. Now we have to specify which module the new component is to be generated within. The form for edit is similar to the one for add. Copy the content of add-trip into edit-trip component HTML. Edit the form group, name, and add a button to the trip-card component.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/69b435f3-60cb-433a-9144-af855467d1e4)

When the edit button is clicked, the editTrip(trip) function will be called and pass the trip instance that is displayed the card. The Trip Card function needs to define the editTrip() function. Add the three lines of code to the trip-card component type script file.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/89e8306c-fcff-4681-b5c2-4c2a28e8504d)

Line 3 does not count. We had to comment it out earlier in the program before we created a model to communicate back and forth between Angular and MongoDB. Next, we added a router to the trip-component constructor. This will use Angular’s internal routing to navigate to the edit-trip form.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/624bb32d-2a40-4669-83e6-28ed69fdee5c)

Lastly, define the editTrip function that will store the tripe code for later.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/761ec3a4-cdbf-4894-a4dc-78f5c5ccf49d)

Module 7 Security

The module is broken up into two parts. The first part will cover securing the API endpoint. We will focus on authentication. This principle in security focuses on verifying the user is who they say they are. Accomplished by requiring a user to prove who they are by providing credentials such as an email and password.

The API on the backend is the gateway to the outside word. Before performing CRUD operations, the API needs to makes sure that the user is authorized. One way is to check if the current user has a token. The JWT bearer token stored in local storage or cache can be decoded to reveal user information. This information is cross-check with documents in the database before granting access and/or approval.

Our application uses the local database to store the user information. First, we had to import a few node packages to facilitate authentication. Typically, security is handled by role-based authentication control. We are going to use the local database to store the user information.

Tools used:

JSON Web Token: open standard library that allows web tokens to be validated. You need a secret string.

Crypto: built into Node module

DOTENV: load environment variables. Storing variables in an environment is called the 12th factor methodology.

Passport Local: authentication middleware for Node that provides support connect to several backend strategies. We are using user name and password

Express-jwt: Add middleware to the express application

Then we create a .env file in the top level folder. Our application uses the original name of Southern New Hampshire University. Verify that .env is in the gitignore file. Don’t be the “smuck” that gave away the keys to the kingdom. We had to add the require dot env config statement in the app.js file.

Create a file name user.js under the models folder under the app_admin folder. Inside the newly created file, create we are going to create a user Schema. The user schema contains the two parameters that we will use to perform authentication. The attributes are name, email, and password. A salt and a hash are generated to encrypt the password. The file also has a method called valid password that will check if the login password matches the stored password associated with the user.

Remember, when adding a new schema, we have to notify the db.js file of it’s existence. A simple require statement at the end of the file requiring the user schema was added. Now we have to configure a class for the passport.

The valid password method takes the password submitted by the user from passport and hashes it. Then it compares it to the password on file. In my implementation at the point during testing in postman, I had to comment out this function. An API website requires a controller to help with authentication. There is a discrepancy between the video and the PDF. They contain to different implementation. One use Angular to create the authentication file and the other does it manually. The one with .service in the video is Angular.

Furthermore, pay special attention to where you place your files. During the video, the instructor has the files located in different areas depending on the section he is covering. Logic for the authentication controller was added. The logic contained the login and register syntax for passport authentication after submission.

The register method checks to makes sure that the user entered an email, name, and password. If any of the fields are missing, then a message is displayed to the user. Otherwise, password will authenticate the user. Local Strategy will use JWT to generate a token. Express uses middleware to secure a website. Now we register the controller with the index. We brought in the authentication controller and added routes to the post calls. The application needs to know where to find the configuration for passport. Furthermore, we need to add authorization access to the API. Now we can test the new authentication in postman.

First, we called the login method.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/838348dc-0949-4b38-801b-fe73bf0451af)

As you can see from the above, I have user in the database, logged in, and there is a 200 response with a token displayed in the body. With the route setup, we add logic to the trips.js file to check if the user has a token before the user is able to perform PUT operations. The operations are wrapped in a call to getUser(). The same thing is applied to the update function.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/707d3921-f091-49f6-bab7-25b9f3323054)

The above photo shows a POST request to the API to update a document. The user does not have a token. A 401 unauthorized response is shown and a message stating no authorization token was found. The token generated after the user logs in is called the payload. The token can be decoded using the JWT debugger. Below is the decoding.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/9f21858a-6161-46e5-85f9-4300fdca229c)

Module 7: Front End Security

Now we are going to cover the logic for securing an Angular front-end SPA. To start, we opened “three” terminals. Two were used to start the application and the third (Power Shell) was used to create app components. In the response from the back-end, we get a token. The angular website has to generate a class called authResponse and moved into the models folder.

We modeled the token with a string to it. Another class called user was created. We used it to model the user. It contained two variables (email, password). Now we have a user class to represent what we send and an auth class to handle what we receive. The required elements to handle a login is handle.

We need a place to stash the response. A class called storage will allow us to access the cache. The token is injected from Angular core. A factory method will set up local storage. Modify the trip-data service. Import the recently created files (auth, user, browser storage). We are injecting into browser storage. Logic was added to the constructor to use this variable in the class. Additional methods were added (register, login, auth).

An authentication service is needed to handle the authentication that we just built. At this point the video has makes a file called authentication and moves it inside the services folder. Later you will see the authentication file is not located there. He used a different location and import statement towards the end of the video.

Authentication service has object instances of the browser and trip data service in the constructor. The instances are used to handle various authentication operations. Tokens are saved using the function saveToken and tokens are retrieved from local storage with getToken. Logout will handle removing the token from local storage and is logged in will be used to dynamically change button visibility. The login method will handle the user login. Registering a user saves the user inside the back-end database and saves the token inside local storage.

Run the application. Now we need logic to handle navigation. Best practices recommend not to put all the nav bar logic in the app component html. Using angular or manual, create a new component called navbar. Copy and paste the html code inside. The video does not mention that you have to add html code to the app component before running the application. Otherwise, this will delay completion by hours.

Below is a photo of the nav bar added to the application. I bootstrapped my application because I thought my nav bar was not working properly with bootstrap 4. Additional related details will follow.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/432367c3-1730-43dc-8a97-9566d1366322)

From the above you can see the nav bar. Like a Burger King commercial, individual results may vary. However, we can see the log in button, trips, heading, and logout button the top right-hand corner. We added logic for a login screen. A login component was created and HTML logic added to display a login form. It is an email, password, and submit button.

I needed to make my login component methods public. We added an additional route to the router. Now login becomes a valid route. If we refresh our application and click login, then we will see a login form.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/af9366b9-5072-4220-a942-7d8a9dfb4b1e)

If you supply user information and click sign in, then you will see that the log in button disappears and logout button appears.

![image](https://github.com/mwesley8/cs465-fullstack/assets/105822088/378e4b39-f39d-441e-890c-7d4c0ef6e3fb)

As I mentioned earlier, I bootstrapped my application. The token is located in local storage. I do not fully understand bootstrap. However, I cannot follow the PDF and check the token in the browser. I am inclined to think that the functionality was removed because of a Common Platform Vulnerability or that poor smuck the instructor mentioned in the video. I did not add logic to turn the add button on and off. That required a simple ngif statement inside the button div. Unfortunately, when I used ngif, everything after the ngif was not readable in the browser. I tried to check the token in the browser. The bootstrap application prevents me from seeing what is in the application network local storage. The app index.js file does have bootstrap code. I was able to get some extra cirricular practice with bootstrap.

Overall, the application meets the client’s specifications. Learning the MEAN full stack tech stack has been an exciting experience. Eight weeks is not enough time to fully grasp the material. Alternatively, I significantly increased my skill set over the preceding eight weeks.

