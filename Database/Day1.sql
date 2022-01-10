-- create Database
    CREATE DATABASE DB;

-- create a table
CREATE TABLE dayone (
  id INT PRIMARY KEY,
  name varchar(20),
  Age int default 18
);

-- alter table 

alter table dayone
add email varchar(30);


 -- insert some values

INSERT INTO dayone VALUES (1, 'Ryan', 12 ,'Ryan@aimdek.com');
INSERT INTO dayone VALUES (2, 'Joanna', 16 , 'Joznna@aimdek.com'),
INSERT INTO dayone(id,name,age) VALUES 
(3,'Rose' , 25 ),
(4,'Lisa' , 25 ),
(5,'Kay' , 18 );


-- select statements

select * from dayone;
select * from dayone where age=16;
SELECT * FROM dayone order by age;
SELECT * FROM dayone order by age desc;

select * from dayone where email like '%aimdek.com';
select * from dayone where age like '1_';

select count(*) from dayone;
select count(*),age from dayone group by age;
select distinct(age) from dayone;
