
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PointsTransaction
 * 
 */
export type PointsTransaction = $Result.DefaultSelection<Prisma.$PointsTransactionPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const VerificationStatus: {
  UNVERIFIED: 'UNVERIFIED',
  EMAIL_VERIFIED: 'EMAIL_VERIFIED',
  ID_VERIFIED: 'ID_VERIFIED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const VerificationMethod: {
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  GOVERNMENT_ID: 'GOVERNMENT_ID'
};

export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod]


export const ItemCategory: {
  PHONE: 'PHONE',
  LAPTOP: 'LAPTOP',
  TABLET: 'TABLET',
  ACCESSORIES: 'ACCESSORIES',
  OTHER: 'OTHER'
};

export type ItemCategory = (typeof ItemCategory)[keyof typeof ItemCategory]


export const ItemCondition: {
  LIKE_NEW: 'LIKE_NEW',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR',
  BROKEN: 'BROKEN'
};

export type ItemCondition = (typeof ItemCondition)[keyof typeof ItemCondition]


export const ItemStatus: {
  AVAILABLE: 'AVAILABLE',
  RESERVED: 'RESERVED',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const TransactionStatus: {
  PENDING: 'PENDING',
  SHIPPING_IN_PROGRESS: 'SHIPPING_IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const PointsChangeType: {
  EARN: 'EARN',
  SPEND: 'SPEND',
  BONUS: 'BONUS',
  PURCHASE: 'PURCHASE'
};

export type PointsChangeType = (typeof PointsChangeType)[keyof typeof PointsChangeType]

}

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type VerificationMethod = $Enums.VerificationMethod

export const VerificationMethod: typeof $Enums.VerificationMethod

export type ItemCategory = $Enums.ItemCategory

export const ItemCategory: typeof $Enums.ItemCategory

export type ItemCondition = $Enums.ItemCondition

export const ItemCondition: typeof $Enums.ItemCondition

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type PointsChangeType = $Enums.PointsChangeType

export const PointsChangeType: typeof $Enums.PointsChangeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointsTransaction`: Exposes CRUD operations for the **PointsTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointsTransactions
    * const pointsTransactions = await prisma.pointsTransaction.findMany()
    * ```
    */
  get pointsTransaction(): Prisma.PointsTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Item: 'Item',
    Transaction: 'Transaction',
    PointsTransaction: 'PointsTransaction',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "item" | "transaction" | "pointsTransaction" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PointsTransaction: {
        payload: Prisma.$PointsTransactionPayload<ExtArgs>
        fields: Prisma.PointsTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointsTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointsTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          findFirst: {
            args: Prisma.PointsTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointsTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          findMany: {
            args: Prisma.PointsTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          create: {
            args: Prisma.PointsTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          createMany: {
            args: Prisma.PointsTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointsTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          delete: {
            args: Prisma.PointsTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          update: {
            args: Prisma.PointsTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          deleteMany: {
            args: Prisma.PointsTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointsTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointsTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>[]
          }
          upsert: {
            args: Prisma.PointsTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsTransactionPayload>
          }
          aggregate: {
            args: Prisma.PointsTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointsTransaction>
          }
          groupBy: {
            args: Prisma.PointsTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointsTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<PointsTransactionCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    item?: ItemOmit
    transaction?: TransactionOmit
    pointsTransaction?: PointsTransactionOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    items: number
    boughtTransactions: number
    soldTransactions: number
    pointsTransactions: number
    verifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | UserCountOutputTypeCountItemsArgs
    boughtTransactions?: boolean | UserCountOutputTypeCountBoughtTransactionsArgs
    soldTransactions?: boolean | UserCountOutputTypeCountSoldTransactionsArgs
    pointsTransactions?: boolean | UserCountOutputTypeCountPointsTransactionsArgs
    verifications?: boolean | UserCountOutputTypeCountVerificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoughtTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSoldTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    pointsBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    pointsBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    profilePhotoUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    pointsBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    profilePhotoUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    pointsBalance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    passwordHash: number
    profilePhotoUrl: number
    verificationStatus: number
    pointsBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    pointsBalance?: true
  }

  export type UserSumAggregateInputType = {
    pointsBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    profilePhotoUrl?: true
    verificationStatus?: true
    pointsBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    profilePhotoUrl?: true
    verificationStatus?: true
    pointsBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    passwordHash?: true
    profilePhotoUrl?: true
    verificationStatus?: true
    pointsBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    passwordHash: string
    profilePhotoUrl: string | null
    verificationStatus: $Enums.VerificationStatus
    pointsBalance: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    profilePhotoUrl?: boolean
    verificationStatus?: boolean
    pointsBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | User$itemsArgs<ExtArgs>
    boughtTransactions?: boolean | User$boughtTransactionsArgs<ExtArgs>
    soldTransactions?: boolean | User$soldTransactionsArgs<ExtArgs>
    pointsTransactions?: boolean | User$pointsTransactionsArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    profilePhotoUrl?: boolean
    verificationStatus?: boolean
    pointsBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    profilePhotoUrl?: boolean
    verificationStatus?: boolean
    pointsBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    profilePhotoUrl?: boolean
    verificationStatus?: boolean
    pointsBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "passwordHash" | "profilePhotoUrl" | "verificationStatus" | "pointsBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | User$itemsArgs<ExtArgs>
    boughtTransactions?: boolean | User$boughtTransactionsArgs<ExtArgs>
    soldTransactions?: boolean | User$soldTransactionsArgs<ExtArgs>
    pointsTransactions?: boolean | User$pointsTransactionsArgs<ExtArgs>
    verifications?: boolean | User$verificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      items: Prisma.$ItemPayload<ExtArgs>[]
      boughtTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      soldTransactions: Prisma.$TransactionPayload<ExtArgs>[]
      pointsTransactions: Prisma.$PointsTransactionPayload<ExtArgs>[]
      verifications: Prisma.$VerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      passwordHash: string
      profilePhotoUrl: string | null
      verificationStatus: $Enums.VerificationStatus
      pointsBalance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    boughtTransactions<T extends User$boughtTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$boughtTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    soldTransactions<T extends User$soldTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$soldTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pointsTransactions<T extends User$pointsTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifications<T extends User$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly profilePhotoUrl: FieldRef<"User", 'String'>
    readonly verificationStatus: FieldRef<"User", 'VerificationStatus'>
    readonly pointsBalance: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.boughtTransactions
   */
  export type User$boughtTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.soldTransactions
   */
  export type User$soldTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.pointsTransactions
   */
  export type User$pointsTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    where?: PointsTransactionWhereInput
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    cursor?: PointsTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * User.verifications
   */
  export type User$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    cursor?: VerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    ageYears: number | null
    originalMsrp: number | null
    estimatedMarketPrice: number | null
    pointsValue: number | null
  }

  export type ItemSumAggregateOutputType = {
    ageYears: number | null
    originalMsrp: number | null
    estimatedMarketPrice: number | null
    pointsValue: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    brand: string | null
    category: $Enums.ItemCategory | null
    condition: $Enums.ItemCondition | null
    ageYears: number | null
    originalMsrp: number | null
    estimatedMarketPrice: number | null
    pointsValue: number | null
    locationPincode: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    brand: string | null
    category: $Enums.ItemCategory | null
    condition: $Enums.ItemCondition | null
    ageYears: number | null
    originalMsrp: number | null
    estimatedMarketPrice: number | null
    pointsValue: number | null
    locationPincode: string | null
    status: $Enums.ItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    itemId: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    description: number
    brand: number
    category: number
    condition: number
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded: number
    images: number
    locationPincode: number
    status: number
    createdAt: number
    updatedAt: number
    itemId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    ageYears?: true
    originalMsrp?: true
    estimatedMarketPrice?: true
    pointsValue?: true
  }

  export type ItemSumAggregateInputType = {
    ageYears?: true
    originalMsrp?: true
    estimatedMarketPrice?: true
    pointsValue?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    brand?: true
    category?: true
    condition?: true
    ageYears?: true
    originalMsrp?: true
    estimatedMarketPrice?: true
    pointsValue?: true
    locationPincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    brand?: true
    category?: true
    condition?: true
    ageYears?: true
    originalMsrp?: true
    estimatedMarketPrice?: true
    pointsValue?: true
    locationPincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    description?: true
    brand?: true
    category?: true
    condition?: true
    ageYears?: true
    originalMsrp?: true
    estimatedMarketPrice?: true
    pointsValue?: true
    accessoriesIncluded?: true
    images?: true
    locationPincode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    itemId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    ownerId: string
    title: string
    description: string
    brand: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded: JsonValue | null
    images: JsonValue
    locationPincode: string
    status: $Enums.ItemStatus
    createdAt: Date
    updatedAt: Date
    itemId: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    brand?: boolean
    category?: boolean
    condition?: boolean
    ageYears?: boolean
    originalMsrp?: boolean
    estimatedMarketPrice?: boolean
    pointsValue?: boolean
    accessoriesIncluded?: boolean
    images?: boolean
    locationPincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Item$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    brand?: boolean
    category?: boolean
    condition?: boolean
    ageYears?: boolean
    originalMsrp?: boolean
    estimatedMarketPrice?: boolean
    pointsValue?: boolean
    accessoriesIncluded?: boolean
    images?: boolean
    locationPincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    brand?: boolean
    category?: boolean
    condition?: boolean
    ageYears?: boolean
    originalMsrp?: boolean
    estimatedMarketPrice?: boolean
    pointsValue?: boolean
    accessoriesIncluded?: boolean
    images?: boolean
    locationPincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    brand?: boolean
    category?: boolean
    condition?: boolean
    ageYears?: boolean
    originalMsrp?: boolean
    estimatedMarketPrice?: boolean
    pointsValue?: boolean
    accessoriesIncluded?: boolean
    images?: boolean
    locationPincode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    itemId?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "description" | "brand" | "category" | "condition" | "ageYears" | "originalMsrp" | "estimatedMarketPrice" | "pointsValue" | "accessoriesIncluded" | "images" | "locationPincode" | "status" | "createdAt" | "updatedAt" | "itemId", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Item$transactionArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string
      description: string
      brand: string | null
      category: $Enums.ItemCategory
      condition: $Enums.ItemCondition
      ageYears: number
      originalMsrp: number
      estimatedMarketPrice: number
      pointsValue: number
      accessoriesIncluded: Prisma.JsonValue | null
      images: Prisma.JsonValue
      locationPincode: string
      status: $Enums.ItemStatus
      createdAt: Date
      updatedAt: Date
      itemId: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Item$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Item$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly ownerId: FieldRef<"Item", 'String'>
    readonly title: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly brand: FieldRef<"Item", 'String'>
    readonly category: FieldRef<"Item", 'ItemCategory'>
    readonly condition: FieldRef<"Item", 'ItemCondition'>
    readonly ageYears: FieldRef<"Item", 'Int'>
    readonly originalMsrp: FieldRef<"Item", 'Int'>
    readonly estimatedMarketPrice: FieldRef<"Item", 'Int'>
    readonly pointsValue: FieldRef<"Item", 'Int'>
    readonly accessoriesIncluded: FieldRef<"Item", 'Json'>
    readonly images: FieldRef<"Item", 'Json'>
    readonly locationPincode: FieldRef<"Item", 'String'>
    readonly status: FieldRef<"Item", 'ItemStatus'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
    readonly itemId: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.transaction
   */
  export type Item$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    pointsSpent: number | null
    shippingCostPaid: number | null
  }

  export type TransactionSumAggregateOutputType = {
    pointsSpent: number | null
    shippingCostPaid: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    buyerId: string | null
    sellerId: string | null
    itemId: string | null
    pointsSpent: number | null
    shippingCostPaid: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    buyerId: string | null
    sellerId: string | null
    itemId: string | null
    pointsSpent: number | null
    shippingCostPaid: number | null
    status: $Enums.TransactionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    buyerId: number
    sellerId: number
    itemId: number
    pointsSpent: number
    shippingCostPaid: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    pointsSpent?: true
    shippingCostPaid?: true
  }

  export type TransactionSumAggregateInputType = {
    pointsSpent?: true
    shippingCostPaid?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    buyerId?: true
    sellerId?: true
    itemId?: true
    pointsSpent?: true
    shippingCostPaid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    buyerId?: true
    sellerId?: true
    itemId?: true
    pointsSpent?: true
    shippingCostPaid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    buyerId?: true
    sellerId?: true
    itemId?: true
    pointsSpent?: true
    shippingCostPaid?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    buyerId: string
    sellerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status: $Enums.TransactionStatus
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    sellerId?: boolean
    itemId?: boolean
    pointsSpent?: boolean
    shippingCostPaid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    sellerId?: boolean
    itemId?: boolean
    pointsSpent?: boolean
    shippingCostPaid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyerId?: boolean
    sellerId?: boolean
    itemId?: boolean
    pointsSpent?: boolean
    shippingCostPaid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    buyerId?: boolean
    sellerId?: boolean
    itemId?: boolean
    pointsSpent?: boolean
    shippingCostPaid?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyerId" | "sellerId" | "itemId" | "pointsSpent" | "shippingCostPaid" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      buyer: Prisma.$UserPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      buyerId: string
      sellerId: string
      itemId: string
      pointsSpent: number
      shippingCostPaid: number
      status: $Enums.TransactionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly buyerId: FieldRef<"Transaction", 'String'>
    readonly sellerId: FieldRef<"Transaction", 'String'>
    readonly itemId: FieldRef<"Transaction", 'String'>
    readonly pointsSpent: FieldRef<"Transaction", 'Int'>
    readonly shippingCostPaid: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PointsTransaction
   */

  export type AggregatePointsTransaction = {
    _count: PointsTransactionCountAggregateOutputType | null
    _avg: PointsTransactionAvgAggregateOutputType | null
    _sum: PointsTransactionSumAggregateOutputType | null
    _min: PointsTransactionMinAggregateOutputType | null
    _max: PointsTransactionMaxAggregateOutputType | null
  }

  export type PointsTransactionAvgAggregateOutputType = {
    pointsChange: number | null
  }

  export type PointsTransactionSumAggregateOutputType = {
    pointsChange: number | null
  }

  export type PointsTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.PointsChangeType | null
    pointsChange: number | null
    source: string | null
    createdAt: Date | null
  }

  export type PointsTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.PointsChangeType | null
    pointsChange: number | null
    source: string | null
    createdAt: Date | null
  }

  export type PointsTransactionCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    pointsChange: number
    source: number
    createdAt: number
    _all: number
  }


  export type PointsTransactionAvgAggregateInputType = {
    pointsChange?: true
  }

  export type PointsTransactionSumAggregateInputType = {
    pointsChange?: true
  }

  export type PointsTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    pointsChange?: true
    source?: true
    createdAt?: true
  }

  export type PointsTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    pointsChange?: true
    source?: true
    createdAt?: true
  }

  export type PointsTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    pointsChange?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type PointsTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointsTransaction to aggregate.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointsTransactions
    **/
    _count?: true | PointsTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsTransactionMaxAggregateInputType
  }

  export type GetPointsTransactionAggregateType<T extends PointsTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregatePointsTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointsTransaction[P]>
      : GetScalarType<T[P], AggregatePointsTransaction[P]>
  }




  export type PointsTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsTransactionWhereInput
    orderBy?: PointsTransactionOrderByWithAggregationInput | PointsTransactionOrderByWithAggregationInput[]
    by: PointsTransactionScalarFieldEnum[] | PointsTransactionScalarFieldEnum
    having?: PointsTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsTransactionCountAggregateInputType | true
    _avg?: PointsTransactionAvgAggregateInputType
    _sum?: PointsTransactionSumAggregateInputType
    _min?: PointsTransactionMinAggregateInputType
    _max?: PointsTransactionMaxAggregateInputType
  }

  export type PointsTransactionGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source: string | null
    createdAt: Date
    _count: PointsTransactionCountAggregateOutputType | null
    _avg: PointsTransactionAvgAggregateOutputType | null
    _sum: PointsTransactionSumAggregateOutputType | null
    _min: PointsTransactionMinAggregateOutputType | null
    _max: PointsTransactionMaxAggregateOutputType | null
  }

  type GetPointsTransactionGroupByPayload<T extends PointsTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], PointsTransactionGroupByOutputType[P]>
        }
      >
    >


  export type PointsTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    pointsChange?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    pointsChange?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    pointsChange?: boolean
    source?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pointsTransaction"]>

  export type PointsTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    pointsChange?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type PointsTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "pointsChange" | "source" | "createdAt", ExtArgs["result"]["pointsTransaction"]>
  export type PointsTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointsTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointsTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointsTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.PointsChangeType
      pointsChange: number
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["pointsTransaction"]>
    composites: {}
  }

  type PointsTransactionGetPayload<S extends boolean | null | undefined | PointsTransactionDefaultArgs> = $Result.GetResult<Prisma.$PointsTransactionPayload, S>

  type PointsTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointsTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsTransactionCountAggregateInputType | true
    }

  export interface PointsTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointsTransaction'], meta: { name: 'PointsTransaction' } }
    /**
     * Find zero or one PointsTransaction that matches the filter.
     * @param {PointsTransactionFindUniqueArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsTransactionFindUniqueArgs>(args: SelectSubset<T, PointsTransactionFindUniqueArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointsTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsTransactionFindUniqueOrThrowArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, PointsTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointsTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindFirstArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsTransactionFindFirstArgs>(args?: SelectSubset<T, PointsTransactionFindFirstArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointsTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindFirstOrThrowArgs} args - Arguments to find a PointsTransaction
     * @example
     * // Get one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, PointsTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointsTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointsTransactions
     * const pointsTransactions = await prisma.pointsTransaction.findMany()
     * 
     * // Get first 10 PointsTransactions
     * const pointsTransactions = await prisma.pointsTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointsTransactionFindManyArgs>(args?: SelectSubset<T, PointsTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointsTransaction.
     * @param {PointsTransactionCreateArgs} args - Arguments to create a PointsTransaction.
     * @example
     * // Create one PointsTransaction
     * const PointsTransaction = await prisma.pointsTransaction.create({
     *   data: {
     *     // ... data to create a PointsTransaction
     *   }
     * })
     * 
     */
    create<T extends PointsTransactionCreateArgs>(args: SelectSubset<T, PointsTransactionCreateArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointsTransactions.
     * @param {PointsTransactionCreateManyArgs} args - Arguments to create many PointsTransactions.
     * @example
     * // Create many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointsTransactionCreateManyArgs>(args?: SelectSubset<T, PointsTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PointsTransactions and returns the data saved in the database.
     * @param {PointsTransactionCreateManyAndReturnArgs} args - Arguments to create many PointsTransactions.
     * @example
     * // Create many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PointsTransactions and only return the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointsTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, PointsTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PointsTransaction.
     * @param {PointsTransactionDeleteArgs} args - Arguments to delete one PointsTransaction.
     * @example
     * // Delete one PointsTransaction
     * const PointsTransaction = await prisma.pointsTransaction.delete({
     *   where: {
     *     // ... filter to delete one PointsTransaction
     *   }
     * })
     * 
     */
    delete<T extends PointsTransactionDeleteArgs>(args: SelectSubset<T, PointsTransactionDeleteArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointsTransaction.
     * @param {PointsTransactionUpdateArgs} args - Arguments to update one PointsTransaction.
     * @example
     * // Update one PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointsTransactionUpdateArgs>(args: SelectSubset<T, PointsTransactionUpdateArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointsTransactions.
     * @param {PointsTransactionDeleteManyArgs} args - Arguments to filter PointsTransactions to delete.
     * @example
     * // Delete a few PointsTransactions
     * const { count } = await prisma.pointsTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointsTransactionDeleteManyArgs>(args?: SelectSubset<T, PointsTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointsTransactionUpdateManyArgs>(args: SelectSubset<T, PointsTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointsTransactions and returns the data updated in the database.
     * @param {PointsTransactionUpdateManyAndReturnArgs} args - Arguments to update many PointsTransactions.
     * @example
     * // Update many PointsTransactions
     * const pointsTransaction = await prisma.pointsTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PointsTransactions and only return the `id`
     * const pointsTransactionWithIdOnly = await prisma.pointsTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointsTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, PointsTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PointsTransaction.
     * @param {PointsTransactionUpsertArgs} args - Arguments to update or create a PointsTransaction.
     * @example
     * // Update or create a PointsTransaction
     * const pointsTransaction = await prisma.pointsTransaction.upsert({
     *   create: {
     *     // ... data to create a PointsTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointsTransaction we want to update
     *   }
     * })
     */
    upsert<T extends PointsTransactionUpsertArgs>(args: SelectSubset<T, PointsTransactionUpsertArgs<ExtArgs>>): Prisma__PointsTransactionClient<$Result.GetResult<Prisma.$PointsTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionCountArgs} args - Arguments to filter PointsTransactions to count.
     * @example
     * // Count the number of PointsTransactions
     * const count = await prisma.pointsTransaction.count({
     *   where: {
     *     // ... the filter for the PointsTransactions we want to count
     *   }
     * })
    **/
    count<T extends PointsTransactionCountArgs>(
      args?: Subset<T, PointsTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointsTransactionAggregateArgs>(args: Subset<T, PointsTransactionAggregateArgs>): Prisma.PrismaPromise<GetPointsTransactionAggregateType<T>>

    /**
     * Group by PointsTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointsTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointsTransactionGroupByArgs['orderBy'] }
        : { orderBy?: PointsTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointsTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointsTransaction model
   */
  readonly fields: PointsTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointsTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointsTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PointsTransaction model
   */
  interface PointsTransactionFieldRefs {
    readonly id: FieldRef<"PointsTransaction", 'String'>
    readonly userId: FieldRef<"PointsTransaction", 'String'>
    readonly type: FieldRef<"PointsTransaction", 'PointsChangeType'>
    readonly pointsChange: FieldRef<"PointsTransaction", 'Int'>
    readonly source: FieldRef<"PointsTransaction", 'String'>
    readonly createdAt: FieldRef<"PointsTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointsTransaction findUnique
   */
  export type PointsTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction findUniqueOrThrow
   */
  export type PointsTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction findFirst
   */
  export type PointsTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointsTransactions.
     */
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction findFirstOrThrow
   */
  export type PointsTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransaction to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointsTransactions.
     */
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction findMany
   */
  export type PointsTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter, which PointsTransactions to fetch.
     */
    where?: PointsTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointsTransactions to fetch.
     */
    orderBy?: PointsTransactionOrderByWithRelationInput | PointsTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointsTransactions.
     */
    cursor?: PointsTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointsTransactions.
     */
    skip?: number
    distinct?: PointsTransactionScalarFieldEnum | PointsTransactionScalarFieldEnum[]
  }

  /**
   * PointsTransaction create
   */
  export type PointsTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a PointsTransaction.
     */
    data: XOR<PointsTransactionCreateInput, PointsTransactionUncheckedCreateInput>
  }

  /**
   * PointsTransaction createMany
   */
  export type PointsTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointsTransactions.
     */
    data: PointsTransactionCreateManyInput | PointsTransactionCreateManyInput[]
  }

  /**
   * PointsTransaction createManyAndReturn
   */
  export type PointsTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many PointsTransactions.
     */
    data: PointsTransactionCreateManyInput | PointsTransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointsTransaction update
   */
  export type PointsTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a PointsTransaction.
     */
    data: XOR<PointsTransactionUpdateInput, PointsTransactionUncheckedUpdateInput>
    /**
     * Choose, which PointsTransaction to update.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction updateMany
   */
  export type PointsTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointsTransactions.
     */
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PointsTransactions to update
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to update.
     */
    limit?: number
  }

  /**
   * PointsTransaction updateManyAndReturn
   */
  export type PointsTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * The data used to update PointsTransactions.
     */
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyInput>
    /**
     * Filter which PointsTransactions to update
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PointsTransaction upsert
   */
  export type PointsTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the PointsTransaction to update in case it exists.
     */
    where: PointsTransactionWhereUniqueInput
    /**
     * In case the PointsTransaction found by the `where` argument doesn't exist, create a new PointsTransaction with this data.
     */
    create: XOR<PointsTransactionCreateInput, PointsTransactionUncheckedCreateInput>
    /**
     * In case the PointsTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointsTransactionUpdateInput, PointsTransactionUncheckedUpdateInput>
  }

  /**
   * PointsTransaction delete
   */
  export type PointsTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
    /**
     * Filter which PointsTransaction to delete.
     */
    where: PointsTransactionWhereUniqueInput
  }

  /**
   * PointsTransaction deleteMany
   */
  export type PointsTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointsTransactions to delete
     */
    where?: PointsTransactionWhereInput
    /**
     * Limit how many PointsTransactions to delete.
     */
    limit?: number
  }

  /**
   * PointsTransaction without action
   */
  export type PointsTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointsTransaction
     */
    select?: PointsTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointsTransaction
     */
    omit?: PointsTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    method: $Enums.VerificationMethod | null
    status: $Enums.VerificationStatus | null
    documentUrl: string | null
    createdAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    method: $Enums.VerificationMethod | null
    status: $Enums.VerificationStatus | null
    documentUrl: string | null
    createdAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    userId: number
    method: number
    status: number
    documentUrl: number
    createdAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    status?: true
    documentUrl?: true
    createdAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    status?: true
    documentUrl?: true
    createdAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    status?: true
    documentUrl?: true
    createdAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    userId: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl: string | null
    createdAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    documentUrl?: boolean
    createdAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "method" | "status" | "documentUrl" | "createdAt", ExtArgs["result"]["verification"]>
  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      method: $Enums.VerificationMethod
      status: $Enums.VerificationStatus
      documentUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly userId: FieldRef<"Verification", 'String'>
    readonly method: FieldRef<"Verification", 'VerificationMethod'>
    readonly status: FieldRef<"Verification", 'VerificationStatus'>
    readonly documentUrl: FieldRef<"Verification", 'String'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ItemScalarFieldEnum: {
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

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
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

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PointsTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    pointsChange: 'pointsChange',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type PointsTransactionScalarFieldEnum = (typeof PointsTransactionScalarFieldEnum)[keyof typeof PointsTransactionScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    method: 'method',
    status: 'status',
    documentUrl: 'documentUrl',
    createdAt: 'createdAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ItemCategory'
   */
  export type EnumItemCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemCategory'>
    


  /**
   * Reference to a field of type 'ItemCondition'
   */
  export type EnumItemConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemCondition'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'PointsChangeType'
   */
  export type EnumPointsChangeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointsChangeType'>
    


  /**
   * Reference to a field of type 'VerificationMethod'
   */
  export type EnumVerificationMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationMethod'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    profilePhotoUrl?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    pointsBalance?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    boughtTransactions?: TransactionListRelationFilter
    soldTransactions?: TransactionListRelationFilter
    pointsTransactions?: PointsTransactionListRelationFilter
    verifications?: VerificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    pointsBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: ItemOrderByRelationAggregateInput
    boughtTransactions?: TransactionOrderByRelationAggregateInput
    soldTransactions?: TransactionOrderByRelationAggregateInput
    pointsTransactions?: PointsTransactionOrderByRelationAggregateInput
    verifications?: VerificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    profilePhotoUrl?: StringNullableFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusFilter<"User"> | $Enums.VerificationStatus
    pointsBalance?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    items?: ItemListRelationFilter
    boughtTransactions?: TransactionListRelationFilter
    soldTransactions?: TransactionListRelationFilter
    pointsTransactions?: PointsTransactionListRelationFilter
    verifications?: VerificationListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    profilePhotoUrl?: SortOrderInput | SortOrder
    verificationStatus?: SortOrder
    pointsBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    profilePhotoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"User"> | $Enums.VerificationStatus
    pointsBalance?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    ownerId?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    brand?: StringNullableFilter<"Item"> | string | null
    category?: EnumItemCategoryFilter<"Item"> | $Enums.ItemCategory
    condition?: EnumItemConditionFilter<"Item"> | $Enums.ItemCondition
    ageYears?: IntFilter<"Item"> | number
    originalMsrp?: IntFilter<"Item"> | number
    estimatedMarketPrice?: IntFilter<"Item"> | number
    pointsValue?: IntFilter<"Item"> | number
    accessoriesIncluded?: JsonNullableFilter<"Item">
    images?: JsonFilter<"Item">
    locationPincode?: StringFilter<"Item"> | string
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    itemId?: StringFilter<"Item"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brand?: SortOrderInput | SortOrder
    category?: SortOrder
    condition?: SortOrder
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
    accessoriesIncluded?: SortOrderInput | SortOrder
    images?: SortOrder
    locationPincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    owner?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    ownerId?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    brand?: StringNullableFilter<"Item"> | string | null
    category?: EnumItemCategoryFilter<"Item"> | $Enums.ItemCategory
    condition?: EnumItemConditionFilter<"Item"> | $Enums.ItemCondition
    ageYears?: IntFilter<"Item"> | number
    originalMsrp?: IntFilter<"Item"> | number
    estimatedMarketPrice?: IntFilter<"Item"> | number
    pointsValue?: IntFilter<"Item"> | number
    accessoriesIncluded?: JsonNullableFilter<"Item">
    images?: JsonFilter<"Item">
    locationPincode?: StringFilter<"Item"> | string
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id" | "itemId">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brand?: SortOrderInput | SortOrder
    category?: SortOrder
    condition?: SortOrder
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
    accessoriesIncluded?: SortOrderInput | SortOrder
    images?: SortOrder
    locationPincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    ownerId?: StringWithAggregatesFilter<"Item"> | string
    title?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    brand?: StringNullableWithAggregatesFilter<"Item"> | string | null
    category?: EnumItemCategoryWithAggregatesFilter<"Item"> | $Enums.ItemCategory
    condition?: EnumItemConditionWithAggregatesFilter<"Item"> | $Enums.ItemCondition
    ageYears?: IntWithAggregatesFilter<"Item"> | number
    originalMsrp?: IntWithAggregatesFilter<"Item"> | number
    estimatedMarketPrice?: IntWithAggregatesFilter<"Item"> | number
    pointsValue?: IntWithAggregatesFilter<"Item"> | number
    accessoriesIncluded?: JsonNullableWithAggregatesFilter<"Item">
    images?: JsonWithAggregatesFilter<"Item">
    locationPincode?: StringWithAggregatesFilter<"Item"> | string
    status?: EnumItemStatusWithAggregatesFilter<"Item"> | $Enums.ItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    itemId?: StringWithAggregatesFilter<"Item"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    itemId?: StringFilter<"Transaction"> | string
    pointsSpent?: IntFilter<"Transaction"> | number
    shippingCostPaid?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    itemId?: SortOrder
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buyer?: UserOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    pointsSpent?: IntFilter<"Transaction"> | number
    shippingCostPaid?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "itemId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    itemId?: SortOrder
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    buyerId?: StringWithAggregatesFilter<"Transaction"> | string
    sellerId?: StringWithAggregatesFilter<"Transaction"> | string
    itemId?: StringWithAggregatesFilter<"Transaction"> | string
    pointsSpent?: IntWithAggregatesFilter<"Transaction"> | number
    shippingCostPaid?: IntWithAggregatesFilter<"Transaction"> | number
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PointsTransactionWhereInput = {
    AND?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    OR?: PointsTransactionWhereInput[]
    NOT?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    id?: StringFilter<"PointsTransaction"> | string
    userId?: StringFilter<"PointsTransaction"> | string
    type?: EnumPointsChangeTypeFilter<"PointsTransaction"> | $Enums.PointsChangeType
    pointsChange?: IntFilter<"PointsTransaction"> | number
    source?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointsTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    pointsChange?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointsTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    OR?: PointsTransactionWhereInput[]
    NOT?: PointsTransactionWhereInput | PointsTransactionWhereInput[]
    userId?: StringFilter<"PointsTransaction"> | string
    type?: EnumPointsChangeTypeFilter<"PointsTransaction"> | $Enums.PointsChangeType
    pointsChange?: IntFilter<"PointsTransaction"> | number
    source?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointsTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    pointsChange?: SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PointsTransactionCountOrderByAggregateInput
    _avg?: PointsTransactionAvgOrderByAggregateInput
    _max?: PointsTransactionMaxOrderByAggregateInput
    _min?: PointsTransactionMinOrderByAggregateInput
    _sum?: PointsTransactionSumOrderByAggregateInput
  }

  export type PointsTransactionScalarWhereWithAggregatesInput = {
    AND?: PointsTransactionScalarWhereWithAggregatesInput | PointsTransactionScalarWhereWithAggregatesInput[]
    OR?: PointsTransactionScalarWhereWithAggregatesInput[]
    NOT?: PointsTransactionScalarWhereWithAggregatesInput | PointsTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PointsTransaction"> | string
    userId?: StringWithAggregatesFilter<"PointsTransaction"> | string
    type?: EnumPointsChangeTypeWithAggregatesFilter<"PointsTransaction"> | $Enums.PointsChangeType
    pointsChange?: IntWithAggregatesFilter<"PointsTransaction"> | number
    source?: StringNullableWithAggregatesFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointsTransaction"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    userId?: StringFilter<"Verification"> | string
    method?: EnumVerificationMethodFilter<"Verification"> | $Enums.VerificationMethod
    status?: EnumVerificationStatusFilter<"Verification"> | $Enums.VerificationStatus
    documentUrl?: StringNullableFilter<"Verification"> | string | null
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    userId?: StringFilter<"Verification"> | string
    method?: EnumVerificationMethodFilter<"Verification"> | $Enums.VerificationMethod
    status?: EnumVerificationStatusFilter<"Verification"> | $Enums.VerificationStatus
    documentUrl?: StringNullableFilter<"Verification"> | string | null
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    userId?: StringWithAggregatesFilter<"Verification"> | string
    method?: EnumVerificationMethodWithAggregatesFilter<"Verification"> | $Enums.VerificationMethod
    status?: EnumVerificationStatusWithAggregatesFilter<"Verification"> | $Enums.VerificationStatus
    documentUrl?: StringNullableWithAggregatesFilter<"Verification"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
    owner: UserCreateNestedOneWithoutItemsInput
    transaction?: TransactionCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
    transaction?: TransactionUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
    transaction?: TransactionUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    transaction?: TransactionUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutBoughtTransactionsInput
    seller: UserCreateNestedOneWithoutSoldTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    buyerId: string
    sellerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBoughtTransactionsNestedInput
    seller?: UserUpdateOneRequiredWithoutSoldTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    buyerId: string
    sellerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionCreateInput = {
    id?: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointsTransactionsInput
  }

  export type PointsTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsTransactionsNestedInput
  }

  export type PointsTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id?: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationUncheckedCreateInput = {
    id?: string
    userId: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id?: string
    userId: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PointsTransactionListRelationFilter = {
    every?: PointsTransactionWhereInput
    some?: PointsTransactionWhereInput
    none?: PointsTransactionWhereInput
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointsTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    profilePhotoUrl?: SortOrder
    verificationStatus?: SortOrder
    pointsBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    pointsBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    profilePhotoUrl?: SortOrder
    verificationStatus?: SortOrder
    pointsBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    profilePhotoUrl?: SortOrder
    verificationStatus?: SortOrder
    pointsBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    pointsBalance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumItemCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryFilter<$PrismaModel> | $Enums.ItemCategory
  }

  export type EnumItemConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCondition | EnumItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCondition[]
    notIn?: $Enums.ItemCondition[]
    not?: NestedEnumItemConditionFilter<$PrismaModel> | $Enums.ItemCondition
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
    accessoriesIncluded?: SortOrder
    images?: SortOrder
    locationPincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
    locationPincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    category?: SortOrder
    condition?: SortOrder
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
    locationPincode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    itemId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    ageYears?: SortOrder
    originalMsrp?: SortOrder
    estimatedMarketPrice?: SortOrder
    pointsValue?: SortOrder
  }

  export type EnumItemCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ItemCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemCategoryFilter<$PrismaModel>
    _max?: NestedEnumItemCategoryFilter<$PrismaModel>
  }

  export type EnumItemConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCondition | EnumItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCondition[]
    notIn?: $Enums.ItemCondition[]
    not?: NestedEnumItemConditionWithAggregatesFilter<$PrismaModel> | $Enums.ItemCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemConditionFilter<$PrismaModel>
    _max?: NestedEnumItemConditionFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    itemId?: SortOrder
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    itemId?: SortOrder
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    itemId?: SortOrder
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    pointsSpent?: SortOrder
    shippingCostPaid?: SortOrder
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumPointsChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsChangeType | EnumPointsChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointsChangeType[]
    notIn?: $Enums.PointsChangeType[]
    not?: NestedEnumPointsChangeTypeFilter<$PrismaModel> | $Enums.PointsChangeType
  }

  export type PointsTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    pointsChange?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionAvgOrderByAggregateInput = {
    pointsChange?: SortOrder
  }

  export type PointsTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    pointsChange?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    pointsChange?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PointsTransactionSumOrderByAggregateInput = {
    pointsChange?: SortOrder
  }

  export type EnumPointsChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsChangeType | EnumPointsChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointsChangeType[]
    notIn?: $Enums.PointsChangeType[]
    not?: NestedEnumPointsChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointsChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointsChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumPointsChangeTypeFilter<$PrismaModel>
  }

  export type EnumVerificationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[]
    notIn?: $Enums.VerificationMethod[]
    not?: NestedEnumVerificationMethodFilter<$PrismaModel> | $Enums.VerificationMethod
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVerificationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[]
    notIn?: $Enums.VerificationMethod[]
    not?: NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel> | $Enums.VerificationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationMethodFilter<$PrismaModel>
    _max?: NestedEnumVerificationMethodFilter<$PrismaModel>
  }

  export type ItemCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutSellerInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PointsTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type VerificationCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PointsTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ItemUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSellerInput | TransactionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSellerInput | TransactionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSellerInput | TransactionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PointsTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutUserInput | PointsTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutUserInput | PointsTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutUserInput | PointsTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type VerificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput> | ItemCreateWithoutOwnerInput[] | ItemUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutOwnerInput | ItemCreateOrConnectWithoutOwnerInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutOwnerInput | ItemUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ItemCreateManyOwnerInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutOwnerInput | ItemUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutOwnerInput | ItemUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput> | TransactionCreateWithoutBuyerInput[] | TransactionUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutBuyerInput | TransactionCreateOrConnectWithoutBuyerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutBuyerInput | TransactionUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TransactionCreateManyBuyerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutBuyerInput | TransactionUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutBuyerInput | TransactionUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput> | TransactionCreateWithoutSellerInput[] | TransactionUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutSellerInput | TransactionCreateOrConnectWithoutSellerInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutSellerInput | TransactionUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TransactionCreateManySellerInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutSellerInput | TransactionUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutSellerInput | TransactionUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PointsTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput> | PointsTransactionCreateWithoutUserInput[] | PointsTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsTransactionCreateOrConnectWithoutUserInput | PointsTransactionCreateOrConnectWithoutUserInput[]
    upsert?: PointsTransactionUpsertWithWhereUniqueWithoutUserInput | PointsTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsTransactionCreateManyUserInputEnvelope
    set?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    disconnect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    delete?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    connect?: PointsTransactionWhereUniqueInput | PointsTransactionWhereUniqueInput[]
    update?: PointsTransactionUpdateWithWhereUniqueWithoutUserInput | PointsTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsTransactionUpdateManyWithWhereWithoutUserInput | PointsTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
  }

  export type VerificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput> | VerificationCreateWithoutUserInput[] | VerificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutUserInput | VerificationCreateOrConnectWithoutUserInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutUserInput | VerificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerificationCreateManyUserInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutUserInput | VerificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutUserInput | VerificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutItemInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumItemCategoryFieldUpdateOperationsInput = {
    set?: $Enums.ItemCategory
  }

  export type EnumItemConditionFieldUpdateOperationsInput = {
    set?: $Enums.ItemCondition
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type TransactionUpdateOneWithoutItemNestedInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput
    upsert?: TransactionUpsertWithoutItemInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutItemInput, TransactionUpdateWithoutItemInput>, TransactionUncheckedUpdateWithoutItemInput>
  }

  export type TransactionUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutItemInput
    upsert?: TransactionUpsertWithoutItemInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutItemInput, TransactionUpdateWithoutItemInput>, TransactionUncheckedUpdateWithoutItemInput>
  }

  export type UserCreateNestedOneWithoutBoughtTransactionsInput = {
    create?: XOR<UserCreateWithoutBoughtTransactionsInput, UserUncheckedCreateWithoutBoughtTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSoldTransactionsInput = {
    create?: XOR<UserCreateWithoutSoldTransactionsInput, UserUncheckedCreateWithoutSoldTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutTransactionInput = {
    create?: XOR<ItemCreateWithoutTransactionInput, ItemUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransactionInput
    connect?: ItemWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutBoughtTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutBoughtTransactionsInput, UserUncheckedCreateWithoutBoughtTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoughtTransactionsInput
    upsert?: UserUpsertWithoutBoughtTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBoughtTransactionsInput, UserUpdateWithoutBoughtTransactionsInput>, UserUncheckedUpdateWithoutBoughtTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutSoldTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutSoldTransactionsInput, UserUncheckedCreateWithoutSoldTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSoldTransactionsInput
    upsert?: UserUpsertWithoutSoldTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSoldTransactionsInput, UserUpdateWithoutSoldTransactionsInput>, UserUncheckedUpdateWithoutSoldTransactionsInput>
  }

  export type ItemUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<ItemCreateWithoutTransactionInput, ItemUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTransactionInput
    upsert?: ItemUpsertWithoutTransactionInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTransactionInput, ItemUpdateWithoutTransactionInput>, ItemUncheckedUpdateWithoutTransactionInput>
  }

  export type UserCreateNestedOneWithoutPointsTransactionsInput = {
    create?: XOR<UserCreateWithoutPointsTransactionsInput, UserUncheckedCreateWithoutPointsTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPointsChangeTypeFieldUpdateOperationsInput = {
    set?: $Enums.PointsChangeType
  }

  export type UserUpdateOneRequiredWithoutPointsTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutPointsTransactionsInput, UserUncheckedCreateWithoutPointsTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsTransactionsInput
    upsert?: UserUpsertWithoutPointsTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsTransactionsInput, UserUpdateWithoutPointsTransactionsInput>, UserUncheckedUpdateWithoutPointsTransactionsInput>
  }

  export type UserCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumVerificationMethodFieldUpdateOperationsInput = {
    set?: $Enums.VerificationMethod
  }

  export type UserUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerificationsInput
    upsert?: UserUpsertWithoutVerificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerificationsInput, UserUpdateWithoutVerificationsInput>, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumItemCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryFilter<$PrismaModel> | $Enums.ItemCategory
  }

  export type NestedEnumItemConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCondition | EnumItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCondition[]
    notIn?: $Enums.ItemCondition[]
    not?: NestedEnumItemConditionFilter<$PrismaModel> | $Enums.ItemCondition
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCategory | EnumItemCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCategory[]
    notIn?: $Enums.ItemCategory[]
    not?: NestedEnumItemCategoryWithAggregatesFilter<$PrismaModel> | $Enums.ItemCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemCategoryFilter<$PrismaModel>
    _max?: NestedEnumItemCategoryFilter<$PrismaModel>
  }

  export type NestedEnumItemConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemCondition | EnumItemConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ItemCondition[]
    notIn?: $Enums.ItemCondition[]
    not?: NestedEnumItemConditionWithAggregatesFilter<$PrismaModel> | $Enums.ItemCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemConditionFilter<$PrismaModel>
    _max?: NestedEnumItemConditionFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[]
    notIn?: $Enums.ItemStatus[]
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[]
    notIn?: $Enums.TransactionStatus[]
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPointsChangeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsChangeType | EnumPointsChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointsChangeType[]
    notIn?: $Enums.PointsChangeType[]
    not?: NestedEnumPointsChangeTypeFilter<$PrismaModel> | $Enums.PointsChangeType
  }

  export type NestedEnumPointsChangeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointsChangeType | EnumPointsChangeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointsChangeType[]
    notIn?: $Enums.PointsChangeType[]
    not?: NestedEnumPointsChangeTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointsChangeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointsChangeTypeFilter<$PrismaModel>
    _max?: NestedEnumPointsChangeTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[]
    notIn?: $Enums.VerificationMethod[]
    not?: NestedEnumVerificationMethodFilter<$PrismaModel> | $Enums.VerificationMethod
  }

  export type NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[]
    notIn?: $Enums.VerificationMethod[]
    not?: NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel> | $Enums.VerificationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationMethodFilter<$PrismaModel>
    _max?: NestedEnumVerificationMethodFilter<$PrismaModel>
  }

  export type ItemCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
    transaction?: TransactionCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
    transaction?: TransactionUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemCreateManyOwnerInputEnvelope = {
    data: ItemCreateManyOwnerInput | ItemCreateManyOwnerInput[]
  }

  export type TransactionCreateWithoutBuyerInput = {
    id?: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutSoldTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutBuyerInput = {
    id?: string
    sellerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionCreateManyBuyerInputEnvelope = {
    data: TransactionCreateManyBuyerInput | TransactionCreateManyBuyerInput[]
  }

  export type TransactionCreateWithoutSellerInput = {
    id?: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutBoughtTransactionsInput
    item: ItemCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutSellerInput = {
    id?: string
    buyerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput>
  }

  export type TransactionCreateManySellerInputEnvelope = {
    data: TransactionCreateManySellerInput | TransactionCreateManySellerInput[]
  }

  export type PointsTransactionCreateWithoutUserInput = {
    id?: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
  }

  export type PointsTransactionCreateOrConnectWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    create: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointsTransactionCreateManyUserInputEnvelope = {
    data: PointsTransactionCreateManyUserInput | PointsTransactionCreateManyUserInput[]
  }

  export type VerificationCreateWithoutUserInput = {
    id?: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
  }

  export type VerificationUncheckedCreateWithoutUserInput = {
    id?: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
  }

  export type VerificationCreateOrConnectWithoutUserInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationCreateManyUserInputEnvelope = {
    data: VerificationCreateManyUserInput | VerificationCreateManyUserInput[]
  }

  export type ItemUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
    create: XOR<ItemCreateWithoutOwnerInput, ItemUncheckedCreateWithoutOwnerInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutOwnerInput, ItemUncheckedUpdateWithoutOwnerInput>
  }

  export type ItemUpdateManyWithWhereWithoutOwnerInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: StringFilter<"Item"> | string
    ownerId?: StringFilter<"Item"> | string
    title?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    brand?: StringNullableFilter<"Item"> | string | null
    category?: EnumItemCategoryFilter<"Item"> | $Enums.ItemCategory
    condition?: EnumItemConditionFilter<"Item"> | $Enums.ItemCondition
    ageYears?: IntFilter<"Item"> | number
    originalMsrp?: IntFilter<"Item"> | number
    estimatedMarketPrice?: IntFilter<"Item"> | number
    pointsValue?: IntFilter<"Item"> | number
    accessoriesIncluded?: JsonNullableFilter<"Item">
    images?: JsonFilter<"Item">
    locationPincode?: StringFilter<"Item"> | string
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    itemId?: StringFilter<"Item"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
    create: XOR<TransactionCreateWithoutBuyerInput, TransactionUncheckedCreateWithoutBuyerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutBuyerInput, TransactionUncheckedUpdateWithoutBuyerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutBuyerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutBuyerInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    buyerId?: StringFilter<"Transaction"> | string
    sellerId?: StringFilter<"Transaction"> | string
    itemId?: StringFilter<"Transaction"> | string
    pointsSpent?: IntFilter<"Transaction"> | number
    shippingCostPaid?: IntFilter<"Transaction"> | number
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutSellerInput, TransactionUncheckedUpdateWithoutSellerInput>
    create: XOR<TransactionCreateWithoutSellerInput, TransactionUncheckedCreateWithoutSellerInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutSellerInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutSellerInput, TransactionUncheckedUpdateWithoutSellerInput>
  }

  export type TransactionUpdateManyWithWhereWithoutSellerInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutSellerInput>
  }

  export type PointsTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    update: XOR<PointsTransactionUpdateWithoutUserInput, PointsTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<PointsTransactionCreateWithoutUserInput, PointsTransactionUncheckedCreateWithoutUserInput>
  }

  export type PointsTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: PointsTransactionWhereUniqueInput
    data: XOR<PointsTransactionUpdateWithoutUserInput, PointsTransactionUncheckedUpdateWithoutUserInput>
  }

  export type PointsTransactionUpdateManyWithWhereWithoutUserInput = {
    where: PointsTransactionScalarWhereInput
    data: XOR<PointsTransactionUpdateManyMutationInput, PointsTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type PointsTransactionScalarWhereInput = {
    AND?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
    OR?: PointsTransactionScalarWhereInput[]
    NOT?: PointsTransactionScalarWhereInput | PointsTransactionScalarWhereInput[]
    id?: StringFilter<"PointsTransaction"> | string
    userId?: StringFilter<"PointsTransaction"> | string
    type?: EnumPointsChangeTypeFilter<"PointsTransaction"> | $Enums.PointsChangeType
    pointsChange?: IntFilter<"PointsTransaction"> | number
    source?: StringNullableFilter<"PointsTransaction"> | string | null
    createdAt?: DateTimeFilter<"PointsTransaction"> | Date | string
  }

  export type VerificationUpsertWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    update: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
    create: XOR<VerificationCreateWithoutUserInput, VerificationUncheckedCreateWithoutUserInput>
  }

  export type VerificationUpdateWithWhereUniqueWithoutUserInput = {
    where: VerificationWhereUniqueInput
    data: XOR<VerificationUpdateWithoutUserInput, VerificationUncheckedUpdateWithoutUserInput>
  }

  export type VerificationUpdateManyWithWhereWithoutUserInput = {
    where: VerificationScalarWhereInput
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyWithoutUserInput>
  }

  export type VerificationScalarWhereInput = {
    AND?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    OR?: VerificationScalarWhereInput[]
    NOT?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    id?: StringFilter<"Verification"> | string
    userId?: StringFilter<"Verification"> | string
    method?: EnumVerificationMethodFilter<"Verification"> | $Enums.VerificationMethod
    status?: EnumVerificationStatusFilter<"Verification"> | $Enums.VerificationStatus
    documentUrl?: StringNullableFilter<"Verification"> | string | null
    createdAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type UserCreateWithoutItemsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtTransactions?: TransactionCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    boughtTransactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type TransactionCreateWithoutItemInput = {
    id?: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutBoughtTransactionsInput
    seller: UserCreateNestedOneWithoutSoldTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutItemInput = {
    id?: string
    buyerId: string
    sellerId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutItemInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtTransactions?: TransactionUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boughtTransactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutItemInput = {
    update: XOR<TransactionUpdateWithoutItemInput, TransactionUncheckedUpdateWithoutItemInput>
    create: XOR<TransactionCreateWithoutItemInput, TransactionUncheckedCreateWithoutItemInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutItemInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutItemInput, TransactionUncheckedUpdateWithoutItemInput>
  }

  export type TransactionUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBoughtTransactionsNestedInput
    seller?: UserUpdateOneRequiredWithoutSoldTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutBoughtTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    soldTransactions?: TransactionCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoughtTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    soldTransactions?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoughtTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoughtTransactionsInput, UserUncheckedCreateWithoutBoughtTransactionsInput>
  }

  export type UserCreateWithoutSoldTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionCreateNestedManyWithoutBuyerInput
    pointsTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSoldTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    pointsTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSoldTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSoldTransactionsInput, UserUncheckedCreateWithoutSoldTransactionsInput>
  }

  export type ItemCreateWithoutTransactionInput = {
    id?: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
    owner: UserCreateNestedOneWithoutItemsInput
  }

  export type ItemUncheckedCreateWithoutTransactionInput = {
    id?: string
    ownerId: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
  }

  export type ItemCreateOrConnectWithoutTransactionInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTransactionInput, ItemUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutBoughtTransactionsInput = {
    update: XOR<UserUpdateWithoutBoughtTransactionsInput, UserUncheckedUpdateWithoutBoughtTransactionsInput>
    create: XOR<UserCreateWithoutBoughtTransactionsInput, UserUncheckedCreateWithoutBoughtTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBoughtTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBoughtTransactionsInput, UserUncheckedUpdateWithoutBoughtTransactionsInput>
  }

  export type UserUpdateWithoutBoughtTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    soldTransactions?: TransactionUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoughtTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    soldTransactions?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSoldTransactionsInput = {
    update: XOR<UserUpdateWithoutSoldTransactionsInput, UserUncheckedUpdateWithoutSoldTransactionsInput>
    create: XOR<UserCreateWithoutSoldTransactionsInput, UserUncheckedCreateWithoutSoldTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSoldTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSoldTransactionsInput, UserUncheckedUpdateWithoutSoldTransactionsInput>
  }

  export type UserUpdateWithoutSoldTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUpdateManyWithoutBuyerNestedInput
    pointsTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSoldTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    pointsTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemUpsertWithoutTransactionInput = {
    update: XOR<ItemUpdateWithoutTransactionInput, ItemUncheckedUpdateWithoutTransactionInput>
    create: XOR<ItemCreateWithoutTransactionInput, ItemUncheckedCreateWithoutTransactionInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTransactionInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTransactionInput, ItemUncheckedUpdateWithoutTransactionInput>
  }

  export type ItemUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ItemUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPointsTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionCreateNestedManyWithoutSellerInput
    verifications?: VerificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsTransactionsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsTransactionsInput, UserUncheckedCreateWithoutPointsTransactionsInput>
  }

  export type UserUpsertWithoutPointsTransactionsInput = {
    update: XOR<UserUpdateWithoutPointsTransactionsInput, UserUncheckedUpdateWithoutPointsTransactionsInput>
    create: XOR<UserCreateWithoutPointsTransactionsInput, UserUncheckedCreateWithoutPointsTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsTransactionsInput, UserUncheckedUpdateWithoutPointsTransactionsInput>
  }

  export type UserUpdateWithoutPointsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUpdateManyWithoutSellerNestedInput
    verifications?: VerificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVerificationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerificationsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    passwordHash: string
    profilePhotoUrl?: string | null
    verificationStatus?: $Enums.VerificationStatus
    pointsBalance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ItemUncheckedCreateNestedManyWithoutOwnerInput
    boughtTransactions?: TransactionUncheckedCreateNestedManyWithoutBuyerInput
    soldTransactions?: TransactionUncheckedCreateNestedManyWithoutSellerInput
    pointsTransactions?: PointsTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
  }

  export type UserUpsertWithoutVerificationsInput = {
    update: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
    create: XOR<UserCreateWithoutVerificationsInput, UserUncheckedCreateWithoutVerificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerificationsInput, UserUncheckedUpdateWithoutVerificationsInput>
  }

  export type UserUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePhotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    pointsBalance?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ItemUncheckedUpdateManyWithoutOwnerNestedInput
    boughtTransactions?: TransactionUncheckedUpdateManyWithoutBuyerNestedInput
    soldTransactions?: TransactionUncheckedUpdateManyWithoutSellerNestedInput
    pointsTransactions?: PointsTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    brand?: string | null
    category: $Enums.ItemCategory
    condition: $Enums.ItemCondition
    ageYears: number
    originalMsrp: number
    estimatedMarketPrice: number
    pointsValue: number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images: JsonNullValueInput | InputJsonValue
    locationPincode: string
    status?: $Enums.ItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    itemId: string
  }

  export type TransactionCreateManyBuyerInput = {
    id?: string
    sellerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManySellerInput = {
    id?: string
    buyerId: string
    itemId: string
    pointsSpent: number
    shippingCostPaid: number
    status?: $Enums.TransactionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PointsTransactionCreateManyUserInput = {
    id?: string
    type: $Enums.PointsChangeType
    pointsChange: number
    source?: string | null
    createdAt?: Date | string
  }

  export type VerificationCreateManyUserInput = {
    id?: string
    method: $Enums.VerificationMethod
    status: $Enums.VerificationStatus
    documentUrl?: string | null
    createdAt?: Date | string
  }

  export type ItemUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    transaction?: TransactionUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    transaction?: TransactionUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumItemCategoryFieldUpdateOperationsInput | $Enums.ItemCategory
    condition?: EnumItemConditionFieldUpdateOperationsInput | $Enums.ItemCondition
    ageYears?: IntFieldUpdateOperationsInput | number
    originalMsrp?: IntFieldUpdateOperationsInput | number
    estimatedMarketPrice?: IntFieldUpdateOperationsInput | number
    pointsValue?: IntFieldUpdateOperationsInput | number
    accessoriesIncluded?: NullableJsonNullValueInput | InputJsonValue
    images?: JsonNullValueInput | InputJsonValue
    locationPincode?: StringFieldUpdateOperationsInput | string
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutSoldTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutBoughtTransactionsNestedInput
    item?: ItemUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    pointsSpent?: IntFieldUpdateOperationsInput | number
    shippingCostPaid?: IntFieldUpdateOperationsInput | number
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPointsChangeTypeFieldUpdateOperationsInput | $Enums.PointsChangeType
    pointsChange?: IntFieldUpdateOperationsInput | number
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}