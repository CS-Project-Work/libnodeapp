create database nodeapp;
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

CREATE TABLE feedback (
  first_name varchar(30) ,
  last_name varchar(30) ,
  email_address varchar(50) ,
  rating varchar(10),
  availability varchar(20),
  ease_of_access varchar(20),
  comments varchar(500)
);

CREATE TABLE request (
  name varchar(30) ,
  email_address varchar(50) ,
  book_name varchar(10),
  author_name varchar(20),
  semester varchar(10),
  subject varchar(30),
  description varchar(20)
);

CREATE TABLE support (
  name varchar(30) ,
  email_address varchar(50) ,
  phone_number varchar(10),
  message varchar(20)
);

insert into librarian_registration values('adm','lib','admin_lib@bmsce.ac.in','Admin123!@#');
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asus';

FLUSH PRIVILEGES;

select * from stud_registration;
select * from teacher_registration;
select * from librarian_registration;
select * from support;
select * from feedback;
