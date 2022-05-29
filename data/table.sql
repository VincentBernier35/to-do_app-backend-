DROP TABLE IF EXISTS "tasks", "categories";

CREATE TABLE "tasks" (
  "id" SERIAL,
  "name" TEXT
);

CREATE TABLE "categories" (
  "id" SERIAL,
  "name" TEXT,
  "color" TEXT
);


INSERT INTO "tasks" (name) VALUES ('database test saturday!');
INSERT INTO "categories" (name) VALUES ('now debug time 3!');

