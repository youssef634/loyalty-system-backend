
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
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model ResetPasswordToken
 * 
 */
export type ResetPasswordToken = $Result.DefaultSelection<Prisma.$ResetPasswordTokenPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model CafeProduct
 * 
 */
export type CafeProduct = $Result.DefaultSelection<Prisma.$CafeProductPayload>
/**
 * Model RestaurantProduct
 * 
 */
export type RestaurantProduct = $Result.DefaultSelection<Prisma.$RestaurantProductPayload>
/**
 * Model Reward
 * 
 */
export type Reward = $Result.DefaultSelection<Prisma.$RewardPayload>
/**
 * Model MyReward
 * 
 */
export type MyReward = $Result.DefaultSelection<Prisma.$MyRewardPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model InvoiceItem
 * 
 */
export type InvoiceItem = $Result.DefaultSelection<Prisma.$InvoiceItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  ACCOUNTANT: 'ACCOUNTANT',
  CASHIER: 'CASHIER',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RewardStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type RewardStatus = (typeof RewardStatus)[keyof typeof RewardStatus]


export const PrinterType: {
  USB: 'USB',
  LAN: 'LAN'
};

export type PrinterType = (typeof PrinterType)[keyof typeof PrinterType]


export const TransactionStatus: {
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const CategoryType: {
  CAFE: 'CAFE',
  RESTAURANT: 'RESTAURANT'
};

export type CategoryType = (typeof CategoryType)[keyof typeof CategoryType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RewardStatus = $Enums.RewardStatus

export const RewardStatus: typeof $Enums.RewardStatus

export type PrinterType = $Enums.PrinterType

export const PrinterType: typeof $Enums.PrinterType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type CategoryType = $Enums.CategoryType

export const CategoryType: typeof $Enums.CategoryType

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resetPasswordToken`: Exposes CRUD operations for the **ResetPasswordToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetPasswordTokens
    * const resetPasswordTokens = await prisma.resetPasswordToken.findMany()
    * ```
    */
  get resetPasswordToken(): Prisma.ResetPasswordTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cafeProduct`: Exposes CRUD operations for the **CafeProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CafeProducts
    * const cafeProducts = await prisma.cafeProduct.findMany()
    * ```
    */
  get cafeProduct(): Prisma.CafeProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantProduct`: Exposes CRUD operations for the **RestaurantProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantProducts
    * const restaurantProducts = await prisma.restaurantProduct.findMany()
    * ```
    */
  get restaurantProduct(): Prisma.RestaurantProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reward`: Exposes CRUD operations for the **Reward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.reward.findMany()
    * ```
    */
  get reward(): Prisma.RewardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myReward`: Exposes CRUD operations for the **MyReward** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyRewards
    * const myRewards = await prisma.myReward.findMany()
    * ```
    */
  get myReward(): Prisma.MyRewardDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoiceItem`: Exposes CRUD operations for the **InvoiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvoiceItems
    * const invoiceItems = await prisma.invoiceItem.findMany()
    * ```
    */
  get invoiceItem(): Prisma.InvoiceItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    RolePermission: 'RolePermission',
    ResetPasswordToken: 'ResetPasswordToken',
    Category: 'Category',
    CafeProduct: 'CafeProduct',
    RestaurantProduct: 'RestaurantProduct',
    Reward: 'Reward',
    MyReward: 'MyReward',
    Transaction: 'Transaction',
    Settings: 'Settings',
    Invoice: 'Invoice',
    InvoiceItem: 'InvoiceItem'
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
      modelProps: "user" | "rolePermission" | "resetPasswordToken" | "category" | "cafeProduct" | "restaurantProduct" | "reward" | "myReward" | "transaction" | "settings" | "invoice" | "invoiceItem"
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
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      ResetPasswordToken: {
        payload: Prisma.$ResetPasswordTokenPayload<ExtArgs>
        fields: Prisma.ResetPasswordTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetPasswordTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetPasswordTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          findFirst: {
            args: Prisma.ResetPasswordTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetPasswordTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          findMany: {
            args: Prisma.ResetPasswordTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>[]
          }
          create: {
            args: Prisma.ResetPasswordTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          createMany: {
            args: Prisma.ResetPasswordTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetPasswordTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>[]
          }
          delete: {
            args: Prisma.ResetPasswordTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          update: {
            args: Prisma.ResetPasswordTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          deleteMany: {
            args: Prisma.ResetPasswordTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetPasswordTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResetPasswordTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>[]
          }
          upsert: {
            args: Prisma.ResetPasswordTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetPasswordTokenPayload>
          }
          aggregate: {
            args: Prisma.ResetPasswordTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetPasswordToken>
          }
          groupBy: {
            args: Prisma.ResetPasswordTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetPasswordTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ResetPasswordTokenCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      CafeProduct: {
        payload: Prisma.$CafeProductPayload<ExtArgs>
        fields: Prisma.CafeProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CafeProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CafeProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          findFirst: {
            args: Prisma.CafeProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CafeProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          findMany: {
            args: Prisma.CafeProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>[]
          }
          create: {
            args: Prisma.CafeProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          createMany: {
            args: Prisma.CafeProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CafeProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>[]
          }
          delete: {
            args: Prisma.CafeProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          update: {
            args: Prisma.CafeProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          deleteMany: {
            args: Prisma.CafeProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CafeProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CafeProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>[]
          }
          upsert: {
            args: Prisma.CafeProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CafeProductPayload>
          }
          aggregate: {
            args: Prisma.CafeProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCafeProduct>
          }
          groupBy: {
            args: Prisma.CafeProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CafeProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CafeProductCountArgs<ExtArgs>
            result: $Utils.Optional<CafeProductCountAggregateOutputType> | number
          }
        }
      }
      RestaurantProduct: {
        payload: Prisma.$RestaurantProductPayload<ExtArgs>
        fields: Prisma.RestaurantProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          findFirst: {
            args: Prisma.RestaurantProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          findMany: {
            args: Prisma.RestaurantProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>[]
          }
          create: {
            args: Prisma.RestaurantProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          createMany: {
            args: Prisma.RestaurantProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>[]
          }
          delete: {
            args: Prisma.RestaurantProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          update: {
            args: Prisma.RestaurantProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantProductPayload>
          }
          aggregate: {
            args: Prisma.RestaurantProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantProduct>
          }
          groupBy: {
            args: Prisma.RestaurantProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantProductCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantProductCountAggregateOutputType> | number
          }
        }
      }
      Reward: {
        payload: Prisma.$RewardPayload<ExtArgs>
        fields: Prisma.RewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findFirst: {
            args: Prisma.RewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          findMany: {
            args: Prisma.RewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          create: {
            args: Prisma.RewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          createMany: {
            args: Prisma.RewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          delete: {
            args: Prisma.RewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          update: {
            args: Prisma.RewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          deleteMany: {
            args: Prisma.RewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>[]
          }
          upsert: {
            args: Prisma.RewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardPayload>
          }
          aggregate: {
            args: Prisma.RewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReward>
          }
          groupBy: {
            args: Prisma.RewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardCountArgs<ExtArgs>
            result: $Utils.Optional<RewardCountAggregateOutputType> | number
          }
        }
      }
      MyReward: {
        payload: Prisma.$MyRewardPayload<ExtArgs>
        fields: Prisma.MyRewardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyRewardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyRewardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          findFirst: {
            args: Prisma.MyRewardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyRewardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          findMany: {
            args: Prisma.MyRewardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>[]
          }
          create: {
            args: Prisma.MyRewardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          createMany: {
            args: Prisma.MyRewardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyRewardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>[]
          }
          delete: {
            args: Prisma.MyRewardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          update: {
            args: Prisma.MyRewardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          deleteMany: {
            args: Prisma.MyRewardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyRewardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MyRewardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>[]
          }
          upsert: {
            args: Prisma.MyRewardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyRewardPayload>
          }
          aggregate: {
            args: Prisma.MyRewardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyReward>
          }
          groupBy: {
            args: Prisma.MyRewardGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyRewardGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyRewardCountArgs<ExtArgs>
            result: $Utils.Optional<MyRewardCountAggregateOutputType> | number
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
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      InvoiceItem: {
        payload: Prisma.$InvoiceItemPayload<ExtArgs>
        fields: Prisma.InvoiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findFirst: {
            args: Prisma.InvoiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          findMany: {
            args: Prisma.InvoiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          create: {
            args: Prisma.InvoiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          createMany: {
            args: Prisma.InvoiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          delete: {
            args: Prisma.InvoiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          update: {
            args: Prisma.InvoiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          deleteMany: {
            args: Prisma.InvoiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>[]
          }
          upsert: {
            args: Prisma.InvoiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoiceItemPayload>
          }
          aggregate: {
            args: Prisma.InvoiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoiceItem>
          }
          groupBy: {
            args: Prisma.InvoiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    rolePermission?: RolePermissionOmit
    resetPasswordToken?: ResetPasswordTokenOmit
    category?: CategoryOmit
    cafeProduct?: CafeProductOmit
    restaurantProduct?: RestaurantProductOmit
    reward?: RewardOmit
    myReward?: MyRewardOmit
    transaction?: TransactionOmit
    settings?: SettingsOmit
    invoice?: InvoiceOmit
    invoiceItem?: InvoiceItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    transactions: number
    resetPasswordTokens: number
    myRewards: number
    invoices: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    resetPasswordTokens?: boolean | UserCountOutputTypeCountResetPasswordTokensArgs
    myRewards?: boolean | UserCountOutputTypeCountMyRewardsArgs
    invoices?: boolean | UserCountOutputTypeCountInvoicesArgs
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
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResetPasswordTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyRewardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    InvoiceItem: number
    cafeProducts: number
    restaurantProducts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceItem?: boolean | CategoryCountOutputTypeCountInvoiceItemArgs
    cafeProducts?: boolean | CategoryCountOutputTypeCountCafeProductsArgs
    restaurantProducts?: boolean | CategoryCountOutputTypeCountRestaurantProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountInvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCafeProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CafeProductWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRestaurantProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantProductWhereInput
  }


  /**
   * Count Type CafeProductCountOutputType
   */

  export type CafeProductCountOutputType = {
    myRewards: number
    transactions: number
    invoice: number
  }

  export type CafeProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myRewards?: boolean | CafeProductCountOutputTypeCountMyRewardsArgs
    transactions?: boolean | CafeProductCountOutputTypeCountTransactionsArgs
    invoice?: boolean | CafeProductCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * CafeProductCountOutputType without action
   */
  export type CafeProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProductCountOutputType
     */
    select?: CafeProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CafeProductCountOutputType without action
   */
  export type CafeProductCountOutputTypeCountMyRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyRewardWhereInput
  }

  /**
   * CafeProductCountOutputType without action
   */
  export type CafeProductCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * CafeProductCountOutputType without action
   */
  export type CafeProductCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }


  /**
   * Count Type RestaurantProductCountOutputType
   */

  export type RestaurantProductCountOutputType = {
    myRewards: number
    transactions: number
    invoice: number
  }

  export type RestaurantProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    myRewards?: boolean | RestaurantProductCountOutputTypeCountMyRewardsArgs
    transactions?: boolean | RestaurantProductCountOutputTypeCountTransactionsArgs
    invoice?: boolean | RestaurantProductCountOutputTypeCountInvoiceArgs
  }

  // Custom InputTypes
  /**
   * RestaurantProductCountOutputType without action
   */
  export type RestaurantProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProductCountOutputType
     */
    select?: RestaurantProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantProductCountOutputType without action
   */
  export type RestaurantProductCountOutputTypeCountMyRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyRewardWhereInput
  }

  /**
   * RestaurantProductCountOutputType without action
   */
  export type RestaurantProductCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * RestaurantProductCountOutputType without action
   */
  export type RestaurantProductCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
  }


  /**
   * Count Type InvoiceCountOutputType
   */

  export type InvoiceCountOutputType = {
    items: number
  }

  export type InvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | InvoiceCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceCountOutputType
     */
    select?: InvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoiceCountOutputType without action
   */
  export type InvoiceCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
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
    id: number | null
    points: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    points: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    phone: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    points: number | null
    qrCode: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    phone: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    role: $Enums.Role | null
    points: number | null
    qrCode: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    enName: number
    arName: number
    phone: number
    email: number
    password: number
    profileImage: number
    role: number
    points: number
    qrCode: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    points?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    phone?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    points?: true
    qrCode?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    phone?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    points?: true
    qrCode?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    phone?: true
    email?: true
    password?: true
    profileImage?: true
    role?: true
    points?: true
    qrCode?: true
    createdAt?: true
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
    id: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage: string | null
    role: $Enums.Role
    points: number
    qrCode: string | null
    createdAt: Date
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
    enName?: boolean
    arName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    points?: boolean
    qrCode?: boolean
    createdAt?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    resetPasswordTokens?: boolean | User$resetPasswordTokensArgs<ExtArgs>
    myRewards?: boolean | User$myRewardsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    points?: boolean
    qrCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    points?: boolean
    qrCode?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    enName?: boolean
    arName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    role?: boolean
    points?: boolean
    qrCode?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enName" | "arName" | "phone" | "email" | "password" | "profileImage" | "role" | "points" | "qrCode" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    resetPasswordTokens?: boolean | User$resetPasswordTokensArgs<ExtArgs>
    myRewards?: boolean | User$myRewardsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    invoices?: boolean | User$invoicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      resetPasswordTokens: Prisma.$ResetPasswordTokenPayload<ExtArgs>[]
      myRewards: Prisma.$MyRewardPayload<ExtArgs>[]
      settings: Prisma.$SettingsPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enName: string
      arName: string
      phone: string
      email: string
      password: string
      profileImage: string | null
      role: $Enums.Role
      points: number
      qrCode: string | null
      createdAt: Date
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
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resetPasswordTokens<T extends User$resetPasswordTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$resetPasswordTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    myRewards<T extends User$myRewardsArgs<ExtArgs> = {}>(args?: Subset<T, User$myRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoices<T extends User$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, User$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly enName: FieldRef<"User", 'String'>
    readonly arName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly points: FieldRef<"User", 'Float'>
    readonly qrCode: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.resetPasswordTokens
   */
  export type User$resetPasswordTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    where?: ResetPasswordTokenWhereInput
    orderBy?: ResetPasswordTokenOrderByWithRelationInput | ResetPasswordTokenOrderByWithRelationInput[]
    cursor?: ResetPasswordTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResetPasswordTokenScalarFieldEnum | ResetPasswordTokenScalarFieldEnum[]
  }

  /**
   * User.myRewards
   */
  export type User$myRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    where?: MyRewardWhereInput
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    cursor?: MyRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * User.invoices
   */
  export type User$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
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
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type RolePermissionSumAggregateOutputType = {
    id: number | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    page: string | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: number | null
    role: $Enums.Role | null
    page: string | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    role: number
    page: number
    _all: number
  }


  export type RolePermissionAvgAggregateInputType = {
    id?: true
  }

  export type RolePermissionSumAggregateInputType = {
    id?: true
  }

  export type RolePermissionMinAggregateInputType = {
    id?: true
    role?: true
    page?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    role?: true
    page?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    role?: true
    page?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _avg?: RolePermissionAvgAggregateInputType
    _sum?: RolePermissionSumAggregateInputType
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: number
    role: $Enums.Role
    page: string
    _count: RolePermissionCountAggregateOutputType | null
    _avg: RolePermissionAvgAggregateOutputType | null
    _sum: RolePermissionSumAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    page?: boolean
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    page?: boolean
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    page?: boolean
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    id?: boolean
    role?: boolean
    page?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "page", ExtArgs["result"]["rolePermission"]>

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.Role
      page: string
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'Int'>
    readonly role: FieldRef<"RolePermission", 'Role'>
    readonly page: FieldRef<"RolePermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
  }


  /**
   * Model ResetPasswordToken
   */

  export type AggregateResetPasswordToken = {
    _count: ResetPasswordTokenCountAggregateOutputType | null
    _avg: ResetPasswordTokenAvgAggregateOutputType | null
    _sum: ResetPasswordTokenSumAggregateOutputType | null
    _min: ResetPasswordTokenMinAggregateOutputType | null
    _max: ResetPasswordTokenMaxAggregateOutputType | null
  }

  export type ResetPasswordTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    randomCode: number | null
  }

  export type ResetPasswordTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
    randomCode: number | null
  }

  export type ResetPasswordTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    randomCode: number | null
    token: string | null
    expiresAt: Date | null
  }

  export type ResetPasswordTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    randomCode: number | null
    token: string | null
    expiresAt: Date | null
  }

  export type ResetPasswordTokenCountAggregateOutputType = {
    id: number
    userId: number
    randomCode: number
    token: number
    expiresAt: number
    _all: number
  }


  export type ResetPasswordTokenAvgAggregateInputType = {
    id?: true
    userId?: true
    randomCode?: true
  }

  export type ResetPasswordTokenSumAggregateInputType = {
    id?: true
    userId?: true
    randomCode?: true
  }

  export type ResetPasswordTokenMinAggregateInputType = {
    id?: true
    userId?: true
    randomCode?: true
    token?: true
    expiresAt?: true
  }

  export type ResetPasswordTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    randomCode?: true
    token?: true
    expiresAt?: true
  }

  export type ResetPasswordTokenCountAggregateInputType = {
    id?: true
    userId?: true
    randomCode?: true
    token?: true
    expiresAt?: true
    _all?: true
  }

  export type ResetPasswordTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswordToken to aggregate.
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordTokens to fetch.
     */
    orderBy?: ResetPasswordTokenOrderByWithRelationInput | ResetPasswordTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetPasswordTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetPasswordTokens
    **/
    _count?: true | ResetPasswordTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResetPasswordTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResetPasswordTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetPasswordTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetPasswordTokenMaxAggregateInputType
  }

  export type GetResetPasswordTokenAggregateType<T extends ResetPasswordTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateResetPasswordToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetPasswordToken[P]>
      : GetScalarType<T[P], AggregateResetPasswordToken[P]>
  }




  export type ResetPasswordTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetPasswordTokenWhereInput
    orderBy?: ResetPasswordTokenOrderByWithAggregationInput | ResetPasswordTokenOrderByWithAggregationInput[]
    by: ResetPasswordTokenScalarFieldEnum[] | ResetPasswordTokenScalarFieldEnum
    having?: ResetPasswordTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetPasswordTokenCountAggregateInputType | true
    _avg?: ResetPasswordTokenAvgAggregateInputType
    _sum?: ResetPasswordTokenSumAggregateInputType
    _min?: ResetPasswordTokenMinAggregateInputType
    _max?: ResetPasswordTokenMaxAggregateInputType
  }

  export type ResetPasswordTokenGroupByOutputType = {
    id: number
    userId: number
    randomCode: number
    token: string
    expiresAt: Date
    _count: ResetPasswordTokenCountAggregateOutputType | null
    _avg: ResetPasswordTokenAvgAggregateOutputType | null
    _sum: ResetPasswordTokenSumAggregateOutputType | null
    _min: ResetPasswordTokenMinAggregateOutputType | null
    _max: ResetPasswordTokenMaxAggregateOutputType | null
  }

  type GetResetPasswordTokenGroupByPayload<T extends ResetPasswordTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetPasswordTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetPasswordTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetPasswordTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ResetPasswordTokenGroupByOutputType[P]>
        }
      >
    >


  export type ResetPasswordTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    randomCode?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordToken"]>

  export type ResetPasswordTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    randomCode?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordToken"]>

  export type ResetPasswordTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    randomCode?: boolean
    token?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetPasswordToken"]>

  export type ResetPasswordTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    randomCode?: boolean
    token?: boolean
    expiresAt?: boolean
  }

  export type ResetPasswordTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "randomCode" | "token" | "expiresAt", ExtArgs["result"]["resetPasswordToken"]>
  export type ResetPasswordTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResetPasswordTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResetPasswordTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResetPasswordTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetPasswordToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      randomCode: number
      token: string
      expiresAt: Date
    }, ExtArgs["result"]["resetPasswordToken"]>
    composites: {}
  }

  type ResetPasswordTokenGetPayload<S extends boolean | null | undefined | ResetPasswordTokenDefaultArgs> = $Result.GetResult<Prisma.$ResetPasswordTokenPayload, S>

  type ResetPasswordTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResetPasswordTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResetPasswordTokenCountAggregateInputType | true
    }

  export interface ResetPasswordTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetPasswordToken'], meta: { name: 'ResetPasswordToken' } }
    /**
     * Find zero or one ResetPasswordToken that matches the filter.
     * @param {ResetPasswordTokenFindUniqueArgs} args - Arguments to find a ResetPasswordToken
     * @example
     * // Get one ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetPasswordTokenFindUniqueArgs>(args: SelectSubset<T, ResetPasswordTokenFindUniqueArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResetPasswordToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResetPasswordTokenFindUniqueOrThrowArgs} args - Arguments to find a ResetPasswordToken
     * @example
     * // Get one ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetPasswordTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetPasswordTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetPasswordToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenFindFirstArgs} args - Arguments to find a ResetPasswordToken
     * @example
     * // Get one ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetPasswordTokenFindFirstArgs>(args?: SelectSubset<T, ResetPasswordTokenFindFirstArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetPasswordToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenFindFirstOrThrowArgs} args - Arguments to find a ResetPasswordToken
     * @example
     * // Get one ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetPasswordTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetPasswordTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResetPasswordTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetPasswordTokens
     * const resetPasswordTokens = await prisma.resetPasswordToken.findMany()
     * 
     * // Get first 10 ResetPasswordTokens
     * const resetPasswordTokens = await prisma.resetPasswordToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetPasswordTokenWithIdOnly = await prisma.resetPasswordToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetPasswordTokenFindManyArgs>(args?: SelectSubset<T, ResetPasswordTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResetPasswordToken.
     * @param {ResetPasswordTokenCreateArgs} args - Arguments to create a ResetPasswordToken.
     * @example
     * // Create one ResetPasswordToken
     * const ResetPasswordToken = await prisma.resetPasswordToken.create({
     *   data: {
     *     // ... data to create a ResetPasswordToken
     *   }
     * })
     * 
     */
    create<T extends ResetPasswordTokenCreateArgs>(args: SelectSubset<T, ResetPasswordTokenCreateArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResetPasswordTokens.
     * @param {ResetPasswordTokenCreateManyArgs} args - Arguments to create many ResetPasswordTokens.
     * @example
     * // Create many ResetPasswordTokens
     * const resetPasswordToken = await prisma.resetPasswordToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetPasswordTokenCreateManyArgs>(args?: SelectSubset<T, ResetPasswordTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetPasswordTokens and returns the data saved in the database.
     * @param {ResetPasswordTokenCreateManyAndReturnArgs} args - Arguments to create many ResetPasswordTokens.
     * @example
     * // Create many ResetPasswordTokens
     * const resetPasswordToken = await prisma.resetPasswordToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetPasswordTokens and only return the `id`
     * const resetPasswordTokenWithIdOnly = await prisma.resetPasswordToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetPasswordTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetPasswordTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResetPasswordToken.
     * @param {ResetPasswordTokenDeleteArgs} args - Arguments to delete one ResetPasswordToken.
     * @example
     * // Delete one ResetPasswordToken
     * const ResetPasswordToken = await prisma.resetPasswordToken.delete({
     *   where: {
     *     // ... filter to delete one ResetPasswordToken
     *   }
     * })
     * 
     */
    delete<T extends ResetPasswordTokenDeleteArgs>(args: SelectSubset<T, ResetPasswordTokenDeleteArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResetPasswordToken.
     * @param {ResetPasswordTokenUpdateArgs} args - Arguments to update one ResetPasswordToken.
     * @example
     * // Update one ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetPasswordTokenUpdateArgs>(args: SelectSubset<T, ResetPasswordTokenUpdateArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResetPasswordTokens.
     * @param {ResetPasswordTokenDeleteManyArgs} args - Arguments to filter ResetPasswordTokens to delete.
     * @example
     * // Delete a few ResetPasswordTokens
     * const { count } = await prisma.resetPasswordToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetPasswordTokenDeleteManyArgs>(args?: SelectSubset<T, ResetPasswordTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetPasswordTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetPasswordTokens
     * const resetPasswordToken = await prisma.resetPasswordToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetPasswordTokenUpdateManyArgs>(args: SelectSubset<T, ResetPasswordTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetPasswordTokens and returns the data updated in the database.
     * @param {ResetPasswordTokenUpdateManyAndReturnArgs} args - Arguments to update many ResetPasswordTokens.
     * @example
     * // Update many ResetPasswordTokens
     * const resetPasswordToken = await prisma.resetPasswordToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResetPasswordTokens and only return the `id`
     * const resetPasswordTokenWithIdOnly = await prisma.resetPasswordToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResetPasswordTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ResetPasswordTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResetPasswordToken.
     * @param {ResetPasswordTokenUpsertArgs} args - Arguments to update or create a ResetPasswordToken.
     * @example
     * // Update or create a ResetPasswordToken
     * const resetPasswordToken = await prisma.resetPasswordToken.upsert({
     *   create: {
     *     // ... data to create a ResetPasswordToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetPasswordToken we want to update
     *   }
     * })
     */
    upsert<T extends ResetPasswordTokenUpsertArgs>(args: SelectSubset<T, ResetPasswordTokenUpsertArgs<ExtArgs>>): Prisma__ResetPasswordTokenClient<$Result.GetResult<Prisma.$ResetPasswordTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResetPasswordTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenCountArgs} args - Arguments to filter ResetPasswordTokens to count.
     * @example
     * // Count the number of ResetPasswordTokens
     * const count = await prisma.resetPasswordToken.count({
     *   where: {
     *     // ... the filter for the ResetPasswordTokens we want to count
     *   }
     * })
    **/
    count<T extends ResetPasswordTokenCountArgs>(
      args?: Subset<T, ResetPasswordTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetPasswordTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetPasswordToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResetPasswordTokenAggregateArgs>(args: Subset<T, ResetPasswordTokenAggregateArgs>): Prisma.PrismaPromise<GetResetPasswordTokenAggregateType<T>>

    /**
     * Group by ResetPasswordToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetPasswordTokenGroupByArgs} args - Group by arguments.
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
      T extends ResetPasswordTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetPasswordTokenGroupByArgs['orderBy'] }
        : { orderBy?: ResetPasswordTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResetPasswordTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetPasswordTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetPasswordToken model
   */
  readonly fields: ResetPasswordTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetPasswordToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetPasswordTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ResetPasswordToken model
   */
  interface ResetPasswordTokenFieldRefs {
    readonly id: FieldRef<"ResetPasswordToken", 'Int'>
    readonly userId: FieldRef<"ResetPasswordToken", 'Int'>
    readonly randomCode: FieldRef<"ResetPasswordToken", 'Int'>
    readonly token: FieldRef<"ResetPasswordToken", 'String'>
    readonly expiresAt: FieldRef<"ResetPasswordToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResetPasswordToken findUnique
   */
  export type ResetPasswordTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordToken to fetch.
     */
    where: ResetPasswordTokenWhereUniqueInput
  }

  /**
   * ResetPasswordToken findUniqueOrThrow
   */
  export type ResetPasswordTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordToken to fetch.
     */
    where: ResetPasswordTokenWhereUniqueInput
  }

  /**
   * ResetPasswordToken findFirst
   */
  export type ResetPasswordTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordToken to fetch.
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordTokens to fetch.
     */
    orderBy?: ResetPasswordTokenOrderByWithRelationInput | ResetPasswordTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswordTokens.
     */
    cursor?: ResetPasswordTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswordTokens.
     */
    distinct?: ResetPasswordTokenScalarFieldEnum | ResetPasswordTokenScalarFieldEnum[]
  }

  /**
   * ResetPasswordToken findFirstOrThrow
   */
  export type ResetPasswordTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordToken to fetch.
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordTokens to fetch.
     */
    orderBy?: ResetPasswordTokenOrderByWithRelationInput | ResetPasswordTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetPasswordTokens.
     */
    cursor?: ResetPasswordTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetPasswordTokens.
     */
    distinct?: ResetPasswordTokenScalarFieldEnum | ResetPasswordTokenScalarFieldEnum[]
  }

  /**
   * ResetPasswordToken findMany
   */
  export type ResetPasswordTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetPasswordTokens to fetch.
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetPasswordTokens to fetch.
     */
    orderBy?: ResetPasswordTokenOrderByWithRelationInput | ResetPasswordTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetPasswordTokens.
     */
    cursor?: ResetPasswordTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetPasswordTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetPasswordTokens.
     */
    skip?: number
    distinct?: ResetPasswordTokenScalarFieldEnum | ResetPasswordTokenScalarFieldEnum[]
  }

  /**
   * ResetPasswordToken create
   */
  export type ResetPasswordTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ResetPasswordToken.
     */
    data: XOR<ResetPasswordTokenCreateInput, ResetPasswordTokenUncheckedCreateInput>
  }

  /**
   * ResetPasswordToken createMany
   */
  export type ResetPasswordTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetPasswordTokens.
     */
    data: ResetPasswordTokenCreateManyInput | ResetPasswordTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetPasswordToken createManyAndReturn
   */
  export type ResetPasswordTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ResetPasswordTokens.
     */
    data: ResetPasswordTokenCreateManyInput | ResetPasswordTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetPasswordToken update
   */
  export type ResetPasswordTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ResetPasswordToken.
     */
    data: XOR<ResetPasswordTokenUpdateInput, ResetPasswordTokenUncheckedUpdateInput>
    /**
     * Choose, which ResetPasswordToken to update.
     */
    where: ResetPasswordTokenWhereUniqueInput
  }

  /**
   * ResetPasswordToken updateMany
   */
  export type ResetPasswordTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetPasswordTokens.
     */
    data: XOR<ResetPasswordTokenUpdateManyMutationInput, ResetPasswordTokenUncheckedUpdateManyInput>
    /**
     * Filter which ResetPasswordTokens to update
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * Limit how many ResetPasswordTokens to update.
     */
    limit?: number
  }

  /**
   * ResetPasswordToken updateManyAndReturn
   */
  export type ResetPasswordTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * The data used to update ResetPasswordTokens.
     */
    data: XOR<ResetPasswordTokenUpdateManyMutationInput, ResetPasswordTokenUncheckedUpdateManyInput>
    /**
     * Filter which ResetPasswordTokens to update
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * Limit how many ResetPasswordTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetPasswordToken upsert
   */
  export type ResetPasswordTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ResetPasswordToken to update in case it exists.
     */
    where: ResetPasswordTokenWhereUniqueInput
    /**
     * In case the ResetPasswordToken found by the `where` argument doesn't exist, create a new ResetPasswordToken with this data.
     */
    create: XOR<ResetPasswordTokenCreateInput, ResetPasswordTokenUncheckedCreateInput>
    /**
     * In case the ResetPasswordToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetPasswordTokenUpdateInput, ResetPasswordTokenUncheckedUpdateInput>
  }

  /**
   * ResetPasswordToken delete
   */
  export type ResetPasswordTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
    /**
     * Filter which ResetPasswordToken to delete.
     */
    where: ResetPasswordTokenWhereUniqueInput
  }

  /**
   * ResetPasswordToken deleteMany
   */
  export type ResetPasswordTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetPasswordTokens to delete
     */
    where?: ResetPasswordTokenWhereInput
    /**
     * Limit how many ResetPasswordTokens to delete.
     */
    limit?: number
  }

  /**
   * ResetPasswordToken without action
   */
  export type ResetPasswordTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetPasswordToken
     */
    select?: ResetPasswordTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetPasswordToken
     */
    omit?: ResetPasswordTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetPasswordTokenInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    type: $Enums.CategoryType | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    type: $Enums.CategoryType | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    enName: number
    arName: number
    type: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    type?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    type?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    type?: boolean
    createdAt?: boolean
    InvoiceItem?: boolean | Category$InvoiceItemArgs<ExtArgs>
    cafeProducts?: boolean | Category$cafeProductsArgs<ExtArgs>
    restaurantProducts?: boolean | Category$restaurantProductsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    enName?: boolean
    arName?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enName" | "arName" | "type" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    InvoiceItem?: boolean | Category$InvoiceItemArgs<ExtArgs>
    cafeProducts?: boolean | Category$cafeProductsArgs<ExtArgs>
    restaurantProducts?: boolean | Category$restaurantProductsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      InvoiceItem: Prisma.$InvoiceItemPayload<ExtArgs>[]
      cafeProducts: Prisma.$CafeProductPayload<ExtArgs>[]
      restaurantProducts: Prisma.$RestaurantProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enName: string
      arName: string
      type: $Enums.CategoryType
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    InvoiceItem<T extends Category$InvoiceItemArgs<ExtArgs> = {}>(args?: Subset<T, Category$InvoiceItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cafeProducts<T extends Category$cafeProductsArgs<ExtArgs> = {}>(args?: Subset<T, Category$cafeProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restaurantProducts<T extends Category$restaurantProductsArgs<ExtArgs> = {}>(args?: Subset<T, Category$restaurantProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly enName: FieldRef<"Category", 'String'>
    readonly arName: FieldRef<"Category", 'String'>
    readonly type: FieldRef<"Category", 'CategoryType'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.InvoiceItem
   */
  export type Category$InvoiceItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Category.cafeProducts
   */
  export type Category$cafeProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    where?: CafeProductWhereInput
    orderBy?: CafeProductOrderByWithRelationInput | CafeProductOrderByWithRelationInput[]
    cursor?: CafeProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CafeProductScalarFieldEnum | CafeProductScalarFieldEnum[]
  }

  /**
   * Category.restaurantProducts
   */
  export type Category$restaurantProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    where?: RestaurantProductWhereInput
    orderBy?: RestaurantProductOrderByWithRelationInput | RestaurantProductOrderByWithRelationInput[]
    cursor?: RestaurantProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantProductScalarFieldEnum | RestaurantProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model CafeProduct
   */

  export type AggregateCafeProduct = {
    _count: CafeProductCountAggregateOutputType | null
    _avg: CafeProductAvgAggregateOutputType | null
    _sum: CafeProductSumAggregateOutputType | null
    _min: CafeProductMinAggregateOutputType | null
    _max: CafeProductMaxAggregateOutputType | null
  }

  export type CafeProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
    categoryId: number | null
  }

  export type CafeProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
    categoryId: number | null
  }

  export type CafeProductMinAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    image: string | null
    price: number | null
    points: number | null
    type: string | null
    categoryId: number | null
  }

  export type CafeProductMaxAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    image: string | null
    price: number | null
    points: number | null
    type: string | null
    categoryId: number | null
  }

  export type CafeProductCountAggregateOutputType = {
    id: number
    enName: number
    arName: number
    image: number
    price: number
    points: number
    type: number
    categoryId: number
    _all: number
  }


  export type CafeProductAvgAggregateInputType = {
    id?: true
    price?: true
    points?: true
    categoryId?: true
  }

  export type CafeProductSumAggregateInputType = {
    id?: true
    price?: true
    points?: true
    categoryId?: true
  }

  export type CafeProductMinAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
  }

  export type CafeProductMaxAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
  }

  export type CafeProductCountAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
    _all?: true
  }

  export type CafeProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeProduct to aggregate.
     */
    where?: CafeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeProducts to fetch.
     */
    orderBy?: CafeProductOrderByWithRelationInput | CafeProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CafeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CafeProducts
    **/
    _count?: true | CafeProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CafeProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CafeProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CafeProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CafeProductMaxAggregateInputType
  }

  export type GetCafeProductAggregateType<T extends CafeProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCafeProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCafeProduct[P]>
      : GetScalarType<T[P], AggregateCafeProduct[P]>
  }




  export type CafeProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CafeProductWhereInput
    orderBy?: CafeProductOrderByWithAggregationInput | CafeProductOrderByWithAggregationInput[]
    by: CafeProductScalarFieldEnum[] | CafeProductScalarFieldEnum
    having?: CafeProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CafeProductCountAggregateInputType | true
    _avg?: CafeProductAvgAggregateInputType
    _sum?: CafeProductSumAggregateInputType
    _min?: CafeProductMinAggregateInputType
    _max?: CafeProductMaxAggregateInputType
  }

  export type CafeProductGroupByOutputType = {
    id: number
    enName: string
    arName: string
    image: string | null
    price: number
    points: number
    type: string
    categoryId: number | null
    _count: CafeProductCountAggregateOutputType | null
    _avg: CafeProductAvgAggregateOutputType | null
    _sum: CafeProductSumAggregateOutputType | null
    _min: CafeProductMinAggregateOutputType | null
    _max: CafeProductMaxAggregateOutputType | null
  }

  type GetCafeProductGroupByPayload<T extends CafeProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CafeProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CafeProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CafeProductGroupByOutputType[P]>
            : GetScalarType<T[P], CafeProductGroupByOutputType[P]>
        }
      >
    >


  export type CafeProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
    myRewards?: boolean | CafeProduct$myRewardsArgs<ExtArgs>
    transactions?: boolean | CafeProduct$transactionsArgs<ExtArgs>
    invoice?: boolean | CafeProduct$invoiceArgs<ExtArgs>
    _count?: boolean | CafeProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cafeProduct"]>

  export type CafeProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["cafeProduct"]>

  export type CafeProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["cafeProduct"]>

  export type CafeProductSelectScalar = {
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
  }

  export type CafeProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enName" | "arName" | "image" | "price" | "points" | "type" | "categoryId", ExtArgs["result"]["cafeProduct"]>
  export type CafeProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
    myRewards?: boolean | CafeProduct$myRewardsArgs<ExtArgs>
    transactions?: boolean | CafeProduct$transactionsArgs<ExtArgs>
    invoice?: boolean | CafeProduct$invoiceArgs<ExtArgs>
    _count?: boolean | CafeProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CafeProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
  }
  export type CafeProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CafeProduct$categoryArgs<ExtArgs>
  }

  export type $CafeProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CafeProduct"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      myRewards: Prisma.$MyRewardPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      invoice: Prisma.$InvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enName: string
      arName: string
      image: string | null
      price: number
      points: number
      type: string
      categoryId: number | null
    }, ExtArgs["result"]["cafeProduct"]>
    composites: {}
  }

  type CafeProductGetPayload<S extends boolean | null | undefined | CafeProductDefaultArgs> = $Result.GetResult<Prisma.$CafeProductPayload, S>

  type CafeProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CafeProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CafeProductCountAggregateInputType | true
    }

  export interface CafeProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CafeProduct'], meta: { name: 'CafeProduct' } }
    /**
     * Find zero or one CafeProduct that matches the filter.
     * @param {CafeProductFindUniqueArgs} args - Arguments to find a CafeProduct
     * @example
     * // Get one CafeProduct
     * const cafeProduct = await prisma.cafeProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CafeProductFindUniqueArgs>(args: SelectSubset<T, CafeProductFindUniqueArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CafeProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CafeProductFindUniqueOrThrowArgs} args - Arguments to find a CafeProduct
     * @example
     * // Get one CafeProduct
     * const cafeProduct = await prisma.cafeProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CafeProductFindUniqueOrThrowArgs>(args: SelectSubset<T, CafeProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductFindFirstArgs} args - Arguments to find a CafeProduct
     * @example
     * // Get one CafeProduct
     * const cafeProduct = await prisma.cafeProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CafeProductFindFirstArgs>(args?: SelectSubset<T, CafeProductFindFirstArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CafeProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductFindFirstOrThrowArgs} args - Arguments to find a CafeProduct
     * @example
     * // Get one CafeProduct
     * const cafeProduct = await prisma.cafeProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CafeProductFindFirstOrThrowArgs>(args?: SelectSubset<T, CafeProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CafeProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CafeProducts
     * const cafeProducts = await prisma.cafeProduct.findMany()
     * 
     * // Get first 10 CafeProducts
     * const cafeProducts = await prisma.cafeProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cafeProductWithIdOnly = await prisma.cafeProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CafeProductFindManyArgs>(args?: SelectSubset<T, CafeProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CafeProduct.
     * @param {CafeProductCreateArgs} args - Arguments to create a CafeProduct.
     * @example
     * // Create one CafeProduct
     * const CafeProduct = await prisma.cafeProduct.create({
     *   data: {
     *     // ... data to create a CafeProduct
     *   }
     * })
     * 
     */
    create<T extends CafeProductCreateArgs>(args: SelectSubset<T, CafeProductCreateArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CafeProducts.
     * @param {CafeProductCreateManyArgs} args - Arguments to create many CafeProducts.
     * @example
     * // Create many CafeProducts
     * const cafeProduct = await prisma.cafeProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CafeProductCreateManyArgs>(args?: SelectSubset<T, CafeProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CafeProducts and returns the data saved in the database.
     * @param {CafeProductCreateManyAndReturnArgs} args - Arguments to create many CafeProducts.
     * @example
     * // Create many CafeProducts
     * const cafeProduct = await prisma.cafeProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CafeProducts and only return the `id`
     * const cafeProductWithIdOnly = await prisma.cafeProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CafeProductCreateManyAndReturnArgs>(args?: SelectSubset<T, CafeProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CafeProduct.
     * @param {CafeProductDeleteArgs} args - Arguments to delete one CafeProduct.
     * @example
     * // Delete one CafeProduct
     * const CafeProduct = await prisma.cafeProduct.delete({
     *   where: {
     *     // ... filter to delete one CafeProduct
     *   }
     * })
     * 
     */
    delete<T extends CafeProductDeleteArgs>(args: SelectSubset<T, CafeProductDeleteArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CafeProduct.
     * @param {CafeProductUpdateArgs} args - Arguments to update one CafeProduct.
     * @example
     * // Update one CafeProduct
     * const cafeProduct = await prisma.cafeProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CafeProductUpdateArgs>(args: SelectSubset<T, CafeProductUpdateArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CafeProducts.
     * @param {CafeProductDeleteManyArgs} args - Arguments to filter CafeProducts to delete.
     * @example
     * // Delete a few CafeProducts
     * const { count } = await prisma.cafeProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CafeProductDeleteManyArgs>(args?: SelectSubset<T, CafeProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CafeProducts
     * const cafeProduct = await prisma.cafeProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CafeProductUpdateManyArgs>(args: SelectSubset<T, CafeProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CafeProducts and returns the data updated in the database.
     * @param {CafeProductUpdateManyAndReturnArgs} args - Arguments to update many CafeProducts.
     * @example
     * // Update many CafeProducts
     * const cafeProduct = await prisma.cafeProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CafeProducts and only return the `id`
     * const cafeProductWithIdOnly = await prisma.cafeProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends CafeProductUpdateManyAndReturnArgs>(args: SelectSubset<T, CafeProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CafeProduct.
     * @param {CafeProductUpsertArgs} args - Arguments to update or create a CafeProduct.
     * @example
     * // Update or create a CafeProduct
     * const cafeProduct = await prisma.cafeProduct.upsert({
     *   create: {
     *     // ... data to create a CafeProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CafeProduct we want to update
     *   }
     * })
     */
    upsert<T extends CafeProductUpsertArgs>(args: SelectSubset<T, CafeProductUpsertArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CafeProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductCountArgs} args - Arguments to filter CafeProducts to count.
     * @example
     * // Count the number of CafeProducts
     * const count = await prisma.cafeProduct.count({
     *   where: {
     *     // ... the filter for the CafeProducts we want to count
     *   }
     * })
    **/
    count<T extends CafeProductCountArgs>(
      args?: Subset<T, CafeProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CafeProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CafeProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CafeProductAggregateArgs>(args: Subset<T, CafeProductAggregateArgs>): Prisma.PrismaPromise<GetCafeProductAggregateType<T>>

    /**
     * Group by CafeProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CafeProductGroupByArgs} args - Group by arguments.
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
      T extends CafeProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CafeProductGroupByArgs['orderBy'] }
        : { orderBy?: CafeProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CafeProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCafeProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CafeProduct model
   */
  readonly fields: CafeProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CafeProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CafeProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CafeProduct$categoryArgs<ExtArgs> = {}>(args?: Subset<T, CafeProduct$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    myRewards<T extends CafeProduct$myRewardsArgs<ExtArgs> = {}>(args?: Subset<T, CafeProduct$myRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends CafeProduct$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, CafeProduct$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends CafeProduct$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, CafeProduct$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CafeProduct model
   */
  interface CafeProductFieldRefs {
    readonly id: FieldRef<"CafeProduct", 'Int'>
    readonly enName: FieldRef<"CafeProduct", 'String'>
    readonly arName: FieldRef<"CafeProduct", 'String'>
    readonly image: FieldRef<"CafeProduct", 'String'>
    readonly price: FieldRef<"CafeProduct", 'Float'>
    readonly points: FieldRef<"CafeProduct", 'Int'>
    readonly type: FieldRef<"CafeProduct", 'String'>
    readonly categoryId: FieldRef<"CafeProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CafeProduct findUnique
   */
  export type CafeProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter, which CafeProduct to fetch.
     */
    where: CafeProductWhereUniqueInput
  }

  /**
   * CafeProduct findUniqueOrThrow
   */
  export type CafeProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter, which CafeProduct to fetch.
     */
    where: CafeProductWhereUniqueInput
  }

  /**
   * CafeProduct findFirst
   */
  export type CafeProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter, which CafeProduct to fetch.
     */
    where?: CafeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeProducts to fetch.
     */
    orderBy?: CafeProductOrderByWithRelationInput | CafeProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeProducts.
     */
    cursor?: CafeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeProducts.
     */
    distinct?: CafeProductScalarFieldEnum | CafeProductScalarFieldEnum[]
  }

  /**
   * CafeProduct findFirstOrThrow
   */
  export type CafeProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter, which CafeProduct to fetch.
     */
    where?: CafeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeProducts to fetch.
     */
    orderBy?: CafeProductOrderByWithRelationInput | CafeProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CafeProducts.
     */
    cursor?: CafeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CafeProducts.
     */
    distinct?: CafeProductScalarFieldEnum | CafeProductScalarFieldEnum[]
  }

  /**
   * CafeProduct findMany
   */
  export type CafeProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter, which CafeProducts to fetch.
     */
    where?: CafeProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CafeProducts to fetch.
     */
    orderBy?: CafeProductOrderByWithRelationInput | CafeProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CafeProducts.
     */
    cursor?: CafeProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CafeProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CafeProducts.
     */
    skip?: number
    distinct?: CafeProductScalarFieldEnum | CafeProductScalarFieldEnum[]
  }

  /**
   * CafeProduct create
   */
  export type CafeProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CafeProduct.
     */
    data: XOR<CafeProductCreateInput, CafeProductUncheckedCreateInput>
  }

  /**
   * CafeProduct createMany
   */
  export type CafeProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CafeProducts.
     */
    data: CafeProductCreateManyInput | CafeProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CafeProduct createManyAndReturn
   */
  export type CafeProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * The data used to create many CafeProducts.
     */
    data: CafeProductCreateManyInput | CafeProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CafeProduct update
   */
  export type CafeProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CafeProduct.
     */
    data: XOR<CafeProductUpdateInput, CafeProductUncheckedUpdateInput>
    /**
     * Choose, which CafeProduct to update.
     */
    where: CafeProductWhereUniqueInput
  }

  /**
   * CafeProduct updateMany
   */
  export type CafeProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CafeProducts.
     */
    data: XOR<CafeProductUpdateManyMutationInput, CafeProductUncheckedUpdateManyInput>
    /**
     * Filter which CafeProducts to update
     */
    where?: CafeProductWhereInput
    /**
     * Limit how many CafeProducts to update.
     */
    limit?: number
  }

  /**
   * CafeProduct updateManyAndReturn
   */
  export type CafeProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * The data used to update CafeProducts.
     */
    data: XOR<CafeProductUpdateManyMutationInput, CafeProductUncheckedUpdateManyInput>
    /**
     * Filter which CafeProducts to update
     */
    where?: CafeProductWhereInput
    /**
     * Limit how many CafeProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CafeProduct upsert
   */
  export type CafeProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CafeProduct to update in case it exists.
     */
    where: CafeProductWhereUniqueInput
    /**
     * In case the CafeProduct found by the `where` argument doesn't exist, create a new CafeProduct with this data.
     */
    create: XOR<CafeProductCreateInput, CafeProductUncheckedCreateInput>
    /**
     * In case the CafeProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CafeProductUpdateInput, CafeProductUncheckedUpdateInput>
  }

  /**
   * CafeProduct delete
   */
  export type CafeProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    /**
     * Filter which CafeProduct to delete.
     */
    where: CafeProductWhereUniqueInput
  }

  /**
   * CafeProduct deleteMany
   */
  export type CafeProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CafeProducts to delete
     */
    where?: CafeProductWhereInput
    /**
     * Limit how many CafeProducts to delete.
     */
    limit?: number
  }

  /**
   * CafeProduct.category
   */
  export type CafeProduct$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * CafeProduct.myRewards
   */
  export type CafeProduct$myRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    where?: MyRewardWhereInput
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    cursor?: MyRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * CafeProduct.transactions
   */
  export type CafeProduct$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * CafeProduct.invoice
   */
  export type CafeProduct$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * CafeProduct without action
   */
  export type CafeProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantProduct
   */

  export type AggregateRestaurantProduct = {
    _count: RestaurantProductCountAggregateOutputType | null
    _avg: RestaurantProductAvgAggregateOutputType | null
    _sum: RestaurantProductSumAggregateOutputType | null
    _min: RestaurantProductMinAggregateOutputType | null
    _max: RestaurantProductMaxAggregateOutputType | null
  }

  export type RestaurantProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
    categoryId: number | null
  }

  export type RestaurantProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
    categoryId: number | null
  }

  export type RestaurantProductMinAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    image: string | null
    price: number | null
    points: number | null
    type: string | null
    categoryId: number | null
  }

  export type RestaurantProductMaxAggregateOutputType = {
    id: number | null
    enName: string | null
    arName: string | null
    image: string | null
    price: number | null
    points: number | null
    type: string | null
    categoryId: number | null
  }

  export type RestaurantProductCountAggregateOutputType = {
    id: number
    enName: number
    arName: number
    image: number
    price: number
    points: number
    type: number
    categoryId: number
    _all: number
  }


  export type RestaurantProductAvgAggregateInputType = {
    id?: true
    price?: true
    points?: true
    categoryId?: true
  }

  export type RestaurantProductSumAggregateInputType = {
    id?: true
    price?: true
    points?: true
    categoryId?: true
  }

  export type RestaurantProductMinAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
  }

  export type RestaurantProductMaxAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
  }

  export type RestaurantProductCountAggregateInputType = {
    id?: true
    enName?: true
    arName?: true
    image?: true
    price?: true
    points?: true
    type?: true
    categoryId?: true
    _all?: true
  }

  export type RestaurantProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantProduct to aggregate.
     */
    where?: RestaurantProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantProducts to fetch.
     */
    orderBy?: RestaurantProductOrderByWithRelationInput | RestaurantProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantProducts
    **/
    _count?: true | RestaurantProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantProductMaxAggregateInputType
  }

  export type GetRestaurantProductAggregateType<T extends RestaurantProductAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantProduct[P]>
      : GetScalarType<T[P], AggregateRestaurantProduct[P]>
  }




  export type RestaurantProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantProductWhereInput
    orderBy?: RestaurantProductOrderByWithAggregationInput | RestaurantProductOrderByWithAggregationInput[]
    by: RestaurantProductScalarFieldEnum[] | RestaurantProductScalarFieldEnum
    having?: RestaurantProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantProductCountAggregateInputType | true
    _avg?: RestaurantProductAvgAggregateInputType
    _sum?: RestaurantProductSumAggregateInputType
    _min?: RestaurantProductMinAggregateInputType
    _max?: RestaurantProductMaxAggregateInputType
  }

  export type RestaurantProductGroupByOutputType = {
    id: number
    enName: string
    arName: string
    image: string | null
    price: number
    points: number
    type: string
    categoryId: number | null
    _count: RestaurantProductCountAggregateOutputType | null
    _avg: RestaurantProductAvgAggregateOutputType | null
    _sum: RestaurantProductSumAggregateOutputType | null
    _min: RestaurantProductMinAggregateOutputType | null
    _max: RestaurantProductMaxAggregateOutputType | null
  }

  type GetRestaurantProductGroupByPayload<T extends RestaurantProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantProductGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantProductGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
    myRewards?: boolean | RestaurantProduct$myRewardsArgs<ExtArgs>
    transactions?: boolean | RestaurantProduct$transactionsArgs<ExtArgs>
    invoice?: boolean | RestaurantProduct$invoiceArgs<ExtArgs>
    _count?: boolean | RestaurantProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantProduct"]>

  export type RestaurantProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantProduct"]>

  export type RestaurantProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantProduct"]>

  export type RestaurantProductSelectScalar = {
    id?: boolean
    enName?: boolean
    arName?: boolean
    image?: boolean
    price?: boolean
    points?: boolean
    type?: boolean
    categoryId?: boolean
  }

  export type RestaurantProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enName" | "arName" | "image" | "price" | "points" | "type" | "categoryId", ExtArgs["result"]["restaurantProduct"]>
  export type RestaurantProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
    myRewards?: boolean | RestaurantProduct$myRewardsArgs<ExtArgs>
    transactions?: boolean | RestaurantProduct$transactionsArgs<ExtArgs>
    invoice?: boolean | RestaurantProduct$invoiceArgs<ExtArgs>
    _count?: boolean | RestaurantProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
  }
  export type RestaurantProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | RestaurantProduct$categoryArgs<ExtArgs>
  }

  export type $RestaurantProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantProduct"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      myRewards: Prisma.$MyRewardPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      invoice: Prisma.$InvoiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enName: string
      arName: string
      image: string | null
      price: number
      points: number
      type: string
      categoryId: number | null
    }, ExtArgs["result"]["restaurantProduct"]>
    composites: {}
  }

  type RestaurantProductGetPayload<S extends boolean | null | undefined | RestaurantProductDefaultArgs> = $Result.GetResult<Prisma.$RestaurantProductPayload, S>

  type RestaurantProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantProductCountAggregateInputType | true
    }

  export interface RestaurantProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantProduct'], meta: { name: 'RestaurantProduct' } }
    /**
     * Find zero or one RestaurantProduct that matches the filter.
     * @param {RestaurantProductFindUniqueArgs} args - Arguments to find a RestaurantProduct
     * @example
     * // Get one RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantProductFindUniqueArgs>(args: SelectSubset<T, RestaurantProductFindUniqueArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestaurantProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantProductFindUniqueOrThrowArgs} args - Arguments to find a RestaurantProduct
     * @example
     * // Get one RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantProductFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductFindFirstArgs} args - Arguments to find a RestaurantProduct
     * @example
     * // Get one RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantProductFindFirstArgs>(args?: SelectSubset<T, RestaurantProductFindFirstArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductFindFirstOrThrowArgs} args - Arguments to find a RestaurantProduct
     * @example
     * // Get one RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantProductFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestaurantProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantProducts
     * const restaurantProducts = await prisma.restaurantProduct.findMany()
     * 
     * // Get first 10 RestaurantProducts
     * const restaurantProducts = await prisma.restaurantProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantProductWithIdOnly = await prisma.restaurantProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantProductFindManyArgs>(args?: SelectSubset<T, RestaurantProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestaurantProduct.
     * @param {RestaurantProductCreateArgs} args - Arguments to create a RestaurantProduct.
     * @example
     * // Create one RestaurantProduct
     * const RestaurantProduct = await prisma.restaurantProduct.create({
     *   data: {
     *     // ... data to create a RestaurantProduct
     *   }
     * })
     * 
     */
    create<T extends RestaurantProductCreateArgs>(args: SelectSubset<T, RestaurantProductCreateArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestaurantProducts.
     * @param {RestaurantProductCreateManyArgs} args - Arguments to create many RestaurantProducts.
     * @example
     * // Create many RestaurantProducts
     * const restaurantProduct = await prisma.restaurantProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantProductCreateManyArgs>(args?: SelectSubset<T, RestaurantProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestaurantProducts and returns the data saved in the database.
     * @param {RestaurantProductCreateManyAndReturnArgs} args - Arguments to create many RestaurantProducts.
     * @example
     * // Create many RestaurantProducts
     * const restaurantProduct = await prisma.restaurantProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestaurantProducts and only return the `id`
     * const restaurantProductWithIdOnly = await prisma.restaurantProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantProductCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestaurantProduct.
     * @param {RestaurantProductDeleteArgs} args - Arguments to delete one RestaurantProduct.
     * @example
     * // Delete one RestaurantProduct
     * const RestaurantProduct = await prisma.restaurantProduct.delete({
     *   where: {
     *     // ... filter to delete one RestaurantProduct
     *   }
     * })
     * 
     */
    delete<T extends RestaurantProductDeleteArgs>(args: SelectSubset<T, RestaurantProductDeleteArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestaurantProduct.
     * @param {RestaurantProductUpdateArgs} args - Arguments to update one RestaurantProduct.
     * @example
     * // Update one RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantProductUpdateArgs>(args: SelectSubset<T, RestaurantProductUpdateArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestaurantProducts.
     * @param {RestaurantProductDeleteManyArgs} args - Arguments to filter RestaurantProducts to delete.
     * @example
     * // Delete a few RestaurantProducts
     * const { count } = await prisma.restaurantProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantProductDeleteManyArgs>(args?: SelectSubset<T, RestaurantProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantProducts
     * const restaurantProduct = await prisma.restaurantProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantProductUpdateManyArgs>(args: SelectSubset<T, RestaurantProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantProducts and returns the data updated in the database.
     * @param {RestaurantProductUpdateManyAndReturnArgs} args - Arguments to update many RestaurantProducts.
     * @example
     * // Update many RestaurantProducts
     * const restaurantProduct = await prisma.restaurantProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestaurantProducts and only return the `id`
     * const restaurantProductWithIdOnly = await prisma.restaurantProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends RestaurantProductUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestaurantProduct.
     * @param {RestaurantProductUpsertArgs} args - Arguments to update or create a RestaurantProduct.
     * @example
     * // Update or create a RestaurantProduct
     * const restaurantProduct = await prisma.restaurantProduct.upsert({
     *   create: {
     *     // ... data to create a RestaurantProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantProduct we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantProductUpsertArgs>(args: SelectSubset<T, RestaurantProductUpsertArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestaurantProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductCountArgs} args - Arguments to filter RestaurantProducts to count.
     * @example
     * // Count the number of RestaurantProducts
     * const count = await prisma.restaurantProduct.count({
     *   where: {
     *     // ... the filter for the RestaurantProducts we want to count
     *   }
     * })
    **/
    count<T extends RestaurantProductCountArgs>(
      args?: Subset<T, RestaurantProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantProductAggregateArgs>(args: Subset<T, RestaurantProductAggregateArgs>): Prisma.PrismaPromise<GetRestaurantProductAggregateType<T>>

    /**
     * Group by RestaurantProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantProductGroupByArgs} args - Group by arguments.
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
      T extends RestaurantProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantProductGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantProduct model
   */
  readonly fields: RestaurantProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends RestaurantProduct$categoryArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantProduct$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    myRewards<T extends RestaurantProduct$myRewardsArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantProduct$myRewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends RestaurantProduct$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantProduct$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoice<T extends RestaurantProduct$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantProduct$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RestaurantProduct model
   */
  interface RestaurantProductFieldRefs {
    readonly id: FieldRef<"RestaurantProduct", 'Int'>
    readonly enName: FieldRef<"RestaurantProduct", 'String'>
    readonly arName: FieldRef<"RestaurantProduct", 'String'>
    readonly image: FieldRef<"RestaurantProduct", 'String'>
    readonly price: FieldRef<"RestaurantProduct", 'Float'>
    readonly points: FieldRef<"RestaurantProduct", 'Int'>
    readonly type: FieldRef<"RestaurantProduct", 'String'>
    readonly categoryId: FieldRef<"RestaurantProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantProduct findUnique
   */
  export type RestaurantProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantProduct to fetch.
     */
    where: RestaurantProductWhereUniqueInput
  }

  /**
   * RestaurantProduct findUniqueOrThrow
   */
  export type RestaurantProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantProduct to fetch.
     */
    where: RestaurantProductWhereUniqueInput
  }

  /**
   * RestaurantProduct findFirst
   */
  export type RestaurantProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantProduct to fetch.
     */
    where?: RestaurantProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantProducts to fetch.
     */
    orderBy?: RestaurantProductOrderByWithRelationInput | RestaurantProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantProducts.
     */
    cursor?: RestaurantProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantProducts.
     */
    distinct?: RestaurantProductScalarFieldEnum | RestaurantProductScalarFieldEnum[]
  }

  /**
   * RestaurantProduct findFirstOrThrow
   */
  export type RestaurantProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantProduct to fetch.
     */
    where?: RestaurantProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantProducts to fetch.
     */
    orderBy?: RestaurantProductOrderByWithRelationInput | RestaurantProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantProducts.
     */
    cursor?: RestaurantProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantProducts.
     */
    distinct?: RestaurantProductScalarFieldEnum | RestaurantProductScalarFieldEnum[]
  }

  /**
   * RestaurantProduct findMany
   */
  export type RestaurantProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantProducts to fetch.
     */
    where?: RestaurantProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantProducts to fetch.
     */
    orderBy?: RestaurantProductOrderByWithRelationInput | RestaurantProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantProducts.
     */
    cursor?: RestaurantProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantProducts.
     */
    skip?: number
    distinct?: RestaurantProductScalarFieldEnum | RestaurantProductScalarFieldEnum[]
  }

  /**
   * RestaurantProduct create
   */
  export type RestaurantProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantProduct.
     */
    data: XOR<RestaurantProductCreateInput, RestaurantProductUncheckedCreateInput>
  }

  /**
   * RestaurantProduct createMany
   */
  export type RestaurantProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantProducts.
     */
    data: RestaurantProductCreateManyInput | RestaurantProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantProduct createManyAndReturn
   */
  export type RestaurantProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * The data used to create many RestaurantProducts.
     */
    data: RestaurantProductCreateManyInput | RestaurantProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantProduct update
   */
  export type RestaurantProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantProduct.
     */
    data: XOR<RestaurantProductUpdateInput, RestaurantProductUncheckedUpdateInput>
    /**
     * Choose, which RestaurantProduct to update.
     */
    where: RestaurantProductWhereUniqueInput
  }

  /**
   * RestaurantProduct updateMany
   */
  export type RestaurantProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantProducts.
     */
    data: XOR<RestaurantProductUpdateManyMutationInput, RestaurantProductUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantProducts to update
     */
    where?: RestaurantProductWhereInput
    /**
     * Limit how many RestaurantProducts to update.
     */
    limit?: number
  }

  /**
   * RestaurantProduct updateManyAndReturn
   */
  export type RestaurantProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * The data used to update RestaurantProducts.
     */
    data: XOR<RestaurantProductUpdateManyMutationInput, RestaurantProductUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantProducts to update
     */
    where?: RestaurantProductWhereInput
    /**
     * Limit how many RestaurantProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantProduct upsert
   */
  export type RestaurantProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantProduct to update in case it exists.
     */
    where: RestaurantProductWhereUniqueInput
    /**
     * In case the RestaurantProduct found by the `where` argument doesn't exist, create a new RestaurantProduct with this data.
     */
    create: XOR<RestaurantProductCreateInput, RestaurantProductUncheckedCreateInput>
    /**
     * In case the RestaurantProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantProductUpdateInput, RestaurantProductUncheckedUpdateInput>
  }

  /**
   * RestaurantProduct delete
   */
  export type RestaurantProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    /**
     * Filter which RestaurantProduct to delete.
     */
    where: RestaurantProductWhereUniqueInput
  }

  /**
   * RestaurantProduct deleteMany
   */
  export type RestaurantProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantProducts to delete
     */
    where?: RestaurantProductWhereInput
    /**
     * Limit how many RestaurantProducts to delete.
     */
    limit?: number
  }

  /**
   * RestaurantProduct.category
   */
  export type RestaurantProduct$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * RestaurantProduct.myRewards
   */
  export type RestaurantProduct$myRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    where?: MyRewardWhereInput
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    cursor?: MyRewardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * RestaurantProduct.transactions
   */
  export type RestaurantProduct$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * RestaurantProduct.invoice
   */
  export type RestaurantProduct$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * RestaurantProduct without action
   */
  export type RestaurantProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
  }


  /**
   * Model Reward
   */

  export type AggregateReward = {
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  export type RewardAvgAggregateOutputType = {
    id: number | null
    costPoints: number | null
  }

  export type RewardSumAggregateOutputType = {
    id: number | null
    costPoints: number | null
  }

  export type RewardMinAggregateOutputType = {
    id: number | null
    name: string | null
    costPoints: number | null
    description: string | null
  }

  export type RewardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    costPoints: number | null
    description: string | null
  }

  export type RewardCountAggregateOutputType = {
    id: number
    name: number
    costPoints: number
    description: number
    _all: number
  }


  export type RewardAvgAggregateInputType = {
    id?: true
    costPoints?: true
  }

  export type RewardSumAggregateInputType = {
    id?: true
    costPoints?: true
  }

  export type RewardMinAggregateInputType = {
    id?: true
    name?: true
    costPoints?: true
    description?: true
  }

  export type RewardMaxAggregateInputType = {
    id?: true
    name?: true
    costPoints?: true
    description?: true
  }

  export type RewardCountAggregateInputType = {
    id?: true
    name?: true
    costPoints?: true
    description?: true
    _all?: true
  }

  export type RewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reward to aggregate.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardMaxAggregateInputType
  }

  export type GetRewardAggregateType<T extends RewardAggregateArgs> = {
        [P in keyof T & keyof AggregateReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReward[P]>
      : GetScalarType<T[P], AggregateReward[P]>
  }




  export type RewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardWhereInput
    orderBy?: RewardOrderByWithAggregationInput | RewardOrderByWithAggregationInput[]
    by: RewardScalarFieldEnum[] | RewardScalarFieldEnum
    having?: RewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardCountAggregateInputType | true
    _avg?: RewardAvgAggregateInputType
    _sum?: RewardSumAggregateInputType
    _min?: RewardMinAggregateInputType
    _max?: RewardMaxAggregateInputType
  }

  export type RewardGroupByOutputType = {
    id: number
    name: string
    costPoints: number
    description: string | null
    _count: RewardCountAggregateOutputType | null
    _avg: RewardAvgAggregateOutputType | null
    _sum: RewardSumAggregateOutputType | null
    _min: RewardMinAggregateOutputType | null
    _max: RewardMaxAggregateOutputType | null
  }

  type GetRewardGroupByPayload<T extends RewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardGroupByOutputType[P]>
            : GetScalarType<T[P], RewardGroupByOutputType[P]>
        }
      >
    >


  export type RewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    costPoints?: boolean
    description?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    costPoints?: boolean
    description?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    costPoints?: boolean
    description?: boolean
  }, ExtArgs["result"]["reward"]>

  export type RewardSelectScalar = {
    id?: boolean
    name?: boolean
    costPoints?: boolean
    description?: boolean
  }

  export type RewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "costPoints" | "description", ExtArgs["result"]["reward"]>

  export type $RewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reward"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      costPoints: number
      description: string | null
    }, ExtArgs["result"]["reward"]>
    composites: {}
  }

  type RewardGetPayload<S extends boolean | null | undefined | RewardDefaultArgs> = $Result.GetResult<Prisma.$RewardPayload, S>

  type RewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardCountAggregateInputType | true
    }

  export interface RewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reward'], meta: { name: 'Reward' } }
    /**
     * Find zero or one Reward that matches the filter.
     * @param {RewardFindUniqueArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardFindUniqueArgs>(args: SelectSubset<T, RewardFindUniqueArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardFindUniqueOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardFindFirstArgs>(args?: SelectSubset<T, RewardFindFirstArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindFirstOrThrowArgs} args - Arguments to find a Reward
     * @example
     * // Get one Reward
     * const reward = await prisma.reward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.reward.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.reward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardWithIdOnly = await prisma.reward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardFindManyArgs>(args?: SelectSubset<T, RewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reward.
     * @param {RewardCreateArgs} args - Arguments to create a Reward.
     * @example
     * // Create one Reward
     * const Reward = await prisma.reward.create({
     *   data: {
     *     // ... data to create a Reward
     *   }
     * })
     * 
     */
    create<T extends RewardCreateArgs>(args: SelectSubset<T, RewardCreateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardCreateManyArgs>(args?: SelectSubset<T, RewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rewards and returns the data saved in the database.
     * @param {RewardCreateManyAndReturnArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const reward = await prisma.reward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RewardCreateManyAndReturnArgs>(args?: SelectSubset<T, RewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reward.
     * @param {RewardDeleteArgs} args - Arguments to delete one Reward.
     * @example
     * // Delete one Reward
     * const Reward = await prisma.reward.delete({
     *   where: {
     *     // ... filter to delete one Reward
     *   }
     * })
     * 
     */
    delete<T extends RewardDeleteArgs>(args: SelectSubset<T, RewardDeleteArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reward.
     * @param {RewardUpdateArgs} args - Arguments to update one Reward.
     * @example
     * // Update one Reward
     * const reward = await prisma.reward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardUpdateArgs>(args: SelectSubset<T, RewardUpdateArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.reward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardDeleteManyArgs>(args?: SelectSubset<T, RewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardUpdateManyArgs>(args: SelectSubset<T, RewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards and returns the data updated in the database.
     * @param {RewardUpdateManyAndReturnArgs} args - Arguments to update many Rewards.
     * @example
     * // Update many Rewards
     * const reward = await prisma.reward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rewards and only return the `id`
     * const rewardWithIdOnly = await prisma.reward.updateManyAndReturn({
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
    updateManyAndReturn<T extends RewardUpdateManyAndReturnArgs>(args: SelectSubset<T, RewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reward.
     * @param {RewardUpsertArgs} args - Arguments to update or create a Reward.
     * @example
     * // Update or create a Reward
     * const reward = await prisma.reward.upsert({
     *   create: {
     *     // ... data to create a Reward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reward we want to update
     *   }
     * })
     */
    upsert<T extends RewardUpsertArgs>(args: SelectSubset<T, RewardUpsertArgs<ExtArgs>>): Prisma__RewardClient<$Result.GetResult<Prisma.$RewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.reward.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardCountArgs>(
      args?: Subset<T, RewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardAggregateArgs>(args: Subset<T, RewardAggregateArgs>): Prisma.PrismaPromise<GetRewardAggregateType<T>>

    /**
     * Group by Reward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardGroupByArgs} args - Group by arguments.
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
      T extends RewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardGroupByArgs['orderBy'] }
        : { orderBy?: RewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reward model
   */
  readonly fields: RewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Reward model
   */
  interface RewardFieldRefs {
    readonly id: FieldRef<"Reward", 'Int'>
    readonly name: FieldRef<"Reward", 'String'>
    readonly costPoints: FieldRef<"Reward", 'Int'>
    readonly description: FieldRef<"Reward", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reward findUnique
   */
  export type RewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findUniqueOrThrow
   */
  export type RewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward findFirst
   */
  export type RewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findFirstOrThrow
   */
  export type RewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter, which Reward to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward findMany
   */
  export type RewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardOrderByWithRelationInput | RewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    distinct?: RewardScalarFieldEnum | RewardScalarFieldEnum[]
  }

  /**
   * Reward create
   */
  export type RewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data needed to create a Reward.
     */
    data: XOR<RewardCreateInput, RewardUncheckedCreateInput>
  }

  /**
   * Reward createMany
   */
  export type RewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward createManyAndReturn
   */
  export type RewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to create many Rewards.
     */
    data: RewardCreateManyInput | RewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reward update
   */
  export type RewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data needed to update a Reward.
     */
    data: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
    /**
     * Choose, which Reward to update.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward updateMany
   */
  export type RewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward updateManyAndReturn
   */
  export type RewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardUpdateManyMutationInput, RewardUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Reward upsert
   */
  export type RewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * The filter to search for the Reward to update in case it exists.
     */
    where: RewardWhereUniqueInput
    /**
     * In case the Reward found by the `where` argument doesn't exist, create a new Reward with this data.
     */
    create: XOR<RewardCreateInput, RewardUncheckedCreateInput>
    /**
     * In case the Reward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardUpdateInput, RewardUncheckedUpdateInput>
  }

  /**
   * Reward delete
   */
  export type RewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
    /**
     * Filter which Reward to delete.
     */
    where: RewardWhereUniqueInput
  }

  /**
   * Reward deleteMany
   */
  export type RewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Reward without action
   */
  export type RewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reward
     */
    select?: RewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reward
     */
    omit?: RewardOmit<ExtArgs> | null
  }


  /**
   * Model MyReward
   */

  export type AggregateMyReward = {
    _count: MyRewardCountAggregateOutputType | null
    _avg: MyRewardAvgAggregateOutputType | null
    _sum: MyRewardSumAggregateOutputType | null
    _min: MyRewardMinAggregateOutputType | null
    _max: MyRewardMaxAggregateOutputType | null
  }

  export type MyRewardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    points: number | null
  }

  export type MyRewardSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    points: number | null
  }

  export type MyRewardMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    points: number | null
    type: string | null
    status: $Enums.RewardStatus | null
    date: Date | null
    note: string | null
    synced: boolean | null
  }

  export type MyRewardMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    points: number | null
    type: string | null
    status: $Enums.RewardStatus | null
    date: Date | null
    note: string | null
    synced: boolean | null
  }

  export type MyRewardCountAggregateOutputType = {
    id: number
    userId: number
    cafeProductId: number
    restaurantProductId: number
    points: number
    type: number
    status: number
    date: number
    note: number
    synced: number
    _all: number
  }


  export type MyRewardAvgAggregateInputType = {
    id?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    points?: true
  }

  export type MyRewardSumAggregateInputType = {
    id?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    points?: true
  }

  export type MyRewardMinAggregateInputType = {
    id?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    points?: true
    type?: true
    status?: true
    date?: true
    note?: true
    synced?: true
  }

  export type MyRewardMaxAggregateInputType = {
    id?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    points?: true
    type?: true
    status?: true
    date?: true
    note?: true
    synced?: true
  }

  export type MyRewardCountAggregateInputType = {
    id?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    points?: true
    type?: true
    status?: true
    date?: true
    note?: true
    synced?: true
    _all?: true
  }

  export type MyRewardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyReward to aggregate.
     */
    where?: MyRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyRewards to fetch.
     */
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyRewards
    **/
    _count?: true | MyRewardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyRewardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyRewardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyRewardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyRewardMaxAggregateInputType
  }

  export type GetMyRewardAggregateType<T extends MyRewardAggregateArgs> = {
        [P in keyof T & keyof AggregateMyReward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyReward[P]>
      : GetScalarType<T[P], AggregateMyReward[P]>
  }




  export type MyRewardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyRewardWhereInput
    orderBy?: MyRewardOrderByWithAggregationInput | MyRewardOrderByWithAggregationInput[]
    by: MyRewardScalarFieldEnum[] | MyRewardScalarFieldEnum
    having?: MyRewardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyRewardCountAggregateInputType | true
    _avg?: MyRewardAvgAggregateInputType
    _sum?: MyRewardSumAggregateInputType
    _min?: MyRewardMinAggregateInputType
    _max?: MyRewardMaxAggregateInputType
  }

  export type MyRewardGroupByOutputType = {
    id: number
    userId: number
    cafeProductId: number | null
    restaurantProductId: number | null
    points: number
    type: string
    status: $Enums.RewardStatus
    date: Date
    note: string | null
    synced: boolean
    _count: MyRewardCountAggregateOutputType | null
    _avg: MyRewardAvgAggregateOutputType | null
    _sum: MyRewardSumAggregateOutputType | null
    _min: MyRewardMinAggregateOutputType | null
    _max: MyRewardMaxAggregateOutputType | null
  }

  type GetMyRewardGroupByPayload<T extends MyRewardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyRewardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyRewardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyRewardGroupByOutputType[P]>
            : GetScalarType<T[P], MyRewardGroupByOutputType[P]>
        }
      >
    >


  export type MyRewardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    points?: boolean
    type?: boolean
    status?: boolean
    date?: boolean
    note?: boolean
    synced?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["myReward"]>

  export type MyRewardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    points?: boolean
    type?: boolean
    status?: boolean
    date?: boolean
    note?: boolean
    synced?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["myReward"]>

  export type MyRewardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    points?: boolean
    type?: boolean
    status?: boolean
    date?: boolean
    note?: boolean
    synced?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["myReward"]>

  export type MyRewardSelectScalar = {
    id?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    points?: boolean
    type?: boolean
    status?: boolean
    date?: boolean
    note?: boolean
    synced?: boolean
  }

  export type MyRewardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cafeProductId" | "restaurantProductId" | "points" | "type" | "status" | "date" | "note" | "synced", ExtArgs["result"]["myReward"]>
  export type MyRewardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }
  export type MyRewardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }
  export type MyRewardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cafeProduct?: boolean | MyReward$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | MyReward$restaurantProductArgs<ExtArgs>
  }

  export type $MyRewardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyReward"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cafeProduct: Prisma.$CafeProductPayload<ExtArgs> | null
      restaurantProduct: Prisma.$RestaurantProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cafeProductId: number | null
      restaurantProductId: number | null
      points: number
      type: string
      status: $Enums.RewardStatus
      date: Date
      note: string | null
      synced: boolean
    }, ExtArgs["result"]["myReward"]>
    composites: {}
  }

  type MyRewardGetPayload<S extends boolean | null | undefined | MyRewardDefaultArgs> = $Result.GetResult<Prisma.$MyRewardPayload, S>

  type MyRewardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyRewardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyRewardCountAggregateInputType | true
    }

  export interface MyRewardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyReward'], meta: { name: 'MyReward' } }
    /**
     * Find zero or one MyReward that matches the filter.
     * @param {MyRewardFindUniqueArgs} args - Arguments to find a MyReward
     * @example
     * // Get one MyReward
     * const myReward = await prisma.myReward.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyRewardFindUniqueArgs>(args: SelectSubset<T, MyRewardFindUniqueArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyReward that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyRewardFindUniqueOrThrowArgs} args - Arguments to find a MyReward
     * @example
     * // Get one MyReward
     * const myReward = await prisma.myReward.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyRewardFindUniqueOrThrowArgs>(args: SelectSubset<T, MyRewardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyReward that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardFindFirstArgs} args - Arguments to find a MyReward
     * @example
     * // Get one MyReward
     * const myReward = await prisma.myReward.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyRewardFindFirstArgs>(args?: SelectSubset<T, MyRewardFindFirstArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyReward that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardFindFirstOrThrowArgs} args - Arguments to find a MyReward
     * @example
     * // Get one MyReward
     * const myReward = await prisma.myReward.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyRewardFindFirstOrThrowArgs>(args?: SelectSubset<T, MyRewardFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyRewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyRewards
     * const myRewards = await prisma.myReward.findMany()
     * 
     * // Get first 10 MyRewards
     * const myRewards = await prisma.myReward.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myRewardWithIdOnly = await prisma.myReward.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyRewardFindManyArgs>(args?: SelectSubset<T, MyRewardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyReward.
     * @param {MyRewardCreateArgs} args - Arguments to create a MyReward.
     * @example
     * // Create one MyReward
     * const MyReward = await prisma.myReward.create({
     *   data: {
     *     // ... data to create a MyReward
     *   }
     * })
     * 
     */
    create<T extends MyRewardCreateArgs>(args: SelectSubset<T, MyRewardCreateArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyRewards.
     * @param {MyRewardCreateManyArgs} args - Arguments to create many MyRewards.
     * @example
     * // Create many MyRewards
     * const myReward = await prisma.myReward.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyRewardCreateManyArgs>(args?: SelectSubset<T, MyRewardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyRewards and returns the data saved in the database.
     * @param {MyRewardCreateManyAndReturnArgs} args - Arguments to create many MyRewards.
     * @example
     * // Create many MyRewards
     * const myReward = await prisma.myReward.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyRewards and only return the `id`
     * const myRewardWithIdOnly = await prisma.myReward.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyRewardCreateManyAndReturnArgs>(args?: SelectSubset<T, MyRewardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MyReward.
     * @param {MyRewardDeleteArgs} args - Arguments to delete one MyReward.
     * @example
     * // Delete one MyReward
     * const MyReward = await prisma.myReward.delete({
     *   where: {
     *     // ... filter to delete one MyReward
     *   }
     * })
     * 
     */
    delete<T extends MyRewardDeleteArgs>(args: SelectSubset<T, MyRewardDeleteArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyReward.
     * @param {MyRewardUpdateArgs} args - Arguments to update one MyReward.
     * @example
     * // Update one MyReward
     * const myReward = await prisma.myReward.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyRewardUpdateArgs>(args: SelectSubset<T, MyRewardUpdateArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyRewards.
     * @param {MyRewardDeleteManyArgs} args - Arguments to filter MyRewards to delete.
     * @example
     * // Delete a few MyRewards
     * const { count } = await prisma.myReward.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyRewardDeleteManyArgs>(args?: SelectSubset<T, MyRewardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyRewards
     * const myReward = await prisma.myReward.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyRewardUpdateManyArgs>(args: SelectSubset<T, MyRewardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyRewards and returns the data updated in the database.
     * @param {MyRewardUpdateManyAndReturnArgs} args - Arguments to update many MyRewards.
     * @example
     * // Update many MyRewards
     * const myReward = await prisma.myReward.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MyRewards and only return the `id`
     * const myRewardWithIdOnly = await prisma.myReward.updateManyAndReturn({
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
    updateManyAndReturn<T extends MyRewardUpdateManyAndReturnArgs>(args: SelectSubset<T, MyRewardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MyReward.
     * @param {MyRewardUpsertArgs} args - Arguments to update or create a MyReward.
     * @example
     * // Update or create a MyReward
     * const myReward = await prisma.myReward.upsert({
     *   create: {
     *     // ... data to create a MyReward
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyReward we want to update
     *   }
     * })
     */
    upsert<T extends MyRewardUpsertArgs>(args: SelectSubset<T, MyRewardUpsertArgs<ExtArgs>>): Prisma__MyRewardClient<$Result.GetResult<Prisma.$MyRewardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MyRewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardCountArgs} args - Arguments to filter MyRewards to count.
     * @example
     * // Count the number of MyRewards
     * const count = await prisma.myReward.count({
     *   where: {
     *     // ... the filter for the MyRewards we want to count
     *   }
     * })
    **/
    count<T extends MyRewardCountArgs>(
      args?: Subset<T, MyRewardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyRewardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MyRewardAggregateArgs>(args: Subset<T, MyRewardAggregateArgs>): Prisma.PrismaPromise<GetMyRewardAggregateType<T>>

    /**
     * Group by MyReward.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyRewardGroupByArgs} args - Group by arguments.
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
      T extends MyRewardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyRewardGroupByArgs['orderBy'] }
        : { orderBy?: MyRewardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MyRewardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyRewardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyReward model
   */
  readonly fields: MyRewardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyReward.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyRewardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cafeProduct<T extends MyReward$cafeProductArgs<ExtArgs> = {}>(args?: Subset<T, MyReward$cafeProductArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restaurantProduct<T extends MyReward$restaurantProductArgs<ExtArgs> = {}>(args?: Subset<T, MyReward$restaurantProductArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MyReward model
   */
  interface MyRewardFieldRefs {
    readonly id: FieldRef<"MyReward", 'Int'>
    readonly userId: FieldRef<"MyReward", 'Int'>
    readonly cafeProductId: FieldRef<"MyReward", 'Int'>
    readonly restaurantProductId: FieldRef<"MyReward", 'Int'>
    readonly points: FieldRef<"MyReward", 'Int'>
    readonly type: FieldRef<"MyReward", 'String'>
    readonly status: FieldRef<"MyReward", 'RewardStatus'>
    readonly date: FieldRef<"MyReward", 'DateTime'>
    readonly note: FieldRef<"MyReward", 'String'>
    readonly synced: FieldRef<"MyReward", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MyReward findUnique
   */
  export type MyRewardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter, which MyReward to fetch.
     */
    where: MyRewardWhereUniqueInput
  }

  /**
   * MyReward findUniqueOrThrow
   */
  export type MyRewardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter, which MyReward to fetch.
     */
    where: MyRewardWhereUniqueInput
  }

  /**
   * MyReward findFirst
   */
  export type MyRewardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter, which MyReward to fetch.
     */
    where?: MyRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyRewards to fetch.
     */
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyRewards.
     */
    cursor?: MyRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyRewards.
     */
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * MyReward findFirstOrThrow
   */
  export type MyRewardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter, which MyReward to fetch.
     */
    where?: MyRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyRewards to fetch.
     */
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyRewards.
     */
    cursor?: MyRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyRewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyRewards.
     */
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * MyReward findMany
   */
  export type MyRewardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter, which MyRewards to fetch.
     */
    where?: MyRewardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyRewards to fetch.
     */
    orderBy?: MyRewardOrderByWithRelationInput | MyRewardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyRewards.
     */
    cursor?: MyRewardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyRewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyRewards.
     */
    skip?: number
    distinct?: MyRewardScalarFieldEnum | MyRewardScalarFieldEnum[]
  }

  /**
   * MyReward create
   */
  export type MyRewardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * The data needed to create a MyReward.
     */
    data: XOR<MyRewardCreateInput, MyRewardUncheckedCreateInput>
  }

  /**
   * MyReward createMany
   */
  export type MyRewardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyRewards.
     */
    data: MyRewardCreateManyInput | MyRewardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyReward createManyAndReturn
   */
  export type MyRewardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * The data used to create many MyRewards.
     */
    data: MyRewardCreateManyInput | MyRewardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MyReward update
   */
  export type MyRewardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * The data needed to update a MyReward.
     */
    data: XOR<MyRewardUpdateInput, MyRewardUncheckedUpdateInput>
    /**
     * Choose, which MyReward to update.
     */
    where: MyRewardWhereUniqueInput
  }

  /**
   * MyReward updateMany
   */
  export type MyRewardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyRewards.
     */
    data: XOR<MyRewardUpdateManyMutationInput, MyRewardUncheckedUpdateManyInput>
    /**
     * Filter which MyRewards to update
     */
    where?: MyRewardWhereInput
    /**
     * Limit how many MyRewards to update.
     */
    limit?: number
  }

  /**
   * MyReward updateManyAndReturn
   */
  export type MyRewardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * The data used to update MyRewards.
     */
    data: XOR<MyRewardUpdateManyMutationInput, MyRewardUncheckedUpdateManyInput>
    /**
     * Filter which MyRewards to update
     */
    where?: MyRewardWhereInput
    /**
     * Limit how many MyRewards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MyReward upsert
   */
  export type MyRewardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * The filter to search for the MyReward to update in case it exists.
     */
    where: MyRewardWhereUniqueInput
    /**
     * In case the MyReward found by the `where` argument doesn't exist, create a new MyReward with this data.
     */
    create: XOR<MyRewardCreateInput, MyRewardUncheckedCreateInput>
    /**
     * In case the MyReward was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyRewardUpdateInput, MyRewardUncheckedUpdateInput>
  }

  /**
   * MyReward delete
   */
  export type MyRewardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
    /**
     * Filter which MyReward to delete.
     */
    where: MyRewardWhereUniqueInput
  }

  /**
   * MyReward deleteMany
   */
  export type MyRewardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyRewards to delete
     */
    where?: MyRewardWhereInput
    /**
     * Limit how many MyRewards to delete.
     */
    limit?: number
  }

  /**
   * MyReward.cafeProduct
   */
  export type MyReward$cafeProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    where?: CafeProductWhereInput
  }

  /**
   * MyReward.restaurantProduct
   */
  export type MyReward$restaurantProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    where?: RestaurantProductWhereInput
  }

  /**
   * MyReward without action
   */
  export type MyRewardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyReward
     */
    select?: MyRewardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyReward
     */
    omit?: MyRewardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyRewardInclude<ExtArgs> | null
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
    id: number | null
    points: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    invoiceId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    points: number | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    invoiceId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    type: string | null
    points: number | null
    date: Date | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    invoiceId: number | null
    status: $Enums.TransactionStatus | null
    synced: boolean | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    type: string | null
    points: number | null
    date: Date | null
    userId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    invoiceId: number | null
    status: $Enums.TransactionStatus | null
    synced: boolean | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    currency: number
    points: number
    date: number
    userId: number
    cafeProductId: number
    restaurantProductId: number
    invoiceId: number
    status: number
    synced: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    points?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    invoiceId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    points?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    invoiceId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    points?: true
    date?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    invoiceId?: true
    status?: true
    synced?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    points?: true
    date?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    invoiceId?: true
    status?: true
    synced?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    currency?: true
    points?: true
    date?: true
    userId?: true
    cafeProductId?: true
    restaurantProductId?: true
    invoiceId?: true
    status?: true
    synced?: true
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
    id: number
    type: string
    currency: JsonValue
    points: number
    date: Date
    userId: number
    cafeProductId: number | null
    restaurantProductId: number | null
    invoiceId: number | null
    status: $Enums.TransactionStatus
    synced: boolean
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
    type?: boolean
    currency?: boolean
    points?: boolean
    date?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    invoiceId?: boolean
    status?: boolean
    synced?: boolean
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    currency?: boolean
    points?: boolean
    date?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    invoiceId?: boolean
    status?: boolean
    synced?: boolean
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    currency?: boolean
    points?: boolean
    date?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    invoiceId?: boolean
    status?: boolean
    synced?: boolean
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    currency?: boolean
    points?: boolean
    date?: boolean
    userId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    invoiceId?: boolean
    status?: boolean
    synced?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "currency" | "points" | "date" | "userId" | "cafeProductId" | "restaurantProductId" | "invoiceId" | "status" | "synced", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cafeProduct?: boolean | Transaction$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | Transaction$restaurantProductArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoice?: boolean | Transaction$invoiceArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      cafeProduct: Prisma.$CafeProductPayload<ExtArgs> | null
      restaurantProduct: Prisma.$RestaurantProductPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
      invoice: Prisma.$InvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      currency: Prisma.JsonValue
      points: number
      date: Date
      userId: number
      cafeProductId: number | null
      restaurantProductId: number | null
      invoiceId: number | null
      status: $Enums.TransactionStatus
      synced: boolean
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
    cafeProduct<T extends Transaction$cafeProductArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$cafeProductArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restaurantProduct<T extends Transaction$restaurantProductArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$restaurantProductArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends Transaction$invoiceArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$invoiceArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly currency: FieldRef<"Transaction", 'Json'>
    readonly points: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly cafeProductId: FieldRef<"Transaction", 'Int'>
    readonly restaurantProductId: FieldRef<"Transaction", 'Int'>
    readonly invoiceId: FieldRef<"Transaction", 'Int'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly synced: FieldRef<"Transaction", 'Boolean'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * Transaction.cafeProduct
   */
  export type Transaction$cafeProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    where?: CafeProductWhereInput
  }

  /**
   * Transaction.restaurantProduct
   */
  export type Transaction$restaurantProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    where?: RestaurantProductWhereInput
  }

  /**
   * Transaction.invoice
   */
  export type Transaction$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
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
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    usdToIqd: number | null
    pointsPerDollar: number | null
    pointsPerIQD: number | null
    port: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    usdToIqd: number | null
    pointsPerDollar: number | null
    pointsPerIQD: number | null
    port: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    enTitle: string | null
    arTitle: string | null
    enDescription: string | null
    arDescription: string | null
    imgUrl: string | null
    timezone: string | null
    enCurrency: string | null
    arCurrency: string | null
    usdToIqd: number | null
    pointsPerDollar: number | null
    pointsPerIQD: number | null
    printerType: $Enums.PrinterType | null
    printerIp: string | null
    port: number | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    enTitle: string | null
    arTitle: string | null
    enDescription: string | null
    arDescription: string | null
    imgUrl: string | null
    timezone: string | null
    enCurrency: string | null
    arCurrency: string | null
    usdToIqd: number | null
    pointsPerDollar: number | null
    pointsPerIQD: number | null
    printerType: $Enums.PrinterType | null
    printerIp: string | null
    port: number | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    userId: number
    enTitle: number
    arTitle: number
    enDescription: number
    arDescription: number
    imgUrl: number
    timezone: number
    enCurrency: number
    arCurrency: number
    usdToIqd: number
    pointsPerDollar: number
    pointsPerIQD: number
    printerType: number
    printerIp: number
    port: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
    userId?: true
    usdToIqd?: true
    pointsPerDollar?: true
    pointsPerIQD?: true
    port?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
    userId?: true
    usdToIqd?: true
    pointsPerDollar?: true
    pointsPerIQD?: true
    port?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    userId?: true
    enTitle?: true
    arTitle?: true
    enDescription?: true
    arDescription?: true
    imgUrl?: true
    timezone?: true
    enCurrency?: true
    arCurrency?: true
    usdToIqd?: true
    pointsPerDollar?: true
    pointsPerIQD?: true
    printerType?: true
    printerIp?: true
    port?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    enTitle?: true
    arTitle?: true
    enDescription?: true
    arDescription?: true
    imgUrl?: true
    timezone?: true
    enCurrency?: true
    arCurrency?: true
    usdToIqd?: true
    pointsPerDollar?: true
    pointsPerIQD?: true
    printerType?: true
    printerIp?: true
    port?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    userId?: true
    enTitle?: true
    arTitle?: true
    enDescription?: true
    arDescription?: true
    imgUrl?: true
    timezone?: true
    enCurrency?: true
    arCurrency?: true
    usdToIqd?: true
    pointsPerDollar?: true
    pointsPerIQD?: true
    printerType?: true
    printerIp?: true
    port?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: number
    userId: number
    enTitle: string | null
    arTitle: string | null
    enDescription: string | null
    arDescription: string | null
    imgUrl: string | null
    timezone: string
    enCurrency: string
    arCurrency: string
    usdToIqd: number
    pointsPerDollar: number
    pointsPerIQD: number
    printerType: $Enums.PrinterType
    printerIp: string | null
    port: number | null
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enTitle?: boolean
    arTitle?: boolean
    enDescription?: boolean
    arDescription?: boolean
    imgUrl?: boolean
    timezone?: boolean
    enCurrency?: boolean
    arCurrency?: boolean
    usdToIqd?: boolean
    pointsPerDollar?: boolean
    pointsPerIQD?: boolean
    printerType?: boolean
    printerIp?: boolean
    port?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enTitle?: boolean
    arTitle?: boolean
    enDescription?: boolean
    arDescription?: boolean
    imgUrl?: boolean
    timezone?: boolean
    enCurrency?: boolean
    arCurrency?: boolean
    usdToIqd?: boolean
    pointsPerDollar?: boolean
    pointsPerIQD?: boolean
    printerType?: boolean
    printerIp?: boolean
    port?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enTitle?: boolean
    arTitle?: boolean
    enDescription?: boolean
    arDescription?: boolean
    imgUrl?: boolean
    timezone?: boolean
    enCurrency?: boolean
    arCurrency?: boolean
    usdToIqd?: boolean
    pointsPerDollar?: boolean
    pointsPerIQD?: boolean
    printerType?: boolean
    printerIp?: boolean
    port?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    enTitle?: boolean
    arTitle?: boolean
    enDescription?: boolean
    arDescription?: boolean
    imgUrl?: boolean
    timezone?: boolean
    enCurrency?: boolean
    arCurrency?: boolean
    usdToIqd?: boolean
    pointsPerDollar?: boolean
    pointsPerIQD?: boolean
    printerType?: boolean
    printerIp?: boolean
    port?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "enTitle" | "arTitle" | "enDescription" | "arDescription" | "imgUrl" | "timezone" | "enCurrency" | "arCurrency" | "usdToIqd" | "pointsPerDollar" | "pointsPerIQD" | "printerType" | "printerIp" | "port" | "updatedAt", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      enTitle: string | null
      arTitle: string | null
      enDescription: string | null
      arDescription: string | null
      imgUrl: string | null
      timezone: string
      enCurrency: string
      arCurrency: string
      usdToIqd: number
      pointsPerDollar: number
      pointsPerIQD: number
      printerType: $Enums.PrinterType
      printerIp: string | null
      port: number | null
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'Int'>
    readonly userId: FieldRef<"Settings", 'Int'>
    readonly enTitle: FieldRef<"Settings", 'String'>
    readonly arTitle: FieldRef<"Settings", 'String'>
    readonly enDescription: FieldRef<"Settings", 'String'>
    readonly arDescription: FieldRef<"Settings", 'String'>
    readonly imgUrl: FieldRef<"Settings", 'String'>
    readonly timezone: FieldRef<"Settings", 'String'>
    readonly enCurrency: FieldRef<"Settings", 'String'>
    readonly arCurrency: FieldRef<"Settings", 'String'>
    readonly usdToIqd: FieldRef<"Settings", 'Float'>
    readonly pointsPerDollar: FieldRef<"Settings", 'Float'>
    readonly pointsPerIQD: FieldRef<"Settings", 'Float'>
    readonly printerType: FieldRef<"Settings", 'PrinterType'>
    readonly printerIp: FieldRef<"Settings", 'String'>
    readonly port: FieldRef<"Settings", 'Int'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    discount: number | null
    points: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalPrice: number | null
    discount: number | null
    points: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    phone: string | null
    email: string | null
    totalPrice: number | null
    discount: number | null
    points: number | null
    currency: string | null
    createdAt: Date | null
    synced: boolean | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    phone: string | null
    email: string | null
    totalPrice: number | null
    discount: number | null
    points: number | null
    currency: string | null
    createdAt: Date | null
    synced: boolean | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    userId: number
    phone: number
    email: number
    totalPrice: number
    discount: number
    points: number
    currency: number
    createdAt: number
    synced: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    discount?: true
    points?: true
  }

  export type InvoiceSumAggregateInputType = {
    id?: true
    userId?: true
    totalPrice?: true
    discount?: true
    points?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    email?: true
    totalPrice?: true
    discount?: true
    points?: true
    currency?: true
    createdAt?: true
    synced?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    email?: true
    totalPrice?: true
    discount?: true
    points?: true
    currency?: true
    createdAt?: true
    synced?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    userId?: true
    phone?: true
    email?: true
    totalPrice?: true
    discount?: true
    points?: true
    currency?: true
    createdAt?: true
    synced?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: number
    userId: number | null
    phone: string | null
    email: string | null
    totalPrice: number
    discount: number | null
    points: number
    currency: string
    createdAt: Date
    synced: boolean
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    email?: boolean
    totalPrice?: boolean
    discount?: boolean
    points?: boolean
    currency?: boolean
    createdAt?: boolean
    synced?: boolean
    user?: boolean | Invoice$userArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    transaction?: boolean | Invoice$transactionArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    email?: boolean
    totalPrice?: boolean
    discount?: boolean
    points?: boolean
    currency?: boolean
    createdAt?: boolean
    synced?: boolean
    user?: boolean | Invoice$userArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    phone?: boolean
    email?: boolean
    totalPrice?: boolean
    discount?: boolean
    points?: boolean
    currency?: boolean
    createdAt?: boolean
    synced?: boolean
    user?: boolean | Invoice$userArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    userId?: boolean
    phone?: boolean
    email?: boolean
    totalPrice?: boolean
    discount?: boolean
    points?: boolean
    currency?: boolean
    createdAt?: boolean
    synced?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "phone" | "email" | "totalPrice" | "discount" | "points" | "currency" | "createdAt" | "synced", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Invoice$userArgs<ExtArgs>
    items?: boolean | Invoice$itemsArgs<ExtArgs>
    transaction?: boolean | Invoice$transactionArgs<ExtArgs>
    _count?: boolean | InvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Invoice$userArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Invoice$userArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$InvoiceItemPayload<ExtArgs>[]
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      phone: string | null
      email: string | null
      totalPrice: number
      discount: number | null
      points: number
      currency: string
      createdAt: Date
      synced: boolean
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Invoice$userArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Invoice$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends Invoice$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'Int'>
    readonly userId: FieldRef<"Invoice", 'Int'>
    readonly phone: FieldRef<"Invoice", 'String'>
    readonly email: FieldRef<"Invoice", 'String'>
    readonly totalPrice: FieldRef<"Invoice", 'Float'>
    readonly discount: FieldRef<"Invoice", 'Float'>
    readonly points: FieldRef<"Invoice", 'Float'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly synced: FieldRef<"Invoice", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.user
   */
  export type Invoice$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Invoice.items
   */
  export type Invoice$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    cursor?: InvoiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * Invoice.transaction
   */
  export type Invoice$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model InvoiceItem
   */

  export type AggregateInvoiceItem = {
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  export type InvoiceItemAvgAggregateOutputType = {
    id: number | null
    invoiceId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    categoryId: number | null
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type InvoiceItemSumAggregateOutputType = {
    id: number | null
    invoiceId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    categoryId: number | null
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type InvoiceItemMinAggregateOutputType = {
    id: number | null
    invoiceId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    categoryId: number | null
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type InvoiceItemMaxAggregateOutputType = {
    id: number | null
    invoiceId: number | null
    cafeProductId: number | null
    restaurantProductId: number | null
    categoryId: number | null
    quantity: number | null
    price: number | null
    total: number | null
  }

  export type InvoiceItemCountAggregateOutputType = {
    id: number
    invoiceId: number
    cafeProductId: number
    restaurantProductId: number
    categoryId: number
    quantity: number
    price: number
    total: number
    _all: number
  }


  export type InvoiceItemAvgAggregateInputType = {
    id?: true
    invoiceId?: true
    cafeProductId?: true
    restaurantProductId?: true
    categoryId?: true
    quantity?: true
    price?: true
    total?: true
  }

  export type InvoiceItemSumAggregateInputType = {
    id?: true
    invoiceId?: true
    cafeProductId?: true
    restaurantProductId?: true
    categoryId?: true
    quantity?: true
    price?: true
    total?: true
  }

  export type InvoiceItemMinAggregateInputType = {
    id?: true
    invoiceId?: true
    cafeProductId?: true
    restaurantProductId?: true
    categoryId?: true
    quantity?: true
    price?: true
    total?: true
  }

  export type InvoiceItemMaxAggregateInputType = {
    id?: true
    invoiceId?: true
    cafeProductId?: true
    restaurantProductId?: true
    categoryId?: true
    quantity?: true
    price?: true
    total?: true
  }

  export type InvoiceItemCountAggregateInputType = {
    id?: true
    invoiceId?: true
    cafeProductId?: true
    restaurantProductId?: true
    categoryId?: true
    quantity?: true
    price?: true
    total?: true
    _all?: true
  }

  export type InvoiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItem to aggregate.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvoiceItems
    **/
    _count?: true | InvoiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type GetInvoiceItemAggregateType<T extends InvoiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoiceItem[P]>
      : GetScalarType<T[P], AggregateInvoiceItem[P]>
  }




  export type InvoiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceItemWhereInput
    orderBy?: InvoiceItemOrderByWithAggregationInput | InvoiceItemOrderByWithAggregationInput[]
    by: InvoiceItemScalarFieldEnum[] | InvoiceItemScalarFieldEnum
    having?: InvoiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceItemCountAggregateInputType | true
    _avg?: InvoiceItemAvgAggregateInputType
    _sum?: InvoiceItemSumAggregateInputType
    _min?: InvoiceItemMinAggregateInputType
    _max?: InvoiceItemMaxAggregateInputType
  }

  export type InvoiceItemGroupByOutputType = {
    id: number
    invoiceId: number
    cafeProductId: number | null
    restaurantProductId: number | null
    categoryId: number | null
    quantity: number
    price: number
    total: number
    _count: InvoiceItemCountAggregateOutputType | null
    _avg: InvoiceItemAvgAggregateOutputType | null
    _sum: InvoiceItemSumAggregateOutputType | null
    _min: InvoiceItemMinAggregateOutputType | null
    _max: InvoiceItemMaxAggregateOutputType | null
  }

  type GetInvoiceItemGroupByPayload<T extends InvoiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceItemGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    categoryId?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    categoryId?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    categoryId?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }, ExtArgs["result"]["invoiceItem"]>

  export type InvoiceItemSelectScalar = {
    id?: boolean
    invoiceId?: boolean
    cafeProductId?: boolean
    restaurantProductId?: boolean
    categoryId?: boolean
    quantity?: boolean
    price?: boolean
    total?: boolean
  }

  export type InvoiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceId" | "cafeProductId" | "restaurantProductId" | "categoryId" | "quantity" | "price" | "total", ExtArgs["result"]["invoiceItem"]>
  export type InvoiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }
  export type InvoiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }
  export type InvoiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | InvoiceItem$categoryArgs<ExtArgs>
    invoice?: boolean | InvoiceDefaultArgs<ExtArgs>
    cafeProduct?: boolean | InvoiceItem$cafeProductArgs<ExtArgs>
    restaurantProduct?: boolean | InvoiceItem$restaurantProductArgs<ExtArgs>
  }

  export type $InvoiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvoiceItem"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      invoice: Prisma.$InvoicePayload<ExtArgs>
      cafeProduct: Prisma.$CafeProductPayload<ExtArgs> | null
      restaurantProduct: Prisma.$RestaurantProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      invoiceId: number
      cafeProductId: number | null
      restaurantProductId: number | null
      categoryId: number | null
      quantity: number
      price: number
      total: number
    }, ExtArgs["result"]["invoiceItem"]>
    composites: {}
  }

  type InvoiceItemGetPayload<S extends boolean | null | undefined | InvoiceItemDefaultArgs> = $Result.GetResult<Prisma.$InvoiceItemPayload, S>

  type InvoiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceItemCountAggregateInputType | true
    }

  export interface InvoiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvoiceItem'], meta: { name: 'InvoiceItem' } }
    /**
     * Find zero or one InvoiceItem that matches the filter.
     * @param {InvoiceItemFindUniqueArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceItemFindUniqueArgs>(args: SelectSubset<T, InvoiceItemFindUniqueArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InvoiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceItemFindUniqueOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceItemFindFirstArgs>(args?: SelectSubset<T, InvoiceItemFindFirstArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InvoiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindFirstOrThrowArgs} args - Arguments to find a InvoiceItem
     * @example
     * // Get one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InvoiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany()
     * 
     * // Get first 10 InvoiceItems
     * const invoiceItems = await prisma.invoiceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceItemFindManyArgs>(args?: SelectSubset<T, InvoiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InvoiceItem.
     * @param {InvoiceItemCreateArgs} args - Arguments to create a InvoiceItem.
     * @example
     * // Create one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.create({
     *   data: {
     *     // ... data to create a InvoiceItem
     *   }
     * })
     * 
     */
    create<T extends InvoiceItemCreateArgs>(args: SelectSubset<T, InvoiceItemCreateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InvoiceItems.
     * @param {InvoiceItemCreateManyArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceItemCreateManyArgs>(args?: SelectSubset<T, InvoiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvoiceItems and returns the data saved in the database.
     * @param {InvoiceItemCreateManyAndReturnArgs} args - Arguments to create many InvoiceItems.
     * @example
     * // Create many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InvoiceItem.
     * @param {InvoiceItemDeleteArgs} args - Arguments to delete one InvoiceItem.
     * @example
     * // Delete one InvoiceItem
     * const InvoiceItem = await prisma.invoiceItem.delete({
     *   where: {
     *     // ... filter to delete one InvoiceItem
     *   }
     * })
     * 
     */
    delete<T extends InvoiceItemDeleteArgs>(args: SelectSubset<T, InvoiceItemDeleteArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InvoiceItem.
     * @param {InvoiceItemUpdateArgs} args - Arguments to update one InvoiceItem.
     * @example
     * // Update one InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceItemUpdateArgs>(args: SelectSubset<T, InvoiceItemUpdateArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InvoiceItems.
     * @param {InvoiceItemDeleteManyArgs} args - Arguments to filter InvoiceItems to delete.
     * @example
     * // Delete a few InvoiceItems
     * const { count } = await prisma.invoiceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceItemDeleteManyArgs>(args?: SelectSubset<T, InvoiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceItemUpdateManyArgs>(args: SelectSubset<T, InvoiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvoiceItems and returns the data updated in the database.
     * @param {InvoiceItemUpdateManyAndReturnArgs} args - Arguments to update many InvoiceItems.
     * @example
     * // Update many InvoiceItems
     * const invoiceItem = await prisma.invoiceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvoiceItems and only return the `id`
     * const invoiceItemWithIdOnly = await prisma.invoiceItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvoiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InvoiceItem.
     * @param {InvoiceItemUpsertArgs} args - Arguments to update or create a InvoiceItem.
     * @example
     * // Update or create a InvoiceItem
     * const invoiceItem = await prisma.invoiceItem.upsert({
     *   create: {
     *     // ... data to create a InvoiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvoiceItem we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceItemUpsertArgs>(args: SelectSubset<T, InvoiceItemUpsertArgs<ExtArgs>>): Prisma__InvoiceItemClient<$Result.GetResult<Prisma.$InvoiceItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InvoiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemCountArgs} args - Arguments to filter InvoiceItems to count.
     * @example
     * // Count the number of InvoiceItems
     * const count = await prisma.invoiceItem.count({
     *   where: {
     *     // ... the filter for the InvoiceItems we want to count
     *   }
     * })
    **/
    count<T extends InvoiceItemCountArgs>(
      args?: Subset<T, InvoiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceItemAggregateArgs>(args: Subset<T, InvoiceItemAggregateArgs>): Prisma.PrismaPromise<GetInvoiceItemAggregateType<T>>

    /**
     * Group by InvoiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceItemGroupByArgs} args - Group by arguments.
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
      T extends InvoiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceItemGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvoiceItem model
   */
  readonly fields: InvoiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvoiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends InvoiceItem$categoryArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceItem$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invoice<T extends InvoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceDefaultArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cafeProduct<T extends InvoiceItem$cafeProductArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceItem$cafeProductArgs<ExtArgs>>): Prisma__CafeProductClient<$Result.GetResult<Prisma.$CafeProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restaurantProduct<T extends InvoiceItem$restaurantProductArgs<ExtArgs> = {}>(args?: Subset<T, InvoiceItem$restaurantProductArgs<ExtArgs>>): Prisma__RestaurantProductClient<$Result.GetResult<Prisma.$RestaurantProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the InvoiceItem model
   */
  interface InvoiceItemFieldRefs {
    readonly id: FieldRef<"InvoiceItem", 'Int'>
    readonly invoiceId: FieldRef<"InvoiceItem", 'Int'>
    readonly cafeProductId: FieldRef<"InvoiceItem", 'Int'>
    readonly restaurantProductId: FieldRef<"InvoiceItem", 'Int'>
    readonly categoryId: FieldRef<"InvoiceItem", 'Int'>
    readonly quantity: FieldRef<"InvoiceItem", 'Int'>
    readonly price: FieldRef<"InvoiceItem", 'Float'>
    readonly total: FieldRef<"InvoiceItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * InvoiceItem findUnique
   */
  export type InvoiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findUniqueOrThrow
   */
  export type InvoiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem findFirst
   */
  export type InvoiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findFirstOrThrow
   */
  export type InvoiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItem to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvoiceItems.
     */
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem findMany
   */
  export type InvoiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter, which InvoiceItems to fetch.
     */
    where?: InvoiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvoiceItems to fetch.
     */
    orderBy?: InvoiceItemOrderByWithRelationInput | InvoiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvoiceItems.
     */
    cursor?: InvoiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvoiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvoiceItems.
     */
    skip?: number
    distinct?: InvoiceItemScalarFieldEnum | InvoiceItemScalarFieldEnum[]
  }

  /**
   * InvoiceItem create
   */
  export type InvoiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InvoiceItem.
     */
    data: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
  }

  /**
   * InvoiceItem createMany
   */
  export type InvoiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvoiceItem createManyAndReturn
   */
  export type InvoiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many InvoiceItems.
     */
    data: InvoiceItemCreateManyInput | InvoiceItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem update
   */
  export type InvoiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InvoiceItem.
     */
    data: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
    /**
     * Choose, which InvoiceItem to update.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem updateMany
   */
  export type InvoiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
  }

  /**
   * InvoiceItem updateManyAndReturn
   */
  export type InvoiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * The data used to update InvoiceItems.
     */
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyInput>
    /**
     * Filter which InvoiceItems to update
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InvoiceItem upsert
   */
  export type InvoiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InvoiceItem to update in case it exists.
     */
    where: InvoiceItemWhereUniqueInput
    /**
     * In case the InvoiceItem found by the `where` argument doesn't exist, create a new InvoiceItem with this data.
     */
    create: XOR<InvoiceItemCreateInput, InvoiceItemUncheckedCreateInput>
    /**
     * In case the InvoiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceItemUpdateInput, InvoiceItemUncheckedUpdateInput>
  }

  /**
   * InvoiceItem delete
   */
  export type InvoiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
    /**
     * Filter which InvoiceItem to delete.
     */
    where: InvoiceItemWhereUniqueInput
  }

  /**
   * InvoiceItem deleteMany
   */
  export type InvoiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvoiceItems to delete
     */
    where?: InvoiceItemWhereInput
    /**
     * Limit how many InvoiceItems to delete.
     */
    limit?: number
  }

  /**
   * InvoiceItem.category
   */
  export type InvoiceItem$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * InvoiceItem.cafeProduct
   */
  export type InvoiceItem$cafeProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CafeProduct
     */
    select?: CafeProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CafeProduct
     */
    omit?: CafeProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CafeProductInclude<ExtArgs> | null
    where?: CafeProductWhereInput
  }

  /**
   * InvoiceItem.restaurantProduct
   */
  export type InvoiceItem$restaurantProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantProduct
     */
    select?: RestaurantProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantProduct
     */
    omit?: RestaurantProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantProductInclude<ExtArgs> | null
    where?: RestaurantProductWhereInput
  }

  /**
   * InvoiceItem without action
   */
  export type InvoiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoiceItem
     */
    select?: InvoiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvoiceItem
     */
    omit?: InvoiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    enName: 'enName',
    arName: 'arName',
    phone: 'phone',
    email: 'email',
    password: 'password',
    profileImage: 'profileImage',
    role: 'role',
    points: 'points',
    qrCode: 'qrCode',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    role: 'role',
    page: 'page'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const ResetPasswordTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    randomCode: 'randomCode',
    token: 'token',
    expiresAt: 'expiresAt'
  };

  export type ResetPasswordTokenScalarFieldEnum = (typeof ResetPasswordTokenScalarFieldEnum)[keyof typeof ResetPasswordTokenScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    enName: 'enName',
    arName: 'arName',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CafeProductScalarFieldEnum: {
    id: 'id',
    enName: 'enName',
    arName: 'arName',
    image: 'image',
    price: 'price',
    points: 'points',
    type: 'type',
    categoryId: 'categoryId'
  };

  export type CafeProductScalarFieldEnum = (typeof CafeProductScalarFieldEnum)[keyof typeof CafeProductScalarFieldEnum]


  export const RestaurantProductScalarFieldEnum: {
    id: 'id',
    enName: 'enName',
    arName: 'arName',
    image: 'image',
    price: 'price',
    points: 'points',
    type: 'type',
    categoryId: 'categoryId'
  };

  export type RestaurantProductScalarFieldEnum = (typeof RestaurantProductScalarFieldEnum)[keyof typeof RestaurantProductScalarFieldEnum]


  export const RewardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    costPoints: 'costPoints',
    description: 'description'
  };

  export type RewardScalarFieldEnum = (typeof RewardScalarFieldEnum)[keyof typeof RewardScalarFieldEnum]


  export const MyRewardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cafeProductId: 'cafeProductId',
    restaurantProductId: 'restaurantProductId',
    points: 'points',
    type: 'type',
    status: 'status',
    date: 'date',
    note: 'note',
    synced: 'synced'
  };

  export type MyRewardScalarFieldEnum = (typeof MyRewardScalarFieldEnum)[keyof typeof MyRewardScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    currency: 'currency',
    points: 'points',
    date: 'date',
    userId: 'userId',
    cafeProductId: 'cafeProductId',
    restaurantProductId: 'restaurantProductId',
    invoiceId: 'invoiceId',
    status: 'status',
    synced: 'synced'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    enTitle: 'enTitle',
    arTitle: 'arTitle',
    enDescription: 'enDescription',
    arDescription: 'arDescription',
    imgUrl: 'imgUrl',
    timezone: 'timezone',
    enCurrency: 'enCurrency',
    arCurrency: 'arCurrency',
    usdToIqd: 'usdToIqd',
    pointsPerDollar: 'pointsPerDollar',
    pointsPerIQD: 'pointsPerIQD',
    printerType: 'printerType',
    printerIp: 'printerIp',
    port: 'port',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    phone: 'phone',
    email: 'email',
    totalPrice: 'totalPrice',
    discount: 'discount',
    points: 'points',
    currency: 'currency',
    createdAt: 'createdAt',
    synced: 'synced'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const InvoiceItemScalarFieldEnum: {
    id: 'id',
    invoiceId: 'invoiceId',
    cafeProductId: 'cafeProductId',
    restaurantProductId: 'restaurantProductId',
    categoryId: 'categoryId',
    quantity: 'quantity',
    price: 'price',
    total: 'total'
  };

  export type InvoiceItemScalarFieldEnum = (typeof InvoiceItemScalarFieldEnum)[keyof typeof InvoiceItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CategoryType'
   */
  export type EnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType'>
    


  /**
   * Reference to a field of type 'CategoryType[]'
   */
  export type ListEnumCategoryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryType[]'>
    


  /**
   * Reference to a field of type 'RewardStatus'
   */
  export type EnumRewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardStatus'>
    


  /**
   * Reference to a field of type 'RewardStatus[]'
   */
  export type ListEnumRewardStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RewardStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'PrinterType'
   */
  export type EnumPrinterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrinterType'>
    


  /**
   * Reference to a field of type 'PrinterType[]'
   */
  export type ListEnumPrinterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrinterType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    enName?: StringFilter<"User"> | string
    arName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    points?: FloatFilter<"User"> | number
    qrCode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    resetPasswordTokens?: ResetPasswordTokenListRelationFilter
    myRewards?: MyRewardListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    points?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    resetPasswordTokens?: ResetPasswordTokenOrderByRelationAggregateInput
    myRewards?: MyRewardOrderByRelationAggregateInput
    settings?: SettingsOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    enName?: StringFilter<"User"> | string
    arName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    points?: FloatFilter<"User"> | number
    qrCode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    resetPasswordTokens?: ResetPasswordTokenListRelationFilter
    myRewards?: MyRewardListRelationFilter
    settings?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }, "id" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    points?: SortOrder
    qrCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    enName?: StringWithAggregatesFilter<"User"> | string
    arName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    points?: FloatWithAggregatesFilter<"User"> | number
    qrCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: IntFilter<"RolePermission"> | number
    role?: EnumRoleFilter<"RolePermission"> | $Enums.Role
    page?: StringFilter<"RolePermission"> | string
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    page?: SortOrder
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    role_page?: RolePermissionRolePageCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    role?: EnumRoleFilter<"RolePermission"> | $Enums.Role
    page?: StringFilter<"RolePermission"> | string
  }, "id" | "role_page">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    page?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _avg?: RolePermissionAvgOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
    _sum?: RolePermissionSumOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RolePermission"> | number
    role?: EnumRoleWithAggregatesFilter<"RolePermission"> | $Enums.Role
    page?: StringWithAggregatesFilter<"RolePermission"> | string
  }

  export type ResetPasswordTokenWhereInput = {
    AND?: ResetPasswordTokenWhereInput | ResetPasswordTokenWhereInput[]
    OR?: ResetPasswordTokenWhereInput[]
    NOT?: ResetPasswordTokenWhereInput | ResetPasswordTokenWhereInput[]
    id?: IntFilter<"ResetPasswordToken"> | number
    userId?: IntFilter<"ResetPasswordToken"> | number
    randomCode?: IntFilter<"ResetPasswordToken"> | number
    token?: StringFilter<"ResetPasswordToken"> | string
    expiresAt?: DateTimeFilter<"ResetPasswordToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResetPasswordTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResetPasswordTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResetPasswordTokenWhereInput | ResetPasswordTokenWhereInput[]
    OR?: ResetPasswordTokenWhereInput[]
    NOT?: ResetPasswordTokenWhereInput | ResetPasswordTokenWhereInput[]
    userId?: IntFilter<"ResetPasswordToken"> | number
    randomCode?: IntFilter<"ResetPasswordToken"> | number
    token?: StringFilter<"ResetPasswordToken"> | string
    expiresAt?: DateTimeFilter<"ResetPasswordToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResetPasswordTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    _count?: ResetPasswordTokenCountOrderByAggregateInput
    _avg?: ResetPasswordTokenAvgOrderByAggregateInput
    _max?: ResetPasswordTokenMaxOrderByAggregateInput
    _min?: ResetPasswordTokenMinOrderByAggregateInput
    _sum?: ResetPasswordTokenSumOrderByAggregateInput
  }

  export type ResetPasswordTokenScalarWhereWithAggregatesInput = {
    AND?: ResetPasswordTokenScalarWhereWithAggregatesInput | ResetPasswordTokenScalarWhereWithAggregatesInput[]
    OR?: ResetPasswordTokenScalarWhereWithAggregatesInput[]
    NOT?: ResetPasswordTokenScalarWhereWithAggregatesInput | ResetPasswordTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResetPasswordToken"> | number
    userId?: IntWithAggregatesFilter<"ResetPasswordToken"> | number
    randomCode?: IntWithAggregatesFilter<"ResetPasswordToken"> | number
    token?: StringWithAggregatesFilter<"ResetPasswordToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"ResetPasswordToken"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    enName?: StringFilter<"Category"> | string
    arName?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    InvoiceItem?: InvoiceItemListRelationFilter
    cafeProducts?: CafeProductListRelationFilter
    restaurantProducts?: RestaurantProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    InvoiceItem?: InvoiceItemOrderByRelationAggregateInput
    cafeProducts?: CafeProductOrderByRelationAggregateInput
    restaurantProducts?: RestaurantProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    enName?: StringFilter<"Category"> | string
    arName?: StringFilter<"Category"> | string
    type?: EnumCategoryTypeFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeFilter<"Category"> | Date | string
    InvoiceItem?: InvoiceItemListRelationFilter
    cafeProducts?: CafeProductListRelationFilter
    restaurantProducts?: RestaurantProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    enName?: StringWithAggregatesFilter<"Category"> | string
    arName?: StringWithAggregatesFilter<"Category"> | string
    type?: EnumCategoryTypeWithAggregatesFilter<"Category"> | $Enums.CategoryType
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CafeProductWhereInput = {
    AND?: CafeProductWhereInput | CafeProductWhereInput[]
    OR?: CafeProductWhereInput[]
    NOT?: CafeProductWhereInput | CafeProductWhereInput[]
    id?: IntFilter<"CafeProduct"> | number
    enName?: StringFilter<"CafeProduct"> | string
    arName?: StringFilter<"CafeProduct"> | string
    image?: StringNullableFilter<"CafeProduct"> | string | null
    price?: FloatFilter<"CafeProduct"> | number
    points?: IntFilter<"CafeProduct"> | number
    type?: StringFilter<"CafeProduct"> | string
    categoryId?: IntNullableFilter<"CafeProduct"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    myRewards?: MyRewardListRelationFilter
    transactions?: TransactionListRelationFilter
    invoice?: InvoiceItemListRelationFilter
  }

  export type CafeProductOrderByWithRelationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    myRewards?: MyRewardOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    invoice?: InvoiceItemOrderByRelationAggregateInput
  }

  export type CafeProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CafeProductWhereInput | CafeProductWhereInput[]
    OR?: CafeProductWhereInput[]
    NOT?: CafeProductWhereInput | CafeProductWhereInput[]
    enName?: StringFilter<"CafeProduct"> | string
    arName?: StringFilter<"CafeProduct"> | string
    image?: StringNullableFilter<"CafeProduct"> | string | null
    price?: FloatFilter<"CafeProduct"> | number
    points?: IntFilter<"CafeProduct"> | number
    type?: StringFilter<"CafeProduct"> | string
    categoryId?: IntNullableFilter<"CafeProduct"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    myRewards?: MyRewardListRelationFilter
    transactions?: TransactionListRelationFilter
    invoice?: InvoiceItemListRelationFilter
  }, "id">

  export type CafeProductOrderByWithAggregationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: CafeProductCountOrderByAggregateInput
    _avg?: CafeProductAvgOrderByAggregateInput
    _max?: CafeProductMaxOrderByAggregateInput
    _min?: CafeProductMinOrderByAggregateInput
    _sum?: CafeProductSumOrderByAggregateInput
  }

  export type CafeProductScalarWhereWithAggregatesInput = {
    AND?: CafeProductScalarWhereWithAggregatesInput | CafeProductScalarWhereWithAggregatesInput[]
    OR?: CafeProductScalarWhereWithAggregatesInput[]
    NOT?: CafeProductScalarWhereWithAggregatesInput | CafeProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CafeProduct"> | number
    enName?: StringWithAggregatesFilter<"CafeProduct"> | string
    arName?: StringWithAggregatesFilter<"CafeProduct"> | string
    image?: StringNullableWithAggregatesFilter<"CafeProduct"> | string | null
    price?: FloatWithAggregatesFilter<"CafeProduct"> | number
    points?: IntWithAggregatesFilter<"CafeProduct"> | number
    type?: StringWithAggregatesFilter<"CafeProduct"> | string
    categoryId?: IntNullableWithAggregatesFilter<"CafeProduct"> | number | null
  }

  export type RestaurantProductWhereInput = {
    AND?: RestaurantProductWhereInput | RestaurantProductWhereInput[]
    OR?: RestaurantProductWhereInput[]
    NOT?: RestaurantProductWhereInput | RestaurantProductWhereInput[]
    id?: IntFilter<"RestaurantProduct"> | number
    enName?: StringFilter<"RestaurantProduct"> | string
    arName?: StringFilter<"RestaurantProduct"> | string
    image?: StringNullableFilter<"RestaurantProduct"> | string | null
    price?: FloatFilter<"RestaurantProduct"> | number
    points?: IntFilter<"RestaurantProduct"> | number
    type?: StringFilter<"RestaurantProduct"> | string
    categoryId?: IntNullableFilter<"RestaurantProduct"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    myRewards?: MyRewardListRelationFilter
    transactions?: TransactionListRelationFilter
    invoice?: InvoiceItemListRelationFilter
  }

  export type RestaurantProductOrderByWithRelationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    myRewards?: MyRewardOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    invoice?: InvoiceItemOrderByRelationAggregateInput
  }

  export type RestaurantProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestaurantProductWhereInput | RestaurantProductWhereInput[]
    OR?: RestaurantProductWhereInput[]
    NOT?: RestaurantProductWhereInput | RestaurantProductWhereInput[]
    enName?: StringFilter<"RestaurantProduct"> | string
    arName?: StringFilter<"RestaurantProduct"> | string
    image?: StringNullableFilter<"RestaurantProduct"> | string | null
    price?: FloatFilter<"RestaurantProduct"> | number
    points?: IntFilter<"RestaurantProduct"> | number
    type?: StringFilter<"RestaurantProduct"> | string
    categoryId?: IntNullableFilter<"RestaurantProduct"> | number | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    myRewards?: MyRewardListRelationFilter
    transactions?: TransactionListRelationFilter
    invoice?: InvoiceItemListRelationFilter
  }, "id">

  export type RestaurantProductOrderByWithAggregationInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: RestaurantProductCountOrderByAggregateInput
    _avg?: RestaurantProductAvgOrderByAggregateInput
    _max?: RestaurantProductMaxOrderByAggregateInput
    _min?: RestaurantProductMinOrderByAggregateInput
    _sum?: RestaurantProductSumOrderByAggregateInput
  }

  export type RestaurantProductScalarWhereWithAggregatesInput = {
    AND?: RestaurantProductScalarWhereWithAggregatesInput | RestaurantProductScalarWhereWithAggregatesInput[]
    OR?: RestaurantProductScalarWhereWithAggregatesInput[]
    NOT?: RestaurantProductScalarWhereWithAggregatesInput | RestaurantProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestaurantProduct"> | number
    enName?: StringWithAggregatesFilter<"RestaurantProduct"> | string
    arName?: StringWithAggregatesFilter<"RestaurantProduct"> | string
    image?: StringNullableWithAggregatesFilter<"RestaurantProduct"> | string | null
    price?: FloatWithAggregatesFilter<"RestaurantProduct"> | number
    points?: IntWithAggregatesFilter<"RestaurantProduct"> | number
    type?: StringWithAggregatesFilter<"RestaurantProduct"> | string
    categoryId?: IntNullableWithAggregatesFilter<"RestaurantProduct"> | number | null
  }

  export type RewardWhereInput = {
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    id?: IntFilter<"Reward"> | number
    name?: StringFilter<"Reward"> | string
    costPoints?: IntFilter<"Reward"> | number
    description?: StringNullableFilter<"Reward"> | string | null
  }

  export type RewardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    costPoints?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type RewardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RewardWhereInput | RewardWhereInput[]
    OR?: RewardWhereInput[]
    NOT?: RewardWhereInput | RewardWhereInput[]
    name?: StringFilter<"Reward"> | string
    costPoints?: IntFilter<"Reward"> | number
    description?: StringNullableFilter<"Reward"> | string | null
  }, "id">

  export type RewardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    costPoints?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RewardCountOrderByAggregateInput
    _avg?: RewardAvgOrderByAggregateInput
    _max?: RewardMaxOrderByAggregateInput
    _min?: RewardMinOrderByAggregateInput
    _sum?: RewardSumOrderByAggregateInput
  }

  export type RewardScalarWhereWithAggregatesInput = {
    AND?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    OR?: RewardScalarWhereWithAggregatesInput[]
    NOT?: RewardScalarWhereWithAggregatesInput | RewardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reward"> | number
    name?: StringWithAggregatesFilter<"Reward"> | string
    costPoints?: IntWithAggregatesFilter<"Reward"> | number
    description?: StringNullableWithAggregatesFilter<"Reward"> | string | null
  }

  export type MyRewardWhereInput = {
    AND?: MyRewardWhereInput | MyRewardWhereInput[]
    OR?: MyRewardWhereInput[]
    NOT?: MyRewardWhereInput | MyRewardWhereInput[]
    id?: IntFilter<"MyReward"> | number
    userId?: IntFilter<"MyReward"> | number
    cafeProductId?: IntNullableFilter<"MyReward"> | number | null
    restaurantProductId?: IntNullableFilter<"MyReward"> | number | null
    points?: IntFilter<"MyReward"> | number
    type?: StringFilter<"MyReward"> | string
    status?: EnumRewardStatusFilter<"MyReward"> | $Enums.RewardStatus
    date?: DateTimeFilter<"MyReward"> | Date | string
    note?: StringNullableFilter<"MyReward"> | string | null
    synced?: BoolFilter<"MyReward"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
  }

  export type MyRewardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    points?: SortOrder
    type?: SortOrder
    status?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    synced?: SortOrder
    user?: UserOrderByWithRelationInput
    cafeProduct?: CafeProductOrderByWithRelationInput
    restaurantProduct?: RestaurantProductOrderByWithRelationInput
  }

  export type MyRewardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MyRewardWhereInput | MyRewardWhereInput[]
    OR?: MyRewardWhereInput[]
    NOT?: MyRewardWhereInput | MyRewardWhereInput[]
    userId?: IntFilter<"MyReward"> | number
    cafeProductId?: IntNullableFilter<"MyReward"> | number | null
    restaurantProductId?: IntNullableFilter<"MyReward"> | number | null
    points?: IntFilter<"MyReward"> | number
    type?: StringFilter<"MyReward"> | string
    status?: EnumRewardStatusFilter<"MyReward"> | $Enums.RewardStatus
    date?: DateTimeFilter<"MyReward"> | Date | string
    note?: StringNullableFilter<"MyReward"> | string | null
    synced?: BoolFilter<"MyReward"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
  }, "id">

  export type MyRewardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    points?: SortOrder
    type?: SortOrder
    status?: SortOrder
    date?: SortOrder
    note?: SortOrderInput | SortOrder
    synced?: SortOrder
    _count?: MyRewardCountOrderByAggregateInput
    _avg?: MyRewardAvgOrderByAggregateInput
    _max?: MyRewardMaxOrderByAggregateInput
    _min?: MyRewardMinOrderByAggregateInput
    _sum?: MyRewardSumOrderByAggregateInput
  }

  export type MyRewardScalarWhereWithAggregatesInput = {
    AND?: MyRewardScalarWhereWithAggregatesInput | MyRewardScalarWhereWithAggregatesInput[]
    OR?: MyRewardScalarWhereWithAggregatesInput[]
    NOT?: MyRewardScalarWhereWithAggregatesInput | MyRewardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MyReward"> | number
    userId?: IntWithAggregatesFilter<"MyReward"> | number
    cafeProductId?: IntNullableWithAggregatesFilter<"MyReward"> | number | null
    restaurantProductId?: IntNullableWithAggregatesFilter<"MyReward"> | number | null
    points?: IntWithAggregatesFilter<"MyReward"> | number
    type?: StringWithAggregatesFilter<"MyReward"> | string
    status?: EnumRewardStatusWithAggregatesFilter<"MyReward"> | $Enums.RewardStatus
    date?: DateTimeWithAggregatesFilter<"MyReward"> | Date | string
    note?: StringNullableWithAggregatesFilter<"MyReward"> | string | null
    synced?: BoolWithAggregatesFilter<"MyReward"> | boolean
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    currency?: JsonFilter<"Transaction">
    points?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    cafeProductId?: IntNullableFilter<"Transaction"> | number | null
    restaurantProductId?: IntNullableFilter<"Transaction"> | number | null
    invoiceId?: IntNullableFilter<"Transaction"> | number | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    synced?: BoolFilter<"Transaction"> | boolean
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    points?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    status?: SortOrder
    synced?: SortOrder
    cafeProduct?: CafeProductOrderByWithRelationInput
    restaurantProduct?: RestaurantProductOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invoiceId?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: StringFilter<"Transaction"> | string
    currency?: JsonFilter<"Transaction">
    points?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    cafeProductId?: IntNullableFilter<"Transaction"> | number | null
    restaurantProductId?: IntNullableFilter<"Transaction"> | number | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    synced?: BoolFilter<"Transaction"> | boolean
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    invoice?: XOR<InvoiceNullableScalarRelationFilter, InvoiceWhereInput> | null
  }, "id" | "invoiceId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    points?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    invoiceId?: SortOrderInput | SortOrder
    status?: SortOrder
    synced?: SortOrder
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
    id?: IntWithAggregatesFilter<"Transaction"> | number
    type?: StringWithAggregatesFilter<"Transaction"> | string
    currency?: JsonWithAggregatesFilter<"Transaction">
    points?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    cafeProductId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    restaurantProductId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    invoiceId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    synced?: BoolWithAggregatesFilter<"Transaction"> | boolean
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: IntFilter<"Settings"> | number
    userId?: IntFilter<"Settings"> | number
    enTitle?: StringNullableFilter<"Settings"> | string | null
    arTitle?: StringNullableFilter<"Settings"> | string | null
    enDescription?: StringNullableFilter<"Settings"> | string | null
    arDescription?: StringNullableFilter<"Settings"> | string | null
    imgUrl?: StringNullableFilter<"Settings"> | string | null
    timezone?: StringFilter<"Settings"> | string
    enCurrency?: StringFilter<"Settings"> | string
    arCurrency?: StringFilter<"Settings"> | string
    usdToIqd?: FloatFilter<"Settings"> | number
    pointsPerDollar?: FloatFilter<"Settings"> | number
    pointsPerIQD?: FloatFilter<"Settings"> | number
    printerType?: EnumPrinterTypeFilter<"Settings"> | $Enums.PrinterType
    printerIp?: StringNullableFilter<"Settings"> | string | null
    port?: IntNullableFilter<"Settings"> | number | null
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    enTitle?: SortOrderInput | SortOrder
    arTitle?: SortOrderInput | SortOrder
    enDescription?: SortOrderInput | SortOrder
    arDescription?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    enCurrency?: SortOrder
    arCurrency?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    printerType?: SortOrder
    printerIp?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    enTitle?: StringNullableFilter<"Settings"> | string | null
    arTitle?: StringNullableFilter<"Settings"> | string | null
    enDescription?: StringNullableFilter<"Settings"> | string | null
    arDescription?: StringNullableFilter<"Settings"> | string | null
    imgUrl?: StringNullableFilter<"Settings"> | string | null
    timezone?: StringFilter<"Settings"> | string
    enCurrency?: StringFilter<"Settings"> | string
    arCurrency?: StringFilter<"Settings"> | string
    usdToIqd?: FloatFilter<"Settings"> | number
    pointsPerDollar?: FloatFilter<"Settings"> | number
    pointsPerIQD?: FloatFilter<"Settings"> | number
    printerType?: EnumPrinterTypeFilter<"Settings"> | $Enums.PrinterType
    printerIp?: StringNullableFilter<"Settings"> | string | null
    port?: IntNullableFilter<"Settings"> | number | null
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    enTitle?: SortOrderInput | SortOrder
    arTitle?: SortOrderInput | SortOrder
    enDescription?: SortOrderInput | SortOrder
    arDescription?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    timezone?: SortOrder
    enCurrency?: SortOrder
    arCurrency?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    printerType?: SortOrder
    printerIp?: SortOrderInput | SortOrder
    port?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Settings"> | number
    userId?: IntWithAggregatesFilter<"Settings"> | number
    enTitle?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    arTitle?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    enDescription?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    arDescription?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    imgUrl?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    timezone?: StringWithAggregatesFilter<"Settings"> | string
    enCurrency?: StringWithAggregatesFilter<"Settings"> | string
    arCurrency?: StringWithAggregatesFilter<"Settings"> | string
    usdToIqd?: FloatWithAggregatesFilter<"Settings"> | number
    pointsPerDollar?: FloatWithAggregatesFilter<"Settings"> | number
    pointsPerIQD?: FloatWithAggregatesFilter<"Settings"> | number
    printerType?: EnumPrinterTypeWithAggregatesFilter<"Settings"> | $Enums.PrinterType
    printerIp?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    port?: IntNullableWithAggregatesFilter<"Settings"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: IntFilter<"Invoice"> | number
    userId?: IntNullableFilter<"Invoice"> | number | null
    phone?: StringNullableFilter<"Invoice"> | string | null
    email?: StringNullableFilter<"Invoice"> | string | null
    totalPrice?: FloatFilter<"Invoice"> | number
    discount?: FloatNullableFilter<"Invoice"> | number | null
    points?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    synced?: BoolFilter<"Invoice"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: InvoiceItemListRelationFilter
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    discount?: SortOrderInput | SortOrder
    points?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    synced?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: InvoiceItemOrderByRelationAggregateInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    userId?: IntNullableFilter<"Invoice"> | number | null
    phone?: StringNullableFilter<"Invoice"> | string | null
    email?: StringNullableFilter<"Invoice"> | string | null
    totalPrice?: FloatFilter<"Invoice"> | number
    discount?: FloatNullableFilter<"Invoice"> | number | null
    points?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    synced?: BoolFilter<"Invoice"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    items?: InvoiceItemListRelationFilter
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    discount?: SortOrderInput | SortOrder
    points?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    synced?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Invoice"> | number
    userId?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    phone?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    email?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    totalPrice?: FloatWithAggregatesFilter<"Invoice"> | number
    discount?: FloatNullableWithAggregatesFilter<"Invoice"> | number | null
    points?: FloatWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    synced?: BoolWithAggregatesFilter<"Invoice"> | boolean
  }

  export type InvoiceItemWhereInput = {
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    id?: IntFilter<"InvoiceItem"> | number
    invoiceId?: IntFilter<"InvoiceItem"> | number
    cafeProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    restaurantProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    categoryId?: IntNullableFilter<"InvoiceItem"> | number | null
    quantity?: IntFilter<"InvoiceItem"> | number
    price?: FloatFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
  }

  export type InvoiceItemOrderByWithRelationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    category?: CategoryOrderByWithRelationInput
    invoice?: InvoiceOrderByWithRelationInput
    cafeProduct?: CafeProductOrderByWithRelationInput
    restaurantProduct?: RestaurantProductOrderByWithRelationInput
  }

  export type InvoiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    OR?: InvoiceItemWhereInput[]
    NOT?: InvoiceItemWhereInput | InvoiceItemWhereInput[]
    invoiceId?: IntFilter<"InvoiceItem"> | number
    cafeProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    restaurantProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    categoryId?: IntNullableFilter<"InvoiceItem"> | number | null
    quantity?: IntFilter<"InvoiceItem"> | number
    price?: FloatFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    invoice?: XOR<InvoiceScalarRelationFilter, InvoiceWhereInput>
    cafeProduct?: XOR<CafeProductNullableScalarRelationFilter, CafeProductWhereInput> | null
    restaurantProduct?: XOR<RestaurantProductNullableScalarRelationFilter, RestaurantProductWhereInput> | null
  }, "id">

  export type InvoiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrderInput | SortOrder
    restaurantProductId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
    _count?: InvoiceItemCountOrderByAggregateInput
    _avg?: InvoiceItemAvgOrderByAggregateInput
    _max?: InvoiceItemMaxOrderByAggregateInput
    _min?: InvoiceItemMinOrderByAggregateInput
    _sum?: InvoiceItemSumOrderByAggregateInput
  }

  export type InvoiceItemScalarWhereWithAggregatesInput = {
    AND?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    OR?: InvoiceItemScalarWhereWithAggregatesInput[]
    NOT?: InvoiceItemScalarWhereWithAggregatesInput | InvoiceItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InvoiceItem"> | number
    invoiceId?: IntWithAggregatesFilter<"InvoiceItem"> | number
    cafeProductId?: IntNullableWithAggregatesFilter<"InvoiceItem"> | number | null
    restaurantProductId?: IntNullableWithAggregatesFilter<"InvoiceItem"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"InvoiceItem"> | number | null
    quantity?: IntWithAggregatesFilter<"InvoiceItem"> | number
    price?: FloatWithAggregatesFilter<"InvoiceItem"> | number
    total?: FloatWithAggregatesFilter<"InvoiceItem"> | number
  }

  export type UserCreateInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenCreateNestedManyWithoutUserInput
    myRewards?: MyRewardCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    role: $Enums.Role
    page: string
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: number
    role: $Enums.Role
    page: string
  }

  export type RolePermissionUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    page?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    page?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionCreateManyInput = {
    id?: number
    role: $Enums.Role
    page: string
  }

  export type RolePermissionUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    page?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    page?: StringFieldUpdateOperationsInput | string
  }

  export type ResetPasswordTokenCreateInput = {
    randomCode: number
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutResetPasswordTokensInput
  }

  export type ResetPasswordTokenUncheckedCreateInput = {
    id?: number
    userId: number
    randomCode: number
    token: string
    expiresAt: Date | string
  }

  export type ResetPasswordTokenUpdateInput = {
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutResetPasswordTokensNestedInput
  }

  export type ResetPasswordTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordTokenCreateManyInput = {
    id?: number
    userId: number
    randomCode: number
    token: string
    expiresAt: Date | string
  }

  export type ResetPasswordTokenUpdateManyMutationInput = {
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemCreateNestedManyWithoutCategoryInput
    cafeProducts?: CafeProductCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemUncheckedCreateNestedManyWithoutCategoryInput
    cafeProducts?: CafeProductUncheckedCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUpdateManyWithoutCategoryNestedInput
    cafeProducts?: CafeProductUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUncheckedUpdateManyWithoutCategoryNestedInput
    cafeProducts?: CafeProductUncheckedUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CafeProductCreateInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutCafeProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUncheckedCreateInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUpdateInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCafeProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductCreateManyInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
  }

  export type CafeProductUpdateManyMutationInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CafeProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RestaurantProductCreateInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutRestaurantProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUncheckedCreateInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUpdateInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutRestaurantProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductCreateManyInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
  }

  export type RestaurantProductUpdateManyMutationInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RewardCreateInput = {
    name: string
    costPoints: number
    description?: string | null
  }

  export type RewardUncheckedCreateInput = {
    id?: number
    name: string
    costPoints: number
    description?: string | null
  }

  export type RewardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    costPoints?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    costPoints?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardCreateManyInput = {
    id?: number
    name: string
    costPoints: number
    description?: string | null
  }

  export type RewardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    costPoints?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RewardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    costPoints?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MyRewardCreateInput = {
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
    user: UserCreateNestedOneWithoutMyRewardsInput
    cafeProduct?: CafeProductCreateNestedOneWithoutMyRewardsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutMyRewardsInput
  }

  export type MyRewardUncheckedCreateInput = {
    id?: number
    userId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type MyRewardUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMyRewardsNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutMyRewardsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutMyRewardsNestedInput
  }

  export type MyRewardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MyRewardCreateManyInput = {
    id?: number
    userId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type MyRewardUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MyRewardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateInput = {
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    status?: $Enums.TransactionStatus
    synced?: boolean
    cafeProduct?: CafeProductCreateNestedOneWithoutTransactionsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
    cafeProduct?: CafeProductUpdateOneWithoutTransactionsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionCreateManyInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SettingsCreateInput = {
    enTitle?: string | null
    arTitle?: string | null
    enDescription?: string | null
    arDescription?: string | null
    imgUrl?: string | null
    timezone?: string
    enCurrency: string
    arCurrency: string
    usdToIqd?: number
    pointsPerDollar?: number
    pointsPerIQD?: number
    printerType?: $Enums.PrinterType
    printerIp?: string | null
    port?: number | null
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type SettingsUncheckedCreateInput = {
    id?: number
    userId: number
    enTitle?: string | null
    arTitle?: string | null
    enDescription?: string | null
    arDescription?: string | null
    imgUrl?: string | null
    timezone?: string
    enCurrency: string
    arCurrency: string
    usdToIqd?: number
    pointsPerDollar?: number
    pointsPerIQD?: number
    printerType?: $Enums.PrinterType
    printerIp?: string | null
    port?: number | null
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: number
    userId: number
    enTitle?: string | null
    arTitle?: string | null
    enDescription?: string | null
    arDescription?: string | null
    imgUrl?: string | null
    timezone?: string
    enCurrency: string
    arCurrency: string
    usdToIqd?: number
    pointsPerDollar?: number
    pointsPerIQD?: number
    printerType?: $Enums.PrinterType
    printerIp?: string | null
    port?: number | null
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    user?: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    transaction?: TransactionCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: number
    userId?: number | null
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUpdateInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    transaction?: TransactionUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceCreateManyInput = {
    id?: number
    userId?: number | null
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
  }

  export type InvoiceUpdateManyMutationInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceItemCreateInput = {
    quantity?: number
    price: number
    total: number
    category?: CategoryCreateNestedOneWithoutInvoiceItemInput
    invoice: InvoiceCreateNestedOneWithoutItemsInput
    cafeProduct?: CafeProductCreateNestedOneWithoutInvoiceInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceItemUncheckedCreateInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutInvoiceItemNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutInvoiceNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemCreateManyInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ResetPasswordTokenListRelationFilter = {
    every?: ResetPasswordTokenWhereInput
    some?: ResetPasswordTokenWhereInput
    none?: ResetPasswordTokenWhereInput
  }

  export type MyRewardListRelationFilter = {
    every?: MyRewardWhereInput
    some?: MyRewardWhereInput
    none?: MyRewardWhereInput
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResetPasswordTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyRewardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    points?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    points?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    points?: SortOrder
    qrCode?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolePermissionRolePageCompoundUniqueInput = {
    role: $Enums.Role
    page: string
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    page?: SortOrder
  }

  export type RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    page?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    page?: SortOrder
  }

  export type RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ResetPasswordTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type ResetPasswordTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
  }

  export type ResetPasswordTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type ResetPasswordTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
  }

  export type ResetPasswordTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    randomCode?: SortOrder
  }

  export type EnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type InvoiceItemListRelationFilter = {
    every?: InvoiceItemWhereInput
    some?: InvoiceItemWhereInput
    none?: InvoiceItemWhereInput
  }

  export type CafeProductListRelationFilter = {
    every?: CafeProductWhereInput
    some?: CafeProductWhereInput
    none?: CafeProductWhereInput
  }

  export type RestaurantProductListRelationFilter = {
    every?: RestaurantProductWhereInput
    some?: RestaurantProductWhereInput
    none?: RestaurantProductWhereInput
  }

  export type InvoiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CafeProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CafeProductCountOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type CafeProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
    categoryId?: SortOrder
  }

  export type CafeProductMaxOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type CafeProductMinOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type CafeProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
    categoryId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RestaurantProductCountOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type RestaurantProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
    categoryId?: SortOrder
  }

  export type RestaurantProductMaxOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type RestaurantProductMinOrderByAggregateInput = {
    id?: SortOrder
    enName?: SortOrder
    arName?: SortOrder
    image?: SortOrder
    price?: SortOrder
    points?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type RestaurantProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
    categoryId?: SortOrder
  }

  export type RewardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    costPoints?: SortOrder
    description?: SortOrder
  }

  export type RewardAvgOrderByAggregateInput = {
    id?: SortOrder
    costPoints?: SortOrder
  }

  export type RewardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    costPoints?: SortOrder
    description?: SortOrder
  }

  export type RewardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    costPoints?: SortOrder
    description?: SortOrder
  }

  export type RewardSumOrderByAggregateInput = {
    id?: SortOrder
    costPoints?: SortOrder
  }

  export type EnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CafeProductNullableScalarRelationFilter = {
    is?: CafeProductWhereInput | null
    isNot?: CafeProductWhereInput | null
  }

  export type RestaurantProductNullableScalarRelationFilter = {
    is?: RestaurantProductWhereInput | null
    isNot?: RestaurantProductWhereInput | null
  }

  export type MyRewardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    status?: SortOrder
    date?: SortOrder
    note?: SortOrder
    synced?: SortOrder
  }

  export type MyRewardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    points?: SortOrder
  }

  export type MyRewardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    status?: SortOrder
    date?: SortOrder
    note?: SortOrder
    synced?: SortOrder
  }

  export type MyRewardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    points?: SortOrder
    type?: SortOrder
    status?: SortOrder
    date?: SortOrder
    note?: SortOrder
    synced?: SortOrder
  }

  export type MyRewardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    points?: SortOrder
  }

  export type EnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type InvoiceNullableScalarRelationFilter = {
    is?: InvoiceWhereInput | null
    isNot?: InvoiceWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    points?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    synced?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    invoiceId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    points?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    synced?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    points?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    invoiceId?: SortOrder
    status?: SortOrder
    synced?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    userId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    invoiceId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type EnumPrinterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PrinterType | EnumPrinterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrinterTypeFilter<$PrismaModel> | $Enums.PrinterType
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enTitle?: SortOrder
    arTitle?: SortOrder
    enDescription?: SortOrder
    arDescription?: SortOrder
    imgUrl?: SortOrder
    timezone?: SortOrder
    enCurrency?: SortOrder
    arCurrency?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    printerType?: SortOrder
    printerIp?: SortOrder
    port?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    port?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enTitle?: SortOrder
    arTitle?: SortOrder
    enDescription?: SortOrder
    arDescription?: SortOrder
    imgUrl?: SortOrder
    timezone?: SortOrder
    enCurrency?: SortOrder
    arCurrency?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    printerType?: SortOrder
    printerIp?: SortOrder
    port?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enTitle?: SortOrder
    arTitle?: SortOrder
    enDescription?: SortOrder
    arDescription?: SortOrder
    imgUrl?: SortOrder
    timezone?: SortOrder
    enCurrency?: SortOrder
    arCurrency?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    printerType?: SortOrder
    printerIp?: SortOrder
    port?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usdToIqd?: SortOrder
    pointsPerDollar?: SortOrder
    pointsPerIQD?: SortOrder
    port?: SortOrder
  }

  export type EnumPrinterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrinterType | EnumPrinterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrinterTypeWithAggregatesFilter<$PrismaModel> | $Enums.PrinterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrinterTypeFilter<$PrismaModel>
    _max?: NestedEnumPrinterTypeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    points?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    synced?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    points?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    points?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    synced?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    points?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    synced?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalPrice?: SortOrder
    discount?: SortOrder
    points?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type InvoiceScalarRelationFilter = {
    is?: InvoiceWhereInput
    isNot?: InvoiceWhereInput
  }

  export type InvoiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemAvgOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type InvoiceItemSumOrderByAggregateInput = {
    id?: SortOrder
    invoiceId?: SortOrder
    cafeProductId?: SortOrder
    restaurantProductId?: SortOrder
    categoryId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    total?: SortOrder
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ResetPasswordTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput> | ResetPasswordTokenCreateWithoutUserInput[] | ResetPasswordTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordTokenCreateOrConnectWithoutUserInput | ResetPasswordTokenCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordTokenCreateManyUserInputEnvelope
    connect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
  }

  export type MyRewardCreateNestedManyWithoutUserInput = {
    create?: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput> | MyRewardCreateWithoutUserInput[] | MyRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutUserInput | MyRewardCreateOrConnectWithoutUserInput[]
    createMany?: MyRewardCreateManyUserInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type SettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput> | ResetPasswordTokenCreateWithoutUserInput[] | ResetPasswordTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordTokenCreateOrConnectWithoutUserInput | ResetPasswordTokenCreateOrConnectWithoutUserInput[]
    createMany?: ResetPasswordTokenCreateManyUserInputEnvelope
    connect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
  }

  export type MyRewardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput> | MyRewardCreateWithoutUserInput[] | MyRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutUserInput | MyRewardCreateOrConnectWithoutUserInput[]
    createMany?: MyRewardCreateManyUserInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    connect?: SettingsWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ResetPasswordTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput> | ResetPasswordTokenCreateWithoutUserInput[] | ResetPasswordTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordTokenCreateOrConnectWithoutUserInput | ResetPasswordTokenCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput | ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordTokenCreateManyUserInputEnvelope
    set?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    disconnect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    delete?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    connect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    update?: ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput | ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordTokenUpdateManyWithWhereWithoutUserInput | ResetPasswordTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordTokenScalarWhereInput | ResetPasswordTokenScalarWhereInput[]
  }

  export type MyRewardUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput> | MyRewardCreateWithoutUserInput[] | MyRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutUserInput | MyRewardCreateOrConnectWithoutUserInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutUserInput | MyRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyRewardCreateManyUserInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutUserInput | MyRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutUserInput | MyRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type SettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput> | ResetPasswordTokenCreateWithoutUserInput[] | ResetPasswordTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResetPasswordTokenCreateOrConnectWithoutUserInput | ResetPasswordTokenCreateOrConnectWithoutUserInput[]
    upsert?: ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput | ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResetPasswordTokenCreateManyUserInputEnvelope
    set?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    disconnect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    delete?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    connect?: ResetPasswordTokenWhereUniqueInput | ResetPasswordTokenWhereUniqueInput[]
    update?: ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput | ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResetPasswordTokenUpdateManyWithWhereWithoutUserInput | ResetPasswordTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResetPasswordTokenScalarWhereInput | ResetPasswordTokenScalarWhereInput[]
  }

  export type MyRewardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput> | MyRewardCreateWithoutUserInput[] | MyRewardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutUserInput | MyRewardCreateOrConnectWithoutUserInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutUserInput | MyRewardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyRewardCreateManyUserInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutUserInput | MyRewardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutUserInput | MyRewardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type SettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutUserInput
    upsert?: SettingsUpsertWithoutUserInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutUserInput, SettingsUpdateWithoutUserInput>, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput> | InvoiceCreateWithoutUserInput[] | InvoiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutUserInput | InvoiceCreateOrConnectWithoutUserInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutUserInput | InvoiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutUserInput | InvoiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutUserInput | InvoiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutResetPasswordTokensInput = {
    create?: XOR<UserCreateWithoutResetPasswordTokensInput, UserUncheckedCreateWithoutResetPasswordTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutResetPasswordTokensNestedInput = {
    create?: XOR<UserCreateWithoutResetPasswordTokensInput, UserUncheckedCreateWithoutResetPasswordTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutResetPasswordTokensInput
    upsert?: UserUpsertWithoutResetPasswordTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResetPasswordTokensInput, UserUpdateWithoutResetPasswordTokensInput>, UserUncheckedUpdateWithoutResetPasswordTokensInput>
  }

  export type InvoiceItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput> | InvoiceItemCreateWithoutCategoryInput[] | InvoiceItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCategoryInput | InvoiceItemCreateOrConnectWithoutCategoryInput[]
    createMany?: InvoiceItemCreateManyCategoryInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type CafeProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput> | CafeProductCreateWithoutCategoryInput[] | CafeProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CafeProductCreateOrConnectWithoutCategoryInput | CafeProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CafeProductCreateManyCategoryInputEnvelope
    connect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
  }

  export type RestaurantProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput> | RestaurantProductCreateWithoutCategoryInput[] | RestaurantProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutCategoryInput | RestaurantProductCreateOrConnectWithoutCategoryInput[]
    createMany?: RestaurantProductCreateManyCategoryInputEnvelope
    connect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput> | InvoiceItemCreateWithoutCategoryInput[] | InvoiceItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCategoryInput | InvoiceItemCreateOrConnectWithoutCategoryInput[]
    createMany?: InvoiceItemCreateManyCategoryInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type CafeProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput> | CafeProductCreateWithoutCategoryInput[] | CafeProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CafeProductCreateOrConnectWithoutCategoryInput | CafeProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CafeProductCreateManyCategoryInputEnvelope
    connect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
  }

  export type RestaurantProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput> | RestaurantProductCreateWithoutCategoryInput[] | RestaurantProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutCategoryInput | RestaurantProductCreateOrConnectWithoutCategoryInput[]
    createMany?: RestaurantProductCreateManyCategoryInputEnvelope
    connect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
  }

  export type EnumCategoryTypeFieldUpdateOperationsInput = {
    set?: $Enums.CategoryType
  }

  export type InvoiceItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput> | InvoiceItemCreateWithoutCategoryInput[] | InvoiceItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCategoryInput | InvoiceItemCreateOrConnectWithoutCategoryInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutCategoryInput | InvoiceItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InvoiceItemCreateManyCategoryInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutCategoryInput | InvoiceItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutCategoryInput | InvoiceItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type CafeProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput> | CafeProductCreateWithoutCategoryInput[] | CafeProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CafeProductCreateOrConnectWithoutCategoryInput | CafeProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CafeProductUpsertWithWhereUniqueWithoutCategoryInput | CafeProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CafeProductCreateManyCategoryInputEnvelope
    set?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    disconnect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    delete?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    connect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    update?: CafeProductUpdateWithWhereUniqueWithoutCategoryInput | CafeProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CafeProductUpdateManyWithWhereWithoutCategoryInput | CafeProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CafeProductScalarWhereInput | CafeProductScalarWhereInput[]
  }

  export type RestaurantProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput> | RestaurantProductCreateWithoutCategoryInput[] | RestaurantProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutCategoryInput | RestaurantProductCreateOrConnectWithoutCategoryInput[]
    upsert?: RestaurantProductUpsertWithWhereUniqueWithoutCategoryInput | RestaurantProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RestaurantProductCreateManyCategoryInputEnvelope
    set?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    disconnect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    delete?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    connect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    update?: RestaurantProductUpdateWithWhereUniqueWithoutCategoryInput | RestaurantProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RestaurantProductUpdateManyWithWhereWithoutCategoryInput | RestaurantProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RestaurantProductScalarWhereInput | RestaurantProductScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput> | InvoiceItemCreateWithoutCategoryInput[] | InvoiceItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCategoryInput | InvoiceItemCreateOrConnectWithoutCategoryInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutCategoryInput | InvoiceItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: InvoiceItemCreateManyCategoryInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutCategoryInput | InvoiceItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutCategoryInput | InvoiceItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type CafeProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput> | CafeProductCreateWithoutCategoryInput[] | CafeProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CafeProductCreateOrConnectWithoutCategoryInput | CafeProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CafeProductUpsertWithWhereUniqueWithoutCategoryInput | CafeProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CafeProductCreateManyCategoryInputEnvelope
    set?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    disconnect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    delete?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    connect?: CafeProductWhereUniqueInput | CafeProductWhereUniqueInput[]
    update?: CafeProductUpdateWithWhereUniqueWithoutCategoryInput | CafeProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CafeProductUpdateManyWithWhereWithoutCategoryInput | CafeProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CafeProductScalarWhereInput | CafeProductScalarWhereInput[]
  }

  export type RestaurantProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput> | RestaurantProductCreateWithoutCategoryInput[] | RestaurantProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutCategoryInput | RestaurantProductCreateOrConnectWithoutCategoryInput[]
    upsert?: RestaurantProductUpsertWithWhereUniqueWithoutCategoryInput | RestaurantProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: RestaurantProductCreateManyCategoryInputEnvelope
    set?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    disconnect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    delete?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    connect?: RestaurantProductWhereUniqueInput | RestaurantProductWhereUniqueInput[]
    update?: RestaurantProductUpdateWithWhereUniqueWithoutCategoryInput | RestaurantProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: RestaurantProductUpdateManyWithWhereWithoutCategoryInput | RestaurantProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: RestaurantProductScalarWhereInput | RestaurantProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutCafeProductsInput = {
    create?: XOR<CategoryCreateWithoutCafeProductsInput, CategoryUncheckedCreateWithoutCafeProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCafeProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MyRewardCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput> | MyRewardCreateWithoutCafeProductInput[] | MyRewardUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutCafeProductInput | MyRewardCreateOrConnectWithoutCafeProductInput[]
    createMany?: MyRewardCreateManyCafeProductInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput> | TransactionCreateWithoutCafeProductInput[] | TransactionUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCafeProductInput | TransactionCreateOrConnectWithoutCafeProductInput[]
    createMany?: TransactionCreateManyCafeProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type InvoiceItemCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput> | InvoiceItemCreateWithoutCafeProductInput[] | InvoiceItemUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCafeProductInput | InvoiceItemCreateOrConnectWithoutCafeProductInput[]
    createMany?: InvoiceItemCreateManyCafeProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type MyRewardUncheckedCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput> | MyRewardCreateWithoutCafeProductInput[] | MyRewardUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutCafeProductInput | MyRewardCreateOrConnectWithoutCafeProductInput[]
    createMany?: MyRewardCreateManyCafeProductInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput> | TransactionCreateWithoutCafeProductInput[] | TransactionUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCafeProductInput | TransactionCreateOrConnectWithoutCafeProductInput[]
    createMany?: TransactionCreateManyCafeProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutCafeProductInput = {
    create?: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput> | InvoiceItemCreateWithoutCafeProductInput[] | InvoiceItemUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCafeProductInput | InvoiceItemCreateOrConnectWithoutCafeProductInput[]
    createMany?: InvoiceItemCreateManyCafeProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutCafeProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutCafeProductsInput, CategoryUncheckedCreateWithoutCafeProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCafeProductsInput
    upsert?: CategoryUpsertWithoutCafeProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCafeProductsInput, CategoryUpdateWithoutCafeProductsInput>, CategoryUncheckedUpdateWithoutCafeProductsInput>
  }

  export type MyRewardUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput> | MyRewardCreateWithoutCafeProductInput[] | MyRewardUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutCafeProductInput | MyRewardCreateOrConnectWithoutCafeProductInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutCafeProductInput | MyRewardUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: MyRewardCreateManyCafeProductInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutCafeProductInput | MyRewardUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutCafeProductInput | MyRewardUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput> | TransactionCreateWithoutCafeProductInput[] | TransactionUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCafeProductInput | TransactionCreateOrConnectWithoutCafeProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCafeProductInput | TransactionUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: TransactionCreateManyCafeProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCafeProductInput | TransactionUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCafeProductInput | TransactionUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InvoiceItemUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput> | InvoiceItemCreateWithoutCafeProductInput[] | InvoiceItemUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCafeProductInput | InvoiceItemCreateOrConnectWithoutCafeProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutCafeProductInput | InvoiceItemUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: InvoiceItemCreateManyCafeProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutCafeProductInput | InvoiceItemUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutCafeProductInput | InvoiceItemUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MyRewardUncheckedUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput> | MyRewardCreateWithoutCafeProductInput[] | MyRewardUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutCafeProductInput | MyRewardCreateOrConnectWithoutCafeProductInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutCafeProductInput | MyRewardUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: MyRewardCreateManyCafeProductInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutCafeProductInput | MyRewardUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutCafeProductInput | MyRewardUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput> | TransactionCreateWithoutCafeProductInput[] | TransactionUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCafeProductInput | TransactionCreateOrConnectWithoutCafeProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCafeProductInput | TransactionUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: TransactionCreateManyCafeProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCafeProductInput | TransactionUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCafeProductInput | TransactionUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutCafeProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput> | InvoiceItemCreateWithoutCafeProductInput[] | InvoiceItemUncheckedCreateWithoutCafeProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutCafeProductInput | InvoiceItemCreateOrConnectWithoutCafeProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutCafeProductInput | InvoiceItemUpsertWithWhereUniqueWithoutCafeProductInput[]
    createMany?: InvoiceItemCreateManyCafeProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutCafeProductInput | InvoiceItemUpdateWithWhereUniqueWithoutCafeProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutCafeProductInput | InvoiceItemUpdateManyWithWhereWithoutCafeProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutRestaurantProductsInput = {
    create?: XOR<CategoryCreateWithoutRestaurantProductsInput, CategoryUncheckedCreateWithoutRestaurantProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MyRewardCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput> | MyRewardCreateWithoutRestaurantProductInput[] | MyRewardUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutRestaurantProductInput | MyRewardCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: MyRewardCreateManyRestaurantProductInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput> | TransactionCreateWithoutRestaurantProductInput[] | TransactionUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRestaurantProductInput | TransactionCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: TransactionCreateManyRestaurantProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type InvoiceItemCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput> | InvoiceItemCreateWithoutRestaurantProductInput[] | InvoiceItemUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutRestaurantProductInput | InvoiceItemCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: InvoiceItemCreateManyRestaurantProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type MyRewardUncheckedCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput> | MyRewardCreateWithoutRestaurantProductInput[] | MyRewardUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutRestaurantProductInput | MyRewardCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: MyRewardCreateManyRestaurantProductInputEnvelope
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput> | TransactionCreateWithoutRestaurantProductInput[] | TransactionUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRestaurantProductInput | TransactionCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: TransactionCreateManyRestaurantProductInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutRestaurantProductInput = {
    create?: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput> | InvoiceItemCreateWithoutRestaurantProductInput[] | InvoiceItemUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutRestaurantProductInput | InvoiceItemCreateOrConnectWithoutRestaurantProductInput[]
    createMany?: InvoiceItemCreateManyRestaurantProductInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutRestaurantProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutRestaurantProductsInput, CategoryUncheckedCreateWithoutRestaurantProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutRestaurantProductsInput
    upsert?: CategoryUpsertWithoutRestaurantProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutRestaurantProductsInput, CategoryUpdateWithoutRestaurantProductsInput>, CategoryUncheckedUpdateWithoutRestaurantProductsInput>
  }

  export type MyRewardUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput> | MyRewardCreateWithoutRestaurantProductInput[] | MyRewardUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutRestaurantProductInput | MyRewardCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutRestaurantProductInput | MyRewardUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: MyRewardCreateManyRestaurantProductInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutRestaurantProductInput | MyRewardUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutRestaurantProductInput | MyRewardUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput> | TransactionCreateWithoutRestaurantProductInput[] | TransactionUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRestaurantProductInput | TransactionCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRestaurantProductInput | TransactionUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: TransactionCreateManyRestaurantProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRestaurantProductInput | TransactionUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRestaurantProductInput | TransactionUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InvoiceItemUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput> | InvoiceItemCreateWithoutRestaurantProductInput[] | InvoiceItemUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutRestaurantProductInput | InvoiceItemCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutRestaurantProductInput | InvoiceItemUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: InvoiceItemCreateManyRestaurantProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutRestaurantProductInput | InvoiceItemUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutRestaurantProductInput | InvoiceItemUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type MyRewardUncheckedUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput> | MyRewardCreateWithoutRestaurantProductInput[] | MyRewardUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: MyRewardCreateOrConnectWithoutRestaurantProductInput | MyRewardCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: MyRewardUpsertWithWhereUniqueWithoutRestaurantProductInput | MyRewardUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: MyRewardCreateManyRestaurantProductInputEnvelope
    set?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    disconnect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    delete?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    connect?: MyRewardWhereUniqueInput | MyRewardWhereUniqueInput[]
    update?: MyRewardUpdateWithWhereUniqueWithoutRestaurantProductInput | MyRewardUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: MyRewardUpdateManyWithWhereWithoutRestaurantProductInput | MyRewardUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput> | TransactionCreateWithoutRestaurantProductInput[] | TransactionUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutRestaurantProductInput | TransactionCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutRestaurantProductInput | TransactionUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: TransactionCreateManyRestaurantProductInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutRestaurantProductInput | TransactionUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutRestaurantProductInput | TransactionUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type InvoiceItemUncheckedUpdateManyWithoutRestaurantProductNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput> | InvoiceItemCreateWithoutRestaurantProductInput[] | InvoiceItemUncheckedCreateWithoutRestaurantProductInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutRestaurantProductInput | InvoiceItemCreateOrConnectWithoutRestaurantProductInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutRestaurantProductInput | InvoiceItemUpsertWithWhereUniqueWithoutRestaurantProductInput[]
    createMany?: InvoiceItemCreateManyRestaurantProductInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutRestaurantProductInput | InvoiceItemUpdateWithWhereUniqueWithoutRestaurantProductInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutRestaurantProductInput | InvoiceItemUpdateManyWithWhereWithoutRestaurantProductInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMyRewardsInput = {
    create?: XOR<UserCreateWithoutMyRewardsInput, UserUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyRewardsInput
    connect?: UserWhereUniqueInput
  }

  export type CafeProductCreateNestedOneWithoutMyRewardsInput = {
    create?: XOR<CafeProductCreateWithoutMyRewardsInput, CafeProductUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutMyRewardsInput
    connect?: CafeProductWhereUniqueInput
  }

  export type RestaurantProductCreateNestedOneWithoutMyRewardsInput = {
    create?: XOR<RestaurantProductCreateWithoutMyRewardsInput, RestaurantProductUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutMyRewardsInput
    connect?: RestaurantProductWhereUniqueInput
  }

  export type EnumRewardStatusFieldUpdateOperationsInput = {
    set?: $Enums.RewardStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMyRewardsNestedInput = {
    create?: XOR<UserCreateWithoutMyRewardsInput, UserUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyRewardsInput
    upsert?: UserUpsertWithoutMyRewardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyRewardsInput, UserUpdateWithoutMyRewardsInput>, UserUncheckedUpdateWithoutMyRewardsInput>
  }

  export type CafeProductUpdateOneWithoutMyRewardsNestedInput = {
    create?: XOR<CafeProductCreateWithoutMyRewardsInput, CafeProductUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutMyRewardsInput
    upsert?: CafeProductUpsertWithoutMyRewardsInput
    disconnect?: CafeProductWhereInput | boolean
    delete?: CafeProductWhereInput | boolean
    connect?: CafeProductWhereUniqueInput
    update?: XOR<XOR<CafeProductUpdateToOneWithWhereWithoutMyRewardsInput, CafeProductUpdateWithoutMyRewardsInput>, CafeProductUncheckedUpdateWithoutMyRewardsInput>
  }

  export type RestaurantProductUpdateOneWithoutMyRewardsNestedInput = {
    create?: XOR<RestaurantProductCreateWithoutMyRewardsInput, RestaurantProductUncheckedCreateWithoutMyRewardsInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutMyRewardsInput
    upsert?: RestaurantProductUpsertWithoutMyRewardsInput
    disconnect?: RestaurantProductWhereInput | boolean
    delete?: RestaurantProductWhereInput | boolean
    connect?: RestaurantProductWhereUniqueInput
    update?: XOR<XOR<RestaurantProductUpdateToOneWithWhereWithoutMyRewardsInput, RestaurantProductUpdateWithoutMyRewardsInput>, RestaurantProductUncheckedUpdateWithoutMyRewardsInput>
  }

  export type CafeProductCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CafeProductCreateWithoutTransactionsInput, CafeProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutTransactionsInput
    connect?: CafeProductWhereUniqueInput
  }

  export type RestaurantProductCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<RestaurantProductCreateWithoutTransactionsInput, RestaurantProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutTransactionsInput
    connect?: RestaurantProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutTransactionInput = {
    create?: XOR<InvoiceCreateWithoutTransactionInput, InvoiceUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionInput
    connect?: InvoiceWhereUniqueInput
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type CafeProductUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<CafeProductCreateWithoutTransactionsInput, CafeProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutTransactionsInput
    upsert?: CafeProductUpsertWithoutTransactionsInput
    disconnect?: CafeProductWhereInput | boolean
    delete?: CafeProductWhereInput | boolean
    connect?: CafeProductWhereUniqueInput
    update?: XOR<XOR<CafeProductUpdateToOneWithWhereWithoutTransactionsInput, CafeProductUpdateWithoutTransactionsInput>, CafeProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type RestaurantProductUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<RestaurantProductCreateWithoutTransactionsInput, RestaurantProductUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutTransactionsInput
    upsert?: RestaurantProductUpsertWithoutTransactionsInput
    disconnect?: RestaurantProductWhereInput | boolean
    delete?: RestaurantProductWhereInput | boolean
    connect?: RestaurantProductWhereUniqueInput
    update?: XOR<XOR<RestaurantProductUpdateToOneWithWhereWithoutTransactionsInput, RestaurantProductUpdateWithoutTransactionsInput>, RestaurantProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type InvoiceUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<InvoiceCreateWithoutTransactionInput, InvoiceUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutTransactionInput
    upsert?: InvoiceUpsertWithoutTransactionInput
    disconnect?: InvoiceWhereInput | boolean
    delete?: InvoiceWhereInput | boolean
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutTransactionInput, InvoiceUpdateWithoutTransactionInput>, InvoiceUncheckedUpdateWithoutTransactionInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPrinterTypeFieldUpdateOperationsInput = {
    set?: $Enums.PrinterType
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceItemCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type TransactionCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput
    connect?: TransactionWhereUniqueInput
  }

  export type InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput
    connect?: TransactionWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvoicesInput, UserUpdateWithoutInvoicesInput>, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type InvoiceItemUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type TransactionUpdateOneWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput
    upsert?: TransactionUpsertWithoutInvoiceInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutInvoiceInput, TransactionUpdateWithoutInvoiceInput>, TransactionUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput> | InvoiceItemCreateWithoutInvoiceInput[] | InvoiceItemUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: InvoiceItemCreateOrConnectWithoutInvoiceInput | InvoiceItemCreateOrConnectWithoutInvoiceInput[]
    upsert?: InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: InvoiceItemCreateManyInvoiceInputEnvelope
    set?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    disconnect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    delete?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    connect?: InvoiceItemWhereUniqueInput | InvoiceItemWhereUniqueInput[]
    update?: InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput | InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: InvoiceItemUpdateManyWithWhereWithoutInvoiceInput | InvoiceItemUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateOneWithoutInvoiceNestedInput = {
    create?: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutInvoiceInput
    upsert?: TransactionUpsertWithoutInvoiceInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutInvoiceInput, TransactionUpdateWithoutInvoiceInput>, TransactionUncheckedUpdateWithoutInvoiceInput>
  }

  export type CategoryCreateNestedOneWithoutInvoiceItemInput = {
    create?: XOR<CategoryCreateWithoutInvoiceItemInput, CategoryUncheckedCreateWithoutInvoiceItemInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutInvoiceItemInput
    connect?: CategoryWhereUniqueInput
  }

  export type InvoiceCreateNestedOneWithoutItemsInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
  }

  export type CafeProductCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<CafeProductCreateWithoutInvoiceInput, CafeProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutInvoiceInput
    connect?: CafeProductWhereUniqueInput
  }

  export type RestaurantProductCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<RestaurantProductCreateWithoutInvoiceInput, RestaurantProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutInvoiceInput
    connect?: RestaurantProductWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutInvoiceItemNestedInput = {
    create?: XOR<CategoryCreateWithoutInvoiceItemInput, CategoryUncheckedCreateWithoutInvoiceItemInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutInvoiceItemInput
    upsert?: CategoryUpsertWithoutInvoiceItemInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutInvoiceItemInput, CategoryUpdateWithoutInvoiceItemInput>, CategoryUncheckedUpdateWithoutInvoiceItemInput>
  }

  export type InvoiceUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    connectOrCreate?: InvoiceCreateOrConnectWithoutItemsInput
    upsert?: InvoiceUpsertWithoutItemsInput
    connect?: InvoiceWhereUniqueInput
    update?: XOR<XOR<InvoiceUpdateToOneWithWhereWithoutItemsInput, InvoiceUpdateWithoutItemsInput>, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type CafeProductUpdateOneWithoutInvoiceNestedInput = {
    create?: XOR<CafeProductCreateWithoutInvoiceInput, CafeProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: CafeProductCreateOrConnectWithoutInvoiceInput
    upsert?: CafeProductUpsertWithoutInvoiceInput
    disconnect?: CafeProductWhereInput | boolean
    delete?: CafeProductWhereInput | boolean
    connect?: CafeProductWhereUniqueInput
    update?: XOR<XOR<CafeProductUpdateToOneWithWhereWithoutInvoiceInput, CafeProductUpdateWithoutInvoiceInput>, CafeProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type RestaurantProductUpdateOneWithoutInvoiceNestedInput = {
    create?: XOR<RestaurantProductCreateWithoutInvoiceInput, RestaurantProductUncheckedCreateWithoutInvoiceInput>
    connectOrCreate?: RestaurantProductCreateOrConnectWithoutInvoiceInput
    upsert?: RestaurantProductUpsertWithoutInvoiceInput
    disconnect?: RestaurantProductWhereInput | boolean
    delete?: RestaurantProductWhereInput | boolean
    connect?: RestaurantProductWhereUniqueInput
    update?: XOR<XOR<RestaurantProductUpdateToOneWithWhereWithoutInvoiceInput, RestaurantProductUpdateWithoutInvoiceInput>, RestaurantProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeFilter<$PrismaModel> | $Enums.CategoryType
  }

  export type NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryType | EnumCategoryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryType[] | ListEnumCategoryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryTypeWithAggregatesFilter<$PrismaModel> | $Enums.CategoryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryTypeFilter<$PrismaModel>
    _max?: NestedEnumCategoryTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRewardStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusFilter<$PrismaModel> | $Enums.RewardStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RewardStatus | EnumRewardStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RewardStatus[] | ListEnumRewardStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRewardStatusWithAggregatesFilter<$PrismaModel> | $Enums.RewardStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRewardStatusFilter<$PrismaModel>
    _max?: NestedEnumRewardStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPrinterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PrinterType | EnumPrinterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrinterTypeFilter<$PrismaModel> | $Enums.PrinterType
  }

  export type NestedEnumPrinterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrinterType | EnumPrinterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrinterType[] | ListEnumPrinterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrinterTypeWithAggregatesFilter<$PrismaModel> | $Enums.PrinterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrinterTypeFilter<$PrismaModel>
    _max?: NestedEnumPrinterTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutUserInput = {
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    status?: $Enums.TransactionStatus
    synced?: boolean
    cafeProduct?: CafeProductCreateNestedOneWithoutTransactionsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    cafeProductId?: number | null
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResetPasswordTokenCreateWithoutUserInput = {
    randomCode: number
    token: string
    expiresAt: Date | string
  }

  export type ResetPasswordTokenUncheckedCreateWithoutUserInput = {
    id?: number
    randomCode: number
    token: string
    expiresAt: Date | string
  }

  export type ResetPasswordTokenCreateOrConnectWithoutUserInput = {
    where: ResetPasswordTokenWhereUniqueInput
    create: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordTokenCreateManyUserInputEnvelope = {
    data: ResetPasswordTokenCreateManyUserInput | ResetPasswordTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MyRewardCreateWithoutUserInput = {
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
    cafeProduct?: CafeProductCreateNestedOneWithoutMyRewardsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutMyRewardsInput
  }

  export type MyRewardUncheckedCreateWithoutUserInput = {
    id?: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type MyRewardCreateOrConnectWithoutUserInput = {
    where: MyRewardWhereUniqueInput
    create: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput>
  }

  export type MyRewardCreateManyUserInputEnvelope = {
    data: MyRewardCreateManyUserInput | MyRewardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutUserInput = {
    enTitle?: string | null
    arTitle?: string | null
    enDescription?: string | null
    arDescription?: string | null
    imgUrl?: string | null
    timezone?: string
    enCurrency: string
    arCurrency: string
    usdToIqd?: number
    pointsPerDollar?: number
    pointsPerIQD?: number
    printerType?: $Enums.PrinterType
    printerIp?: string | null
    port?: number | null
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateWithoutUserInput = {
    id?: number
    enTitle?: string | null
    arTitle?: string | null
    enDescription?: string | null
    arDescription?: string | null
    imgUrl?: string | null
    timezone?: string
    enCurrency: string
    arCurrency: string
    usdToIqd?: number
    pointsPerDollar?: number
    pointsPerIQD?: number
    printerType?: $Enums.PrinterType
    printerIp?: string | null
    port?: number | null
    updatedAt?: Date | string
  }

  export type SettingsCreateOrConnectWithoutUserInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateWithoutUserInput = {
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
    transaction?: TransactionCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: number
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: InvoiceCreateManyUserInput | InvoiceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: StringFilter<"Transaction"> | string
    currency?: JsonFilter<"Transaction">
    points?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    userId?: IntFilter<"Transaction"> | number
    cafeProductId?: IntNullableFilter<"Transaction"> | number | null
    restaurantProductId?: IntNullableFilter<"Transaction"> | number | null
    invoiceId?: IntNullableFilter<"Transaction"> | number | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    synced?: BoolFilter<"Transaction"> | boolean
  }

  export type ResetPasswordTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordTokenWhereUniqueInput
    update: XOR<ResetPasswordTokenUpdateWithoutUserInput, ResetPasswordTokenUncheckedUpdateWithoutUserInput>
    create: XOR<ResetPasswordTokenCreateWithoutUserInput, ResetPasswordTokenUncheckedCreateWithoutUserInput>
  }

  export type ResetPasswordTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetPasswordTokenWhereUniqueInput
    data: XOR<ResetPasswordTokenUpdateWithoutUserInput, ResetPasswordTokenUncheckedUpdateWithoutUserInput>
  }

  export type ResetPasswordTokenUpdateManyWithWhereWithoutUserInput = {
    where: ResetPasswordTokenScalarWhereInput
    data: XOR<ResetPasswordTokenUpdateManyMutationInput, ResetPasswordTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type ResetPasswordTokenScalarWhereInput = {
    AND?: ResetPasswordTokenScalarWhereInput | ResetPasswordTokenScalarWhereInput[]
    OR?: ResetPasswordTokenScalarWhereInput[]
    NOT?: ResetPasswordTokenScalarWhereInput | ResetPasswordTokenScalarWhereInput[]
    id?: IntFilter<"ResetPasswordToken"> | number
    userId?: IntFilter<"ResetPasswordToken"> | number
    randomCode?: IntFilter<"ResetPasswordToken"> | number
    token?: StringFilter<"ResetPasswordToken"> | string
    expiresAt?: DateTimeFilter<"ResetPasswordToken"> | Date | string
  }

  export type MyRewardUpsertWithWhereUniqueWithoutUserInput = {
    where: MyRewardWhereUniqueInput
    update: XOR<MyRewardUpdateWithoutUserInput, MyRewardUncheckedUpdateWithoutUserInput>
    create: XOR<MyRewardCreateWithoutUserInput, MyRewardUncheckedCreateWithoutUserInput>
  }

  export type MyRewardUpdateWithWhereUniqueWithoutUserInput = {
    where: MyRewardWhereUniqueInput
    data: XOR<MyRewardUpdateWithoutUserInput, MyRewardUncheckedUpdateWithoutUserInput>
  }

  export type MyRewardUpdateManyWithWhereWithoutUserInput = {
    where: MyRewardScalarWhereInput
    data: XOR<MyRewardUpdateManyMutationInput, MyRewardUncheckedUpdateManyWithoutUserInput>
  }

  export type MyRewardScalarWhereInput = {
    AND?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
    OR?: MyRewardScalarWhereInput[]
    NOT?: MyRewardScalarWhereInput | MyRewardScalarWhereInput[]
    id?: IntFilter<"MyReward"> | number
    userId?: IntFilter<"MyReward"> | number
    cafeProductId?: IntNullableFilter<"MyReward"> | number | null
    restaurantProductId?: IntNullableFilter<"MyReward"> | number | null
    points?: IntFilter<"MyReward"> | number
    type?: StringFilter<"MyReward"> | string
    status?: EnumRewardStatusFilter<"MyReward"> | $Enums.RewardStatus
    date?: DateTimeFilter<"MyReward"> | Date | string
    note?: StringNullableFilter<"MyReward"> | string | null
    synced?: BoolFilter<"MyReward"> | boolean
  }

  export type SettingsUpsertWithoutUserInput = {
    update: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
    create: XOR<SettingsCreateWithoutUserInput, SettingsUncheckedCreateWithoutUserInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutUserInput, SettingsUncheckedUpdateWithoutUserInput>
  }

  export type SettingsUpdateWithoutUserInput = {
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    enTitle?: NullableStringFieldUpdateOperationsInput | string | null
    arTitle?: NullableStringFieldUpdateOperationsInput | string | null
    enDescription?: NullableStringFieldUpdateOperationsInput | string | null
    arDescription?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    enCurrency?: StringFieldUpdateOperationsInput | string
    arCurrency?: StringFieldUpdateOperationsInput | string
    usdToIqd?: FloatFieldUpdateOperationsInput | number
    pointsPerDollar?: FloatFieldUpdateOperationsInput | number
    pointsPerIQD?: FloatFieldUpdateOperationsInput | number
    printerType?: EnumPrinterTypeFieldUpdateOperationsInput | $Enums.PrinterType
    printerIp?: NullableStringFieldUpdateOperationsInput | string | null
    port?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutUserInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: IntFilter<"Invoice"> | number
    userId?: IntNullableFilter<"Invoice"> | number | null
    phone?: StringNullableFilter<"Invoice"> | string | null
    email?: StringNullableFilter<"Invoice"> | string | null
    totalPrice?: FloatFilter<"Invoice"> | number
    discount?: FloatNullableFilter<"Invoice"> | number | null
    points?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    synced?: BoolFilter<"Invoice"> | boolean
  }

  export type UserCreateWithoutResetPasswordTokensInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    myRewards?: MyRewardCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResetPasswordTokensInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResetPasswordTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResetPasswordTokensInput, UserUncheckedCreateWithoutResetPasswordTokensInput>
  }

  export type UserUpsertWithoutResetPasswordTokensInput = {
    update: XOR<UserUpdateWithoutResetPasswordTokensInput, UserUncheckedUpdateWithoutResetPasswordTokensInput>
    create: XOR<UserCreateWithoutResetPasswordTokensInput, UserUncheckedCreateWithoutResetPasswordTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResetPasswordTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResetPasswordTokensInput, UserUncheckedUpdateWithoutResetPasswordTokensInput>
  }

  export type UserUpdateWithoutResetPasswordTokensInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResetPasswordTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceItemCreateWithoutCategoryInput = {
    quantity?: number
    price: number
    total: number
    invoice: InvoiceCreateNestedOneWithoutItemsInput
    cafeProduct?: CafeProductCreateNestedOneWithoutInvoiceInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceItemUncheckedCreateWithoutCategoryInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemCreateOrConnectWithoutCategoryInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput>
  }

  export type InvoiceItemCreateManyCategoryInputEnvelope = {
    data: InvoiceItemCreateManyCategoryInput | InvoiceItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CafeProductCreateWithoutCategoryInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    myRewards?: MyRewardCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductCreateOrConnectWithoutCategoryInput = {
    where: CafeProductWhereUniqueInput
    create: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput>
  }

  export type CafeProductCreateManyCategoryInputEnvelope = {
    data: CafeProductCreateManyCategoryInput | CafeProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantProductCreateWithoutCategoryInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    myRewards?: MyRewardCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductCreateOrConnectWithoutCategoryInput = {
    where: RestaurantProductWhereUniqueInput
    create: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput>
  }

  export type RestaurantProductCreateManyCategoryInputEnvelope = {
    data: RestaurantProductCreateManyCategoryInput | RestaurantProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutCategoryInput, InvoiceItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<InvoiceItemCreateWithoutCategoryInput, InvoiceItemUncheckedCreateWithoutCategoryInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutCategoryInput, InvoiceItemUncheckedUpdateWithoutCategoryInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutCategoryInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type InvoiceItemScalarWhereInput = {
    AND?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    OR?: InvoiceItemScalarWhereInput[]
    NOT?: InvoiceItemScalarWhereInput | InvoiceItemScalarWhereInput[]
    id?: IntFilter<"InvoiceItem"> | number
    invoiceId?: IntFilter<"InvoiceItem"> | number
    cafeProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    restaurantProductId?: IntNullableFilter<"InvoiceItem"> | number | null
    categoryId?: IntNullableFilter<"InvoiceItem"> | number | null
    quantity?: IntFilter<"InvoiceItem"> | number
    price?: FloatFilter<"InvoiceItem"> | number
    total?: FloatFilter<"InvoiceItem"> | number
  }

  export type CafeProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CafeProductWhereUniqueInput
    update: XOR<CafeProductUpdateWithoutCategoryInput, CafeProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<CafeProductCreateWithoutCategoryInput, CafeProductUncheckedCreateWithoutCategoryInput>
  }

  export type CafeProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CafeProductWhereUniqueInput
    data: XOR<CafeProductUpdateWithoutCategoryInput, CafeProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CafeProductUpdateManyWithWhereWithoutCategoryInput = {
    where: CafeProductScalarWhereInput
    data: XOR<CafeProductUpdateManyMutationInput, CafeProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CafeProductScalarWhereInput = {
    AND?: CafeProductScalarWhereInput | CafeProductScalarWhereInput[]
    OR?: CafeProductScalarWhereInput[]
    NOT?: CafeProductScalarWhereInput | CafeProductScalarWhereInput[]
    id?: IntFilter<"CafeProduct"> | number
    enName?: StringFilter<"CafeProduct"> | string
    arName?: StringFilter<"CafeProduct"> | string
    image?: StringNullableFilter<"CafeProduct"> | string | null
    price?: FloatFilter<"CafeProduct"> | number
    points?: IntFilter<"CafeProduct"> | number
    type?: StringFilter<"CafeProduct"> | string
    categoryId?: IntNullableFilter<"CafeProduct"> | number | null
  }

  export type RestaurantProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: RestaurantProductWhereUniqueInput
    update: XOR<RestaurantProductUpdateWithoutCategoryInput, RestaurantProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<RestaurantProductCreateWithoutCategoryInput, RestaurantProductUncheckedCreateWithoutCategoryInput>
  }

  export type RestaurantProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: RestaurantProductWhereUniqueInput
    data: XOR<RestaurantProductUpdateWithoutCategoryInput, RestaurantProductUncheckedUpdateWithoutCategoryInput>
  }

  export type RestaurantProductUpdateManyWithWhereWithoutCategoryInput = {
    where: RestaurantProductScalarWhereInput
    data: XOR<RestaurantProductUpdateManyMutationInput, RestaurantProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type RestaurantProductScalarWhereInput = {
    AND?: RestaurantProductScalarWhereInput | RestaurantProductScalarWhereInput[]
    OR?: RestaurantProductScalarWhereInput[]
    NOT?: RestaurantProductScalarWhereInput | RestaurantProductScalarWhereInput[]
    id?: IntFilter<"RestaurantProduct"> | number
    enName?: StringFilter<"RestaurantProduct"> | string
    arName?: StringFilter<"RestaurantProduct"> | string
    image?: StringNullableFilter<"RestaurantProduct"> | string | null
    price?: FloatFilter<"RestaurantProduct"> | number
    points?: IntFilter<"RestaurantProduct"> | number
    type?: StringFilter<"RestaurantProduct"> | string
    categoryId?: IntNullableFilter<"RestaurantProduct"> | number | null
  }

  export type CategoryCreateWithoutCafeProductsInput = {
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutCafeProductsInput = {
    id?: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemUncheckedCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCafeProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCafeProductsInput, CategoryUncheckedCreateWithoutCafeProductsInput>
  }

  export type MyRewardCreateWithoutCafeProductInput = {
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
    user: UserCreateNestedOneWithoutMyRewardsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutMyRewardsInput
  }

  export type MyRewardUncheckedCreateWithoutCafeProductInput = {
    id?: number
    userId: number
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type MyRewardCreateOrConnectWithoutCafeProductInput = {
    where: MyRewardWhereUniqueInput
    create: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput>
  }

  export type MyRewardCreateManyCafeProductInputEnvelope = {
    data: MyRewardCreateManyCafeProductInput | MyRewardCreateManyCafeProductInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCafeProductInput = {
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    status?: $Enums.TransactionStatus
    synced?: boolean
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCafeProductInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionCreateOrConnectWithoutCafeProductInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput>
  }

  export type TransactionCreateManyCafeProductInputEnvelope = {
    data: TransactionCreateManyCafeProductInput | TransactionCreateManyCafeProductInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemCreateWithoutCafeProductInput = {
    quantity?: number
    price: number
    total: number
    category?: CategoryCreateNestedOneWithoutInvoiceItemInput
    invoice: InvoiceCreateNestedOneWithoutItemsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceItemUncheckedCreateWithoutCafeProductInput = {
    id?: number
    invoiceId: number
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemCreateOrConnectWithoutCafeProductInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput>
  }

  export type InvoiceItemCreateManyCafeProductInputEnvelope = {
    data: InvoiceItemCreateManyCafeProductInput | InvoiceItemCreateManyCafeProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutCafeProductsInput = {
    update: XOR<CategoryUpdateWithoutCafeProductsInput, CategoryUncheckedUpdateWithoutCafeProductsInput>
    create: XOR<CategoryCreateWithoutCafeProductsInput, CategoryUncheckedCreateWithoutCafeProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCafeProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCafeProductsInput, CategoryUncheckedUpdateWithoutCafeProductsInput>
  }

  export type CategoryUpdateWithoutCafeProductsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCafeProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUncheckedUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MyRewardUpsertWithWhereUniqueWithoutCafeProductInput = {
    where: MyRewardWhereUniqueInput
    update: XOR<MyRewardUpdateWithoutCafeProductInput, MyRewardUncheckedUpdateWithoutCafeProductInput>
    create: XOR<MyRewardCreateWithoutCafeProductInput, MyRewardUncheckedCreateWithoutCafeProductInput>
  }

  export type MyRewardUpdateWithWhereUniqueWithoutCafeProductInput = {
    where: MyRewardWhereUniqueInput
    data: XOR<MyRewardUpdateWithoutCafeProductInput, MyRewardUncheckedUpdateWithoutCafeProductInput>
  }

  export type MyRewardUpdateManyWithWhereWithoutCafeProductInput = {
    where: MyRewardScalarWhereInput
    data: XOR<MyRewardUpdateManyMutationInput, MyRewardUncheckedUpdateManyWithoutCafeProductInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCafeProductInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCafeProductInput, TransactionUncheckedUpdateWithoutCafeProductInput>
    create: XOR<TransactionCreateWithoutCafeProductInput, TransactionUncheckedCreateWithoutCafeProductInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCafeProductInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCafeProductInput, TransactionUncheckedUpdateWithoutCafeProductInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCafeProductInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCafeProductInput>
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutCafeProductInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutCafeProductInput, InvoiceItemUncheckedUpdateWithoutCafeProductInput>
    create: XOR<InvoiceItemCreateWithoutCafeProductInput, InvoiceItemUncheckedCreateWithoutCafeProductInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutCafeProductInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutCafeProductInput, InvoiceItemUncheckedUpdateWithoutCafeProductInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutCafeProductInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutCafeProductInput>
  }

  export type CategoryCreateWithoutRestaurantProductsInput = {
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemCreateNestedManyWithoutCategoryInput
    cafeProducts?: CafeProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutRestaurantProductsInput = {
    id?: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    InvoiceItem?: InvoiceItemUncheckedCreateNestedManyWithoutCategoryInput
    cafeProducts?: CafeProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutRestaurantProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutRestaurantProductsInput, CategoryUncheckedCreateWithoutRestaurantProductsInput>
  }

  export type MyRewardCreateWithoutRestaurantProductInput = {
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
    user: UserCreateNestedOneWithoutMyRewardsInput
    cafeProduct?: CafeProductCreateNestedOneWithoutMyRewardsInput
  }

  export type MyRewardUncheckedCreateWithoutRestaurantProductInput = {
    id?: number
    userId: number
    cafeProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type MyRewardCreateOrConnectWithoutRestaurantProductInput = {
    where: MyRewardWhereUniqueInput
    create: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput>
  }

  export type MyRewardCreateManyRestaurantProductInputEnvelope = {
    data: MyRewardCreateManyRestaurantProductInput | MyRewardCreateManyRestaurantProductInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutRestaurantProductInput = {
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    status?: $Enums.TransactionStatus
    synced?: boolean
    cafeProduct?: CafeProductCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
    invoice?: InvoiceCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutRestaurantProductInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    cafeProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionCreateOrConnectWithoutRestaurantProductInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput>
  }

  export type TransactionCreateManyRestaurantProductInputEnvelope = {
    data: TransactionCreateManyRestaurantProductInput | TransactionCreateManyRestaurantProductInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceItemCreateWithoutRestaurantProductInput = {
    quantity?: number
    price: number
    total: number
    category?: CategoryCreateNestedOneWithoutInvoiceItemInput
    invoice: InvoiceCreateNestedOneWithoutItemsInput
    cafeProduct?: CafeProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceItemUncheckedCreateWithoutRestaurantProductInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemCreateOrConnectWithoutRestaurantProductInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput>
  }

  export type InvoiceItemCreateManyRestaurantProductInputEnvelope = {
    data: InvoiceItemCreateManyRestaurantProductInput | InvoiceItemCreateManyRestaurantProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutRestaurantProductsInput = {
    update: XOR<CategoryUpdateWithoutRestaurantProductsInput, CategoryUncheckedUpdateWithoutRestaurantProductsInput>
    create: XOR<CategoryCreateWithoutRestaurantProductsInput, CategoryUncheckedCreateWithoutRestaurantProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutRestaurantProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutRestaurantProductsInput, CategoryUncheckedUpdateWithoutRestaurantProductsInput>
  }

  export type CategoryUpdateWithoutRestaurantProductsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUpdateManyWithoutCategoryNestedInput
    cafeProducts?: CafeProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutRestaurantProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    InvoiceItem?: InvoiceItemUncheckedUpdateManyWithoutCategoryNestedInput
    cafeProducts?: CafeProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MyRewardUpsertWithWhereUniqueWithoutRestaurantProductInput = {
    where: MyRewardWhereUniqueInput
    update: XOR<MyRewardUpdateWithoutRestaurantProductInput, MyRewardUncheckedUpdateWithoutRestaurantProductInput>
    create: XOR<MyRewardCreateWithoutRestaurantProductInput, MyRewardUncheckedCreateWithoutRestaurantProductInput>
  }

  export type MyRewardUpdateWithWhereUniqueWithoutRestaurantProductInput = {
    where: MyRewardWhereUniqueInput
    data: XOR<MyRewardUpdateWithoutRestaurantProductInput, MyRewardUncheckedUpdateWithoutRestaurantProductInput>
  }

  export type MyRewardUpdateManyWithWhereWithoutRestaurantProductInput = {
    where: MyRewardScalarWhereInput
    data: XOR<MyRewardUpdateManyMutationInput, MyRewardUncheckedUpdateManyWithoutRestaurantProductInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutRestaurantProductInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutRestaurantProductInput, TransactionUncheckedUpdateWithoutRestaurantProductInput>
    create: XOR<TransactionCreateWithoutRestaurantProductInput, TransactionUncheckedCreateWithoutRestaurantProductInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutRestaurantProductInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutRestaurantProductInput, TransactionUncheckedUpdateWithoutRestaurantProductInput>
  }

  export type TransactionUpdateManyWithWhereWithoutRestaurantProductInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutRestaurantProductInput>
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutRestaurantProductInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutRestaurantProductInput, InvoiceItemUncheckedUpdateWithoutRestaurantProductInput>
    create: XOR<InvoiceItemCreateWithoutRestaurantProductInput, InvoiceItemUncheckedCreateWithoutRestaurantProductInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutRestaurantProductInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutRestaurantProductInput, InvoiceItemUncheckedUpdateWithoutRestaurantProductInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutRestaurantProductInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutRestaurantProductInput>
  }

  export type UserCreateWithoutMyRewardsInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMyRewardsInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMyRewardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyRewardsInput, UserUncheckedCreateWithoutMyRewardsInput>
  }

  export type CafeProductCreateWithoutMyRewardsInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutCafeProductsInput
    transactions?: TransactionCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUncheckedCreateWithoutMyRewardsInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductCreateOrConnectWithoutMyRewardsInput = {
    where: CafeProductWhereUniqueInput
    create: XOR<CafeProductCreateWithoutMyRewardsInput, CafeProductUncheckedCreateWithoutMyRewardsInput>
  }

  export type RestaurantProductCreateWithoutMyRewardsInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutRestaurantProductsInput
    transactions?: TransactionCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUncheckedCreateWithoutMyRewardsInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    transactions?: TransactionUncheckedCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductCreateOrConnectWithoutMyRewardsInput = {
    where: RestaurantProductWhereUniqueInput
    create: XOR<RestaurantProductCreateWithoutMyRewardsInput, RestaurantProductUncheckedCreateWithoutMyRewardsInput>
  }

  export type UserUpsertWithoutMyRewardsInput = {
    update: XOR<UserUpdateWithoutMyRewardsInput, UserUncheckedUpdateWithoutMyRewardsInput>
    create: XOR<UserCreateWithoutMyRewardsInput, UserUncheckedCreateWithoutMyRewardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyRewardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyRewardsInput, UserUncheckedUpdateWithoutMyRewardsInput>
  }

  export type UserUpdateWithoutMyRewardsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMyRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CafeProductUpsertWithoutMyRewardsInput = {
    update: XOR<CafeProductUpdateWithoutMyRewardsInput, CafeProductUncheckedUpdateWithoutMyRewardsInput>
    create: XOR<CafeProductCreateWithoutMyRewardsInput, CafeProductUncheckedCreateWithoutMyRewardsInput>
    where?: CafeProductWhereInput
  }

  export type CafeProductUpdateToOneWithWhereWithoutMyRewardsInput = {
    where?: CafeProductWhereInput
    data: XOR<CafeProductUpdateWithoutMyRewardsInput, CafeProductUncheckedUpdateWithoutMyRewardsInput>
  }

  export type CafeProductUpdateWithoutMyRewardsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCafeProductsNestedInput
    transactions?: TransactionUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateWithoutMyRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutCafeProductNestedInput
  }

  export type RestaurantProductUpsertWithoutMyRewardsInput = {
    update: XOR<RestaurantProductUpdateWithoutMyRewardsInput, RestaurantProductUncheckedUpdateWithoutMyRewardsInput>
    create: XOR<RestaurantProductCreateWithoutMyRewardsInput, RestaurantProductUncheckedCreateWithoutMyRewardsInput>
    where?: RestaurantProductWhereInput
  }

  export type RestaurantProductUpdateToOneWithWhereWithoutMyRewardsInput = {
    where?: RestaurantProductWhereInput
    data: XOR<RestaurantProductUpdateWithoutMyRewardsInput, RestaurantProductUncheckedUpdateWithoutMyRewardsInput>
  }

  export type RestaurantProductUpdateWithoutMyRewardsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutRestaurantProductsNestedInput
    transactions?: TransactionUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateWithoutMyRewardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    transactions?: TransactionUncheckedUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutRestaurantProductNestedInput
  }

  export type CafeProductCreateWithoutTransactionsInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutCafeProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUncheckedCreateWithoutTransactionsInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutCafeProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductCreateOrConnectWithoutTransactionsInput = {
    where: CafeProductWhereUniqueInput
    create: XOR<CafeProductCreateWithoutTransactionsInput, CafeProductUncheckedCreateWithoutTransactionsInput>
  }

  export type RestaurantProductCreateWithoutTransactionsInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutRestaurantProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUncheckedCreateWithoutTransactionsInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutRestaurantProductInput
    invoice?: InvoiceItemUncheckedCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductCreateOrConnectWithoutTransactionsInput = {
    where: RestaurantProductWhereUniqueInput
    create: XOR<RestaurantProductCreateWithoutTransactionsInput, RestaurantProductUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    resetPasswordTokens?: ResetPasswordTokenCreateNestedManyWithoutUserInput
    myRewards?: MyRewardCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    resetPasswordTokens?: ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type InvoiceCreateWithoutTransactionInput = {
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    user?: UserCreateNestedOneWithoutInvoicesInput
    items?: InvoiceItemCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutTransactionInput = {
    id?: number
    userId?: number | null
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    items?: InvoiceItemUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutTransactionInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutTransactionInput, InvoiceUncheckedCreateWithoutTransactionInput>
  }

  export type CafeProductUpsertWithoutTransactionsInput = {
    update: XOR<CafeProductUpdateWithoutTransactionsInput, CafeProductUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CafeProductCreateWithoutTransactionsInput, CafeProductUncheckedCreateWithoutTransactionsInput>
    where?: CafeProductWhereInput
  }

  export type CafeProductUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CafeProductWhereInput
    data: XOR<CafeProductUpdateWithoutTransactionsInput, CafeProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type CafeProductUpdateWithoutTransactionsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCafeProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutCafeProductNestedInput
  }

  export type RestaurantProductUpsertWithoutTransactionsInput = {
    update: XOR<RestaurantProductUpdateWithoutTransactionsInput, RestaurantProductUncheckedUpdateWithoutTransactionsInput>
    create: XOR<RestaurantProductCreateWithoutTransactionsInput, RestaurantProductUncheckedCreateWithoutTransactionsInput>
    where?: RestaurantProductWhereInput
  }

  export type RestaurantProductUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: RestaurantProductWhereInput
    data: XOR<RestaurantProductUpdateWithoutTransactionsInput, RestaurantProductUncheckedUpdateWithoutTransactionsInput>
  }

  export type RestaurantProductUpdateWithoutTransactionsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutRestaurantProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutRestaurantProductNestedInput
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordTokens?: ResetPasswordTokenUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetPasswordTokens?: ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithoutTransactionInput = {
    update: XOR<InvoiceUpdateWithoutTransactionInput, InvoiceUncheckedUpdateWithoutTransactionInput>
    create: XOR<InvoiceCreateWithoutTransactionInput, InvoiceUncheckedCreateWithoutTransactionInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutTransactionInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutTransactionInput, InvoiceUncheckedUpdateWithoutTransactionInput>
  }

  export type InvoiceUpdateWithoutTransactionInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutInvoicesNestedInput
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type UserCreateWithoutSettingsInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenCreateNestedManyWithoutUserInput
    myRewards?: MyRewardCreateNestedManyWithoutUserInput
    invoices?: InvoiceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutUserInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUncheckedUpdateManyWithoutUserNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInvoicesInput = {
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenCreateNestedManyWithoutUserInput
    myRewards?: MyRewardCreateNestedManyWithoutUserInput
    settings?: SettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: number
    enName: string
    arName: string
    phone: string
    email: string
    password: string
    profileImage?: string | null
    role?: $Enums.Role
    points?: number
    qrCode?: string | null
    createdAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedCreateNestedManyWithoutUserInput
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutUserInput
    settings?: SettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type InvoiceItemCreateWithoutInvoiceInput = {
    quantity?: number
    price: number
    total: number
    category?: CategoryCreateNestedOneWithoutInvoiceItemInput
    cafeProduct?: CafeProductCreateNestedOneWithoutInvoiceInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceItemUncheckedCreateWithoutInvoiceInput = {
    id?: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemCreateOrConnectWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemCreateManyInvoiceInputEnvelope = {
    data: InvoiceItemCreateManyInvoiceInput | InvoiceItemCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutInvoiceInput = {
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    status?: $Enums.TransactionStatus
    synced?: boolean
    cafeProduct?: CafeProductCreateNestedOneWithoutTransactionsInput
    restaurantProduct?: RestaurantProductCreateNestedOneWithoutTransactionsInput
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutInvoiceInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type TransactionCreateOrConnectWithoutInvoiceInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUpdateManyWithoutUserNestedInput
    settings?: SettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    points?: FloatFieldUpdateOperationsInput | number
    qrCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    resetPasswordTokens?: ResetPasswordTokenUncheckedUpdateManyWithoutUserNestedInput
    myRewards?: MyRewardUncheckedUpdateManyWithoutUserNestedInput
    settings?: SettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InvoiceItemUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    update: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
    create: XOR<InvoiceItemCreateWithoutInvoiceInput, InvoiceItemUncheckedCreateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: InvoiceItemWhereUniqueInput
    data: XOR<InvoiceItemUpdateWithoutInvoiceInput, InvoiceItemUncheckedUpdateWithoutInvoiceInput>
  }

  export type InvoiceItemUpdateManyWithWhereWithoutInvoiceInput = {
    where: InvoiceItemScalarWhereInput
    data: XOR<InvoiceItemUpdateManyMutationInput, InvoiceItemUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type TransactionUpsertWithoutInvoiceInput = {
    update: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
    create: XOR<TransactionCreateWithoutInvoiceInput, TransactionUncheckedCreateWithoutInvoiceInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutInvoiceInput, TransactionUncheckedUpdateWithoutInvoiceInput>
  }

  export type TransactionUpdateWithoutInvoiceInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
    cafeProduct?: CafeProductUpdateOneWithoutTransactionsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateWithoutInvoiceItemInput = {
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    cafeProducts?: CafeProductCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutInvoiceItemInput = {
    id?: number
    enName: string
    arName: string
    type: $Enums.CategoryType
    createdAt?: Date | string
    cafeProducts?: CafeProductUncheckedCreateNestedManyWithoutCategoryInput
    restaurantProducts?: RestaurantProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutInvoiceItemInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutInvoiceItemInput, CategoryUncheckedCreateWithoutInvoiceItemInput>
  }

  export type InvoiceCreateWithoutItemsInput = {
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    user?: UserCreateNestedOneWithoutInvoicesInput
    transaction?: TransactionCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceUncheckedCreateWithoutItemsInput = {
    id?: number
    userId?: number | null
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
    transaction?: TransactionUncheckedCreateNestedOneWithoutInvoiceInput
  }

  export type InvoiceCreateOrConnectWithoutItemsInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
  }

  export type CafeProductCreateWithoutInvoiceInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutCafeProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductUncheckedCreateWithoutInvoiceInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutCafeProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCafeProductInput
  }

  export type CafeProductCreateOrConnectWithoutInvoiceInput = {
    where: CafeProductWhereUniqueInput
    create: XOR<CafeProductCreateWithoutInvoiceInput, CafeProductUncheckedCreateWithoutInvoiceInput>
  }

  export type RestaurantProductCreateWithoutInvoiceInput = {
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    category?: CategoryCreateNestedOneWithoutRestaurantProductsInput
    myRewards?: MyRewardCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductUncheckedCreateWithoutInvoiceInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
    categoryId?: number | null
    myRewards?: MyRewardUncheckedCreateNestedManyWithoutRestaurantProductInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutRestaurantProductInput
  }

  export type RestaurantProductCreateOrConnectWithoutInvoiceInput = {
    where: RestaurantProductWhereUniqueInput
    create: XOR<RestaurantProductCreateWithoutInvoiceInput, RestaurantProductUncheckedCreateWithoutInvoiceInput>
  }

  export type CategoryUpsertWithoutInvoiceItemInput = {
    update: XOR<CategoryUpdateWithoutInvoiceItemInput, CategoryUncheckedUpdateWithoutInvoiceItemInput>
    create: XOR<CategoryCreateWithoutInvoiceItemInput, CategoryUncheckedCreateWithoutInvoiceItemInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutInvoiceItemInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutInvoiceItemInput, CategoryUncheckedUpdateWithoutInvoiceItemInput>
  }

  export type CategoryUpdateWithoutInvoiceItemInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cafeProducts?: CafeProductUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutInvoiceItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    type?: EnumCategoryTypeFieldUpdateOperationsInput | $Enums.CategoryType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cafeProducts?: CafeProductUncheckedUpdateManyWithoutCategoryNestedInput
    restaurantProducts?: RestaurantProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type InvoiceUpsertWithoutItemsInput = {
    update: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
    create: XOR<InvoiceCreateWithoutItemsInput, InvoiceUncheckedCreateWithoutItemsInput>
    where?: InvoiceWhereInput
  }

  export type InvoiceUpdateToOneWithWhereWithoutItemsInput = {
    where?: InvoiceWhereInput
    data: XOR<InvoiceUpdateWithoutItemsInput, InvoiceUncheckedUpdateWithoutItemsInput>
  }

  export type InvoiceUpdateWithoutItemsInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutInvoicesNestedInput
    transaction?: TransactionUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    transaction?: TransactionUncheckedUpdateOneWithoutInvoiceNestedInput
  }

  export type CafeProductUpsertWithoutInvoiceInput = {
    update: XOR<CafeProductUpdateWithoutInvoiceInput, CafeProductUncheckedUpdateWithoutInvoiceInput>
    create: XOR<CafeProductCreateWithoutInvoiceInput, CafeProductUncheckedCreateWithoutInvoiceInput>
    where?: CafeProductWhereInput
  }

  export type CafeProductUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: CafeProductWhereInput
    data: XOR<CafeProductUpdateWithoutInvoiceInput, CafeProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type CafeProductUpdateWithoutInvoiceInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutCafeProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCafeProductNestedInput
  }

  export type RestaurantProductUpsertWithoutInvoiceInput = {
    update: XOR<RestaurantProductUpdateWithoutInvoiceInput, RestaurantProductUncheckedUpdateWithoutInvoiceInput>
    create: XOR<RestaurantProductCreateWithoutInvoiceInput, RestaurantProductUncheckedCreateWithoutInvoiceInput>
    where?: RestaurantProductWhereInput
  }

  export type RestaurantProductUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: RestaurantProductWhereInput
    data: XOR<RestaurantProductUpdateWithoutInvoiceInput, RestaurantProductUncheckedUpdateWithoutInvoiceInput>
  }

  export type RestaurantProductUpdateWithoutInvoiceInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneWithoutRestaurantProductsNestedInput
    myRewards?: MyRewardUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    myRewards?: MyRewardUncheckedUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutRestaurantProductNestedInput
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    cafeProductId?: number | null
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type ResetPasswordTokenCreateManyUserInput = {
    id?: number
    randomCode: number
    token: string
    expiresAt: Date | string
  }

  export type MyRewardCreateManyUserInput = {
    id?: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type InvoiceCreateManyUserInput = {
    id?: number
    phone?: string | null
    email?: string | null
    totalPrice: number
    discount?: number | null
    points?: number
    currency?: string
    createdAt?: Date | string
    synced?: boolean
  }

  export type TransactionUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
    cafeProduct?: CafeProductUpdateOneWithoutTransactionsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ResetPasswordTokenUpdateWithoutUserInput = {
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetPasswordTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    randomCode?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyRewardUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
    cafeProduct?: CafeProductUpdateOneWithoutMyRewardsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutMyRewardsNestedInput
  }

  export type MyRewardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MyRewardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceUpdateWithoutUserInput = {
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    items?: InvoiceItemUpdateManyWithoutInvoiceNestedInput
    transaction?: TransactionUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
    items?: InvoiceItemUncheckedUpdateManyWithoutInvoiceNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    points?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceItemCreateManyCategoryInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type CafeProductCreateManyCategoryInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
  }

  export type RestaurantProductCreateManyCategoryInput = {
    id?: number
    enName: string
    arName: string
    image?: string | null
    price: number
    points: number
    type?: string
  }

  export type InvoiceItemUpdateWithoutCategoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutInvoiceNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type CafeProductUpdateWithoutCategoryInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    myRewards?: MyRewardUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    myRewards?: MyRewardUncheckedUpdateManyWithoutCafeProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCafeProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutCafeProductNestedInput
  }

  export type CafeProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantProductUpdateWithoutCategoryInput = {
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    myRewards?: MyRewardUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    myRewards?: MyRewardUncheckedUpdateManyWithoutRestaurantProductNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutRestaurantProductNestedInput
    invoice?: InvoiceItemUncheckedUpdateManyWithoutRestaurantProductNestedInput
  }

  export type RestaurantProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    enName?: StringFieldUpdateOperationsInput | string
    arName?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MyRewardCreateManyCafeProductInput = {
    id?: number
    userId: number
    restaurantProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type TransactionCreateManyCafeProductInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    restaurantProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type InvoiceItemCreateManyCafeProductInput = {
    id?: number
    invoiceId: number
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type MyRewardUpdateWithoutCafeProductInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMyRewardsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutMyRewardsNestedInput
  }

  export type MyRewardUncheckedUpdateWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MyRewardUncheckedUpdateManyWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutCafeProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
    restaurantProduct?: RestaurantProductUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceItemUpdateWithoutCafeProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutInvoiceItemNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutCafeProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type MyRewardCreateManyRestaurantProductInput = {
    id?: number
    userId: number
    cafeProductId?: number | null
    points: number
    type: string
    status?: $Enums.RewardStatus
    date?: Date | string
    note?: string | null
    synced?: boolean
  }

  export type TransactionCreateManyRestaurantProductInput = {
    id?: number
    type: string
    currency: JsonNullValueInput | InputJsonValue
    points: number
    date?: Date | string
    userId: number
    cafeProductId?: number | null
    invoiceId?: number | null
    status?: $Enums.TransactionStatus
    synced?: boolean
  }

  export type InvoiceItemCreateManyRestaurantProductInput = {
    id?: number
    invoiceId: number
    cafeProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type MyRewardUpdateWithoutRestaurantProductInput = {
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMyRewardsNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutMyRewardsNestedInput
  }

  export type MyRewardUncheckedUpdateWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MyRewardUncheckedUpdateManyWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    status?: EnumRewardStatusFieldUpdateOperationsInput | $Enums.RewardStatus
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUpdateWithoutRestaurantProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
    cafeProduct?: CafeProductUpdateOneWithoutTransactionsNestedInput
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    invoice?: InvoiceUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TransactionUncheckedUpdateManyWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    currency?: JsonNullValueInput | InputJsonValue
    points?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    invoiceId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceItemUpdateWithoutRestaurantProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutInvoiceItemNestedInput
    invoice?: InvoiceUpdateOneRequiredWithoutItemsNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutRestaurantProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    invoiceId?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemCreateManyInvoiceInput = {
    id?: number
    cafeProductId?: number | null
    restaurantProductId?: number | null
    categoryId?: number | null
    quantity?: number
    price: number
    total: number
  }

  export type InvoiceItemUpdateWithoutInvoiceInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneWithoutInvoiceItemNestedInput
    cafeProduct?: CafeProductUpdateOneWithoutInvoiceNestedInput
    restaurantProduct?: RestaurantProductUpdateOneWithoutInvoiceNestedInput
  }

  export type InvoiceItemUncheckedUpdateWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
  }

  export type InvoiceItemUncheckedUpdateManyWithoutInvoiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    cafeProductId?: NullableIntFieldUpdateOperationsInput | number | null
    restaurantProductId?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
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