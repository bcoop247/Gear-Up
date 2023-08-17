DROP TABLE IF EXISTS positive_quotes CASCADE;

CREATE TABLE IF NOT EXISTS positive_quotes (
  id SERIAL PRIMARY KEY,
  quote TEXT
);

INSERT INTO positive_quotes (quote) VALUES
  ('We are delighted to have you.'),
  ('Thank you for choosing us.'),
  ('Welcome to a world of exceptional service.'),
  ('New beginnings start here.'),
  ('Step into a world of possibilities.'),
  ('Your journey with us begins now.'),
  ('We''ve been waiting for you.'),
  ('We''re here to make you feel at home.'),
  ('Your satisfaction is our priority.'),
  ('A warm welcome from our team.'),
  ('Welcome to a place where you belong.'),
  ('Your presence is worthy.'),
  ('Welcome to a community of excellence.'),
  ('You are fully capable of impossible things.'),
  ('Your positive attitude is inspiring.'),
  ('Your dedication is truly commendable.'),
  ('Your passion is contagious.'),
  ('Your strength is inspiring.'),
  ('You are valued'),
  ('We''re thrilled to welcome you. Enjoy your stay.'),
  ('Welcome to a place where you''ll feel right at home.'),
  ('Step into a world of possibilities.'),
  ('A warm welcome from our team.'),
  ('Welcome to a community that values you.'),
  ('We''re excited to make your acquaintance.'),
  ('Thank you for choosing us.'),
  ('Hello and welcome to our community.'),
  ('Your satisfaction is our top priority.'),
  ('Get ready for a wonderful experience.'),
  ('Welcome to a place where experiences are made.'),
  ('We''re honored to welcome you.'),
  ('Welcome to a world of exceptional service.'),
  ('Enjoy Your Stay'),
  ('We''re excited to have you.'),
  ('Enjoy our realm of hospitality.'),
  ('We are dedicated to ensuring your stay is nothing short of legendary'),
  ('Enjoy your sanctuary of comfort'),
  ('Your presence here is priceless'),
  ('Here is our world of comfort and luxury');