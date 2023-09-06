CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR(255),
  is_completed BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);


{
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest"
}