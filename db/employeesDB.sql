DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    employee_name VARCHAR(20),
    role_id INT (10) NOT NULL AUTO_INCREMENT,
    manager_id INT(10),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(25) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(25) NOT NULL,
    department_id INT(10),
    PRIMARY KEY (id)
);

