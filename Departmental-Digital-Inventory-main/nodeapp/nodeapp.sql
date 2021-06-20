use nodeapp;

CREATE TABLE stud_registration (
  first_name varchar(30) ,
  last_name varchar(30) ,
  usn varchar(10) PRIMARY KEY,
  email_address varchar(50) ,
  password varchar(20) 
);

CREATE TABLE teacher_registration (
  first_name varchar(30) ,
  last_name varchar(30) ,
  email_address varchar(50) ,
  password varchar(20) 
);

CREATE TABLE librarian_registration (
  first_name varchar(30) ,
  last_name varchar(30) ,
  email_address varchar(50) ,
  password varchar(20) 
);

insert into librarian_registration values('adm','lib','admin_lib@bmsce.ac.in','Admin123!@#');
ALTER USER 'nodeapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Password123!@#';
FLUSH PRIVILEGES;

select * from stud_registration;
select * from teacher_registration;
select * from librarian_registration;
