DROP TABLE IF EXISTS "tasks";

CREATE TABLE "tasks" (
  id SERIAL,
  name TEXT
);

INSERT INTO "tasks" (name) VALUES ('database test !');