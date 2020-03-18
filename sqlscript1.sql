CREATE TABLE Customer(
customerid BIGSERIAL NOT NULL PRIMARY KEY,   
name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
website VARCHAR(100) NOT NULL,
UNIQUE(name)
);
CREATE FUNCTION validatedata1()
RETURNS TRIGGER
AS $$
BEGIN
IF NEW.name !~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid Name';
END IF;
IF NEW.address!~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid address';
END IF;
IF NEW.website!~ '^[A-Za-z]+$' THEN
   RAISE EXCEPTION 'Invalid Website';
END IF;
RETURN NEW;
END;
$$
LANGUAGE plpgsql;
CREATE TRIGGER checkingdata1 BEFORE INSERT OR UPDATE
ON Customer
FOR EACH ROW EXECUTE PROCEDURE validatedata1();
