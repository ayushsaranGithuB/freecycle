
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  passwordHash: 'passwordHash',
  profilePhotoUrl: 'profilePhotoUrl',
  verificationStatus: 'verificationStatus',
  pointsBalance: 'pointsBalance',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ItemScalarFieldEnum = {
  id: 'id',
  ownerId: 'ownerId',
  title: 'title',
  description: 'description',
  brand: 'brand',
  category: 'category',
  condition: 'condition',
  ageYears: 'ageYears',
  originalMsrp: 'originalMsrp',
  estimatedMarketPrice: 'estimatedMarketPrice',
  pointsValue: 'pointsValue',
  accessoriesIncluded: 'accessoriesIncluded',
  images: 'images',
  locationPincode: 'locationPincode',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  itemId: 'itemId'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  buyerId: 'buyerId',
  sellerId: 'sellerId',
  itemId: 'itemId',
  pointsSpent: 'pointsSpent',
  shippingCostPaid: 'shippingCostPaid',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PointsTransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  pointsChange: 'pointsChange',
  source: 'source',
  createdAt: 'createdAt'
};

exports.Prisma.VerificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  method: 'method',
  status: 'status',
  documentUrl: 'documentUrl',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.VerificationStatus = exports.$Enums.VerificationStatus = {
  UNVERIFIED: 'UNVERIFIED',
  EMAIL_VERIFIED: 'EMAIL_VERIFIED',
  ID_VERIFIED: 'ID_VERIFIED'
};

exports.ItemCategory = exports.$Enums.ItemCategory = {
  PHONE: 'PHONE',
  LAPTOP: 'LAPTOP',
  TABLET: 'TABLET',
  ACCESSORIES: 'ACCESSORIES',
  OTHER: 'OTHER'
};

exports.ItemCondition = exports.$Enums.ItemCondition = {
  LIKE_NEW: 'LIKE_NEW',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR',
  BROKEN: 'BROKEN'
};

exports.ItemStatus = exports.$Enums.ItemStatus = {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

exports.TransactionStatus = exports.$Enums.TransactionStatus = {
  PENDING: 'PENDING',
  SHIPPING_IN_PROGRESS: 'SHIPPING_IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

exports.PointsChangeType = exports.$Enums.PointsChangeType = {
  EARN: 'EARN',
  SPEND: 'SPEND',
  BONUS: 'BONUS',
  PURCHASE: 'PURCHASE'
};

exports.VerificationMethod = exports.$Enums.VerificationMethod = {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  GOVERNMENT_ID: 'GOVERNMENT_ID'
};

exports.Prisma.ModelName = {
  User: 'User',
  Item: 'Item',
  Transaction: 'Transaction',
  PointsTransaction: 'PointsTransaction',
  Verification: 'Verification'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
