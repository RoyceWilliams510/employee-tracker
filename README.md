# Employee Tracker

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. In the case of this project the main goal is to create a nodejs ran application that enables companies to store, update and delete their company's information.

## Schema
This is an overview of the schema used in this project
![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

## Installation
To run the application the first step is to clone the repository from github and then make sure that you have nodejs installed on your local device, the link to the documentation and download link of nodejs is [here](https://nodejs.org/en/download/). After having nodejs installed and this repository is downloaded down to your local device, then you will want to navigate towards the directory using the command line and run this line of code 
```bash
npm install 
```
This bash command will automatically install all of the node packages that are essential in this program and will then make the application runnable. Since this application strictly uses node and javascript (outside of the generated website) there is no website for the deployed application and to actually use the application, you will have to run the application through the command line and the way you do this is by running this command line in terminal/bash 
```bash
node server.js
```

## User story
```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```
Demo
[Employee Tracker](https://drive.google.com/file/d/1Y7iJapQPXhurMUyA_z6ECP0t_jNiJru-/view?usp=sharing)


## Review
When this application is ran in terminal one of the first prompts you see will be:

```bash
  What would you like to do?  (Use arrow keys)
❯ View all employees 
  View all departments 
  View all roles 
  Add employee 
  Update employee role 
  Update employee manager 
  Delete employee 
```
This along with three other prompts is how this application is ran, through the power of inquirer and mysql the data that is submitted in the command line ends up getting posted to a sql database. At that database the user also has the ability to update or delete the other stored elements.

## Built with 
* [Node](https://nodejs.org/en/download/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Fs](https://www.npmjs.com/package/fs)

## License
[MIT](https://choosealicense.com/licenses/mit/)
