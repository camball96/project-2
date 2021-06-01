-- this is where we add our schema
-- Remove existing database
DROP DATABASE IF EXISTS gamereview_db;
-- Creates the "gamereview_db" database
CREATE DATABASE gamereview_db;

USE gamereview_db;

-- Creates the Game table in gamereview_db
CREATE TABLE Game (
    title VARCHAR(50) NOT NULL,

    picture VARCHAR(1000) NOT NULL,

    gameid INT(1) AUTO_INCREMENT NOT NULL PRIMARY KEY
);

-- Creates the Game table in gamereview_db
CREATE TABLE Review (
    reviewID INT(1) AUTO_INCREMENT NOT NULL PRIMARY KEY
);

-- Creates the Game table in gamereview_db
CREATE TABLE User (
    userid INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,

    username VARCHAR(50) NOT NULL,

    pass VARCHAR(50) NOT NULL
)
