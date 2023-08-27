DROP TABLE IF EXISTS product_category;

CREATE TABLE IF NOT EXISTS product_category(
product_id INTEGER REFERENCES products(id),
category_id INTEGER REFERENCES categories(id) 
);

INSERT INTO product_category(product_id, category_id)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(9, 3),
(10, 3),
(11, 3),
(12, 3),
(13, 3),
(14, 3),
(5, 4),
(6, 4),
(7, 4),
(8, 4);

INSERT INTO product_category(product_id, category_id)
VALUES
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1);


