DROP TABLE IF EXISTS mens CASCADE;

CREATE TABLE IF NOT EXISTS mens (
  id SERIAL PRIMARY KEY,
  sku INTEGER,
  product_name VARCHAR(255),
  category VARCHAR(50),
  price DECIMAL(10, 2),
  description TEXT,
  rating DECIMAL(2, 1),
  stock_quantity INTEGER,
  image TEXT,
  created_at TIMESTAMP DEFAULT current_timestamp
);

