-- this is where we add our schema
-- Remove existing database
DROP DATABASE IF EXISTS gamereview_db;
-- Creates the "gamereview_db" database
CREATE DATABASE gamereview_db;

USE gamereview_db;

-- Creates the Game table in gamereview_db
CREATE TABLE Game (
    title VARCHAR(50) NOT NULL,

    picture NOT NULL,

    gameid INTEGER(1) AUTO_INCREMENT NOT NULL,
)

-- Creates the Game table in gamereview_db
CREATE TABLE Review (
    reviewID INTEGER(1) AUTO_INCREMENT NOT NULL,
)

-- Creates the Game table in gamereview_db
CREATE TABLE User (
    userid INTEGER(10) AUTO_INCREMENT NOT NULL,

    username VARCHAR(50) NOT NULL,

    pass VARCHAR(50) NOT NULL,
)