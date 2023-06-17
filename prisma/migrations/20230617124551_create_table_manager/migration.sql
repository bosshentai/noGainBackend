-- CreateTable
CREATE TABLE "manager" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "manager_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "manager_user_id_key" ON "manager"("user_id");

-- AddForeignKey
ALTER TABLE "manager" ADD CONSTRAINT "manager_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
