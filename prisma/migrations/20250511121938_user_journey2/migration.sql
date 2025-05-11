-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserJourney" (
    "phone" TEXT NOT NULL PRIMARY KEY,
    "emailConnected" BOOLEAN NOT NULL DEFAULT false,
    "socialConnected" BOOLEAN NOT NULL DEFAULT false,
    "firstListing" BOOLEAN NOT NULL DEFAULT false,
    "firstTransaction" BOOLEAN NOT NULL DEFAULT false,
    "firstReferral" BOOLEAN NOT NULL DEFAULT false,
    "firstPointsEarned" BOOLEAN NOT NULL DEFAULT false,
    "firstTopUp" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserJourney_phone_fkey" FOREIGN KEY ("phone") REFERENCES "User" ("phone") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserJourney" ("emailConnected", "firstListing", "firstPointsEarned", "firstReferral", "firstTopUp", "firstTransaction", "phone", "socialConnected") SELECT "emailConnected", "firstListing", "firstPointsEarned", "firstReferral", "firstTopUp", "firstTransaction", "phone", "socialConnected" FROM "UserJourney";
DROP TABLE "UserJourney";
ALTER TABLE "new_UserJourney" RENAME TO "UserJourney";
CREATE UNIQUE INDEX "UserJourney_phone_key" ON "UserJourney"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
