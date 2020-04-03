DROP DATABASE IF EXISTS greatBay_bd;
CREATE DATABASE greatBay_bd;

USE greatBay_bd;

    CREATE  TABLE  auction_off(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        PRIMARY KEY(id)  
    );