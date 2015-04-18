CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  message_id mediumint auto_increment,
  message varchar(255),
  username varchar(30),
  user_id mediumint,
  roomname varchar(30),
  created_at timestamp default current_timestamp,
  primary key (message_id)
);

CREATE TABLE users (
  user_id mediumint auto_increment,
  username varchar(30),
  join_date timestamp default current_timestamp,
  primary key (user_id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

