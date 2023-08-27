DROP TABLE IF EXISTS categories;

CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO categories(name)
VALUES 
('men''s clothing'),
('women''s clothing'),
('electronics'),
('jewelery');