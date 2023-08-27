DROP TABLE IF EXISTS payment_information CASCADE;

CREATE TABLE IF NOT EXISTS payment_information (
  id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES users(id),
  card_number VARCHAR(16) NOT NULL,
  card_holder_name VARCHAR(100) NOT NULL,
  expiration_month INT NOT NULL,
  expiration_year INT NOT NULL,
  cvv VARCHAR(4) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);