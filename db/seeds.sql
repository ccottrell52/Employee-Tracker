INSERT INTO department (name)
VALUES ("Marketing"),
       ("Sales"),
       ("Finance"),
       ("Support");

INSERT INTO role (title, salary, department_id)
VALUES ("Head of Marketing", 100000, 1),
       ("Salesman", 80000, 1),
       ("Chief of Finance", 150000, 2),
       ("Support Manager", 120000, 2),
       ("Head of Sales", 160000, 3),
       ("Accountant", 125000, 3),
       ("Support Representative", 250000, 4),
       ("Marketer", 190000, 4);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Wick", 1, NULL),
       ("Iron", "Man", 2, 1),
       ("Incredible", "Hulk", 3, NULL),
       ("Leonardo", "Decaprio", 4, 3),
       ("Bruce", "Wayne", 5, NULL),
       ("Peter", "Parker", 6, 5),
       ("Uncle", "Ben", 7, NULL),
       ("Will", "Smith", 8, 7);