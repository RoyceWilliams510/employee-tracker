DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

USE company_db;

CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

USE company_db;

CREATE TABLE employees(
     id INT NOT NULL AUTO_INCREMENT,
     first_Name VARCHAR(30) NOT NULL,
     last_Name  VARCHAR(30) NOT NULL,
     role_id INT,
     manager_id INT,
     PRIMARY KEY (id)
);

INSERT INTO employees (first_Name, last_Name, position,manager_id)
VALUES ("Woyce", "Rilliams", "CEO", NULL);


INSERT INTO employees (first_Name, last_Name, position, manager_id)
VALUES ("David", "Reback", "Engineer", 1);


INSERT INTO roles (title, salary, department_id)
VALUES ("Engineer", 70000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Scientist", 80000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Secretary", 38000.00, 2);


INSERT INTO roles (title, salary, department_id)
VALUES ("Support Line", 40000.00, 2);


INSERT INTO roles (title, salary, department_id)
VALUES ("Stock Specialist", 65000.00, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Not Assigned", 30000.00, null);


INSERT INTO roles (title, salary, department_id)
VALUES ("Crowd Funder", 55000.00, 3);


INSERT INTO roles (title, salary, department_id)
VALUES ("CEO", 999999.99, 4);


INSERT INTO department (name)
VALUES ("Research");


INSERT INTO department (name)
VALUES ("Customer Service");

INSERT INTO department (name)
VALUES ("Finance");


INSERT INTO department (name)
VALUES ("Management");


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
