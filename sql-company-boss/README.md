# SQL Company Boss

## Problem

In this MySQL challenge, your query should return all the people who report to either Jenny Richards or have a NULL value in ReportsTo. The rows should be ordered by Age. Your query should also add a column at the end with a title of Boss Title where the value is either None or CEO.

## Input

Table name: TableCompany

Version: 8.0.23

| ID | FirstName | LastName | ReportsTo      | Position   | Age |
| -- | --------- | -------- | -------------- | ---------- | --- |
| 1  | Daniel    | Smith    | Bob Boss       | Engineer   | 25  |
| 2  | Mike      | White    | Bob Boss       | Contractor | 22  |
| 3  | Jenny     | Richards | null           | CEO        | 45  |
| 4  | Robert    | Black    | Daniel Smith   | Sales      | 22  |
| 5  | Noah      | Fritz    | Jenny Richards | Assistant  | 30  |
| 6  | David     | S        | Jenny Richards | Director   | 32  |
| 7  | Ashley    | Wells    | David S        | Assistant  | 25  |
| 8  | Ashley    | Johnson  | null           | Intern     | 25  |



## Output

Your output should look like the [following table](https://s3.amazonaws.com/coderbytestaticimages/editor/challenges/boss.png):

| FirstName | LastName | ReportsTo      | Position  | Age | Boss Title |
| --------- | -------- | -------------- | --------- | --- | ---------- |
| Ashley    | Johnson  | null           | Intern    | 25  | None       |
| Noah      | Fritz    | Jenny Richards | Assistant | 30  | CEO        |
| David     | S        | Jenny Richards | Director  | 32  | CEO        |
| Jenny     | Richards | null           | CEO       | 45  | None       |
