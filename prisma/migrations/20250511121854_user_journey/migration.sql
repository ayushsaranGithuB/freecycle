-- CreateTable
CREATE TABLE "UserJourney" (
    "phone" TEXT NOT NULL PRIMARY KEY,
    "emailConnected" BOOLEAN NOT NULL DEFAULT false,
    "socialConnected" BOOLEAN NOT NULL DEFAULT false,
    "firstListing" BOOLEAN NOT NULL DEFAULT false,
    "firstTransaction" BOOLEAN NOT NULL DEFAULT false,
    "firstReferral" BOOLEAN NOT NULL DEFAULT false,
    "firstPointsEarned" BOOLEAN NOT NULL DEFAULT false,
    "firstTopUp" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "UserJourney_phone_key" ON "UserJourney"("phone");
