use db;

show tables;

-- aggregate functions

Select sum(price) as 'total price' from product ;

select max(price) as 'max price' from product;

select min(price) as 'max price' from product;

select avg(price) as 'avg' from product;

select count(price) as 'cnt' from product;

-- scaler function

select upper(price) as 'upper' from product;

select lower(price) as 'lower' from product;

select abs(price) as 'abs' from product;

select ceil(price) as 'ceil' from product;

select floor(price) as 'floor' from product;

select length(pname),pid from product;

-- TCL command

select * from customer;

start transaction;
insert into customer(cid,cname) values(6,'Mohini');

rollback;

commit;

-- temp data
use db;
create table tb1
(
id int
)

select user from mysql.user;

show grants for Neel;

select user from mysql.user;

grant select,insert,update,delete on customer to Neel;

revoke select,insert,update,delete on customer from Neel;







