-- SQL code to create the registros_poda table and indexes for the Supabase database

CREATE TABLE registros_poda (
    id SERIAL PRIMARY KEY,
    data_poda TIMESTAMP NOT NULL,
    tipo VARCHAR(100),
    observacoes TEXT
);

CREATE INDEX idx_data_poda ON registros_poda(data_poda);