CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "todo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'default',
    "danger" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Subtask" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'default',
    "todoId" INTEGER NOT NULL,

    CONSTRAINT "Subtask_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "Subtask" ADD CONSTRAINT "Subtask_todoId_fkey" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
