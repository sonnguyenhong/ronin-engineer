CREATE DATABASE company_boss;

USE company_boss;

CREATE TABLE TableCompany (
    ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,  
    FirstName varchar(255),
    LastName varchar(255),
    ReportsTo varchar(255),
    Position varchar(255),
    Age int
);

INSERT INTO TableCompany (FirstName, LastName, ReportsTo, Position, Age)
VALUES 
    ('Daniel', 'Smith', 'Bob Boss', 'Engineer', 25),
    ('Mike', 'White', 'Bob Boss', 'Contractor', 22),
    ('Jenny', 'Richards', null, 'CEO', 45),
    ('Robert', 'Black', 'Daniel Smith', 'Sales', 22),
    ('Noah', 'Fritz', 'Jenny Richards', 'Assistant', 30),
    ('David', 'S', 'Jenny Richards', 'Director', 32),
    ('Ashley', 'Wells', 'David S', 'Assistant', 25),
    ('Ashley', 'Johnson', null, 'Intern', 25);

-- Solution
SELECT FirstName, LastName, ReportsTo, Position, Age, 
    CASE 
        WHEN ReportsTo = "Jenny Richards" THEN "CEO"
        ELSE "None"
    END AS "Boss Title"
FROM TableCompany WHERE ReportsTo = "Jenny Richards" OR ReportsTo IS NULL;