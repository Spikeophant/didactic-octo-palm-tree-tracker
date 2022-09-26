INSERT INTO department (name) VALUES  ('IT'),
                                      ('Engineering'),
                                      ('Finance'),
                                      ('Credit'),
                                      ('Facilities'),
                                      ('Supply Chain');

INSERT INTO role (title, salary, department_id) VALUES ('Sr. Manager Engineering', 180000.00, 2),
                                                      ('Software Engineer', 120000.00, 2),
                                                      ('Operations Directo', 210000.00, 5),
                                                      ('Logistics Coordinator', 135000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jack', 'Sparrow', 1, NULL),
                                                                         ('Gordon', 'Freeman', 2, 1),
                                                                         ('Kelly', 'VonNeuman', 3, NULL),
                                                                         ('Bruce', 'Banner', 4, 3);