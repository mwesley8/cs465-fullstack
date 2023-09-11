# cs465-fullstack

CS-465 Full Stack Development with MEAN

Module One: Create Website

After reviewing the assignments and final project, I am excited to learn the MEAN stack and explore the aspects of full stack development. The module one section required us into install the tech stack required for the class. I navigated to each download section to install the software. MongoDB wanted me to install Mongo Compass as the graphical IDE. I do not know if I can use Mongo Compass instead of Robo.

I ran statements in PowerShell to check the Node.js, Node Package Manager, and GIT version. I opened a web browser and went to my git hub page. I created a new repository called traveler. I click on the down arrow to retrieve the GitHub http address. Then I created a clone of the traveler repository in PowerShell.

I check the status of git in PowerShell and then created a new branch called module one. I was instructed to never work on the main branch. After creating a branch, I install express generator. Express is an API that is use to create web applications. After the install, I could see number files that were added to my repository.

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
