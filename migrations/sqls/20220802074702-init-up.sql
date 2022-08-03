create TABLE "teachers" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "username" VARCHAR(255) NOT NULL
);

create TABLE "lessons" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "subject" VARCHAR(255) NOT NULL,
    "teacher_id" INTEGER NOT NULL,

    FOREIGN KEY (teacher_id) REFERENCES "teachers" (id)
);