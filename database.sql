Create Table employees(
id SERIAl PRIMARY KEY,
first_name VARCHAR(40) not null,
last_name VARCHAR(40) not null,
job_title VARCHAR (80) not null,
salary INT not null,
active boolean DEFAULT TRUE);

Select *
FROM employees;

INSERT INTO employees (first_name, last_name, job_title, salary)
Values ('Alex', 'Jung', 'Junior Developer', 55000.00),
('Sam', 'Jung', 'SPED Teacher', 42000.00),
('Spencer', 'Jung', 'Infant', 0.00),
('Michael', 'Jung', 'Chief Network Engineer', 1000000.00);