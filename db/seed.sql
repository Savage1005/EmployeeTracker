INSERT INTO department (name) VALUES
("Manager"),
("Web Developer"),  
("Marketing"), 
("Product Development"), 
("Product Testing");

INSERT INTO role (title, salary, department_id) VALUES
("Chief Exec", 200000.00, 1),
("Manager", 150000.00, 2)
("Sr Software Engineer", 100000.00, 3)
("Sr Web Developer", 75000.00, 4)
("Multimedia employee", 50000.00, 5)
("Software Tester", 50000.00, 6)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Tom", "Savage", 1, 2)
("Nora", "Daisy", 2, 1)
("Jim", "Davis", 3, 2)
("Frank", "Zappa", 4, 1)
("Jerry", "Garcia", 5, 2)
("Jimi", "Hendrix", 6, 1)