CREATE table IF NOT EXISTS "statusUsers"(
"id" serial PRIMARY KEY,
"name" varchar(20),
"createdAt" timestamp default now(),
"updatedAt" timestamp 
);

INSERT INTO "statusUsers" ("name", "createdAt", "updatedAt")
VALUES
	('ready', now(), NULL),
	('penalty', now(), NULL);

CREATE table IF NOT EXISTS "users"(
"id" serial PRIMARY KEY,
"statusUsersId" int NOT NULL DEFAULT 1,
FOREIGN KEY ("statusUsersId") REFERENCES "statusUsers"(id),
"name" varchar (255),
"code" varchar (50),
"createdAt" timestamp DEFAULT now(),
"updatedAt" timestamp
);


CREATE table IF NOT EXISTS "statusBooks"(
"id" serial PRIMARY KEY,
"name" varchar(20),
"createdAt" timestamp default now(),
"updatedAt" timestamp 
);

INSERT INTO "statusBooks" ("name", "createdAt", "updatedAt")
VALUES
	('ready', now(), NULL),
	('borrow', now(), NULL);
	
CREATE table IF NOT EXISTS "books"(
"id" serial PRIMARY KEY,
"statusBooksId" int NOT NULL DEFAULT 1,
FOREIGN KEY ("statusBooksId") REFERENCES "statusBooks"(id),
"title" varchar (255),
"code" varchar (10),
"author" varchar (50),
"stock" int,
"createdAt" timestamp DEFAULT now(),
"updatedAt" timestamp
);

CREATE table IF NOT EXISTS "pinjam"(
"id" serial PRIMARY KEY,
"usersId" int NOT NULL DEFAULT 1,
FOREIGN KEY ("usersId") REFERENCES "users"(id),
"booksId" int NOT NULL DEFAULT 1,
FOREIGN KEY ("booksId") REFERENCES "books"(id),
"createdAt" timestamp DEFAULT now(),
"updatedAt" timestamp
);