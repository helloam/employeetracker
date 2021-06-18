INSERT INTO employee (employee_name, role_id, manager_id) 
VALUES
("Justin Cornish", 1, 6),
("Fiona Abraham", 2, 5),
("Frank Ince", 3, 4),
("Victoria Mitchell", 2, 3),
("Deirdre Scott", 1, 2),
("Amelia Lee", 7, 2),
("John Watson", 4, 6);

INSERT INTO roles (title, salary, department_id)
VALUES 
    ("Intern", 40000, 1),
    ("CEO", 50000, 2),
    ("System Admin", 80000, 5),
    ("Marketing Director", 98000, 1),
    ("CIO", 300000, 2),
    ("VP of Finance", 200000, 7),
    ("HR Manager", 100000, 3),
    ("Office Manager", 50000, 8);

INSERT INTO department (department_name) 
VALUES
    ("Marketing"),
    ("Executive"),
    ("Information Technology"),
    ("Marketing"),
    ("Executive"),
    ("Finance"),
    ("Human Relations"),
    ("Operations");

