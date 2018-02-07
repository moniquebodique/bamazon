
USE bamazondb;

CREATE TABLE products(
item_id int NOT NULL AUTO_INCREMENT,
product_name VARCHAR(15) NOT NULL,
department_name VARCHAR(15) NOT NULL,
price DECIMAL(10,2),
stock_quantity int(5),
PRIMARY KEY (item_id)

);