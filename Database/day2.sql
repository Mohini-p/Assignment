create table customer(
cid int primary key,
cname varchar(30)
);

create table product(
pid int primary key,
pname varchar(30)
);

create table p_order(
oid int primary key,
odate date,
cid int,
pid int
);

alter table p_order
add foreign key(cid) references customer(cid);

alter table p_order
add foreign key(pid) references product(pid);


insert into customer(cid,cname)
values(1,'Kiya'),
(2,'Riya'),
(3,'Piya'),
(4,'Joe');
insert into customer values(5,'Neel');

select * from customer;

insert into product(pid,pname)
values(1,'Pencil'),
(2,'Eraser'),
(3,'Pen'),
(4,'Diary');
insert into product values(5,'Scale',30);

select * from product;

alter table product 
add column price int;

desc product;

update product 
set price=10 where pid=1;

update product 
set price=5 where pid=2;

update product 
set price=15 where pid=3;

update product 
set price=150 where pid=4;

insert into p_order(oid,odate,cid,pid)
values(1,'2022-01-10',1,2),
(2,'2022-01-10',2,2),
(3,'2022-01-4',3,4),
(4,'2022-01-1',3,2),
(5,'2022-01-10',4,2),
(6,'2022-01-2',1,3),
(7,'2022-01-7',2,1);

select * from p_order;

-- inner join --

select o.oid,p.pname,c.cname,p.price,o.odate from 
customer as c 
inner join p_order as o
on c.cid=o.cid
inner join product p
where o.pid=p.pid
order by o.oid;

-- left join --

select o.oid,c.cname,o.odate from 
customer as c 
left join p_order as o
on c.cid=o.cid
order by o.oid;

-- right join --

select p.pid,p.pname,p.price,o.oid,o.odate from 
p_order as o
right join product as p
on o.pid=p.pid
order by p.pid;

-- procedure
delimiter //

create procedure spGetCname()
begin
	select cname from customer;
end //

call spGetCname ;

-- get particular product date from join
delimiter $

create procedure spGetProduct(pname varchar(30))
begin

select o.oid,p.pname,c.cname,p.price,o.odate from 
customer as c 
inner join p_order as o
on c.cid=o.cid
inner join product p
where p.pname = pname
order by o.oid;

end $

call spGetProduct('Pencil');

delimiter $

create procedure spGetcount(in pname varchar(30),out total int)
begin
select (
select count(*) from 
customer as c 
inner join p_order as o
on c.cid=o.cid
inner join product p
where p.pname = pname
order by o.oid) 
into total;

select total;
end $

-- drop procedure spGetcount;
select @total;
call spGetcount('Pencil',@total);

-- view

create view alltables
as 
select o.oid,p.pname,c.cname,p.price,o.odate from 
customer as c 
inner join p_order as o
on c.cid=o.cid
inner join product p
where o.pid=p.pid
order by o.oid;

select * from alltables;

show tables;


