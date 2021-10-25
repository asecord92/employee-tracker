INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Finance'),
    ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 80000, 1),
    ('CFO', 120000, 2),
    ('Leed Engineer', 110000, 3),
    ('Salesperson', 55000, 1),
    ('Accountant', 90000, 2),
    ('Software Engineer', 80000,3);

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES 
    ('Adam', 'Secord', 6, 3),
    ('Erin', 'Swete', 3, NULL),
    ('Adam', 'Swete', 5, 2),
    ('Donna', 'Swete', 2, NULL),
    ('Michael', 'Robertson', 1, NULL),
    ('Justin', 'Robertson', 4, 1),
    ('Alison', 'Long', 6, 3);
