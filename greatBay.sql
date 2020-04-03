DROP DATABASE IF EXISTS greatBay_bd;
CREATE DATABASE greatBay_bd;

USE greatBay_bd;

    CREATE  TABLE  auction_off(
        id INT NOT NULL AUTO_INCREMENT,
        name_of_item VARCHAR(50) NOT NULL,
        section VARCHAR(50) NOT NULL,
        start_bid INT DEFUALT 0,
        highest_bid INT DEFUALT 0,
        PRIMARY KEY(id)  
    );