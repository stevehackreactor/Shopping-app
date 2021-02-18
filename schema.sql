CREATE DATABASE checkout;

USE checkout;

CREATE TABLE carts (id INTEGER AUTO_INCREMENT, name VARCHAR(50), email VARCHAR(50), password VARCHAR(50), addressLnOne VARCHAR(50), addressLnTwo VARCHAR(50), phone INTEGER, creditCard INTEGER, expiration VARCHAR(50), cvv INTEGER, zipCode INTEGER, PRIMARY KEY (id));

