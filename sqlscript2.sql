CREATE TABLE RoleKey(
 RoleKeyid BIGSERIAL NOT NULL PRIMARY KEY,
 role INT NOT NULL,
 key INTEGER NOT NULL,
 description VARCHAR(100) NOT NULL,
 UNIQUE(role)
);
ALTER TABLE RoleKey
 ADD CreationTime timestamp default current_timestamp;
ALTER TABLE RoleKey
 ADD LastUpdatedTime timestamp default current_timestamp;
CREATE OR REPLACE FUNCTION LastUpdatedTime() 
 RETURNS TRIGGER 
 AS $$
 BEGIN
    NEW.LastUpdatedTime = now();
    RETURN NEW; 
 END;
 $$
 LANGUAGE 'plpgsql';
CREATE TRIGGER LastUpdatedTimeTrigger BEFORE UPDATE 
 ON RoleKey FOR EACH ROW EXECUTE PROCEDURE LastUpdatedTime();
INSERT INTO ROLEKEY
 (role,
 key,
 description)
 VALUES
 (3,
 3,
 'gdhdkv'
);
INSERT INTO ROLEKEY
 (role,
 key,
 description)
 VALUES
 (4,
 4,
 'gdhdkv'
);
UPDATE  ROLEKEY SET
 role=3,
 key=3,
description='hvsdvhw'
WHERE role=3;


