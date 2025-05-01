/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `buyerId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `Transaction` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `ownerPhone` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `buyerPhone` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellerPhone` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ownerPhone" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brand" TEXT,
    "model" TEXT,
    "category" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "ageYears" INTEGER NOT NULL,
    "originalMsrp" INTEGER NOT NULL,
    "estimatedMarketPrice" INTEGER NOT NULL,
    "pointsValue" INTEGER NOT NULL,
    "accessoriesIncluded" JSONB,
    "images" JSONB NOT NULL,
    "locationPincode" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AVAILABLE',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Item_ownerPhone_fkey" FOREIGN KEY ("ownerPhone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Item" ("accessoriesIncluded", "ageYears", "brand", "category", "condition", "createdAt", "description", "estimatedMarketPrice", "id", "images", "locationPincode", "model", "originalMsrp", "pointsValue", "status", "title", "updatedAt") SELECT "accessoriesIncluded", "ageYears", "brand", "category", "condition", "createdAt", "description", "estimatedMarketPrice", "id", "images", "locationPincode", "model", "originalMsrp", "pointsValue", "status", "title", "updatedAt" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_PointsTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "pointsChange" INTEGER NOT NULL,
    "source" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PointsTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PointsTransaction" ("createdAt", "id", "pointsChange", "source", "type", "userId") SELECT "createdAt", "id", "pointsChange", "source", "type", "userId" FROM "PointsTransaction";
DROP TABLE "PointsTransaction";
ALTER TABLE "new_PointsTransaction" RENAME TO "PointsTransaction";
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerPhone" TEXT NOT NULL,
    "sellerPhone" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "pointsSpent" INTEGER NOT NULL,
    "shippingCostPaid" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Transaction_buyerPhone_fkey" FOREIGN KEY ("buyerPhone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_sellerPhone_fkey" FOREIGN KEY ("sellerPhone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("createdAt", "id", "itemId", "pointsSpent", "shippingCostPaid", "status", "updatedAt") SELECT "createdAt", "id", "itemId", "pointsSpent", "shippingCostPaid", "status", "updatedAt" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE UNIQUE INDEX "Transaction_itemId_key" ON "Transaction"("itemId");
CREATE TABLE "new_User" (
    "phone" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "profilePhotoUrl" TEXT,
    "verificationStatus" TEXT NOT NULL DEFAULT 'UNVERIFIED',
    "pointsBalance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "name", "phone", "pointsBalance", "profilePhotoUrl", "updatedAt", "verificationStatus") SELECT "createdAt", "name", "phone", "pointsBalance", "profilePhotoUrl", "updatedAt", "verificationStatus" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
CREATE TABLE "new_Verification" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "documentUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Verification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Verification" ("createdAt", "documentUrl", "id", "method", "status", "userId") SELECT "createdAt", "documentUrl", "id", "method", "status", "userId" FROM "Verification";
DROP TABLE "Verification";
ALTER TABLE "new_Verification" RENAME TO "Verification";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
