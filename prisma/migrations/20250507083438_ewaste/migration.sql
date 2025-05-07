/*
  Warnings:

  - You are about to drop the column `pointsSpent` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `cadmiumMilligrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ewasteKg` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `glassGrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leadGrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lithiumGrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mercuryMilligrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plasticGrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rareEarthGrams` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerPhone" TEXT NOT NULL,
    "sellerPhone" TEXT NOT NULL,
    "itemId" INTEGER NOT NULL,
    "shippingCostPaid" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "ewasteKg" REAL NOT NULL,
    "leadGrams" REAL NOT NULL,
    "mercuryMilligrams" REAL NOT NULL,
    "cadmiumMilligrams" REAL NOT NULL,
    "lithiumGrams" REAL NOT NULL,
    "plasticGrams" REAL NOT NULL,
    "glassGrams" REAL NOT NULL,
    "rareEarthGrams" REAL NOT NULL,
    CONSTRAINT "Transaction_buyerPhone_fkey" FOREIGN KEY ("buyerPhone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_sellerPhone_fkey" FOREIGN KEY ("sellerPhone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaction_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Transaction" ("buyerPhone", "createdAt", "id", "itemId", "sellerPhone", "shippingCostPaid", "status", "updatedAt") SELECT "buyerPhone", "createdAt", "id", "itemId", "sellerPhone", "shippingCostPaid", "status", "updatedAt" FROM "Transaction";
DROP TABLE "Transaction";
ALTER TABLE "new_Transaction" RENAME TO "Transaction";
CREATE UNIQUE INDEX "Transaction_itemId_key" ON "Transaction"("itemId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
