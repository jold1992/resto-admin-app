
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Plato
 * 
 */
export type Plato = $Result.DefaultSelection<Prisma.$PlatoPayload>
/**
 * Model Ingrediente
 * 
 */
export type Ingrediente = $Result.DefaultSelection<Prisma.$IngredientePayload>
/**
 * Model RecetaItem
 * 
 */
export type RecetaItem = $Result.DefaultSelection<Prisma.$RecetaItemPayload>
/**
 * Model MovimientoInventario
 * 
 */
export type MovimientoInventario = $Result.DefaultSelection<Prisma.$MovimientoInventarioPayload>
/**
 * Model Venta
 * 
 */
export type Venta = $Result.DefaultSelection<Prisma.$VentaPayload>
/**
 * Model VentaDetalle
 * 
 */
export type VentaDetalle = $Result.DefaultSelection<Prisma.$VentaDetallePayload>
/**
 * Model OrdenCompra
 * 
 */
export type OrdenCompra = $Result.DefaultSelection<Prisma.$OrdenCompraPayload>
/**
 * Model OrdenCompraDetalle
 * 
 */
export type OrdenCompraDetalle = $Result.DefaultSelection<Prisma.$OrdenCompraDetallePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UnidadMedida: {
  GRAMO: 'GRAMO',
  KILOGRAMO: 'KILOGRAMO',
  MILILITRO: 'MILILITRO',
  LITRO: 'LITRO',
  UNIDAD: 'UNIDAD',
  PORCION: 'PORCION'
};

export type UnidadMedida = (typeof UnidadMedida)[keyof typeof UnidadMedida]

}

export type UnidadMedida = $Enums.UnidadMedida

export const UnidadMedida: typeof $Enums.UnidadMedida

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categoria.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categoria.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plato`: Exposes CRUD operations for the **Plato** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platoes
    * const platoes = await prisma.plato.findMany()
    * ```
    */
  get plato(): Prisma.PlatoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingrediente`: Exposes CRUD operations for the **Ingrediente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredientes
    * const ingredientes = await prisma.ingrediente.findMany()
    * ```
    */
  get ingrediente(): Prisma.IngredienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recetaItem`: Exposes CRUD operations for the **RecetaItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecetaItems
    * const recetaItems = await prisma.recetaItem.findMany()
    * ```
    */
  get recetaItem(): Prisma.RecetaItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimientoInventario`: Exposes CRUD operations for the **MovimientoInventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimientoInventarios
    * const movimientoInventarios = await prisma.movimientoInventario.findMany()
    * ```
    */
  get movimientoInventario(): Prisma.MovimientoInventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venta`: Exposes CRUD operations for the **Venta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventas
    * const ventas = await prisma.venta.findMany()
    * ```
    */
  get venta(): Prisma.VentaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventaDetalle`: Exposes CRUD operations for the **VentaDetalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VentaDetalles
    * const ventaDetalles = await prisma.ventaDetalle.findMany()
    * ```
    */
  get ventaDetalle(): Prisma.VentaDetalleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenCompra`: Exposes CRUD operations for the **OrdenCompra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenCompras
    * const ordenCompras = await prisma.ordenCompra.findMany()
    * ```
    */
  get ordenCompra(): Prisma.OrdenCompraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenCompraDetalle`: Exposes CRUD operations for the **OrdenCompraDetalle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenCompraDetalles
    * const ordenCompraDetalles = await prisma.ordenCompraDetalle.findMany()
    * ```
    */
  get ordenCompraDetalle(): Prisma.OrdenCompraDetalleDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Categoria: 'Categoria',
    Plato: 'Plato',
    Ingrediente: 'Ingrediente',
    RecetaItem: 'RecetaItem',
    MovimientoInventario: 'MovimientoInventario',
    Venta: 'Venta',
    VentaDetalle: 'VentaDetalle',
    OrdenCompra: 'OrdenCompra',
    OrdenCompraDetalle: 'OrdenCompraDetalle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categoria" | "plato" | "ingrediente" | "recetaItem" | "movimientoInventario" | "venta" | "ventaDetalle" | "ordenCompra" | "ordenCompraDetalle"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Plato: {
        payload: Prisma.$PlatoPayload<ExtArgs>
        fields: Prisma.PlatoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findFirst: {
            args: Prisma.PlatoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          findMany: {
            args: Prisma.PlatoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>[]
          }
          create: {
            args: Prisma.PlatoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          createMany: {
            args: Prisma.PlatoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>[]
          }
          delete: {
            args: Prisma.PlatoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          update: {
            args: Prisma.PlatoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          deleteMany: {
            args: Prisma.PlatoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>[]
          }
          upsert: {
            args: Prisma.PlatoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatoPayload>
          }
          aggregate: {
            args: Prisma.PlatoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlato>
          }
          groupBy: {
            args: Prisma.PlatoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatoCountArgs<ExtArgs>
            result: $Utils.Optional<PlatoCountAggregateOutputType> | number
          }
        }
      }
      Ingrediente: {
        payload: Prisma.$IngredientePayload<ExtArgs>
        fields: Prisma.IngredienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findFirst: {
            args: Prisma.IngredienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          findMany: {
            args: Prisma.IngredienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          create: {
            args: Prisma.IngredienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          createMany: {
            args: Prisma.IngredienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          delete: {
            args: Prisma.IngredienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          update: {
            args: Prisma.IngredienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          deleteMany: {
            args: Prisma.IngredienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>[]
          }
          upsert: {
            args: Prisma.IngredienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientePayload>
          }
          aggregate: {
            args: Prisma.IngredienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngrediente>
          }
          groupBy: {
            args: Prisma.IngredienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredienteCountArgs<ExtArgs>
            result: $Utils.Optional<IngredienteCountAggregateOutputType> | number
          }
        }
      }
      RecetaItem: {
        payload: Prisma.$RecetaItemPayload<ExtArgs>
        fields: Prisma.RecetaItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecetaItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecetaItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          findFirst: {
            args: Prisma.RecetaItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecetaItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          findMany: {
            args: Prisma.RecetaItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>[]
          }
          create: {
            args: Prisma.RecetaItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          createMany: {
            args: Prisma.RecetaItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecetaItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>[]
          }
          delete: {
            args: Prisma.RecetaItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          update: {
            args: Prisma.RecetaItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          deleteMany: {
            args: Prisma.RecetaItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecetaItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecetaItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>[]
          }
          upsert: {
            args: Prisma.RecetaItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecetaItemPayload>
          }
          aggregate: {
            args: Prisma.RecetaItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecetaItem>
          }
          groupBy: {
            args: Prisma.RecetaItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecetaItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecetaItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecetaItemCountAggregateOutputType> | number
          }
        }
      }
      MovimientoInventario: {
        payload: Prisma.$MovimientoInventarioPayload<ExtArgs>
        fields: Prisma.MovimientoInventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findFirst: {
            args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          findMany: {
            args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          create: {
            args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          createMany: {
            args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          delete: {
            args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          update: {
            args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          deleteMany: {
            args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[]
          }
          upsert: {
            args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>
          }
          aggregate: {
            args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimientoInventario>
          }
          groupBy: {
            args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimientoInventarioCountArgs<ExtArgs>
            result: $Utils.Optional<MovimientoInventarioCountAggregateOutputType> | number
          }
        }
      }
      Venta: {
        payload: Prisma.$VentaPayload<ExtArgs>
        fields: Prisma.VentaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findFirst: {
            args: Prisma.VentaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          findMany: {
            args: Prisma.VentaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          create: {
            args: Prisma.VentaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          createMany: {
            args: Prisma.VentaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          delete: {
            args: Prisma.VentaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          update: {
            args: Prisma.VentaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          deleteMany: {
            args: Prisma.VentaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>[]
          }
          upsert: {
            args: Prisma.VentaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaPayload>
          }
          aggregate: {
            args: Prisma.VentaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenta>
          }
          groupBy: {
            args: Prisma.VentaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaCountArgs<ExtArgs>
            result: $Utils.Optional<VentaCountAggregateOutputType> | number
          }
        }
      }
      VentaDetalle: {
        payload: Prisma.$VentaDetallePayload<ExtArgs>
        fields: Prisma.VentaDetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentaDetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentaDetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          findFirst: {
            args: Prisma.VentaDetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentaDetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          findMany: {
            args: Prisma.VentaDetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>[]
          }
          create: {
            args: Prisma.VentaDetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          createMany: {
            args: Prisma.VentaDetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentaDetalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>[]
          }
          delete: {
            args: Prisma.VentaDetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          update: {
            args: Prisma.VentaDetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          deleteMany: {
            args: Prisma.VentaDetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentaDetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentaDetalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>[]
          }
          upsert: {
            args: Prisma.VentaDetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentaDetallePayload>
          }
          aggregate: {
            args: Prisma.VentaDetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentaDetalle>
          }
          groupBy: {
            args: Prisma.VentaDetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentaDetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentaDetalleCountArgs<ExtArgs>
            result: $Utils.Optional<VentaDetalleCountAggregateOutputType> | number
          }
        }
      }
      OrdenCompra: {
        payload: Prisma.$OrdenCompraPayload<ExtArgs>
        fields: Prisma.OrdenCompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenCompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenCompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          findFirst: {
            args: Prisma.OrdenCompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenCompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          findMany: {
            args: Prisma.OrdenCompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          create: {
            args: Prisma.OrdenCompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          createMany: {
            args: Prisma.OrdenCompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          delete: {
            args: Prisma.OrdenCompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          update: {
            args: Prisma.OrdenCompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          deleteMany: {
            args: Prisma.OrdenCompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenCompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenCompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[]
          }
          upsert: {
            args: Prisma.OrdenCompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraPayload>
          }
          aggregate: {
            args: Prisma.OrdenCompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenCompra>
          }
          groupBy: {
            args: Prisma.OrdenCompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCompraCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraCountAggregateOutputType> | number
          }
        }
      }
      OrdenCompraDetalle: {
        payload: Prisma.$OrdenCompraDetallePayload<ExtArgs>
        fields: Prisma.OrdenCompraDetalleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenCompraDetalleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenCompraDetalleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          findFirst: {
            args: Prisma.OrdenCompraDetalleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenCompraDetalleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          findMany: {
            args: Prisma.OrdenCompraDetalleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>[]
          }
          create: {
            args: Prisma.OrdenCompraDetalleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          createMany: {
            args: Prisma.OrdenCompraDetalleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCompraDetalleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>[]
          }
          delete: {
            args: Prisma.OrdenCompraDetalleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          update: {
            args: Prisma.OrdenCompraDetalleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          deleteMany: {
            args: Prisma.OrdenCompraDetalleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenCompraDetalleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenCompraDetalleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>[]
          }
          upsert: {
            args: Prisma.OrdenCompraDetalleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenCompraDetallePayload>
          }
          aggregate: {
            args: Prisma.OrdenCompraDetalleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenCompraDetalle>
          }
          groupBy: {
            args: Prisma.OrdenCompraDetalleGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraDetalleGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCompraDetalleCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCompraDetalleCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    categoria?: CategoriaOmit
    plato?: PlatoOmit
    ingrediente?: IngredienteOmit
    recetaItem?: RecetaItemOmit
    movimientoInventario?: MovimientoInventarioOmit
    venta?: VentaOmit
    ventaDetalle?: VentaDetalleOmit
    ordenCompra?: OrdenCompraOmit
    ordenCompraDetalle?: OrdenCompraDetalleOmit
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
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    platos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platos?: boolean | CategoriaCountOutputTypeCountPlatosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountPlatosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatoWhereInput
  }


  /**
   * Count Type PlatoCountOutputType
   */

  export type PlatoCountOutputType = {
    receta: number
    ventas: number
  }

  export type PlatoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receta?: boolean | PlatoCountOutputTypeCountRecetaArgs
    ventas?: boolean | PlatoCountOutputTypeCountVentasArgs
  }

  // Custom InputTypes
  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatoCountOutputType
     */
    select?: PlatoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeCountRecetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaItemWhereInput
  }

  /**
   * PlatoCountOutputType without action
   */
  export type PlatoCountOutputTypeCountVentasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaDetalleWhereInput
  }


  /**
   * Count Type IngredienteCountOutputType
   */

  export type IngredienteCountOutputType = {
    recetas: number
    movimientos: number
    ordenItems: number
  }

  export type IngredienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | IngredienteCountOutputTypeCountRecetasArgs
    movimientos?: boolean | IngredienteCountOutputTypeCountMovimientosArgs
    ordenItems?: boolean | IngredienteCountOutputTypeCountOrdenItemsArgs
  }

  // Custom InputTypes
  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredienteCountOutputType
     */
    select?: IngredienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountRecetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaItemWhereInput
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountMovimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
  }

  /**
   * IngredienteCountOutputType without action
   */
  export type IngredienteCountOutputTypeCountOrdenItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraDetalleWhereInput
  }


  /**
   * Count Type VentaCountOutputType
   */

  export type VentaCountOutputType = {
    detalles: number
  }

  export type VentaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | VentaCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaCountOutputType
     */
    select?: VentaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VentaCountOutputType without action
   */
  export type VentaCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaDetalleWhereInput
  }


  /**
   * Count Type OrdenCompraCountOutputType
   */

  export type OrdenCompraCountOutputType = {
    detalles: number
  }

  export type OrdenCompraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | OrdenCompraCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * OrdenCompraCountOutputType without action
   */
  export type OrdenCompraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraCountOutputType
     */
    select?: OrdenCompraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCompraCountOutputType without action
   */
  export type OrdenCompraCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraDetalleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    createdAt: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    createdAt: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    createdAt: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    createdAt?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    nombre: string
    createdAt: Date
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
    platos?: boolean | Categoria$platosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    createdAt?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "createdAt", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platos?: boolean | Categoria$platosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      platos: Prisma.$PlatoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      createdAt: Date
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    platos<T extends Categoria$platosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$platosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly createdAt: FieldRef<"Categoria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.platos
   */
  export type Categoria$platosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    where?: PlatoWhereInput
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    cursor?: PlatoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Plato
   */

  export type AggregatePlato = {
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  export type PlatoAvgAggregateOutputType = {
    precio: Decimal | null
  }

  export type PlatoSumAggregateOutputType = {
    precio: Decimal | null
  }

  export type PlatoMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activo: boolean | null
    createdAt: Date | null
    categoriaId: string | null
  }

  export type PlatoMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activo: boolean | null
    createdAt: Date | null
    categoriaId: string | null
  }

  export type PlatoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    activo: number
    createdAt: number
    categoriaId: number
    _all: number
  }


  export type PlatoAvgAggregateInputType = {
    precio?: true
  }

  export type PlatoSumAggregateInputType = {
    precio?: true
  }

  export type PlatoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    createdAt?: true
    categoriaId?: true
  }

  export type PlatoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    createdAt?: true
    categoriaId?: true
  }

  export type PlatoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activo?: true
    createdAt?: true
    categoriaId?: true
    _all?: true
  }

  export type PlatoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plato to aggregate.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platoes
    **/
    _count?: true | PlatoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatoMaxAggregateInputType
  }

  export type GetPlatoAggregateType<T extends PlatoAggregateArgs> = {
        [P in keyof T & keyof AggregatePlato]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlato[P]>
      : GetScalarType<T[P], AggregatePlato[P]>
  }




  export type PlatoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatoWhereInput
    orderBy?: PlatoOrderByWithAggregationInput | PlatoOrderByWithAggregationInput[]
    by: PlatoScalarFieldEnum[] | PlatoScalarFieldEnum
    having?: PlatoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatoCountAggregateInputType | true
    _avg?: PlatoAvgAggregateInputType
    _sum?: PlatoSumAggregateInputType
    _min?: PlatoMinAggregateInputType
    _max?: PlatoMaxAggregateInputType
  }

  export type PlatoGroupByOutputType = {
    id: string
    nombre: string
    descripcion: string | null
    precio: Decimal
    activo: boolean
    createdAt: Date
    categoriaId: string
    _count: PlatoCountAggregateOutputType | null
    _avg: PlatoAvgAggregateOutputType | null
    _sum: PlatoSumAggregateOutputType | null
    _min: PlatoMinAggregateOutputType | null
    _max: PlatoMaxAggregateOutputType | null
  }

  type GetPlatoGroupByPayload<T extends PlatoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatoGroupByOutputType[P]>
            : GetScalarType<T[P], PlatoGroupByOutputType[P]>
        }
      >
    >


  export type PlatoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    createdAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    receta?: boolean | Plato$recetaArgs<ExtArgs>
    ventas?: boolean | Plato$ventasArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plato"]>

  export type PlatoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    createdAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plato"]>

  export type PlatoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    createdAt?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plato"]>

  export type PlatoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activo?: boolean
    createdAt?: boolean
    categoriaId?: boolean
  }

  export type PlatoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "activo" | "createdAt" | "categoriaId", ExtArgs["result"]["plato"]>
  export type PlatoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    receta?: boolean | Plato$recetaArgs<ExtArgs>
    ventas?: boolean | Plato$ventasArgs<ExtArgs>
    _count?: boolean | PlatoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type PlatoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $PlatoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plato"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      receta: Prisma.$RecetaItemPayload<ExtArgs>[]
      ventas: Prisma.$VentaDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      activo: boolean
      createdAt: Date
      categoriaId: string
    }, ExtArgs["result"]["plato"]>
    composites: {}
  }

  type PlatoGetPayload<S extends boolean | null | undefined | PlatoDefaultArgs> = $Result.GetResult<Prisma.$PlatoPayload, S>

  type PlatoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatoCountAggregateInputType | true
    }

  export interface PlatoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plato'], meta: { name: 'Plato' } }
    /**
     * Find zero or one Plato that matches the filter.
     * @param {PlatoFindUniqueArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatoFindUniqueArgs>(args: SelectSubset<T, PlatoFindUniqueArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatoFindUniqueOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatoFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatoFindFirstArgs>(args?: SelectSubset<T, PlatoFindFirstArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindFirstOrThrowArgs} args - Arguments to find a Plato
     * @example
     * // Get one Plato
     * const plato = await prisma.plato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatoFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platoes
     * const platoes = await prisma.plato.findMany()
     * 
     * // Get first 10 Platoes
     * const platoes = await prisma.plato.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platoWithIdOnly = await prisma.plato.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatoFindManyArgs>(args?: SelectSubset<T, PlatoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plato.
     * @param {PlatoCreateArgs} args - Arguments to create a Plato.
     * @example
     * // Create one Plato
     * const Plato = await prisma.plato.create({
     *   data: {
     *     // ... data to create a Plato
     *   }
     * })
     * 
     */
    create<T extends PlatoCreateArgs>(args: SelectSubset<T, PlatoCreateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platoes.
     * @param {PlatoCreateManyArgs} args - Arguments to create many Platoes.
     * @example
     * // Create many Platoes
     * const plato = await prisma.plato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatoCreateManyArgs>(args?: SelectSubset<T, PlatoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platoes and returns the data saved in the database.
     * @param {PlatoCreateManyAndReturnArgs} args - Arguments to create many Platoes.
     * @example
     * // Create many Platoes
     * const plato = await prisma.plato.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platoes and only return the `id`
     * const platoWithIdOnly = await prisma.plato.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatoCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plato.
     * @param {PlatoDeleteArgs} args - Arguments to delete one Plato.
     * @example
     * // Delete one Plato
     * const Plato = await prisma.plato.delete({
     *   where: {
     *     // ... filter to delete one Plato
     *   }
     * })
     * 
     */
    delete<T extends PlatoDeleteArgs>(args: SelectSubset<T, PlatoDeleteArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plato.
     * @param {PlatoUpdateArgs} args - Arguments to update one Plato.
     * @example
     * // Update one Plato
     * const plato = await prisma.plato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatoUpdateArgs>(args: SelectSubset<T, PlatoUpdateArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platoes.
     * @param {PlatoDeleteManyArgs} args - Arguments to filter Platoes to delete.
     * @example
     * // Delete a few Platoes
     * const { count } = await prisma.plato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatoDeleteManyArgs>(args?: SelectSubset<T, PlatoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platoes
     * const plato = await prisma.plato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatoUpdateManyArgs>(args: SelectSubset<T, PlatoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platoes and returns the data updated in the database.
     * @param {PlatoUpdateManyAndReturnArgs} args - Arguments to update many Platoes.
     * @example
     * // Update many Platoes
     * const plato = await prisma.plato.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platoes and only return the `id`
     * const platoWithIdOnly = await prisma.plato.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlatoUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plato.
     * @param {PlatoUpsertArgs} args - Arguments to update or create a Plato.
     * @example
     * // Update or create a Plato
     * const plato = await prisma.plato.upsert({
     *   create: {
     *     // ... data to create a Plato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plato we want to update
     *   }
     * })
     */
    upsert<T extends PlatoUpsertArgs>(args: SelectSubset<T, PlatoUpsertArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoCountArgs} args - Arguments to filter Platoes to count.
     * @example
     * // Count the number of Platoes
     * const count = await prisma.plato.count({
     *   where: {
     *     // ... the filter for the Platoes we want to count
     *   }
     * })
    **/
    count<T extends PlatoCountArgs>(
      args?: Subset<T, PlatoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatoAggregateArgs>(args: Subset<T, PlatoAggregateArgs>): Prisma.PrismaPromise<GetPlatoAggregateType<T>>

    /**
     * Group by Plato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatoGroupByArgs} args - Group by arguments.
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
      T extends PlatoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatoGroupByArgs['orderBy'] }
        : { orderBy?: PlatoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plato model
   */
  readonly fields: PlatoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plato.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receta<T extends Plato$recetaArgs<ExtArgs> = {}>(args?: Subset<T, Plato$recetaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventas<T extends Plato$ventasArgs<ExtArgs> = {}>(args?: Subset<T, Plato$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plato model
   */
  interface PlatoFieldRefs {
    readonly id: FieldRef<"Plato", 'String'>
    readonly nombre: FieldRef<"Plato", 'String'>
    readonly descripcion: FieldRef<"Plato", 'String'>
    readonly precio: FieldRef<"Plato", 'Decimal'>
    readonly activo: FieldRef<"Plato", 'Boolean'>
    readonly createdAt: FieldRef<"Plato", 'DateTime'>
    readonly categoriaId: FieldRef<"Plato", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plato findUnique
   */
  export type PlatoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findUniqueOrThrow
   */
  export type PlatoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato findFirst
   */
  export type PlatoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findFirstOrThrow
   */
  export type PlatoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Plato to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platoes.
     */
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato findMany
   */
  export type PlatoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter, which Platoes to fetch.
     */
    where?: PlatoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platoes to fetch.
     */
    orderBy?: PlatoOrderByWithRelationInput | PlatoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platoes.
     */
    cursor?: PlatoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platoes.
     */
    skip?: number
    distinct?: PlatoScalarFieldEnum | PlatoScalarFieldEnum[]
  }

  /**
   * Plato create
   */
  export type PlatoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to create a Plato.
     */
    data: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
  }

  /**
   * Plato createMany
   */
  export type PlatoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platoes.
     */
    data: PlatoCreateManyInput | PlatoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plato createManyAndReturn
   */
  export type PlatoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * The data used to create many Platoes.
     */
    data: PlatoCreateManyInput | PlatoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plato update
   */
  export type PlatoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The data needed to update a Plato.
     */
    data: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
    /**
     * Choose, which Plato to update.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato updateMany
   */
  export type PlatoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platoes.
     */
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyInput>
    /**
     * Filter which Platoes to update
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to update.
     */
    limit?: number
  }

  /**
   * Plato updateManyAndReturn
   */
  export type PlatoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * The data used to update Platoes.
     */
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyInput>
    /**
     * Filter which Platoes to update
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plato upsert
   */
  export type PlatoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * The filter to search for the Plato to update in case it exists.
     */
    where: PlatoWhereUniqueInput
    /**
     * In case the Plato found by the `where` argument doesn't exist, create a new Plato with this data.
     */
    create: XOR<PlatoCreateInput, PlatoUncheckedCreateInput>
    /**
     * In case the Plato was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatoUpdateInput, PlatoUncheckedUpdateInput>
  }

  /**
   * Plato delete
   */
  export type PlatoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
    /**
     * Filter which Plato to delete.
     */
    where: PlatoWhereUniqueInput
  }

  /**
   * Plato deleteMany
   */
  export type PlatoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platoes to delete
     */
    where?: PlatoWhereInput
    /**
     * Limit how many Platoes to delete.
     */
    limit?: number
  }

  /**
   * Plato.receta
   */
  export type Plato$recetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    where?: RecetaItemWhereInput
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    cursor?: RecetaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaItemScalarFieldEnum | RecetaItemScalarFieldEnum[]
  }

  /**
   * Plato.ventas
   */
  export type Plato$ventasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    where?: VentaDetalleWhereInput
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    cursor?: VentaDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaDetalleScalarFieldEnum | VentaDetalleScalarFieldEnum[]
  }

  /**
   * Plato without action
   */
  export type PlatoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plato
     */
    select?: PlatoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plato
     */
    omit?: PlatoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatoInclude<ExtArgs> | null
  }


  /**
   * Model Ingrediente
   */

  export type AggregateIngrediente = {
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  export type IngredienteAvgAggregateOutputType = {
    costoUnitario: Decimal | null
    stockActual: Decimal | null
    stockMinimo: Decimal | null
  }

  export type IngredienteSumAggregateOutputType = {
    costoUnitario: Decimal | null
    stockActual: Decimal | null
    stockMinimo: Decimal | null
  }

  export type IngredienteMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    unidad: $Enums.UnidadMedida | null
    costoUnitario: Decimal | null
    stockActual: Decimal | null
    stockMinimo: Decimal | null
    createdAt: Date | null
  }

  export type IngredienteMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    unidad: $Enums.UnidadMedida | null
    costoUnitario: Decimal | null
    stockActual: Decimal | null
    stockMinimo: Decimal | null
    createdAt: Date | null
  }

  export type IngredienteCountAggregateOutputType = {
    id: number
    nombre: number
    unidad: number
    costoUnitario: number
    stockActual: number
    stockMinimo: number
    createdAt: number
    _all: number
  }


  export type IngredienteAvgAggregateInputType = {
    costoUnitario?: true
    stockActual?: true
    stockMinimo?: true
  }

  export type IngredienteSumAggregateInputType = {
    costoUnitario?: true
    stockActual?: true
    stockMinimo?: true
  }

  export type IngredienteMinAggregateInputType = {
    id?: true
    nombre?: true
    unidad?: true
    costoUnitario?: true
    stockActual?: true
    stockMinimo?: true
    createdAt?: true
  }

  export type IngredienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    unidad?: true
    costoUnitario?: true
    stockActual?: true
    stockMinimo?: true
    createdAt?: true
  }

  export type IngredienteCountAggregateInputType = {
    id?: true
    nombre?: true
    unidad?: true
    costoUnitario?: true
    stockActual?: true
    stockMinimo?: true
    createdAt?: true
    _all?: true
  }

  export type IngredienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingrediente to aggregate.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredientes
    **/
    _count?: true | IngredienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredienteMaxAggregateInputType
  }

  export type GetIngredienteAggregateType<T extends IngredienteAggregateArgs> = {
        [P in keyof T & keyof AggregateIngrediente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngrediente[P]>
      : GetScalarType<T[P], AggregateIngrediente[P]>
  }




  export type IngredienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredienteWhereInput
    orderBy?: IngredienteOrderByWithAggregationInput | IngredienteOrderByWithAggregationInput[]
    by: IngredienteScalarFieldEnum[] | IngredienteScalarFieldEnum
    having?: IngredienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredienteCountAggregateInputType | true
    _avg?: IngredienteAvgAggregateInputType
    _sum?: IngredienteSumAggregateInputType
    _min?: IngredienteMinAggregateInputType
    _max?: IngredienteMaxAggregateInputType
  }

  export type IngredienteGroupByOutputType = {
    id: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal
    stockActual: Decimal
    stockMinimo: Decimal
    createdAt: Date
    _count: IngredienteCountAggregateOutputType | null
    _avg: IngredienteAvgAggregateOutputType | null
    _sum: IngredienteSumAggregateOutputType | null
    _min: IngredienteMinAggregateOutputType | null
    _max: IngredienteMaxAggregateOutputType | null
  }

  type GetIngredienteGroupByPayload<T extends IngredienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
            : GetScalarType<T[P], IngredienteGroupByOutputType[P]>
        }
      >
    >


  export type IngredienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    unidad?: boolean
    costoUnitario?: boolean
    stockActual?: boolean
    stockMinimo?: boolean
    createdAt?: boolean
    recetas?: boolean | Ingrediente$recetasArgs<ExtArgs>
    movimientos?: boolean | Ingrediente$movimientosArgs<ExtArgs>
    ordenItems?: boolean | Ingrediente$ordenItemsArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    unidad?: boolean
    costoUnitario?: boolean
    stockActual?: boolean
    stockMinimo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    unidad?: boolean
    costoUnitario?: boolean
    stockActual?: boolean
    stockMinimo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingrediente"]>

  export type IngredienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    unidad?: boolean
    costoUnitario?: boolean
    stockActual?: boolean
    stockMinimo?: boolean
    createdAt?: boolean
  }

  export type IngredienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "unidad" | "costoUnitario" | "stockActual" | "stockMinimo" | "createdAt", ExtArgs["result"]["ingrediente"]>
  export type IngredienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recetas?: boolean | Ingrediente$recetasArgs<ExtArgs>
    movimientos?: boolean | Ingrediente$movimientosArgs<ExtArgs>
    ordenItems?: boolean | Ingrediente$ordenItemsArgs<ExtArgs>
    _count?: boolean | IngredienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingrediente"
    objects: {
      recetas: Prisma.$RecetaItemPayload<ExtArgs>[]
      movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[]
      ordenItems: Prisma.$OrdenCompraDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      unidad: $Enums.UnidadMedida
      costoUnitario: Prisma.Decimal
      stockActual: Prisma.Decimal
      stockMinimo: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["ingrediente"]>
    composites: {}
  }

  type IngredienteGetPayload<S extends boolean | null | undefined | IngredienteDefaultArgs> = $Result.GetResult<Prisma.$IngredientePayload, S>

  type IngredienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredienteCountAggregateInputType | true
    }

  export interface IngredienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingrediente'], meta: { name: 'Ingrediente' } }
    /**
     * Find zero or one Ingrediente that matches the filter.
     * @param {IngredienteFindUniqueArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredienteFindUniqueArgs>(args: SelectSubset<T, IngredienteFindUniqueArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingrediente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredienteFindUniqueOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredienteFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredienteFindFirstArgs>(args?: SelectSubset<T, IngredienteFindFirstArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingrediente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindFirstOrThrowArgs} args - Arguments to find a Ingrediente
     * @example
     * // Get one Ingrediente
     * const ingrediente = await prisma.ingrediente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredienteFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany()
     * 
     * // Get first 10 Ingredientes
     * const ingredientes = await prisma.ingrediente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredienteFindManyArgs>(args?: SelectSubset<T, IngredienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingrediente.
     * @param {IngredienteCreateArgs} args - Arguments to create a Ingrediente.
     * @example
     * // Create one Ingrediente
     * const Ingrediente = await prisma.ingrediente.create({
     *   data: {
     *     // ... data to create a Ingrediente
     *   }
     * })
     * 
     */
    create<T extends IngredienteCreateArgs>(args: SelectSubset<T, IngredienteCreateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredientes.
     * @param {IngredienteCreateManyArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredienteCreateManyArgs>(args?: SelectSubset<T, IngredienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredientes and returns the data saved in the database.
     * @param {IngredienteCreateManyAndReturnArgs} args - Arguments to create many Ingredientes.
     * @example
     * // Create many Ingredientes
     * const ingrediente = await prisma.ingrediente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredienteCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingrediente.
     * @param {IngredienteDeleteArgs} args - Arguments to delete one Ingrediente.
     * @example
     * // Delete one Ingrediente
     * const Ingrediente = await prisma.ingrediente.delete({
     *   where: {
     *     // ... filter to delete one Ingrediente
     *   }
     * })
     * 
     */
    delete<T extends IngredienteDeleteArgs>(args: SelectSubset<T, IngredienteDeleteArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingrediente.
     * @param {IngredienteUpdateArgs} args - Arguments to update one Ingrediente.
     * @example
     * // Update one Ingrediente
     * const ingrediente = await prisma.ingrediente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredienteUpdateArgs>(args: SelectSubset<T, IngredienteUpdateArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredientes.
     * @param {IngredienteDeleteManyArgs} args - Arguments to filter Ingredientes to delete.
     * @example
     * // Delete a few Ingredientes
     * const { count } = await prisma.ingrediente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredienteDeleteManyArgs>(args?: SelectSubset<T, IngredienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredienteUpdateManyArgs>(args: SelectSubset<T, IngredienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredientes and returns the data updated in the database.
     * @param {IngredienteUpdateManyAndReturnArgs} args - Arguments to update many Ingredientes.
     * @example
     * // Update many Ingredientes
     * const ingrediente = await prisma.ingrediente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredientes and only return the `id`
     * const ingredienteWithIdOnly = await prisma.ingrediente.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredienteUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingrediente.
     * @param {IngredienteUpsertArgs} args - Arguments to update or create a Ingrediente.
     * @example
     * // Update or create a Ingrediente
     * const ingrediente = await prisma.ingrediente.upsert({
     *   create: {
     *     // ... data to create a Ingrediente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingrediente we want to update
     *   }
     * })
     */
    upsert<T extends IngredienteUpsertArgs>(args: SelectSubset<T, IngredienteUpsertArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteCountArgs} args - Arguments to filter Ingredientes to count.
     * @example
     * // Count the number of Ingredientes
     * const count = await prisma.ingrediente.count({
     *   where: {
     *     // ... the filter for the Ingredientes we want to count
     *   }
     * })
    **/
    count<T extends IngredienteCountArgs>(
      args?: Subset<T, IngredienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredienteAggregateArgs>(args: Subset<T, IngredienteAggregateArgs>): Prisma.PrismaPromise<GetIngredienteAggregateType<T>>

    /**
     * Group by Ingrediente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredienteGroupByArgs} args - Group by arguments.
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
      T extends IngredienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredienteGroupByArgs['orderBy'] }
        : { orderBy?: IngredienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingrediente model
   */
  readonly fields: IngredienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingrediente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recetas<T extends Ingrediente$recetasArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$recetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimientos<T extends Ingrediente$movimientosArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordenItems<T extends Ingrediente$ordenItemsArgs<ExtArgs> = {}>(args?: Subset<T, Ingrediente$ordenItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingrediente model
   */
  interface IngredienteFieldRefs {
    readonly id: FieldRef<"Ingrediente", 'String'>
    readonly nombre: FieldRef<"Ingrediente", 'String'>
    readonly unidad: FieldRef<"Ingrediente", 'UnidadMedida'>
    readonly costoUnitario: FieldRef<"Ingrediente", 'Decimal'>
    readonly stockActual: FieldRef<"Ingrediente", 'Decimal'>
    readonly stockMinimo: FieldRef<"Ingrediente", 'Decimal'>
    readonly createdAt: FieldRef<"Ingrediente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingrediente findUnique
   */
  export type IngredienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findUniqueOrThrow
   */
  export type IngredienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente findFirst
   */
  export type IngredienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findFirstOrThrow
   */
  export type IngredienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingrediente to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredientes.
     */
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente findMany
   */
  export type IngredienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter, which Ingredientes to fetch.
     */
    where?: IngredienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredientes to fetch.
     */
    orderBy?: IngredienteOrderByWithRelationInput | IngredienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredientes.
     */
    cursor?: IngredienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredientes.
     */
    skip?: number
    distinct?: IngredienteScalarFieldEnum | IngredienteScalarFieldEnum[]
  }

  /**
   * Ingrediente create
   */
  export type IngredienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingrediente.
     */
    data: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
  }

  /**
   * Ingrediente createMany
   */
  export type IngredienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente createManyAndReturn
   */
  export type IngredienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredientes.
     */
    data: IngredienteCreateManyInput | IngredienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingrediente update
   */
  export type IngredienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingrediente.
     */
    data: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
    /**
     * Choose, which Ingrediente to update.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente updateMany
   */
  export type IngredienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente updateManyAndReturn
   */
  export type IngredienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * The data used to update Ingredientes.
     */
    data: XOR<IngredienteUpdateManyMutationInput, IngredienteUncheckedUpdateManyInput>
    /**
     * Filter which Ingredientes to update
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to update.
     */
    limit?: number
  }

  /**
   * Ingrediente upsert
   */
  export type IngredienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingrediente to update in case it exists.
     */
    where: IngredienteWhereUniqueInput
    /**
     * In case the Ingrediente found by the `where` argument doesn't exist, create a new Ingrediente with this data.
     */
    create: XOR<IngredienteCreateInput, IngredienteUncheckedCreateInput>
    /**
     * In case the Ingrediente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredienteUpdateInput, IngredienteUncheckedUpdateInput>
  }

  /**
   * Ingrediente delete
   */
  export type IngredienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
    /**
     * Filter which Ingrediente to delete.
     */
    where: IngredienteWhereUniqueInput
  }

  /**
   * Ingrediente deleteMany
   */
  export type IngredienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredientes to delete
     */
    where?: IngredienteWhereInput
    /**
     * Limit how many Ingredientes to delete.
     */
    limit?: number
  }

  /**
   * Ingrediente.recetas
   */
  export type Ingrediente$recetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    where?: RecetaItemWhereInput
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    cursor?: RecetaItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecetaItemScalarFieldEnum | RecetaItemScalarFieldEnum[]
  }

  /**
   * Ingrediente.movimientos
   */
  export type Ingrediente$movimientosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    cursor?: MovimientoInventarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * Ingrediente.ordenItems
   */
  export type Ingrediente$ordenItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    where?: OrdenCompraDetalleWhereInput
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    cursor?: OrdenCompraDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenCompraDetalleScalarFieldEnum | OrdenCompraDetalleScalarFieldEnum[]
  }

  /**
   * Ingrediente without action
   */
  export type IngredienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingrediente
     */
    select?: IngredienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingrediente
     */
    omit?: IngredienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredienteInclude<ExtArgs> | null
  }


  /**
   * Model RecetaItem
   */

  export type AggregateRecetaItem = {
    _count: RecetaItemCountAggregateOutputType | null
    _avg: RecetaItemAvgAggregateOutputType | null
    _sum: RecetaItemSumAggregateOutputType | null
    _min: RecetaItemMinAggregateOutputType | null
    _max: RecetaItemMaxAggregateOutputType | null
  }

  export type RecetaItemAvgAggregateOutputType = {
    cantidad: Decimal | null
  }

  export type RecetaItemSumAggregateOutputType = {
    cantidad: Decimal | null
  }

  export type RecetaItemMinAggregateOutputType = {
    id: string | null
    platoId: string | null
    ingredienteId: string | null
    cantidad: Decimal | null
  }

  export type RecetaItemMaxAggregateOutputType = {
    id: string | null
    platoId: string | null
    ingredienteId: string | null
    cantidad: Decimal | null
  }

  export type RecetaItemCountAggregateOutputType = {
    id: number
    platoId: number
    ingredienteId: number
    cantidad: number
    _all: number
  }


  export type RecetaItemAvgAggregateInputType = {
    cantidad?: true
  }

  export type RecetaItemSumAggregateInputType = {
    cantidad?: true
  }

  export type RecetaItemMinAggregateInputType = {
    id?: true
    platoId?: true
    ingredienteId?: true
    cantidad?: true
  }

  export type RecetaItemMaxAggregateInputType = {
    id?: true
    platoId?: true
    ingredienteId?: true
    cantidad?: true
  }

  export type RecetaItemCountAggregateInputType = {
    id?: true
    platoId?: true
    ingredienteId?: true
    cantidad?: true
    _all?: true
  }

  export type RecetaItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaItem to aggregate.
     */
    where?: RecetaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaItems to fetch.
     */
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecetaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecetaItems
    **/
    _count?: true | RecetaItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecetaItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecetaItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecetaItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecetaItemMaxAggregateInputType
  }

  export type GetRecetaItemAggregateType<T extends RecetaItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecetaItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecetaItem[P]>
      : GetScalarType<T[P], AggregateRecetaItem[P]>
  }




  export type RecetaItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecetaItemWhereInput
    orderBy?: RecetaItemOrderByWithAggregationInput | RecetaItemOrderByWithAggregationInput[]
    by: RecetaItemScalarFieldEnum[] | RecetaItemScalarFieldEnum
    having?: RecetaItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecetaItemCountAggregateInputType | true
    _avg?: RecetaItemAvgAggregateInputType
    _sum?: RecetaItemSumAggregateInputType
    _min?: RecetaItemMinAggregateInputType
    _max?: RecetaItemMaxAggregateInputType
  }

  export type RecetaItemGroupByOutputType = {
    id: string
    platoId: string
    ingredienteId: string
    cantidad: Decimal
    _count: RecetaItemCountAggregateOutputType | null
    _avg: RecetaItemAvgAggregateOutputType | null
    _sum: RecetaItemSumAggregateOutputType | null
    _min: RecetaItemMinAggregateOutputType | null
    _max: RecetaItemMaxAggregateOutputType | null
  }

  type GetRecetaItemGroupByPayload<T extends RecetaItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecetaItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecetaItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecetaItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecetaItemGroupByOutputType[P]>
        }
      >
    >


  export type RecetaItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platoId?: boolean
    ingredienteId?: boolean
    cantidad?: boolean
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaItem"]>

  export type RecetaItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platoId?: boolean
    ingredienteId?: boolean
    cantidad?: boolean
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaItem"]>

  export type RecetaItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platoId?: boolean
    ingredienteId?: boolean
    cantidad?: boolean
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recetaItem"]>

  export type RecetaItemSelectScalar = {
    id?: boolean
    platoId?: boolean
    ingredienteId?: boolean
    cantidad?: boolean
  }

  export type RecetaItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platoId" | "ingredienteId" | "cantidad", ExtArgs["result"]["recetaItem"]>
  export type RecetaItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type RecetaItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type RecetaItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $RecetaItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecetaItem"
    objects: {
      plato: Prisma.$PlatoPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platoId: string
      ingredienteId: string
      cantidad: Prisma.Decimal
    }, ExtArgs["result"]["recetaItem"]>
    composites: {}
  }

  type RecetaItemGetPayload<S extends boolean | null | undefined | RecetaItemDefaultArgs> = $Result.GetResult<Prisma.$RecetaItemPayload, S>

  type RecetaItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecetaItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecetaItemCountAggregateInputType | true
    }

  export interface RecetaItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecetaItem'], meta: { name: 'RecetaItem' } }
    /**
     * Find zero or one RecetaItem that matches the filter.
     * @param {RecetaItemFindUniqueArgs} args - Arguments to find a RecetaItem
     * @example
     * // Get one RecetaItem
     * const recetaItem = await prisma.recetaItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecetaItemFindUniqueArgs>(args: SelectSubset<T, RecetaItemFindUniqueArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecetaItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecetaItemFindUniqueOrThrowArgs} args - Arguments to find a RecetaItem
     * @example
     * // Get one RecetaItem
     * const recetaItem = await prisma.recetaItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecetaItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RecetaItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemFindFirstArgs} args - Arguments to find a RecetaItem
     * @example
     * // Get one RecetaItem
     * const recetaItem = await prisma.recetaItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecetaItemFindFirstArgs>(args?: SelectSubset<T, RecetaItemFindFirstArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecetaItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemFindFirstOrThrowArgs} args - Arguments to find a RecetaItem
     * @example
     * // Get one RecetaItem
     * const recetaItem = await prisma.recetaItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecetaItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RecetaItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecetaItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecetaItems
     * const recetaItems = await prisma.recetaItem.findMany()
     * 
     * // Get first 10 RecetaItems
     * const recetaItems = await prisma.recetaItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recetaItemWithIdOnly = await prisma.recetaItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecetaItemFindManyArgs>(args?: SelectSubset<T, RecetaItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecetaItem.
     * @param {RecetaItemCreateArgs} args - Arguments to create a RecetaItem.
     * @example
     * // Create one RecetaItem
     * const RecetaItem = await prisma.recetaItem.create({
     *   data: {
     *     // ... data to create a RecetaItem
     *   }
     * })
     * 
     */
    create<T extends RecetaItemCreateArgs>(args: SelectSubset<T, RecetaItemCreateArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecetaItems.
     * @param {RecetaItemCreateManyArgs} args - Arguments to create many RecetaItems.
     * @example
     * // Create many RecetaItems
     * const recetaItem = await prisma.recetaItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecetaItemCreateManyArgs>(args?: SelectSubset<T, RecetaItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecetaItems and returns the data saved in the database.
     * @param {RecetaItemCreateManyAndReturnArgs} args - Arguments to create many RecetaItems.
     * @example
     * // Create many RecetaItems
     * const recetaItem = await prisma.recetaItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecetaItems and only return the `id`
     * const recetaItemWithIdOnly = await prisma.recetaItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecetaItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RecetaItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecetaItem.
     * @param {RecetaItemDeleteArgs} args - Arguments to delete one RecetaItem.
     * @example
     * // Delete one RecetaItem
     * const RecetaItem = await prisma.recetaItem.delete({
     *   where: {
     *     // ... filter to delete one RecetaItem
     *   }
     * })
     * 
     */
    delete<T extends RecetaItemDeleteArgs>(args: SelectSubset<T, RecetaItemDeleteArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecetaItem.
     * @param {RecetaItemUpdateArgs} args - Arguments to update one RecetaItem.
     * @example
     * // Update one RecetaItem
     * const recetaItem = await prisma.recetaItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecetaItemUpdateArgs>(args: SelectSubset<T, RecetaItemUpdateArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecetaItems.
     * @param {RecetaItemDeleteManyArgs} args - Arguments to filter RecetaItems to delete.
     * @example
     * // Delete a few RecetaItems
     * const { count } = await prisma.recetaItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecetaItemDeleteManyArgs>(args?: SelectSubset<T, RecetaItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecetaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecetaItems
     * const recetaItem = await prisma.recetaItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecetaItemUpdateManyArgs>(args: SelectSubset<T, RecetaItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecetaItems and returns the data updated in the database.
     * @param {RecetaItemUpdateManyAndReturnArgs} args - Arguments to update many RecetaItems.
     * @example
     * // Update many RecetaItems
     * const recetaItem = await prisma.recetaItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecetaItems and only return the `id`
     * const recetaItemWithIdOnly = await prisma.recetaItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecetaItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RecetaItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecetaItem.
     * @param {RecetaItemUpsertArgs} args - Arguments to update or create a RecetaItem.
     * @example
     * // Update or create a RecetaItem
     * const recetaItem = await prisma.recetaItem.upsert({
     *   create: {
     *     // ... data to create a RecetaItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecetaItem we want to update
     *   }
     * })
     */
    upsert<T extends RecetaItemUpsertArgs>(args: SelectSubset<T, RecetaItemUpsertArgs<ExtArgs>>): Prisma__RecetaItemClient<$Result.GetResult<Prisma.$RecetaItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecetaItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemCountArgs} args - Arguments to filter RecetaItems to count.
     * @example
     * // Count the number of RecetaItems
     * const count = await prisma.recetaItem.count({
     *   where: {
     *     // ... the filter for the RecetaItems we want to count
     *   }
     * })
    **/
    count<T extends RecetaItemCountArgs>(
      args?: Subset<T, RecetaItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecetaItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecetaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecetaItemAggregateArgs>(args: Subset<T, RecetaItemAggregateArgs>): Prisma.PrismaPromise<GetRecetaItemAggregateType<T>>

    /**
     * Group by RecetaItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecetaItemGroupByArgs} args - Group by arguments.
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
      T extends RecetaItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecetaItemGroupByArgs['orderBy'] }
        : { orderBy?: RecetaItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecetaItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecetaItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecetaItem model
   */
  readonly fields: RecetaItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecetaItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecetaItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plato<T extends PlatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatoDefaultArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecetaItem model
   */
  interface RecetaItemFieldRefs {
    readonly id: FieldRef<"RecetaItem", 'String'>
    readonly platoId: FieldRef<"RecetaItem", 'String'>
    readonly ingredienteId: FieldRef<"RecetaItem", 'String'>
    readonly cantidad: FieldRef<"RecetaItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * RecetaItem findUnique
   */
  export type RecetaItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter, which RecetaItem to fetch.
     */
    where: RecetaItemWhereUniqueInput
  }

  /**
   * RecetaItem findUniqueOrThrow
   */
  export type RecetaItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter, which RecetaItem to fetch.
     */
    where: RecetaItemWhereUniqueInput
  }

  /**
   * RecetaItem findFirst
   */
  export type RecetaItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter, which RecetaItem to fetch.
     */
    where?: RecetaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaItems to fetch.
     */
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaItems.
     */
    cursor?: RecetaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaItems.
     */
    distinct?: RecetaItemScalarFieldEnum | RecetaItemScalarFieldEnum[]
  }

  /**
   * RecetaItem findFirstOrThrow
   */
  export type RecetaItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter, which RecetaItem to fetch.
     */
    where?: RecetaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaItems to fetch.
     */
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecetaItems.
     */
    cursor?: RecetaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecetaItems.
     */
    distinct?: RecetaItemScalarFieldEnum | RecetaItemScalarFieldEnum[]
  }

  /**
   * RecetaItem findMany
   */
  export type RecetaItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter, which RecetaItems to fetch.
     */
    where?: RecetaItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecetaItems to fetch.
     */
    orderBy?: RecetaItemOrderByWithRelationInput | RecetaItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecetaItems.
     */
    cursor?: RecetaItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecetaItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecetaItems.
     */
    skip?: number
    distinct?: RecetaItemScalarFieldEnum | RecetaItemScalarFieldEnum[]
  }

  /**
   * RecetaItem create
   */
  export type RecetaItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RecetaItem.
     */
    data: XOR<RecetaItemCreateInput, RecetaItemUncheckedCreateInput>
  }

  /**
   * RecetaItem createMany
   */
  export type RecetaItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecetaItems.
     */
    data: RecetaItemCreateManyInput | RecetaItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecetaItem createManyAndReturn
   */
  export type RecetaItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * The data used to create many RecetaItems.
     */
    data: RecetaItemCreateManyInput | RecetaItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecetaItem update
   */
  export type RecetaItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RecetaItem.
     */
    data: XOR<RecetaItemUpdateInput, RecetaItemUncheckedUpdateInput>
    /**
     * Choose, which RecetaItem to update.
     */
    where: RecetaItemWhereUniqueInput
  }

  /**
   * RecetaItem updateMany
   */
  export type RecetaItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecetaItems.
     */
    data: XOR<RecetaItemUpdateManyMutationInput, RecetaItemUncheckedUpdateManyInput>
    /**
     * Filter which RecetaItems to update
     */
    where?: RecetaItemWhereInput
    /**
     * Limit how many RecetaItems to update.
     */
    limit?: number
  }

  /**
   * RecetaItem updateManyAndReturn
   */
  export type RecetaItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * The data used to update RecetaItems.
     */
    data: XOR<RecetaItemUpdateManyMutationInput, RecetaItemUncheckedUpdateManyInput>
    /**
     * Filter which RecetaItems to update
     */
    where?: RecetaItemWhereInput
    /**
     * Limit how many RecetaItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecetaItem upsert
   */
  export type RecetaItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RecetaItem to update in case it exists.
     */
    where: RecetaItemWhereUniqueInput
    /**
     * In case the RecetaItem found by the `where` argument doesn't exist, create a new RecetaItem with this data.
     */
    create: XOR<RecetaItemCreateInput, RecetaItemUncheckedCreateInput>
    /**
     * In case the RecetaItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecetaItemUpdateInput, RecetaItemUncheckedUpdateInput>
  }

  /**
   * RecetaItem delete
   */
  export type RecetaItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
    /**
     * Filter which RecetaItem to delete.
     */
    where: RecetaItemWhereUniqueInput
  }

  /**
   * RecetaItem deleteMany
   */
  export type RecetaItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecetaItems to delete
     */
    where?: RecetaItemWhereInput
    /**
     * Limit how many RecetaItems to delete.
     */
    limit?: number
  }

  /**
   * RecetaItem without action
   */
  export type RecetaItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecetaItem
     */
    select?: RecetaItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecetaItem
     */
    omit?: RecetaItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecetaItemInclude<ExtArgs> | null
  }


  /**
   * Model MovimientoInventario
   */

  export type AggregateMovimientoInventario = {
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  export type MovimientoInventarioAvgAggregateOutputType = {
    cantidad: Decimal | null
  }

  export type MovimientoInventarioSumAggregateOutputType = {
    cantidad: Decimal | null
  }

  export type MovimientoInventarioMinAggregateOutputType = {
    id: string | null
    ingredienteId: string | null
    tipo: string | null
    cantidad: Decimal | null
    motivo: string | null
    createdAt: Date | null
  }

  export type MovimientoInventarioMaxAggregateOutputType = {
    id: string | null
    ingredienteId: string | null
    tipo: string | null
    cantidad: Decimal | null
    motivo: string | null
    createdAt: Date | null
  }

  export type MovimientoInventarioCountAggregateOutputType = {
    id: number
    ingredienteId: number
    tipo: number
    cantidad: number
    motivo: number
    createdAt: number
    _all: number
  }


  export type MovimientoInventarioAvgAggregateInputType = {
    cantidad?: true
  }

  export type MovimientoInventarioSumAggregateInputType = {
    cantidad?: true
  }

  export type MovimientoInventarioMinAggregateInputType = {
    id?: true
    ingredienteId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
  }

  export type MovimientoInventarioMaxAggregateInputType = {
    id?: true
    ingredienteId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
  }

  export type MovimientoInventarioCountAggregateInputType = {
    id?: true
    ingredienteId?: true
    tipo?: true
    cantidad?: true
    motivo?: true
    createdAt?: true
    _all?: true
  }

  export type MovimientoInventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventario to aggregate.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimientoInventarios
    **/
    _count?: true | MovimientoInventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimientoInventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimientoInventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimientoInventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type GetMovimientoInventarioAggregateType<T extends MovimientoInventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimientoInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimientoInventario[P]>
      : GetScalarType<T[P], AggregateMovimientoInventario[P]>
  }




  export type MovimientoInventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimientoInventarioWhereInput
    orderBy?: MovimientoInventarioOrderByWithAggregationInput | MovimientoInventarioOrderByWithAggregationInput[]
    by: MovimientoInventarioScalarFieldEnum[] | MovimientoInventarioScalarFieldEnum
    having?: MovimientoInventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimientoInventarioCountAggregateInputType | true
    _avg?: MovimientoInventarioAvgAggregateInputType
    _sum?: MovimientoInventarioSumAggregateInputType
    _min?: MovimientoInventarioMinAggregateInputType
    _max?: MovimientoInventarioMaxAggregateInputType
  }

  export type MovimientoInventarioGroupByOutputType = {
    id: string
    ingredienteId: string
    tipo: string
    cantidad: Decimal
    motivo: string | null
    createdAt: Date
    _count: MovimientoInventarioCountAggregateOutputType | null
    _avg: MovimientoInventarioAvgAggregateOutputType | null
    _sum: MovimientoInventarioSumAggregateOutputType | null
    _min: MovimientoInventarioMinAggregateOutputType | null
    _max: MovimientoInventarioMaxAggregateOutputType | null
  }

  type GetMovimientoInventarioGroupByPayload<T extends MovimientoInventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimientoInventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimientoInventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
            : GetScalarType<T[P], MovimientoInventarioGroupByOutputType[P]>
        }
      >
    >


  export type MovimientoInventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredienteId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredienteId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ingredienteId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movimientoInventario"]>

  export type MovimientoInventarioSelectScalar = {
    id?: boolean
    ingredienteId?: boolean
    tipo?: boolean
    cantidad?: boolean
    motivo?: boolean
    createdAt?: boolean
  }

  export type MovimientoInventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ingredienteId" | "tipo" | "cantidad" | "motivo" | "createdAt", ExtArgs["result"]["movimientoInventario"]>
  export type MovimientoInventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $MovimientoInventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimientoInventario"
    objects: {
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ingredienteId: string
      tipo: string
      cantidad: Prisma.Decimal
      motivo: string | null
      createdAt: Date
    }, ExtArgs["result"]["movimientoInventario"]>
    composites: {}
  }

  type MovimientoInventarioGetPayload<S extends boolean | null | undefined | MovimientoInventarioDefaultArgs> = $Result.GetResult<Prisma.$MovimientoInventarioPayload, S>

  type MovimientoInventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimientoInventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimientoInventarioCountAggregateInputType | true
    }

  export interface MovimientoInventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimientoInventario'], meta: { name: 'MovimientoInventario' } }
    /**
     * Find zero or one MovimientoInventario that matches the filter.
     * @param {MovimientoInventarioFindUniqueArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimientoInventarioFindUniqueArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimientoInventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimientoInventarioFindUniqueOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimientoInventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimientoInventarioFindFirstArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimientoInventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindFirstOrThrowArgs} args - Arguments to find a MovimientoInventario
     * @example
     * // Get one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimientoInventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimientoInventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany()
     * 
     * // Get first 10 MovimientoInventarios
     * const movimientoInventarios = await prisma.movimientoInventario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimientoInventarioFindManyArgs>(args?: SelectSubset<T, MovimientoInventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimientoInventario.
     * @param {MovimientoInventarioCreateArgs} args - Arguments to create a MovimientoInventario.
     * @example
     * // Create one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.create({
     *   data: {
     *     // ... data to create a MovimientoInventario
     *   }
     * })
     * 
     */
    create<T extends MovimientoInventarioCreateArgs>(args: SelectSubset<T, MovimientoInventarioCreateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimientoInventarios.
     * @param {MovimientoInventarioCreateManyArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimientoInventarioCreateManyArgs>(args?: SelectSubset<T, MovimientoInventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimientoInventarios and returns the data saved in the database.
     * @param {MovimientoInventarioCreateManyAndReturnArgs} args - Arguments to create many MovimientoInventarios.
     * @example
     * // Create many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimientoInventarioCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimientoInventario.
     * @param {MovimientoInventarioDeleteArgs} args - Arguments to delete one MovimientoInventario.
     * @example
     * // Delete one MovimientoInventario
     * const MovimientoInventario = await prisma.movimientoInventario.delete({
     *   where: {
     *     // ... filter to delete one MovimientoInventario
     *   }
     * })
     * 
     */
    delete<T extends MovimientoInventarioDeleteArgs>(args: SelectSubset<T, MovimientoInventarioDeleteArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimientoInventario.
     * @param {MovimientoInventarioUpdateArgs} args - Arguments to update one MovimientoInventario.
     * @example
     * // Update one MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimientoInventarioUpdateArgs>(args: SelectSubset<T, MovimientoInventarioUpdateArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimientoInventarios.
     * @param {MovimientoInventarioDeleteManyArgs} args - Arguments to filter MovimientoInventarios to delete.
     * @example
     * // Delete a few MovimientoInventarios
     * const { count } = await prisma.movimientoInventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimientoInventarioDeleteManyArgs>(args?: SelectSubset<T, MovimientoInventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimientoInventarioUpdateManyArgs>(args: SelectSubset<T, MovimientoInventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimientoInventarios and returns the data updated in the database.
     * @param {MovimientoInventarioUpdateManyAndReturnArgs} args - Arguments to update many MovimientoInventarios.
     * @example
     * // Update many MovimientoInventarios
     * const movimientoInventario = await prisma.movimientoInventario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimientoInventarios and only return the `id`
     * const movimientoInventarioWithIdOnly = await prisma.movimientoInventario.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimientoInventarioUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimientoInventario.
     * @param {MovimientoInventarioUpsertArgs} args - Arguments to update or create a MovimientoInventario.
     * @example
     * // Update or create a MovimientoInventario
     * const movimientoInventario = await prisma.movimientoInventario.upsert({
     *   create: {
     *     // ... data to create a MovimientoInventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimientoInventario we want to update
     *   }
     * })
     */
    upsert<T extends MovimientoInventarioUpsertArgs>(args: SelectSubset<T, MovimientoInventarioUpsertArgs<ExtArgs>>): Prisma__MovimientoInventarioClient<$Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimientoInventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioCountArgs} args - Arguments to filter MovimientoInventarios to count.
     * @example
     * // Count the number of MovimientoInventarios
     * const count = await prisma.movimientoInventario.count({
     *   where: {
     *     // ... the filter for the MovimientoInventarios we want to count
     *   }
     * })
    **/
    count<T extends MovimientoInventarioCountArgs>(
      args?: Subset<T, MovimientoInventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimientoInventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientoInventarioAggregateArgs>(args: Subset<T, MovimientoInventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimientoInventarioAggregateType<T>>

    /**
     * Group by MovimientoInventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientoInventarioGroupByArgs} args - Group by arguments.
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
      T extends MovimientoInventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimientoInventarioGroupByArgs['orderBy'] }
        : { orderBy?: MovimientoInventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimientoInventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimientoInventario model
   */
  readonly fields: MovimientoInventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimientoInventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimientoInventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimientoInventario model
   */
  interface MovimientoInventarioFieldRefs {
    readonly id: FieldRef<"MovimientoInventario", 'String'>
    readonly ingredienteId: FieldRef<"MovimientoInventario", 'String'>
    readonly tipo: FieldRef<"MovimientoInventario", 'String'>
    readonly cantidad: FieldRef<"MovimientoInventario", 'Decimal'>
    readonly motivo: FieldRef<"MovimientoInventario", 'String'>
    readonly createdAt: FieldRef<"MovimientoInventario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MovimientoInventario findUnique
   */
  export type MovimientoInventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findUniqueOrThrow
   */
  export type MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario findFirst
   */
  export type MovimientoInventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findFirstOrThrow
   */
  export type MovimientoInventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventario to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimientoInventarios.
     */
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario findMany
   */
  export type MovimientoInventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter, which MovimientoInventarios to fetch.
     */
    where?: MovimientoInventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimientoInventarios to fetch.
     */
    orderBy?: MovimientoInventarioOrderByWithRelationInput | MovimientoInventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimientoInventarios.
     */
    cursor?: MovimientoInventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimientoInventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimientoInventarios.
     */
    skip?: number
    distinct?: MovimientoInventarioScalarFieldEnum | MovimientoInventarioScalarFieldEnum[]
  }

  /**
   * MovimientoInventario create
   */
  export type MovimientoInventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
  }

  /**
   * MovimientoInventario createMany
   */
  export type MovimientoInventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimientoInventarios.
     */
    data: MovimientoInventarioCreateManyInput | MovimientoInventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimientoInventario createManyAndReturn
   */
  export type MovimientoInventarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * The data used to create many MovimientoInventarios.
     */
    data: MovimientoInventarioCreateManyInput | MovimientoInventarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoInventario update
   */
  export type MovimientoInventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimientoInventario.
     */
    data: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
    /**
     * Choose, which MovimientoInventario to update.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario updateMany
   */
  export type MovimientoInventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number
  }

  /**
   * MovimientoInventario updateManyAndReturn
   */
  export type MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * The data used to update MovimientoInventarios.
     */
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyInput>
    /**
     * Filter which MovimientoInventarios to update
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimientoInventario upsert
   */
  export type MovimientoInventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimientoInventario to update in case it exists.
     */
    where: MovimientoInventarioWhereUniqueInput
    /**
     * In case the MovimientoInventario found by the `where` argument doesn't exist, create a new MovimientoInventario with this data.
     */
    create: XOR<MovimientoInventarioCreateInput, MovimientoInventarioUncheckedCreateInput>
    /**
     * In case the MovimientoInventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimientoInventarioUpdateInput, MovimientoInventarioUncheckedUpdateInput>
  }

  /**
   * MovimientoInventario delete
   */
  export type MovimientoInventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
    /**
     * Filter which MovimientoInventario to delete.
     */
    where: MovimientoInventarioWhereUniqueInput
  }

  /**
   * MovimientoInventario deleteMany
   */
  export type MovimientoInventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimientoInventarios to delete
     */
    where?: MovimientoInventarioWhereInput
    /**
     * Limit how many MovimientoInventarios to delete.
     */
    limit?: number
  }

  /**
   * MovimientoInventario without action
   */
  export type MovimientoInventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: MovimientoInventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: MovimientoInventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimientoInventarioInclude<ExtArgs> | null
  }


  /**
   * Model Venta
   */

  export type AggregateVenta = {
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  export type VentaAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type VentaSumAggregateOutputType = {
    total: Decimal | null
  }

  export type VentaMinAggregateOutputType = {
    id: string | null
    total: Decimal | null
    fecha: Date | null
    notas: string | null
  }

  export type VentaMaxAggregateOutputType = {
    id: string | null
    total: Decimal | null
    fecha: Date | null
    notas: string | null
  }

  export type VentaCountAggregateOutputType = {
    id: number
    total: number
    fecha: number
    notas: number
    _all: number
  }


  export type VentaAvgAggregateInputType = {
    total?: true
  }

  export type VentaSumAggregateInputType = {
    total?: true
  }

  export type VentaMinAggregateInputType = {
    id?: true
    total?: true
    fecha?: true
    notas?: true
  }

  export type VentaMaxAggregateInputType = {
    id?: true
    total?: true
    fecha?: true
    notas?: true
  }

  export type VentaCountAggregateInputType = {
    id?: true
    total?: true
    fecha?: true
    notas?: true
    _all?: true
  }

  export type VentaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venta to aggregate.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventas
    **/
    _count?: true | VentaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaMaxAggregateInputType
  }

  export type GetVentaAggregateType<T extends VentaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenta[P]>
      : GetScalarType<T[P], AggregateVenta[P]>
  }




  export type VentaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaWhereInput
    orderBy?: VentaOrderByWithAggregationInput | VentaOrderByWithAggregationInput[]
    by: VentaScalarFieldEnum[] | VentaScalarFieldEnum
    having?: VentaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaCountAggregateInputType | true
    _avg?: VentaAvgAggregateInputType
    _sum?: VentaSumAggregateInputType
    _min?: VentaMinAggregateInputType
    _max?: VentaMaxAggregateInputType
  }

  export type VentaGroupByOutputType = {
    id: string
    total: Decimal
    fecha: Date
    notas: string | null
    _count: VentaCountAggregateOutputType | null
    _avg: VentaAvgAggregateOutputType | null
    _sum: VentaSumAggregateOutputType | null
    _min: VentaMinAggregateOutputType | null
    _max: VentaMaxAggregateOutputType | null
  }

  type GetVentaGroupByPayload<T extends VentaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaGroupByOutputType[P]>
            : GetScalarType<T[P], VentaGroupByOutputType[P]>
        }
      >
    >


  export type VentaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fecha?: boolean
    notas?: boolean
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fecha?: boolean
    notas?: boolean
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    fecha?: boolean
    notas?: boolean
  }, ExtArgs["result"]["venta"]>

  export type VentaSelectScalar = {
    id?: boolean
    total?: boolean
    fecha?: boolean
    notas?: boolean
  }

  export type VentaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "fecha" | "notas", ExtArgs["result"]["venta"]>
  export type VentaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | Venta$detallesArgs<ExtArgs>
    _count?: boolean | VentaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VentaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VentaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VentaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venta"
    objects: {
      detalles: Prisma.$VentaDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total: Prisma.Decimal
      fecha: Date
      notas: string | null
    }, ExtArgs["result"]["venta"]>
    composites: {}
  }

  type VentaGetPayload<S extends boolean | null | undefined | VentaDefaultArgs> = $Result.GetResult<Prisma.$VentaPayload, S>

  type VentaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaCountAggregateInputType | true
    }

  export interface VentaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venta'], meta: { name: 'Venta' } }
    /**
     * Find zero or one Venta that matches the filter.
     * @param {VentaFindUniqueArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaFindUniqueArgs>(args: SelectSubset<T, VentaFindUniqueArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaFindUniqueOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaFindFirstArgs>(args?: SelectSubset<T, VentaFindFirstArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindFirstOrThrowArgs} args - Arguments to find a Venta
     * @example
     * // Get one Venta
     * const venta = await prisma.venta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventas
     * const ventas = await prisma.venta.findMany()
     * 
     * // Get first 10 Ventas
     * const ventas = await prisma.venta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaWithIdOnly = await prisma.venta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaFindManyArgs>(args?: SelectSubset<T, VentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venta.
     * @param {VentaCreateArgs} args - Arguments to create a Venta.
     * @example
     * // Create one Venta
     * const Venta = await prisma.venta.create({
     *   data: {
     *     // ... data to create a Venta
     *   }
     * })
     * 
     */
    create<T extends VentaCreateArgs>(args: SelectSubset<T, VentaCreateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventas.
     * @param {VentaCreateManyArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaCreateManyArgs>(args?: SelectSubset<T, VentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventas and returns the data saved in the database.
     * @param {VentaCreateManyAndReturnArgs} args - Arguments to create many Ventas.
     * @example
     * // Create many Ventas
     * const venta = await prisma.venta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venta.
     * @param {VentaDeleteArgs} args - Arguments to delete one Venta.
     * @example
     * // Delete one Venta
     * const Venta = await prisma.venta.delete({
     *   where: {
     *     // ... filter to delete one Venta
     *   }
     * })
     * 
     */
    delete<T extends VentaDeleteArgs>(args: SelectSubset<T, VentaDeleteArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venta.
     * @param {VentaUpdateArgs} args - Arguments to update one Venta.
     * @example
     * // Update one Venta
     * const venta = await prisma.venta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaUpdateArgs>(args: SelectSubset<T, VentaUpdateArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventas.
     * @param {VentaDeleteManyArgs} args - Arguments to filter Ventas to delete.
     * @example
     * // Delete a few Ventas
     * const { count } = await prisma.venta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDeleteManyArgs>(args?: SelectSubset<T, VentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaUpdateManyArgs>(args: SelectSubset<T, VentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventas and returns the data updated in the database.
     * @param {VentaUpdateManyAndReturnArgs} args - Arguments to update many Ventas.
     * @example
     * // Update many Ventas
     * const venta = await prisma.venta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventas and only return the `id`
     * const ventaWithIdOnly = await prisma.venta.updateManyAndReturn({
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
    updateManyAndReturn<T extends VentaUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venta.
     * @param {VentaUpsertArgs} args - Arguments to update or create a Venta.
     * @example
     * // Update or create a Venta
     * const venta = await prisma.venta.upsert({
     *   create: {
     *     // ... data to create a Venta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venta we want to update
     *   }
     * })
     */
    upsert<T extends VentaUpsertArgs>(args: SelectSubset<T, VentaUpsertArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaCountArgs} args - Arguments to filter Ventas to count.
     * @example
     * // Count the number of Ventas
     * const count = await prisma.venta.count({
     *   where: {
     *     // ... the filter for the Ventas we want to count
     *   }
     * })
    **/
    count<T extends VentaCountArgs>(
      args?: Subset<T, VentaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaAggregateArgs>(args: Subset<T, VentaAggregateArgs>): Prisma.PrismaPromise<GetVentaAggregateType<T>>

    /**
     * Group by Venta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaGroupByArgs} args - Group by arguments.
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
      T extends VentaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaGroupByArgs['orderBy'] }
        : { orderBy?: VentaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venta model
   */
  readonly fields: VentaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends Venta$detallesArgs<ExtArgs> = {}>(args?: Subset<T, Venta$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venta model
   */
  interface VentaFieldRefs {
    readonly id: FieldRef<"Venta", 'String'>
    readonly total: FieldRef<"Venta", 'Decimal'>
    readonly fecha: FieldRef<"Venta", 'DateTime'>
    readonly notas: FieldRef<"Venta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Venta findUnique
   */
  export type VentaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findUniqueOrThrow
   */
  export type VentaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta findFirst
   */
  export type VentaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findFirstOrThrow
   */
  export type VentaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Venta to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventas.
     */
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta findMany
   */
  export type VentaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter, which Ventas to fetch.
     */
    where?: VentaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventas to fetch.
     */
    orderBy?: VentaOrderByWithRelationInput | VentaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventas.
     */
    cursor?: VentaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventas.
     */
    skip?: number
    distinct?: VentaScalarFieldEnum | VentaScalarFieldEnum[]
  }

  /**
   * Venta create
   */
  export type VentaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venta.
     */
    data: XOR<VentaCreateInput, VentaUncheckedCreateInput>
  }

  /**
   * Venta createMany
   */
  export type VentaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta createManyAndReturn
   */
  export type VentaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to create many Ventas.
     */
    data: VentaCreateManyInput | VentaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venta update
   */
  export type VentaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venta.
     */
    data: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
    /**
     * Choose, which Venta to update.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta updateMany
   */
  export type VentaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta updateManyAndReturn
   */
  export type VentaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * The data used to update Ventas.
     */
    data: XOR<VentaUpdateManyMutationInput, VentaUncheckedUpdateManyInput>
    /**
     * Filter which Ventas to update
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to update.
     */
    limit?: number
  }

  /**
   * Venta upsert
   */
  export type VentaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venta to update in case it exists.
     */
    where: VentaWhereUniqueInput
    /**
     * In case the Venta found by the `where` argument doesn't exist, create a new Venta with this data.
     */
    create: XOR<VentaCreateInput, VentaUncheckedCreateInput>
    /**
     * In case the Venta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaUpdateInput, VentaUncheckedUpdateInput>
  }

  /**
   * Venta delete
   */
  export type VentaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
    /**
     * Filter which Venta to delete.
     */
    where: VentaWhereUniqueInput
  }

  /**
   * Venta deleteMany
   */
  export type VentaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventas to delete
     */
    where?: VentaWhereInput
    /**
     * Limit how many Ventas to delete.
     */
    limit?: number
  }

  /**
   * Venta.detalles
   */
  export type Venta$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    where?: VentaDetalleWhereInput
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    cursor?: VentaDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentaDetalleScalarFieldEnum | VentaDetalleScalarFieldEnum[]
  }

  /**
   * Venta without action
   */
  export type VentaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: VentaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venta
     */
    omit?: VentaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaInclude<ExtArgs> | null
  }


  /**
   * Model VentaDetalle
   */

  export type AggregateVentaDetalle = {
    _count: VentaDetalleCountAggregateOutputType | null
    _avg: VentaDetalleAvgAggregateOutputType | null
    _sum: VentaDetalleSumAggregateOutputType | null
    _min: VentaDetalleMinAggregateOutputType | null
    _max: VentaDetalleMaxAggregateOutputType | null
  }

  export type VentaDetalleAvgAggregateOutputType = {
    cantidad: number | null
    precio: Decimal | null
  }

  export type VentaDetalleSumAggregateOutputType = {
    cantidad: number | null
    precio: Decimal | null
  }

  export type VentaDetalleMinAggregateOutputType = {
    id: string | null
    ventaId: string | null
    platoId: string | null
    cantidad: number | null
    precio: Decimal | null
  }

  export type VentaDetalleMaxAggregateOutputType = {
    id: string | null
    ventaId: string | null
    platoId: string | null
    cantidad: number | null
    precio: Decimal | null
  }

  export type VentaDetalleCountAggregateOutputType = {
    id: number
    ventaId: number
    platoId: number
    cantidad: number
    precio: number
    _all: number
  }


  export type VentaDetalleAvgAggregateInputType = {
    cantidad?: true
    precio?: true
  }

  export type VentaDetalleSumAggregateInputType = {
    cantidad?: true
    precio?: true
  }

  export type VentaDetalleMinAggregateInputType = {
    id?: true
    ventaId?: true
    platoId?: true
    cantidad?: true
    precio?: true
  }

  export type VentaDetalleMaxAggregateInputType = {
    id?: true
    ventaId?: true
    platoId?: true
    cantidad?: true
    precio?: true
  }

  export type VentaDetalleCountAggregateInputType = {
    id?: true
    ventaId?: true
    platoId?: true
    cantidad?: true
    precio?: true
    _all?: true
  }

  export type VentaDetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaDetalle to aggregate.
     */
    where?: VentaDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaDetalles to fetch.
     */
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentaDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VentaDetalles
    **/
    _count?: true | VentaDetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VentaDetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VentaDetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentaDetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentaDetalleMaxAggregateInputType
  }

  export type GetVentaDetalleAggregateType<T extends VentaDetalleAggregateArgs> = {
        [P in keyof T & keyof AggregateVentaDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentaDetalle[P]>
      : GetScalarType<T[P], AggregateVentaDetalle[P]>
  }




  export type VentaDetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentaDetalleWhereInput
    orderBy?: VentaDetalleOrderByWithAggregationInput | VentaDetalleOrderByWithAggregationInput[]
    by: VentaDetalleScalarFieldEnum[] | VentaDetalleScalarFieldEnum
    having?: VentaDetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentaDetalleCountAggregateInputType | true
    _avg?: VentaDetalleAvgAggregateInputType
    _sum?: VentaDetalleSumAggregateInputType
    _min?: VentaDetalleMinAggregateInputType
    _max?: VentaDetalleMaxAggregateInputType
  }

  export type VentaDetalleGroupByOutputType = {
    id: string
    ventaId: string
    platoId: string
    cantidad: number
    precio: Decimal
    _count: VentaDetalleCountAggregateOutputType | null
    _avg: VentaDetalleAvgAggregateOutputType | null
    _sum: VentaDetalleSumAggregateOutputType | null
    _min: VentaDetalleMinAggregateOutputType | null
    _max: VentaDetalleMaxAggregateOutputType | null
  }

  type GetVentaDetalleGroupByPayload<T extends VentaDetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentaDetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentaDetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentaDetalleGroupByOutputType[P]>
            : GetScalarType<T[P], VentaDetalleGroupByOutputType[P]>
        }
      >
    >


  export type VentaDetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    platoId?: boolean
    cantidad?: boolean
    precio?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventaDetalle"]>

  export type VentaDetalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    platoId?: boolean
    cantidad?: boolean
    precio?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventaDetalle"]>

  export type VentaDetalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ventaId?: boolean
    platoId?: boolean
    cantidad?: boolean
    precio?: boolean
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ventaDetalle"]>

  export type VentaDetalleSelectScalar = {
    id?: boolean
    ventaId?: boolean
    platoId?: boolean
    cantidad?: boolean
    precio?: boolean
  }

  export type VentaDetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ventaId" | "platoId" | "cantidad" | "precio", ExtArgs["result"]["ventaDetalle"]>
  export type VentaDetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }
  export type VentaDetalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }
  export type VentaDetalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venta?: boolean | VentaDefaultArgs<ExtArgs>
    plato?: boolean | PlatoDefaultArgs<ExtArgs>
  }

  export type $VentaDetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VentaDetalle"
    objects: {
      venta: Prisma.$VentaPayload<ExtArgs>
      plato: Prisma.$PlatoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ventaId: string
      platoId: string
      cantidad: number
      precio: Prisma.Decimal
    }, ExtArgs["result"]["ventaDetalle"]>
    composites: {}
  }

  type VentaDetalleGetPayload<S extends boolean | null | undefined | VentaDetalleDefaultArgs> = $Result.GetResult<Prisma.$VentaDetallePayload, S>

  type VentaDetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentaDetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentaDetalleCountAggregateInputType | true
    }

  export interface VentaDetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VentaDetalle'], meta: { name: 'VentaDetalle' } }
    /**
     * Find zero or one VentaDetalle that matches the filter.
     * @param {VentaDetalleFindUniqueArgs} args - Arguments to find a VentaDetalle
     * @example
     * // Get one VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentaDetalleFindUniqueArgs>(args: SelectSubset<T, VentaDetalleFindUniqueArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VentaDetalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentaDetalleFindUniqueOrThrowArgs} args - Arguments to find a VentaDetalle
     * @example
     * // Get one VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentaDetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, VentaDetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaDetalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleFindFirstArgs} args - Arguments to find a VentaDetalle
     * @example
     * // Get one VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentaDetalleFindFirstArgs>(args?: SelectSubset<T, VentaDetalleFindFirstArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentaDetalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleFindFirstOrThrowArgs} args - Arguments to find a VentaDetalle
     * @example
     * // Get one VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentaDetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, VentaDetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VentaDetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VentaDetalles
     * const ventaDetalles = await prisma.ventaDetalle.findMany()
     * 
     * // Get first 10 VentaDetalles
     * const ventaDetalles = await prisma.ventaDetalle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventaDetalleWithIdOnly = await prisma.ventaDetalle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentaDetalleFindManyArgs>(args?: SelectSubset<T, VentaDetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VentaDetalle.
     * @param {VentaDetalleCreateArgs} args - Arguments to create a VentaDetalle.
     * @example
     * // Create one VentaDetalle
     * const VentaDetalle = await prisma.ventaDetalle.create({
     *   data: {
     *     // ... data to create a VentaDetalle
     *   }
     * })
     * 
     */
    create<T extends VentaDetalleCreateArgs>(args: SelectSubset<T, VentaDetalleCreateArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VentaDetalles.
     * @param {VentaDetalleCreateManyArgs} args - Arguments to create many VentaDetalles.
     * @example
     * // Create many VentaDetalles
     * const ventaDetalle = await prisma.ventaDetalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentaDetalleCreateManyArgs>(args?: SelectSubset<T, VentaDetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VentaDetalles and returns the data saved in the database.
     * @param {VentaDetalleCreateManyAndReturnArgs} args - Arguments to create many VentaDetalles.
     * @example
     * // Create many VentaDetalles
     * const ventaDetalle = await prisma.ventaDetalle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VentaDetalles and only return the `id`
     * const ventaDetalleWithIdOnly = await prisma.ventaDetalle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentaDetalleCreateManyAndReturnArgs>(args?: SelectSubset<T, VentaDetalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VentaDetalle.
     * @param {VentaDetalleDeleteArgs} args - Arguments to delete one VentaDetalle.
     * @example
     * // Delete one VentaDetalle
     * const VentaDetalle = await prisma.ventaDetalle.delete({
     *   where: {
     *     // ... filter to delete one VentaDetalle
     *   }
     * })
     * 
     */
    delete<T extends VentaDetalleDeleteArgs>(args: SelectSubset<T, VentaDetalleDeleteArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VentaDetalle.
     * @param {VentaDetalleUpdateArgs} args - Arguments to update one VentaDetalle.
     * @example
     * // Update one VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentaDetalleUpdateArgs>(args: SelectSubset<T, VentaDetalleUpdateArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VentaDetalles.
     * @param {VentaDetalleDeleteManyArgs} args - Arguments to filter VentaDetalles to delete.
     * @example
     * // Delete a few VentaDetalles
     * const { count } = await prisma.ventaDetalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentaDetalleDeleteManyArgs>(args?: SelectSubset<T, VentaDetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentaDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VentaDetalles
     * const ventaDetalle = await prisma.ventaDetalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentaDetalleUpdateManyArgs>(args: SelectSubset<T, VentaDetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentaDetalles and returns the data updated in the database.
     * @param {VentaDetalleUpdateManyAndReturnArgs} args - Arguments to update many VentaDetalles.
     * @example
     * // Update many VentaDetalles
     * const ventaDetalle = await prisma.ventaDetalle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VentaDetalles and only return the `id`
     * const ventaDetalleWithIdOnly = await prisma.ventaDetalle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VentaDetalleUpdateManyAndReturnArgs>(args: SelectSubset<T, VentaDetalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VentaDetalle.
     * @param {VentaDetalleUpsertArgs} args - Arguments to update or create a VentaDetalle.
     * @example
     * // Update or create a VentaDetalle
     * const ventaDetalle = await prisma.ventaDetalle.upsert({
     *   create: {
     *     // ... data to create a VentaDetalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VentaDetalle we want to update
     *   }
     * })
     */
    upsert<T extends VentaDetalleUpsertArgs>(args: SelectSubset<T, VentaDetalleUpsertArgs<ExtArgs>>): Prisma__VentaDetalleClient<$Result.GetResult<Prisma.$VentaDetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VentaDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleCountArgs} args - Arguments to filter VentaDetalles to count.
     * @example
     * // Count the number of VentaDetalles
     * const count = await prisma.ventaDetalle.count({
     *   where: {
     *     // ... the filter for the VentaDetalles we want to count
     *   }
     * })
    **/
    count<T extends VentaDetalleCountArgs>(
      args?: Subset<T, VentaDetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentaDetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VentaDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentaDetalleAggregateArgs>(args: Subset<T, VentaDetalleAggregateArgs>): Prisma.PrismaPromise<GetVentaDetalleAggregateType<T>>

    /**
     * Group by VentaDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentaDetalleGroupByArgs} args - Group by arguments.
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
      T extends VentaDetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentaDetalleGroupByArgs['orderBy'] }
        : { orderBy?: VentaDetalleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentaDetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentaDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VentaDetalle model
   */
  readonly fields: VentaDetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VentaDetalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentaDetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venta<T extends VentaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VentaDefaultArgs<ExtArgs>>): Prisma__VentaClient<$Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plato<T extends PlatoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatoDefaultArgs<ExtArgs>>): Prisma__PlatoClient<$Result.GetResult<Prisma.$PlatoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VentaDetalle model
   */
  interface VentaDetalleFieldRefs {
    readonly id: FieldRef<"VentaDetalle", 'String'>
    readonly ventaId: FieldRef<"VentaDetalle", 'String'>
    readonly platoId: FieldRef<"VentaDetalle", 'String'>
    readonly cantidad: FieldRef<"VentaDetalle", 'Int'>
    readonly precio: FieldRef<"VentaDetalle", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * VentaDetalle findUnique
   */
  export type VentaDetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter, which VentaDetalle to fetch.
     */
    where: VentaDetalleWhereUniqueInput
  }

  /**
   * VentaDetalle findUniqueOrThrow
   */
  export type VentaDetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter, which VentaDetalle to fetch.
     */
    where: VentaDetalleWhereUniqueInput
  }

  /**
   * VentaDetalle findFirst
   */
  export type VentaDetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter, which VentaDetalle to fetch.
     */
    where?: VentaDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaDetalles to fetch.
     */
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaDetalles.
     */
    cursor?: VentaDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaDetalles.
     */
    distinct?: VentaDetalleScalarFieldEnum | VentaDetalleScalarFieldEnum[]
  }

  /**
   * VentaDetalle findFirstOrThrow
   */
  export type VentaDetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter, which VentaDetalle to fetch.
     */
    where?: VentaDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaDetalles to fetch.
     */
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentaDetalles.
     */
    cursor?: VentaDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentaDetalles.
     */
    distinct?: VentaDetalleScalarFieldEnum | VentaDetalleScalarFieldEnum[]
  }

  /**
   * VentaDetalle findMany
   */
  export type VentaDetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter, which VentaDetalles to fetch.
     */
    where?: VentaDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentaDetalles to fetch.
     */
    orderBy?: VentaDetalleOrderByWithRelationInput | VentaDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VentaDetalles.
     */
    cursor?: VentaDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentaDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentaDetalles.
     */
    skip?: number
    distinct?: VentaDetalleScalarFieldEnum | VentaDetalleScalarFieldEnum[]
  }

  /**
   * VentaDetalle create
   */
  export type VentaDetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a VentaDetalle.
     */
    data: XOR<VentaDetalleCreateInput, VentaDetalleUncheckedCreateInput>
  }

  /**
   * VentaDetalle createMany
   */
  export type VentaDetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VentaDetalles.
     */
    data: VentaDetalleCreateManyInput | VentaDetalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VentaDetalle createManyAndReturn
   */
  export type VentaDetalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * The data used to create many VentaDetalles.
     */
    data: VentaDetalleCreateManyInput | VentaDetalleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VentaDetalle update
   */
  export type VentaDetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a VentaDetalle.
     */
    data: XOR<VentaDetalleUpdateInput, VentaDetalleUncheckedUpdateInput>
    /**
     * Choose, which VentaDetalle to update.
     */
    where: VentaDetalleWhereUniqueInput
  }

  /**
   * VentaDetalle updateMany
   */
  export type VentaDetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VentaDetalles.
     */
    data: XOR<VentaDetalleUpdateManyMutationInput, VentaDetalleUncheckedUpdateManyInput>
    /**
     * Filter which VentaDetalles to update
     */
    where?: VentaDetalleWhereInput
    /**
     * Limit how many VentaDetalles to update.
     */
    limit?: number
  }

  /**
   * VentaDetalle updateManyAndReturn
   */
  export type VentaDetalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * The data used to update VentaDetalles.
     */
    data: XOR<VentaDetalleUpdateManyMutationInput, VentaDetalleUncheckedUpdateManyInput>
    /**
     * Filter which VentaDetalles to update
     */
    where?: VentaDetalleWhereInput
    /**
     * Limit how many VentaDetalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VentaDetalle upsert
   */
  export type VentaDetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the VentaDetalle to update in case it exists.
     */
    where: VentaDetalleWhereUniqueInput
    /**
     * In case the VentaDetalle found by the `where` argument doesn't exist, create a new VentaDetalle with this data.
     */
    create: XOR<VentaDetalleCreateInput, VentaDetalleUncheckedCreateInput>
    /**
     * In case the VentaDetalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentaDetalleUpdateInput, VentaDetalleUncheckedUpdateInput>
  }

  /**
   * VentaDetalle delete
   */
  export type VentaDetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
    /**
     * Filter which VentaDetalle to delete.
     */
    where: VentaDetalleWhereUniqueInput
  }

  /**
   * VentaDetalle deleteMany
   */
  export type VentaDetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentaDetalles to delete
     */
    where?: VentaDetalleWhereInput
    /**
     * Limit how many VentaDetalles to delete.
     */
    limit?: number
  }

  /**
   * VentaDetalle without action
   */
  export type VentaDetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentaDetalle
     */
    select?: VentaDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentaDetalle
     */
    omit?: VentaDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentaDetalleInclude<ExtArgs> | null
  }


  /**
   * Model OrdenCompra
   */

  export type AggregateOrdenCompra = {
    _count: OrdenCompraCountAggregateOutputType | null
    _min: OrdenCompraMinAggregateOutputType | null
    _max: OrdenCompraMaxAggregateOutputType | null
  }

  export type OrdenCompraMinAggregateOutputType = {
    id: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type OrdenCompraMaxAggregateOutputType = {
    id: string | null
    estado: string | null
    createdAt: Date | null
  }

  export type OrdenCompraCountAggregateOutputType = {
    id: number
    estado: number
    createdAt: number
    _all: number
  }


  export type OrdenCompraMinAggregateInputType = {
    id?: true
    estado?: true
    createdAt?: true
  }

  export type OrdenCompraMaxAggregateInputType = {
    id?: true
    estado?: true
    createdAt?: true
  }

  export type OrdenCompraCountAggregateInputType = {
    id?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type OrdenCompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompra to aggregate.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenCompras
    **/
    _count?: true | OrdenCompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenCompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenCompraMaxAggregateInputType
  }

  export type GetOrdenCompraAggregateType<T extends OrdenCompraAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenCompra[P]>
      : GetScalarType<T[P], AggregateOrdenCompra[P]>
  }




  export type OrdenCompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraWhereInput
    orderBy?: OrdenCompraOrderByWithAggregationInput | OrdenCompraOrderByWithAggregationInput[]
    by: OrdenCompraScalarFieldEnum[] | OrdenCompraScalarFieldEnum
    having?: OrdenCompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCompraCountAggregateInputType | true
    _min?: OrdenCompraMinAggregateInputType
    _max?: OrdenCompraMaxAggregateInputType
  }

  export type OrdenCompraGroupByOutputType = {
    id: string
    estado: string
    createdAt: Date
    _count: OrdenCompraCountAggregateOutputType | null
    _min: OrdenCompraMinAggregateOutputType | null
    _max: OrdenCompraMaxAggregateOutputType | null
  }

  type GetOrdenCompraGroupByPayload<T extends OrdenCompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenCompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenCompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenCompraGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenCompraGroupByOutputType[P]>
        }
      >
    >


  export type OrdenCompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    createdAt?: boolean
    detalles?: boolean | OrdenCompra$detallesArgs<ExtArgs>
    _count?: boolean | OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estado?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ordenCompra"]>

  export type OrdenCompraSelectScalar = {
    id?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type OrdenCompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estado" | "createdAt", ExtArgs["result"]["ordenCompra"]>
  export type OrdenCompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | OrdenCompra$detallesArgs<ExtArgs>
    _count?: boolean | OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdenCompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrdenCompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrdenCompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenCompra"
    objects: {
      detalles: Prisma.$OrdenCompraDetallePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      estado: string
      createdAt: Date
    }, ExtArgs["result"]["ordenCompra"]>
    composites: {}
  }

  type OrdenCompraGetPayload<S extends boolean | null | undefined | OrdenCompraDefaultArgs> = $Result.GetResult<Prisma.$OrdenCompraPayload, S>

  type OrdenCompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCompraCountAggregateInputType | true
    }

  export interface OrdenCompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenCompra'], meta: { name: 'OrdenCompra' } }
    /**
     * Find zero or one OrdenCompra that matches the filter.
     * @param {OrdenCompraFindUniqueArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenCompraFindUniqueArgs>(args: SelectSubset<T, OrdenCompraFindUniqueArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenCompra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenCompraFindUniqueOrThrowArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenCompraFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindFirstArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenCompraFindFirstArgs>(args?: SelectSubset<T, OrdenCompraFindFirstArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindFirstOrThrowArgs} args - Arguments to find a OrdenCompra
     * @example
     * // Get one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenCompraFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenCompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenCompras
     * const ordenCompras = await prisma.ordenCompra.findMany()
     * 
     * // Get first 10 OrdenCompras
     * const ordenCompras = await prisma.ordenCompra.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenCompraFindManyArgs>(args?: SelectSubset<T, OrdenCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenCompra.
     * @param {OrdenCompraCreateArgs} args - Arguments to create a OrdenCompra.
     * @example
     * // Create one OrdenCompra
     * const OrdenCompra = await prisma.ordenCompra.create({
     *   data: {
     *     // ... data to create a OrdenCompra
     *   }
     * })
     * 
     */
    create<T extends OrdenCompraCreateArgs>(args: SelectSubset<T, OrdenCompraCreateArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenCompras.
     * @param {OrdenCompraCreateManyArgs} args - Arguments to create many OrdenCompras.
     * @example
     * // Create many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCompraCreateManyArgs>(args?: SelectSubset<T, OrdenCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenCompras and returns the data saved in the database.
     * @param {OrdenCompraCreateManyAndReturnArgs} args - Arguments to create many OrdenCompras.
     * @example
     * // Create many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenCompras and only return the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCompraCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenCompra.
     * @param {OrdenCompraDeleteArgs} args - Arguments to delete one OrdenCompra.
     * @example
     * // Delete one OrdenCompra
     * const OrdenCompra = await prisma.ordenCompra.delete({
     *   where: {
     *     // ... filter to delete one OrdenCompra
     *   }
     * })
     * 
     */
    delete<T extends OrdenCompraDeleteArgs>(args: SelectSubset<T, OrdenCompraDeleteArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenCompra.
     * @param {OrdenCompraUpdateArgs} args - Arguments to update one OrdenCompra.
     * @example
     * // Update one OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenCompraUpdateArgs>(args: SelectSubset<T, OrdenCompraUpdateArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenCompras.
     * @param {OrdenCompraDeleteManyArgs} args - Arguments to filter OrdenCompras to delete.
     * @example
     * // Delete a few OrdenCompras
     * const { count } = await prisma.ordenCompra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenCompraDeleteManyArgs>(args?: SelectSubset<T, OrdenCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenCompraUpdateManyArgs>(args: SelectSubset<T, OrdenCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompras and returns the data updated in the database.
     * @param {OrdenCompraUpdateManyAndReturnArgs} args - Arguments to update many OrdenCompras.
     * @example
     * // Update many OrdenCompras
     * const ordenCompra = await prisma.ordenCompra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenCompras and only return the `id`
     * const ordenCompraWithIdOnly = await prisma.ordenCompra.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenCompraUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenCompra.
     * @param {OrdenCompraUpsertArgs} args - Arguments to update or create a OrdenCompra.
     * @example
     * // Update or create a OrdenCompra
     * const ordenCompra = await prisma.ordenCompra.upsert({
     *   create: {
     *     // ... data to create a OrdenCompra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenCompra we want to update
     *   }
     * })
     */
    upsert<T extends OrdenCompraUpsertArgs>(args: SelectSubset<T, OrdenCompraUpsertArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenCompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraCountArgs} args - Arguments to filter OrdenCompras to count.
     * @example
     * // Count the number of OrdenCompras
     * const count = await prisma.ordenCompra.count({
     *   where: {
     *     // ... the filter for the OrdenCompras we want to count
     *   }
     * })
    **/
    count<T extends OrdenCompraCountArgs>(
      args?: Subset<T, OrdenCompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenCompraAggregateArgs>(args: Subset<T, OrdenCompraAggregateArgs>): Prisma.PrismaPromise<GetOrdenCompraAggregateType<T>>

    /**
     * Group by OrdenCompra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraGroupByArgs} args - Group by arguments.
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
      T extends OrdenCompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenCompraGroupByArgs['orderBy'] }
        : { orderBy?: OrdenCompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenCompra model
   */
  readonly fields: OrdenCompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenCompra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenCompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends OrdenCompra$detallesArgs<ExtArgs> = {}>(args?: Subset<T, OrdenCompra$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OrdenCompra model
   */
  interface OrdenCompraFieldRefs {
    readonly id: FieldRef<"OrdenCompra", 'String'>
    readonly estado: FieldRef<"OrdenCompra", 'String'>
    readonly createdAt: FieldRef<"OrdenCompra", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdenCompra findUnique
   */
  export type OrdenCompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra findUniqueOrThrow
   */
  export type OrdenCompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra findFirst
   */
  export type OrdenCompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompras.
     */
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra findFirstOrThrow
   */
  export type OrdenCompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompra to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompras.
     */
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra findMany
   */
  export type OrdenCompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompras to fetch.
     */
    where?: OrdenCompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompras to fetch.
     */
    orderBy?: OrdenCompraOrderByWithRelationInput | OrdenCompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenCompras.
     */
    cursor?: OrdenCompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompras.
     */
    skip?: number
    distinct?: OrdenCompraScalarFieldEnum | OrdenCompraScalarFieldEnum[]
  }

  /**
   * OrdenCompra create
   */
  export type OrdenCompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenCompra.
     */
    data?: XOR<OrdenCompraCreateInput, OrdenCompraUncheckedCreateInput>
  }

  /**
   * OrdenCompra createMany
   */
  export type OrdenCompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenCompras.
     */
    data: OrdenCompraCreateManyInput | OrdenCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenCompra createManyAndReturn
   */
  export type OrdenCompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenCompras.
     */
    data: OrdenCompraCreateManyInput | OrdenCompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenCompra update
   */
  export type OrdenCompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenCompra.
     */
    data: XOR<OrdenCompraUpdateInput, OrdenCompraUncheckedUpdateInput>
    /**
     * Choose, which OrdenCompra to update.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra updateMany
   */
  export type OrdenCompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenCompras.
     */
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompras to update
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to update.
     */
    limit?: number
  }

  /**
   * OrdenCompra updateManyAndReturn
   */
  export type OrdenCompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * The data used to update OrdenCompras.
     */
    data: XOR<OrdenCompraUpdateManyMutationInput, OrdenCompraUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompras to update
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to update.
     */
    limit?: number
  }

  /**
   * OrdenCompra upsert
   */
  export type OrdenCompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenCompra to update in case it exists.
     */
    where: OrdenCompraWhereUniqueInput
    /**
     * In case the OrdenCompra found by the `where` argument doesn't exist, create a new OrdenCompra with this data.
     */
    create: XOR<OrdenCompraCreateInput, OrdenCompraUncheckedCreateInput>
    /**
     * In case the OrdenCompra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenCompraUpdateInput, OrdenCompraUncheckedUpdateInput>
  }

  /**
   * OrdenCompra delete
   */
  export type OrdenCompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
    /**
     * Filter which OrdenCompra to delete.
     */
    where: OrdenCompraWhereUniqueInput
  }

  /**
   * OrdenCompra deleteMany
   */
  export type OrdenCompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompras to delete
     */
    where?: OrdenCompraWhereInput
    /**
     * Limit how many OrdenCompras to delete.
     */
    limit?: number
  }

  /**
   * OrdenCompra.detalles
   */
  export type OrdenCompra$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    where?: OrdenCompraDetalleWhereInput
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    cursor?: OrdenCompraDetalleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenCompraDetalleScalarFieldEnum | OrdenCompraDetalleScalarFieldEnum[]
  }

  /**
   * OrdenCompra without action
   */
  export type OrdenCompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompra
     */
    select?: OrdenCompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompra
     */
    omit?: OrdenCompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraInclude<ExtArgs> | null
  }


  /**
   * Model OrdenCompraDetalle
   */

  export type AggregateOrdenCompraDetalle = {
    _count: OrdenCompraDetalleCountAggregateOutputType | null
    _avg: OrdenCompraDetalleAvgAggregateOutputType | null
    _sum: OrdenCompraDetalleSumAggregateOutputType | null
    _min: OrdenCompraDetalleMinAggregateOutputType | null
    _max: OrdenCompraDetalleMaxAggregateOutputType | null
  }

  export type OrdenCompraDetalleAvgAggregateOutputType = {
    cantidadSugerida: Decimal | null
    cantidadFinal: Decimal | null
  }

  export type OrdenCompraDetalleSumAggregateOutputType = {
    cantidadSugerida: Decimal | null
    cantidadFinal: Decimal | null
  }

  export type OrdenCompraDetalleMinAggregateOutputType = {
    id: string | null
    ordenId: string | null
    ingredienteId: string | null
    cantidadSugerida: Decimal | null
    cantidadFinal: Decimal | null
  }

  export type OrdenCompraDetalleMaxAggregateOutputType = {
    id: string | null
    ordenId: string | null
    ingredienteId: string | null
    cantidadSugerida: Decimal | null
    cantidadFinal: Decimal | null
  }

  export type OrdenCompraDetalleCountAggregateOutputType = {
    id: number
    ordenId: number
    ingredienteId: number
    cantidadSugerida: number
    cantidadFinal: number
    _all: number
  }


  export type OrdenCompraDetalleAvgAggregateInputType = {
    cantidadSugerida?: true
    cantidadFinal?: true
  }

  export type OrdenCompraDetalleSumAggregateInputType = {
    cantidadSugerida?: true
    cantidadFinal?: true
  }

  export type OrdenCompraDetalleMinAggregateInputType = {
    id?: true
    ordenId?: true
    ingredienteId?: true
    cantidadSugerida?: true
    cantidadFinal?: true
  }

  export type OrdenCompraDetalleMaxAggregateInputType = {
    id?: true
    ordenId?: true
    ingredienteId?: true
    cantidadSugerida?: true
    cantidadFinal?: true
  }

  export type OrdenCompraDetalleCountAggregateInputType = {
    id?: true
    ordenId?: true
    ingredienteId?: true
    cantidadSugerida?: true
    cantidadFinal?: true
    _all?: true
  }

  export type OrdenCompraDetalleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompraDetalle to aggregate.
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompraDetalles to fetch.
     */
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenCompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenCompraDetalles
    **/
    _count?: true | OrdenCompraDetalleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenCompraDetalleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenCompraDetalleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenCompraDetalleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenCompraDetalleMaxAggregateInputType
  }

  export type GetOrdenCompraDetalleAggregateType<T extends OrdenCompraDetalleAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenCompraDetalle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenCompraDetalle[P]>
      : GetScalarType<T[P], AggregateOrdenCompraDetalle[P]>
  }




  export type OrdenCompraDetalleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenCompraDetalleWhereInput
    orderBy?: OrdenCompraDetalleOrderByWithAggregationInput | OrdenCompraDetalleOrderByWithAggregationInput[]
    by: OrdenCompraDetalleScalarFieldEnum[] | OrdenCompraDetalleScalarFieldEnum
    having?: OrdenCompraDetalleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCompraDetalleCountAggregateInputType | true
    _avg?: OrdenCompraDetalleAvgAggregateInputType
    _sum?: OrdenCompraDetalleSumAggregateInputType
    _min?: OrdenCompraDetalleMinAggregateInputType
    _max?: OrdenCompraDetalleMaxAggregateInputType
  }

  export type OrdenCompraDetalleGroupByOutputType = {
    id: string
    ordenId: string
    ingredienteId: string
    cantidadSugerida: Decimal
    cantidadFinal: Decimal | null
    _count: OrdenCompraDetalleCountAggregateOutputType | null
    _avg: OrdenCompraDetalleAvgAggregateOutputType | null
    _sum: OrdenCompraDetalleSumAggregateOutputType | null
    _min: OrdenCompraDetalleMinAggregateOutputType | null
    _max: OrdenCompraDetalleMaxAggregateOutputType | null
  }

  type GetOrdenCompraDetalleGroupByPayload<T extends OrdenCompraDetalleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenCompraDetalleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenCompraDetalleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenCompraDetalleGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenCompraDetalleGroupByOutputType[P]>
        }
      >
    >


  export type OrdenCompraDetalleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordenId?: boolean
    ingredienteId?: boolean
    cantidadSugerida?: boolean
    cantidadFinal?: boolean
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompraDetalle"]>

  export type OrdenCompraDetalleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordenId?: boolean
    ingredienteId?: boolean
    cantidadSugerida?: boolean
    cantidadFinal?: boolean
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompraDetalle"]>

  export type OrdenCompraDetalleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordenId?: boolean
    ingredienteId?: boolean
    cantidadSugerida?: boolean
    cantidadFinal?: boolean
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordenCompraDetalle"]>

  export type OrdenCompraDetalleSelectScalar = {
    id?: boolean
    ordenId?: boolean
    ingredienteId?: boolean
    cantidadSugerida?: boolean
    cantidadFinal?: boolean
  }

  export type OrdenCompraDetalleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordenId" | "ingredienteId" | "cantidadSugerida" | "cantidadFinal", ExtArgs["result"]["ordenCompraDetalle"]>
  export type OrdenCompraDetalleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type OrdenCompraDetalleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }
  export type OrdenCompraDetalleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenCompraDefaultArgs<ExtArgs>
    ingrediente?: boolean | IngredienteDefaultArgs<ExtArgs>
  }

  export type $OrdenCompraDetallePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenCompraDetalle"
    objects: {
      orden: Prisma.$OrdenCompraPayload<ExtArgs>
      ingrediente: Prisma.$IngredientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ordenId: string
      ingredienteId: string
      cantidadSugerida: Prisma.Decimal
      cantidadFinal: Prisma.Decimal | null
    }, ExtArgs["result"]["ordenCompraDetalle"]>
    composites: {}
  }

  type OrdenCompraDetalleGetPayload<S extends boolean | null | undefined | OrdenCompraDetalleDefaultArgs> = $Result.GetResult<Prisma.$OrdenCompraDetallePayload, S>

  type OrdenCompraDetalleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenCompraDetalleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCompraDetalleCountAggregateInputType | true
    }

  export interface OrdenCompraDetalleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenCompraDetalle'], meta: { name: 'OrdenCompraDetalle' } }
    /**
     * Find zero or one OrdenCompraDetalle that matches the filter.
     * @param {OrdenCompraDetalleFindUniqueArgs} args - Arguments to find a OrdenCompraDetalle
     * @example
     * // Get one OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenCompraDetalleFindUniqueArgs>(args: SelectSubset<T, OrdenCompraDetalleFindUniqueArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenCompraDetalle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenCompraDetalleFindUniqueOrThrowArgs} args - Arguments to find a OrdenCompraDetalle
     * @example
     * // Get one OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenCompraDetalleFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenCompraDetalleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompraDetalle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleFindFirstArgs} args - Arguments to find a OrdenCompraDetalle
     * @example
     * // Get one OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenCompraDetalleFindFirstArgs>(args?: SelectSubset<T, OrdenCompraDetalleFindFirstArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenCompraDetalle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleFindFirstOrThrowArgs} args - Arguments to find a OrdenCompraDetalle
     * @example
     * // Get one OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenCompraDetalleFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenCompraDetalleFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenCompraDetalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenCompraDetalles
     * const ordenCompraDetalles = await prisma.ordenCompraDetalle.findMany()
     * 
     * // Get first 10 OrdenCompraDetalles
     * const ordenCompraDetalles = await prisma.ordenCompraDetalle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenCompraDetalleWithIdOnly = await prisma.ordenCompraDetalle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenCompraDetalleFindManyArgs>(args?: SelectSubset<T, OrdenCompraDetalleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenCompraDetalle.
     * @param {OrdenCompraDetalleCreateArgs} args - Arguments to create a OrdenCompraDetalle.
     * @example
     * // Create one OrdenCompraDetalle
     * const OrdenCompraDetalle = await prisma.ordenCompraDetalle.create({
     *   data: {
     *     // ... data to create a OrdenCompraDetalle
     *   }
     * })
     * 
     */
    create<T extends OrdenCompraDetalleCreateArgs>(args: SelectSubset<T, OrdenCompraDetalleCreateArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenCompraDetalles.
     * @param {OrdenCompraDetalleCreateManyArgs} args - Arguments to create many OrdenCompraDetalles.
     * @example
     * // Create many OrdenCompraDetalles
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCompraDetalleCreateManyArgs>(args?: SelectSubset<T, OrdenCompraDetalleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenCompraDetalles and returns the data saved in the database.
     * @param {OrdenCompraDetalleCreateManyAndReturnArgs} args - Arguments to create many OrdenCompraDetalles.
     * @example
     * // Create many OrdenCompraDetalles
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenCompraDetalles and only return the `id`
     * const ordenCompraDetalleWithIdOnly = await prisma.ordenCompraDetalle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCompraDetalleCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCompraDetalleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenCompraDetalle.
     * @param {OrdenCompraDetalleDeleteArgs} args - Arguments to delete one OrdenCompraDetalle.
     * @example
     * // Delete one OrdenCompraDetalle
     * const OrdenCompraDetalle = await prisma.ordenCompraDetalle.delete({
     *   where: {
     *     // ... filter to delete one OrdenCompraDetalle
     *   }
     * })
     * 
     */
    delete<T extends OrdenCompraDetalleDeleteArgs>(args: SelectSubset<T, OrdenCompraDetalleDeleteArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenCompraDetalle.
     * @param {OrdenCompraDetalleUpdateArgs} args - Arguments to update one OrdenCompraDetalle.
     * @example
     * // Update one OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenCompraDetalleUpdateArgs>(args: SelectSubset<T, OrdenCompraDetalleUpdateArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenCompraDetalles.
     * @param {OrdenCompraDetalleDeleteManyArgs} args - Arguments to filter OrdenCompraDetalles to delete.
     * @example
     * // Delete a few OrdenCompraDetalles
     * const { count } = await prisma.ordenCompraDetalle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenCompraDetalleDeleteManyArgs>(args?: SelectSubset<T, OrdenCompraDetalleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompraDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenCompraDetalles
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenCompraDetalleUpdateManyArgs>(args: SelectSubset<T, OrdenCompraDetalleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenCompraDetalles and returns the data updated in the database.
     * @param {OrdenCompraDetalleUpdateManyAndReturnArgs} args - Arguments to update many OrdenCompraDetalles.
     * @example
     * // Update many OrdenCompraDetalles
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenCompraDetalles and only return the `id`
     * const ordenCompraDetalleWithIdOnly = await prisma.ordenCompraDetalle.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenCompraDetalleUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenCompraDetalleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenCompraDetalle.
     * @param {OrdenCompraDetalleUpsertArgs} args - Arguments to update or create a OrdenCompraDetalle.
     * @example
     * // Update or create a OrdenCompraDetalle
     * const ordenCompraDetalle = await prisma.ordenCompraDetalle.upsert({
     *   create: {
     *     // ... data to create a OrdenCompraDetalle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenCompraDetalle we want to update
     *   }
     * })
     */
    upsert<T extends OrdenCompraDetalleUpsertArgs>(args: SelectSubset<T, OrdenCompraDetalleUpsertArgs<ExtArgs>>): Prisma__OrdenCompraDetalleClient<$Result.GetResult<Prisma.$OrdenCompraDetallePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenCompraDetalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleCountArgs} args - Arguments to filter OrdenCompraDetalles to count.
     * @example
     * // Count the number of OrdenCompraDetalles
     * const count = await prisma.ordenCompraDetalle.count({
     *   where: {
     *     // ... the filter for the OrdenCompraDetalles we want to count
     *   }
     * })
    **/
    count<T extends OrdenCompraDetalleCountArgs>(
      args?: Subset<T, OrdenCompraDetalleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCompraDetalleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenCompraDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenCompraDetalleAggregateArgs>(args: Subset<T, OrdenCompraDetalleAggregateArgs>): Prisma.PrismaPromise<GetOrdenCompraDetalleAggregateType<T>>

    /**
     * Group by OrdenCompraDetalle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCompraDetalleGroupByArgs} args - Group by arguments.
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
      T extends OrdenCompraDetalleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenCompraDetalleGroupByArgs['orderBy'] }
        : { orderBy?: OrdenCompraDetalleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenCompraDetalleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenCompraDetalleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenCompraDetalle model
   */
  readonly fields: OrdenCompraDetalleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenCompraDetalle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenCompraDetalleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenCompraDefaultArgs<ExtArgs>>): Prisma__OrdenCompraClient<$Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingrediente<T extends IngredienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredienteDefaultArgs<ExtArgs>>): Prisma__IngredienteClient<$Result.GetResult<Prisma.$IngredientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrdenCompraDetalle model
   */
  interface OrdenCompraDetalleFieldRefs {
    readonly id: FieldRef<"OrdenCompraDetalle", 'String'>
    readonly ordenId: FieldRef<"OrdenCompraDetalle", 'String'>
    readonly ingredienteId: FieldRef<"OrdenCompraDetalle", 'String'>
    readonly cantidadSugerida: FieldRef<"OrdenCompraDetalle", 'Decimal'>
    readonly cantidadFinal: FieldRef<"OrdenCompraDetalle", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * OrdenCompraDetalle findUnique
   */
  export type OrdenCompraDetalleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompraDetalle to fetch.
     */
    where: OrdenCompraDetalleWhereUniqueInput
  }

  /**
   * OrdenCompraDetalle findUniqueOrThrow
   */
  export type OrdenCompraDetalleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompraDetalle to fetch.
     */
    where: OrdenCompraDetalleWhereUniqueInput
  }

  /**
   * OrdenCompraDetalle findFirst
   */
  export type OrdenCompraDetalleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompraDetalle to fetch.
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompraDetalles to fetch.
     */
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompraDetalles.
     */
    cursor?: OrdenCompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompraDetalles.
     */
    distinct?: OrdenCompraDetalleScalarFieldEnum | OrdenCompraDetalleScalarFieldEnum[]
  }

  /**
   * OrdenCompraDetalle findFirstOrThrow
   */
  export type OrdenCompraDetalleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompraDetalle to fetch.
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompraDetalles to fetch.
     */
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenCompraDetalles.
     */
    cursor?: OrdenCompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompraDetalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenCompraDetalles.
     */
    distinct?: OrdenCompraDetalleScalarFieldEnum | OrdenCompraDetalleScalarFieldEnum[]
  }

  /**
   * OrdenCompraDetalle findMany
   */
  export type OrdenCompraDetalleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter, which OrdenCompraDetalles to fetch.
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenCompraDetalles to fetch.
     */
    orderBy?: OrdenCompraDetalleOrderByWithRelationInput | OrdenCompraDetalleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenCompraDetalles.
     */
    cursor?: OrdenCompraDetalleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenCompraDetalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenCompraDetalles.
     */
    skip?: number
    distinct?: OrdenCompraDetalleScalarFieldEnum | OrdenCompraDetalleScalarFieldEnum[]
  }

  /**
   * OrdenCompraDetalle create
   */
  export type OrdenCompraDetalleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenCompraDetalle.
     */
    data: XOR<OrdenCompraDetalleCreateInput, OrdenCompraDetalleUncheckedCreateInput>
  }

  /**
   * OrdenCompraDetalle createMany
   */
  export type OrdenCompraDetalleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenCompraDetalles.
     */
    data: OrdenCompraDetalleCreateManyInput | OrdenCompraDetalleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenCompraDetalle createManyAndReturn
   */
  export type OrdenCompraDetalleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenCompraDetalles.
     */
    data: OrdenCompraDetalleCreateManyInput | OrdenCompraDetalleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenCompraDetalle update
   */
  export type OrdenCompraDetalleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenCompraDetalle.
     */
    data: XOR<OrdenCompraDetalleUpdateInput, OrdenCompraDetalleUncheckedUpdateInput>
    /**
     * Choose, which OrdenCompraDetalle to update.
     */
    where: OrdenCompraDetalleWhereUniqueInput
  }

  /**
   * OrdenCompraDetalle updateMany
   */
  export type OrdenCompraDetalleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenCompraDetalles.
     */
    data: XOR<OrdenCompraDetalleUpdateManyMutationInput, OrdenCompraDetalleUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompraDetalles to update
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * Limit how many OrdenCompraDetalles to update.
     */
    limit?: number
  }

  /**
   * OrdenCompraDetalle updateManyAndReturn
   */
  export type OrdenCompraDetalleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * The data used to update OrdenCompraDetalles.
     */
    data: XOR<OrdenCompraDetalleUpdateManyMutationInput, OrdenCompraDetalleUncheckedUpdateManyInput>
    /**
     * Filter which OrdenCompraDetalles to update
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * Limit how many OrdenCompraDetalles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenCompraDetalle upsert
   */
  export type OrdenCompraDetalleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenCompraDetalle to update in case it exists.
     */
    where: OrdenCompraDetalleWhereUniqueInput
    /**
     * In case the OrdenCompraDetalle found by the `where` argument doesn't exist, create a new OrdenCompraDetalle with this data.
     */
    create: XOR<OrdenCompraDetalleCreateInput, OrdenCompraDetalleUncheckedCreateInput>
    /**
     * In case the OrdenCompraDetalle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenCompraDetalleUpdateInput, OrdenCompraDetalleUncheckedUpdateInput>
  }

  /**
   * OrdenCompraDetalle delete
   */
  export type OrdenCompraDetalleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
    /**
     * Filter which OrdenCompraDetalle to delete.
     */
    where: OrdenCompraDetalleWhereUniqueInput
  }

  /**
   * OrdenCompraDetalle deleteMany
   */
  export type OrdenCompraDetalleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenCompraDetalles to delete
     */
    where?: OrdenCompraDetalleWhereInput
    /**
     * Limit how many OrdenCompraDetalles to delete.
     */
    limit?: number
  }

  /**
   * OrdenCompraDetalle without action
   */
  export type OrdenCompraDetalleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCompraDetalle
     */
    select?: OrdenCompraDetalleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenCompraDetalle
     */
    omit?: OrdenCompraDetalleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenCompraDetalleInclude<ExtArgs> | null
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


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    createdAt: 'createdAt'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PlatoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    activo: 'activo',
    createdAt: 'createdAt',
    categoriaId: 'categoriaId'
  };

  export type PlatoScalarFieldEnum = (typeof PlatoScalarFieldEnum)[keyof typeof PlatoScalarFieldEnum]


  export const IngredienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    unidad: 'unidad',
    costoUnitario: 'costoUnitario',
    stockActual: 'stockActual',
    stockMinimo: 'stockMinimo',
    createdAt: 'createdAt'
  };

  export type IngredienteScalarFieldEnum = (typeof IngredienteScalarFieldEnum)[keyof typeof IngredienteScalarFieldEnum]


  export const RecetaItemScalarFieldEnum: {
    id: 'id',
    platoId: 'platoId',
    ingredienteId: 'ingredienteId',
    cantidad: 'cantidad'
  };

  export type RecetaItemScalarFieldEnum = (typeof RecetaItemScalarFieldEnum)[keyof typeof RecetaItemScalarFieldEnum]


  export const MovimientoInventarioScalarFieldEnum: {
    id: 'id',
    ingredienteId: 'ingredienteId',
    tipo: 'tipo',
    cantidad: 'cantidad',
    motivo: 'motivo',
    createdAt: 'createdAt'
  };

  export type MovimientoInventarioScalarFieldEnum = (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum]


  export const VentaScalarFieldEnum: {
    id: 'id',
    total: 'total',
    fecha: 'fecha',
    notas: 'notas'
  };

  export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum]


  export const VentaDetalleScalarFieldEnum: {
    id: 'id',
    ventaId: 'ventaId',
    platoId: 'platoId',
    cantidad: 'cantidad',
    precio: 'precio'
  };

  export type VentaDetalleScalarFieldEnum = (typeof VentaDetalleScalarFieldEnum)[keyof typeof VentaDetalleScalarFieldEnum]


  export const OrdenCompraScalarFieldEnum: {
    id: 'id',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type OrdenCompraScalarFieldEnum = (typeof OrdenCompraScalarFieldEnum)[keyof typeof OrdenCompraScalarFieldEnum]


  export const OrdenCompraDetalleScalarFieldEnum: {
    id: 'id',
    ordenId: 'ordenId',
    ingredienteId: 'ingredienteId',
    cantidadSugerida: 'cantidadSugerida',
    cantidadFinal: 'cantidadFinal'
  };

  export type OrdenCompraDetalleScalarFieldEnum = (typeof OrdenCompraDetalleScalarFieldEnum)[keyof typeof OrdenCompraDetalleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UnidadMedida'
   */
  export type EnumUnidadMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadMedida'>
    


  /**
   * Reference to a field of type 'UnidadMedida[]'
   */
  export type ListEnumUnidadMedidaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnidadMedida[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    nombre?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    platos?: PlatoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    platos?: PlatoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    nombre?: StringFilter<"Categoria"> | string
    createdAt?: DateTimeFilter<"Categoria"> | Date | string
    platos?: PlatoListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type PlatoWhereInput = {
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    id?: StringFilter<"Plato"> | string
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringNullableFilter<"Plato"> | string | null
    precio?: DecimalFilter<"Plato"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"Plato"> | boolean
    createdAt?: DateTimeFilter<"Plato"> | Date | string
    categoriaId?: StringFilter<"Plato"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    receta?: RecetaItemListRelationFilter
    ventas?: VentaDetalleListRelationFilter
  }

  export type PlatoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    receta?: RecetaItemOrderByRelationAggregateInput
    ventas?: VentaDetalleOrderByRelationAggregateInput
  }

  export type PlatoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlatoWhereInput | PlatoWhereInput[]
    OR?: PlatoWhereInput[]
    NOT?: PlatoWhereInput | PlatoWhereInput[]
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringNullableFilter<"Plato"> | string | null
    precio?: DecimalFilter<"Plato"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"Plato"> | boolean
    createdAt?: DateTimeFilter<"Plato"> | Date | string
    categoriaId?: StringFilter<"Plato"> | string
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    receta?: RecetaItemListRelationFilter
    ventas?: VentaDetalleListRelationFilter
  }, "id">

  export type PlatoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    categoriaId?: SortOrder
    _count?: PlatoCountOrderByAggregateInput
    _avg?: PlatoAvgOrderByAggregateInput
    _max?: PlatoMaxOrderByAggregateInput
    _min?: PlatoMinOrderByAggregateInput
    _sum?: PlatoSumOrderByAggregateInput
  }

  export type PlatoScalarWhereWithAggregatesInput = {
    AND?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    OR?: PlatoScalarWhereWithAggregatesInput[]
    NOT?: PlatoScalarWhereWithAggregatesInput | PlatoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plato"> | string
    nombre?: StringWithAggregatesFilter<"Plato"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Plato"> | string | null
    precio?: DecimalWithAggregatesFilter<"Plato"> | Decimal | DecimalJsLike | number | string
    activo?: BoolWithAggregatesFilter<"Plato"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Plato"> | Date | string
    categoriaId?: StringWithAggregatesFilter<"Plato"> | string
  }

  export type IngredienteWhereInput = {
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    id?: StringFilter<"Ingrediente"> | string
    nombre?: StringFilter<"Ingrediente"> | string
    unidad?: EnumUnidadMedidaFilter<"Ingrediente"> | $Enums.UnidadMedida
    costoUnitario?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Ingrediente"> | Date | string
    recetas?: RecetaItemListRelationFilter
    movimientos?: MovimientoInventarioListRelationFilter
    ordenItems?: OrdenCompraDetalleListRelationFilter
  }

  export type IngredienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    unidad?: SortOrder
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
    createdAt?: SortOrder
    recetas?: RecetaItemOrderByRelationAggregateInput
    movimientos?: MovimientoInventarioOrderByRelationAggregateInput
    ordenItems?: OrdenCompraDetalleOrderByRelationAggregateInput
  }

  export type IngredienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IngredienteWhereInput | IngredienteWhereInput[]
    OR?: IngredienteWhereInput[]
    NOT?: IngredienteWhereInput | IngredienteWhereInput[]
    nombre?: StringFilter<"Ingrediente"> | string
    unidad?: EnumUnidadMedidaFilter<"Ingrediente"> | $Enums.UnidadMedida
    costoUnitario?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Ingrediente"> | Date | string
    recetas?: RecetaItemListRelationFilter
    movimientos?: MovimientoInventarioListRelationFilter
    ordenItems?: OrdenCompraDetalleListRelationFilter
  }, "id">

  export type IngredienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    unidad?: SortOrder
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
    createdAt?: SortOrder
    _count?: IngredienteCountOrderByAggregateInput
    _avg?: IngredienteAvgOrderByAggregateInput
    _max?: IngredienteMaxOrderByAggregateInput
    _min?: IngredienteMinOrderByAggregateInput
    _sum?: IngredienteSumOrderByAggregateInput
  }

  export type IngredienteScalarWhereWithAggregatesInput = {
    AND?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    OR?: IngredienteScalarWhereWithAggregatesInput[]
    NOT?: IngredienteScalarWhereWithAggregatesInput | IngredienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingrediente"> | string
    nombre?: StringWithAggregatesFilter<"Ingrediente"> | string
    unidad?: EnumUnidadMedidaWithAggregatesFilter<"Ingrediente"> | $Enums.UnidadMedida
    costoUnitario?: DecimalWithAggregatesFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalWithAggregatesFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalWithAggregatesFilter<"Ingrediente"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingrediente"> | Date | string
  }

  export type RecetaItemWhereInput = {
    AND?: RecetaItemWhereInput | RecetaItemWhereInput[]
    OR?: RecetaItemWhereInput[]
    NOT?: RecetaItemWhereInput | RecetaItemWhereInput[]
    id?: StringFilter<"RecetaItem"> | string
    platoId?: StringFilter<"RecetaItem"> | string
    ingredienteId?: StringFilter<"RecetaItem"> | string
    cantidad?: DecimalFilter<"RecetaItem"> | Decimal | DecimalJsLike | number | string
    plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type RecetaItemOrderByWithRelationInput = {
    id?: SortOrder
    platoId?: SortOrder
    ingredienteId?: SortOrder
    cantidad?: SortOrder
    plato?: PlatoOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type RecetaItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    platoId_ingredienteId?: RecetaItemPlatoIdIngredienteIdCompoundUniqueInput
    AND?: RecetaItemWhereInput | RecetaItemWhereInput[]
    OR?: RecetaItemWhereInput[]
    NOT?: RecetaItemWhereInput | RecetaItemWhereInput[]
    platoId?: StringFilter<"RecetaItem"> | string
    ingredienteId?: StringFilter<"RecetaItem"> | string
    cantidad?: DecimalFilter<"RecetaItem"> | Decimal | DecimalJsLike | number | string
    plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id" | "platoId_ingredienteId">

  export type RecetaItemOrderByWithAggregationInput = {
    id?: SortOrder
    platoId?: SortOrder
    ingredienteId?: SortOrder
    cantidad?: SortOrder
    _count?: RecetaItemCountOrderByAggregateInput
    _avg?: RecetaItemAvgOrderByAggregateInput
    _max?: RecetaItemMaxOrderByAggregateInput
    _min?: RecetaItemMinOrderByAggregateInput
    _sum?: RecetaItemSumOrderByAggregateInput
  }

  export type RecetaItemScalarWhereWithAggregatesInput = {
    AND?: RecetaItemScalarWhereWithAggregatesInput | RecetaItemScalarWhereWithAggregatesInput[]
    OR?: RecetaItemScalarWhereWithAggregatesInput[]
    NOT?: RecetaItemScalarWhereWithAggregatesInput | RecetaItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecetaItem"> | string
    platoId?: StringWithAggregatesFilter<"RecetaItem"> | string
    ingredienteId?: StringWithAggregatesFilter<"RecetaItem"> | string
    cantidad?: DecimalWithAggregatesFilter<"RecetaItem"> | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioWhereInput = {
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    id?: StringFilter<"MovimientoInventario"> | string
    ingredienteId?: StringFilter<"MovimientoInventario"> | string
    tipo?: StringFilter<"MovimientoInventario"> | string
    cantidad?: DecimalFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string
    motivo?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type MovimientoInventarioOrderByWithRelationInput = {
    id?: SortOrder
    ingredienteId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type MovimientoInventarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    OR?: MovimientoInventarioWhereInput[]
    NOT?: MovimientoInventarioWhereInput | MovimientoInventarioWhereInput[]
    ingredienteId?: StringFilter<"MovimientoInventario"> | string
    tipo?: StringFilter<"MovimientoInventario"> | string
    cantidad?: DecimalFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string
    motivo?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id">

  export type MovimientoInventarioOrderByWithAggregationInput = {
    id?: SortOrder
    ingredienteId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MovimientoInventarioCountOrderByAggregateInput
    _avg?: MovimientoInventarioAvgOrderByAggregateInput
    _max?: MovimientoInventarioMaxOrderByAggregateInput
    _min?: MovimientoInventarioMinOrderByAggregateInput
    _sum?: MovimientoInventarioSumOrderByAggregateInput
  }

  export type MovimientoInventarioScalarWhereWithAggregatesInput = {
    AND?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    OR?: MovimientoInventarioScalarWhereWithAggregatesInput[]
    NOT?: MovimientoInventarioScalarWhereWithAggregatesInput | MovimientoInventarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovimientoInventario"> | string
    ingredienteId?: StringWithAggregatesFilter<"MovimientoInventario"> | string
    tipo?: StringWithAggregatesFilter<"MovimientoInventario"> | string
    cantidad?: DecimalWithAggregatesFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string
    motivo?: StringNullableWithAggregatesFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MovimientoInventario"> | Date | string
  }

  export type VentaWhereInput = {
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    id?: StringFilter<"Venta"> | string
    total?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    notas?: StringNullableFilter<"Venta"> | string | null
    detalles?: VentaDetalleListRelationFilter
  }

  export type VentaOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    notas?: SortOrderInput | SortOrder
    detalles?: VentaDetalleOrderByRelationAggregateInput
  }

  export type VentaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VentaWhereInput | VentaWhereInput[]
    OR?: VentaWhereInput[]
    NOT?: VentaWhereInput | VentaWhereInput[]
    total?: DecimalFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"Venta"> | Date | string
    notas?: StringNullableFilter<"Venta"> | string | null
    detalles?: VentaDetalleListRelationFilter
  }, "id">

  export type VentaOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    notas?: SortOrderInput | SortOrder
    _count?: VentaCountOrderByAggregateInput
    _avg?: VentaAvgOrderByAggregateInput
    _max?: VentaMaxOrderByAggregateInput
    _min?: VentaMinOrderByAggregateInput
    _sum?: VentaSumOrderByAggregateInput
  }

  export type VentaScalarWhereWithAggregatesInput = {
    AND?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    OR?: VentaScalarWhereWithAggregatesInput[]
    NOT?: VentaScalarWhereWithAggregatesInput | VentaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Venta"> | string
    total?: DecimalWithAggregatesFilter<"Venta"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeWithAggregatesFilter<"Venta"> | Date | string
    notas?: StringNullableWithAggregatesFilter<"Venta"> | string | null
  }

  export type VentaDetalleWhereInput = {
    AND?: VentaDetalleWhereInput | VentaDetalleWhereInput[]
    OR?: VentaDetalleWhereInput[]
    NOT?: VentaDetalleWhereInput | VentaDetalleWhereInput[]
    id?: StringFilter<"VentaDetalle"> | string
    ventaId?: StringFilter<"VentaDetalle"> | string
    platoId?: StringFilter<"VentaDetalle"> | string
    cantidad?: IntFilter<"VentaDetalle"> | number
    precio?: DecimalFilter<"VentaDetalle"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
  }

  export type VentaDetalleOrderByWithRelationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    platoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    venta?: VentaOrderByWithRelationInput
    plato?: PlatoOrderByWithRelationInput
  }

  export type VentaDetalleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VentaDetalleWhereInput | VentaDetalleWhereInput[]
    OR?: VentaDetalleWhereInput[]
    NOT?: VentaDetalleWhereInput | VentaDetalleWhereInput[]
    ventaId?: StringFilter<"VentaDetalle"> | string
    platoId?: StringFilter<"VentaDetalle"> | string
    cantidad?: IntFilter<"VentaDetalle"> | number
    precio?: DecimalFilter<"VentaDetalle"> | Decimal | DecimalJsLike | number | string
    venta?: XOR<VentaScalarRelationFilter, VentaWhereInput>
    plato?: XOR<PlatoScalarRelationFilter, PlatoWhereInput>
  }, "id">

  export type VentaDetalleOrderByWithAggregationInput = {
    id?: SortOrder
    ventaId?: SortOrder
    platoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
    _count?: VentaDetalleCountOrderByAggregateInput
    _avg?: VentaDetalleAvgOrderByAggregateInput
    _max?: VentaDetalleMaxOrderByAggregateInput
    _min?: VentaDetalleMinOrderByAggregateInput
    _sum?: VentaDetalleSumOrderByAggregateInput
  }

  export type VentaDetalleScalarWhereWithAggregatesInput = {
    AND?: VentaDetalleScalarWhereWithAggregatesInput | VentaDetalleScalarWhereWithAggregatesInput[]
    OR?: VentaDetalleScalarWhereWithAggregatesInput[]
    NOT?: VentaDetalleScalarWhereWithAggregatesInput | VentaDetalleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VentaDetalle"> | string
    ventaId?: StringWithAggregatesFilter<"VentaDetalle"> | string
    platoId?: StringWithAggregatesFilter<"VentaDetalle"> | string
    cantidad?: IntWithAggregatesFilter<"VentaDetalle"> | number
    precio?: DecimalWithAggregatesFilter<"VentaDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type OrdenCompraWhereInput = {
    AND?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    OR?: OrdenCompraWhereInput[]
    NOT?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    id?: StringFilter<"OrdenCompra"> | string
    estado?: StringFilter<"OrdenCompra"> | string
    createdAt?: DateTimeFilter<"OrdenCompra"> | Date | string
    detalles?: OrdenCompraDetalleListRelationFilter
  }

  export type OrdenCompraOrderByWithRelationInput = {
    id?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    detalles?: OrdenCompraDetalleOrderByRelationAggregateInput
  }

  export type OrdenCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    OR?: OrdenCompraWhereInput[]
    NOT?: OrdenCompraWhereInput | OrdenCompraWhereInput[]
    estado?: StringFilter<"OrdenCompra"> | string
    createdAt?: DateTimeFilter<"OrdenCompra"> | Date | string
    detalles?: OrdenCompraDetalleListRelationFilter
  }, "id">

  export type OrdenCompraOrderByWithAggregationInput = {
    id?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    _count?: OrdenCompraCountOrderByAggregateInput
    _max?: OrdenCompraMaxOrderByAggregateInput
    _min?: OrdenCompraMinOrderByAggregateInput
  }

  export type OrdenCompraScalarWhereWithAggregatesInput = {
    AND?: OrdenCompraScalarWhereWithAggregatesInput | OrdenCompraScalarWhereWithAggregatesInput[]
    OR?: OrdenCompraScalarWhereWithAggregatesInput[]
    NOT?: OrdenCompraScalarWhereWithAggregatesInput | OrdenCompraScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrdenCompra"> | string
    estado?: StringWithAggregatesFilter<"OrdenCompra"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrdenCompra"> | Date | string
  }

  export type OrdenCompraDetalleWhereInput = {
    AND?: OrdenCompraDetalleWhereInput | OrdenCompraDetalleWhereInput[]
    OR?: OrdenCompraDetalleWhereInput[]
    NOT?: OrdenCompraDetalleWhereInput | OrdenCompraDetalleWhereInput[]
    id?: StringFilter<"OrdenCompraDetalle"> | string
    ordenId?: StringFilter<"OrdenCompraDetalle"> | string
    ingredienteId?: StringFilter<"OrdenCompraDetalle"> | string
    cantidadSugerida?: DecimalFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string
    cantidadFinal?: DecimalNullableFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string | null
    orden?: XOR<OrdenCompraScalarRelationFilter, OrdenCompraWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }

  export type OrdenCompraDetalleOrderByWithRelationInput = {
    id?: SortOrder
    ordenId?: SortOrder
    ingredienteId?: SortOrder
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrderInput | SortOrder
    orden?: OrdenCompraOrderByWithRelationInput
    ingrediente?: IngredienteOrderByWithRelationInput
  }

  export type OrdenCompraDetalleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdenCompraDetalleWhereInput | OrdenCompraDetalleWhereInput[]
    OR?: OrdenCompraDetalleWhereInput[]
    NOT?: OrdenCompraDetalleWhereInput | OrdenCompraDetalleWhereInput[]
    ordenId?: StringFilter<"OrdenCompraDetalle"> | string
    ingredienteId?: StringFilter<"OrdenCompraDetalle"> | string
    cantidadSugerida?: DecimalFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string
    cantidadFinal?: DecimalNullableFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string | null
    orden?: XOR<OrdenCompraScalarRelationFilter, OrdenCompraWhereInput>
    ingrediente?: XOR<IngredienteScalarRelationFilter, IngredienteWhereInput>
  }, "id">

  export type OrdenCompraDetalleOrderByWithAggregationInput = {
    id?: SortOrder
    ordenId?: SortOrder
    ingredienteId?: SortOrder
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrderInput | SortOrder
    _count?: OrdenCompraDetalleCountOrderByAggregateInput
    _avg?: OrdenCompraDetalleAvgOrderByAggregateInput
    _max?: OrdenCompraDetalleMaxOrderByAggregateInput
    _min?: OrdenCompraDetalleMinOrderByAggregateInput
    _sum?: OrdenCompraDetalleSumOrderByAggregateInput
  }

  export type OrdenCompraDetalleScalarWhereWithAggregatesInput = {
    AND?: OrdenCompraDetalleScalarWhereWithAggregatesInput | OrdenCompraDetalleScalarWhereWithAggregatesInput[]
    OR?: OrdenCompraDetalleScalarWhereWithAggregatesInput[]
    NOT?: OrdenCompraDetalleScalarWhereWithAggregatesInput | OrdenCompraDetalleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrdenCompraDetalle"> | string
    ordenId?: StringWithAggregatesFilter<"OrdenCompraDetalle"> | string
    ingredienteId?: StringWithAggregatesFilter<"OrdenCompraDetalle"> | string
    cantidadSugerida?: DecimalWithAggregatesFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string
    cantidadFinal?: DecimalNullableWithAggregatesFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriaCreateInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    platos?: PlatoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
    platos?: PlatoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platos?: PlatoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    platos?: PlatoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatoCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutPlatosInput
    receta?: RecetaItemCreateNestedManyWithoutPlatoInput
    ventas?: VentaDetalleCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoriaId: string
    receta?: RecetaItemUncheckedCreateNestedManyWithoutPlatoInput
    ventas?: VentaDetalleUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutPlatosNestedInput
    receta?: RecetaItemUpdateManyWithoutPlatoNestedInput
    ventas?: VentaDetalleUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    receta?: RecetaItemUncheckedUpdateManyWithoutPlatoNestedInput
    ventas?: VentaDetalleUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoCreateManyInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoriaId: string
  }

  export type PlatoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type IngredienteCreateInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemCreateNestedManyWithoutIngredienteInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemUncheckedCreateNestedManyWithoutIngredienteInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUpdateManyWithoutIngredienteNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUncheckedUpdateManyWithoutIngredienteNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteCreateManyInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type IngredienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaItemCreateInput = {
    id?: string
    cantidad: Decimal | DecimalJsLike | number | string
    plato: PlatoCreateNestedOneWithoutRecetaInput
    ingrediente: IngredienteCreateNestedOneWithoutRecetasInput
  }

  export type RecetaItemUncheckedCreateInput = {
    id?: string
    platoId: string
    ingredienteId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plato?: PlatoUpdateOneRequiredWithoutRecetaNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutRecetasNestedInput
  }

  export type RecetaItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemCreateManyInput = {
    id?: string
    platoId: string
    ingredienteId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioCreateInput = {
    id?: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
    ingrediente: IngredienteCreateNestedOneWithoutMovimientosInput
  }

  export type MovimientoInventarioUncheckedCreateInput = {
    id?: string
    ingredienteId: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingrediente?: IngredienteUpdateOneRequiredWithoutMovimientosNestedInput
  }

  export type MovimientoInventarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioCreateManyInput = {
    id?: string
    ingredienteId: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentaCreateInput = {
    id?: string
    total: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    notas?: string | null
    detalles?: VentaDetalleCreateNestedManyWithoutVentaInput
  }

  export type VentaUncheckedCreateInput = {
    id?: string
    total: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    notas?: string | null
    detalles?: VentaDetalleUncheckedCreateNestedManyWithoutVentaInput
  }

  export type VentaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: VentaDetalleUpdateManyWithoutVentaNestedInput
  }

  export type VentaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    detalles?: VentaDetalleUncheckedUpdateManyWithoutVentaNestedInput
  }

  export type VentaCreateManyInput = {
    id?: string
    total: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    notas?: string | null
  }

  export type VentaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaDetalleCreateInput = {
    id?: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutDetallesInput
    plato: PlatoCreateNestedOneWithoutVentasInput
  }

  export type VentaDetalleUncheckedCreateInput = {
    id?: string
    ventaId: string
    platoId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutDetallesNestedInput
    plato?: PlatoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaDetalleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleCreateManyInput = {
    id?: string
    ventaId: string
    platoId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenCompraCreateInput = {
    id?: string
    estado?: string
    createdAt?: Date | string
    detalles?: OrdenCompraDetalleCreateNestedManyWithoutOrdenInput
  }

  export type OrdenCompraUncheckedCreateInput = {
    id?: string
    estado?: string
    createdAt?: Date | string
    detalles?: OrdenCompraDetalleUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenCompraUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: OrdenCompraDetalleUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenCompraUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: OrdenCompraDetalleUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenCompraCreateManyInput = {
    id?: string
    estado?: string
    createdAt?: Date | string
  }

  export type OrdenCompraUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCompraUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCompraDetalleCreateInput = {
    id?: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
    orden: OrdenCompraCreateNestedOneWithoutDetallesInput
    ingrediente: IngredienteCreateNestedOneWithoutOrdenItemsInput
  }

  export type OrdenCompraDetalleUncheckedCreateInput = {
    id?: string
    ordenId: string
    ingredienteId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orden?: OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput
    ingrediente?: IngredienteUpdateOneRequiredWithoutOrdenItemsNestedInput
  }

  export type OrdenCompraDetalleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordenId?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleCreateManyInput = {
    id?: string
    ordenId: string
    ingredienteId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordenId?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type PlatoListRelationFilter = {
    every?: PlatoWhereInput
    some?: PlatoWhereInput
    none?: PlatoWhereInput
  }

  export type PlatoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    createdAt?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type RecetaItemListRelationFilter = {
    every?: RecetaItemWhereInput
    some?: RecetaItemWhereInput
    none?: RecetaItemWhereInput
  }

  export type VentaDetalleListRelationFilter = {
    every?: VentaDetalleWhereInput
    some?: VentaDetalleWhereInput
    none?: VentaDetalleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecetaItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentaDetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlatoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatoAvgOrderByAggregateInput = {
    precio?: SortOrder
  }

  export type PlatoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatoSumOrderByAggregateInput = {
    precio?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUnidadMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadMedida | EnumUnidadMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadMedidaFilter<$PrismaModel> | $Enums.UnidadMedida
  }

  export type MovimientoInventarioListRelationFilter = {
    every?: MovimientoInventarioWhereInput
    some?: MovimientoInventarioWhereInput
    none?: MovimientoInventarioWhereInput
  }

  export type OrdenCompraDetalleListRelationFilter = {
    every?: OrdenCompraDetalleWhereInput
    some?: OrdenCompraDetalleWhereInput
    none?: OrdenCompraDetalleWhereInput
  }

  export type MovimientoInventarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenCompraDetalleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    unidad?: SortOrder
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredienteAvgOrderByAggregateInput = {
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
  }

  export type IngredienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    unidad?: SortOrder
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    unidad?: SortOrder
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredienteSumOrderByAggregateInput = {
    costoUnitario?: SortOrder
    stockActual?: SortOrder
    stockMinimo?: SortOrder
  }

  export type EnumUnidadMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadMedida | EnumUnidadMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadMedidaFilter<$PrismaModel>
  }

  export type PlatoScalarRelationFilter = {
    is?: PlatoWhereInput
    isNot?: PlatoWhereInput
  }

  export type IngredienteScalarRelationFilter = {
    is?: IngredienteWhereInput
    isNot?: IngredienteWhereInput
  }

  export type RecetaItemPlatoIdIngredienteIdCompoundUniqueInput = {
    platoId: string
    ingredienteId: string
  }

  export type RecetaItemCountOrderByAggregateInput = {
    id?: SortOrder
    platoId?: SortOrder
    ingredienteId?: SortOrder
    cantidad?: SortOrder
  }

  export type RecetaItemAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type RecetaItemMaxOrderByAggregateInput = {
    id?: SortOrder
    platoId?: SortOrder
    ingredienteId?: SortOrder
    cantidad?: SortOrder
  }

  export type RecetaItemMinOrderByAggregateInput = {
    id?: SortOrder
    platoId?: SortOrder
    ingredienteId?: SortOrder
    cantidad?: SortOrder
  }

  export type RecetaItemSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type MovimientoInventarioCountOrderByAggregateInput = {
    id?: SortOrder
    ingredienteId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioAvgOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type MovimientoInventarioMaxOrderByAggregateInput = {
    id?: SortOrder
    ingredienteId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioMinOrderByAggregateInput = {
    id?: SortOrder
    ingredienteId?: SortOrder
    tipo?: SortOrder
    cantidad?: SortOrder
    motivo?: SortOrder
    createdAt?: SortOrder
  }

  export type MovimientoInventarioSumOrderByAggregateInput = {
    cantidad?: SortOrder
  }

  export type VentaCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    notas?: SortOrder
  }

  export type VentaAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type VentaMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    notas?: SortOrder
  }

  export type VentaMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    fecha?: SortOrder
    notas?: SortOrder
  }

  export type VentaSumOrderByAggregateInput = {
    total?: SortOrder
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

  export type VentaScalarRelationFilter = {
    is?: VentaWhereInput
    isNot?: VentaWhereInput
  }

  export type VentaDetalleCountOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    platoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type VentaDetalleAvgOrderByAggregateInput = {
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type VentaDetalleMaxOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    platoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type VentaDetalleMinOrderByAggregateInput = {
    id?: SortOrder
    ventaId?: SortOrder
    platoId?: SortOrder
    cantidad?: SortOrder
    precio?: SortOrder
  }

  export type VentaDetalleSumOrderByAggregateInput = {
    cantidad?: SortOrder
    precio?: SortOrder
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

  export type OrdenCompraCountOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdenCompraMaxOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdenCompraMinOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraScalarRelationFilter = {
    is?: OrdenCompraWhereInput
    isNot?: OrdenCompraWhereInput
  }

  export type OrdenCompraDetalleCountOrderByAggregateInput = {
    id?: SortOrder
    ordenId?: SortOrder
    ingredienteId?: SortOrder
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrder
  }

  export type OrdenCompraDetalleAvgOrderByAggregateInput = {
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrder
  }

  export type OrdenCompraDetalleMaxOrderByAggregateInput = {
    id?: SortOrder
    ordenId?: SortOrder
    ingredienteId?: SortOrder
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrder
  }

  export type OrdenCompraDetalleMinOrderByAggregateInput = {
    id?: SortOrder
    ordenId?: SortOrder
    ingredienteId?: SortOrder
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrder
  }

  export type OrdenCompraDetalleSumOrderByAggregateInput = {
    cantidadSugerida?: SortOrder
    cantidadFinal?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PlatoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput> | PlatoCreateWithoutCategoriaInput[] | PlatoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCategoriaInput | PlatoCreateOrConnectWithoutCategoriaInput[]
    createMany?: PlatoCreateManyCategoriaInputEnvelope
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
  }

  export type PlatoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput> | PlatoCreateWithoutCategoriaInput[] | PlatoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCategoriaInput | PlatoCreateOrConnectWithoutCategoriaInput[]
    createMany?: PlatoCreateManyCategoriaInputEnvelope
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlatoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput> | PlatoCreateWithoutCategoriaInput[] | PlatoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCategoriaInput | PlatoCreateOrConnectWithoutCategoriaInput[]
    upsert?: PlatoUpsertWithWhereUniqueWithoutCategoriaInput | PlatoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PlatoCreateManyCategoriaInputEnvelope
    set?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    disconnect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    delete?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    update?: PlatoUpdateWithWhereUniqueWithoutCategoriaInput | PlatoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PlatoUpdateManyWithWhereWithoutCategoriaInput | PlatoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
  }

  export type PlatoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput> | PlatoCreateWithoutCategoriaInput[] | PlatoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatoCreateOrConnectWithoutCategoriaInput | PlatoCreateOrConnectWithoutCategoriaInput[]
    upsert?: PlatoUpsertWithWhereUniqueWithoutCategoriaInput | PlatoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PlatoCreateManyCategoriaInputEnvelope
    set?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    disconnect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    delete?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    connect?: PlatoWhereUniqueInput | PlatoWhereUniqueInput[]
    update?: PlatoUpdateWithWhereUniqueWithoutCategoriaInput | PlatoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PlatoUpdateManyWithWhereWithoutCategoriaInput | PlatoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutPlatosInput = {
    create?: XOR<CategoriaCreateWithoutPlatosInput, CategoriaUncheckedCreateWithoutPlatosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPlatosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type RecetaItemCreateNestedManyWithoutPlatoInput = {
    create?: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput> | RecetaItemCreateWithoutPlatoInput[] | RecetaItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutPlatoInput | RecetaItemCreateOrConnectWithoutPlatoInput[]
    createMany?: RecetaItemCreateManyPlatoInputEnvelope
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
  }

  export type VentaDetalleCreateNestedManyWithoutPlatoInput = {
    create?: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput> | VentaDetalleCreateWithoutPlatoInput[] | VentaDetalleUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutPlatoInput | VentaDetalleCreateOrConnectWithoutPlatoInput[]
    createMany?: VentaDetalleCreateManyPlatoInputEnvelope
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
  }

  export type RecetaItemUncheckedCreateNestedManyWithoutPlatoInput = {
    create?: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput> | RecetaItemCreateWithoutPlatoInput[] | RecetaItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutPlatoInput | RecetaItemCreateOrConnectWithoutPlatoInput[]
    createMany?: RecetaItemCreateManyPlatoInputEnvelope
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
  }

  export type VentaDetalleUncheckedCreateNestedManyWithoutPlatoInput = {
    create?: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput> | VentaDetalleCreateWithoutPlatoInput[] | VentaDetalleUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutPlatoInput | VentaDetalleCreateOrConnectWithoutPlatoInput[]
    createMany?: VentaDetalleCreateManyPlatoInputEnvelope
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CategoriaUpdateOneRequiredWithoutPlatosNestedInput = {
    create?: XOR<CategoriaCreateWithoutPlatosInput, CategoriaUncheckedCreateWithoutPlatosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPlatosInput
    upsert?: CategoriaUpsertWithoutPlatosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPlatosInput, CategoriaUpdateWithoutPlatosInput>, CategoriaUncheckedUpdateWithoutPlatosInput>
  }

  export type RecetaItemUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput> | RecetaItemCreateWithoutPlatoInput[] | RecetaItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutPlatoInput | RecetaItemCreateOrConnectWithoutPlatoInput[]
    upsert?: RecetaItemUpsertWithWhereUniqueWithoutPlatoInput | RecetaItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: RecetaItemCreateManyPlatoInputEnvelope
    set?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    disconnect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    delete?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    update?: RecetaItemUpdateWithWhereUniqueWithoutPlatoInput | RecetaItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: RecetaItemUpdateManyWithWhereWithoutPlatoInput | RecetaItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
  }

  export type VentaDetalleUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput> | VentaDetalleCreateWithoutPlatoInput[] | VentaDetalleUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutPlatoInput | VentaDetalleCreateOrConnectWithoutPlatoInput[]
    upsert?: VentaDetalleUpsertWithWhereUniqueWithoutPlatoInput | VentaDetalleUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: VentaDetalleCreateManyPlatoInputEnvelope
    set?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    disconnect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    delete?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    update?: VentaDetalleUpdateWithWhereUniqueWithoutPlatoInput | VentaDetalleUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: VentaDetalleUpdateManyWithWhereWithoutPlatoInput | VentaDetalleUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
  }

  export type RecetaItemUncheckedUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput> | RecetaItemCreateWithoutPlatoInput[] | RecetaItemUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutPlatoInput | RecetaItemCreateOrConnectWithoutPlatoInput[]
    upsert?: RecetaItemUpsertWithWhereUniqueWithoutPlatoInput | RecetaItemUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: RecetaItemCreateManyPlatoInputEnvelope
    set?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    disconnect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    delete?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    update?: RecetaItemUpdateWithWhereUniqueWithoutPlatoInput | RecetaItemUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: RecetaItemUpdateManyWithWhereWithoutPlatoInput | RecetaItemUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
  }

  export type VentaDetalleUncheckedUpdateManyWithoutPlatoNestedInput = {
    create?: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput> | VentaDetalleCreateWithoutPlatoInput[] | VentaDetalleUncheckedCreateWithoutPlatoInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutPlatoInput | VentaDetalleCreateOrConnectWithoutPlatoInput[]
    upsert?: VentaDetalleUpsertWithWhereUniqueWithoutPlatoInput | VentaDetalleUpsertWithWhereUniqueWithoutPlatoInput[]
    createMany?: VentaDetalleCreateManyPlatoInputEnvelope
    set?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    disconnect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    delete?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    update?: VentaDetalleUpdateWithWhereUniqueWithoutPlatoInput | VentaDetalleUpdateWithWhereUniqueWithoutPlatoInput[]
    updateMany?: VentaDetalleUpdateManyWithWhereWithoutPlatoInput | VentaDetalleUpdateManyWithWhereWithoutPlatoInput[]
    deleteMany?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
  }

  export type RecetaItemCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput> | RecetaItemCreateWithoutIngredienteInput[] | RecetaItemUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutIngredienteInput | RecetaItemCreateOrConnectWithoutIngredienteInput[]
    createMany?: RecetaItemCreateManyIngredienteInputEnvelope
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
  }

  export type MovimientoInventarioCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput> | MovimientoInventarioCreateWithoutIngredienteInput[] | MovimientoInventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutIngredienteInput | MovimientoInventarioCreateOrConnectWithoutIngredienteInput[]
    createMany?: MovimientoInventarioCreateManyIngredienteInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type OrdenCompraDetalleCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput> | OrdenCompraDetalleCreateWithoutIngredienteInput[] | OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput | OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput[]
    createMany?: OrdenCompraDetalleCreateManyIngredienteInputEnvelope
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
  }

  export type RecetaItemUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput> | RecetaItemCreateWithoutIngredienteInput[] | RecetaItemUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutIngredienteInput | RecetaItemCreateOrConnectWithoutIngredienteInput[]
    createMany?: RecetaItemCreateManyIngredienteInputEnvelope
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
  }

  export type MovimientoInventarioUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput> | MovimientoInventarioCreateWithoutIngredienteInput[] | MovimientoInventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutIngredienteInput | MovimientoInventarioCreateOrConnectWithoutIngredienteInput[]
    createMany?: MovimientoInventarioCreateManyIngredienteInputEnvelope
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
  }

  export type OrdenCompraDetalleUncheckedCreateNestedManyWithoutIngredienteInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput> | OrdenCompraDetalleCreateWithoutIngredienteInput[] | OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput | OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput[]
    createMany?: OrdenCompraDetalleCreateManyIngredienteInputEnvelope
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
  }

  export type EnumUnidadMedidaFieldUpdateOperationsInput = {
    set?: $Enums.UnidadMedida
  }

  export type RecetaItemUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput> | RecetaItemCreateWithoutIngredienteInput[] | RecetaItemUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutIngredienteInput | RecetaItemCreateOrConnectWithoutIngredienteInput[]
    upsert?: RecetaItemUpsertWithWhereUniqueWithoutIngredienteInput | RecetaItemUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: RecetaItemCreateManyIngredienteInputEnvelope
    set?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    disconnect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    delete?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    update?: RecetaItemUpdateWithWhereUniqueWithoutIngredienteInput | RecetaItemUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: RecetaItemUpdateManyWithWhereWithoutIngredienteInput | RecetaItemUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
  }

  export type MovimientoInventarioUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput> | MovimientoInventarioCreateWithoutIngredienteInput[] | MovimientoInventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutIngredienteInput | MovimientoInventarioCreateOrConnectWithoutIngredienteInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutIngredienteInput | MovimientoInventarioUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: MovimientoInventarioCreateManyIngredienteInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutIngredienteInput | MovimientoInventarioUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutIngredienteInput | MovimientoInventarioUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type OrdenCompraDetalleUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput> | OrdenCompraDetalleCreateWithoutIngredienteInput[] | OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput | OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput[]
    upsert?: OrdenCompraDetalleUpsertWithWhereUniqueWithoutIngredienteInput | OrdenCompraDetalleUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: OrdenCompraDetalleCreateManyIngredienteInputEnvelope
    set?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    disconnect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    delete?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    update?: OrdenCompraDetalleUpdateWithWhereUniqueWithoutIngredienteInput | OrdenCompraDetalleUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: OrdenCompraDetalleUpdateManyWithWhereWithoutIngredienteInput | OrdenCompraDetalleUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
  }

  export type RecetaItemUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput> | RecetaItemCreateWithoutIngredienteInput[] | RecetaItemUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: RecetaItemCreateOrConnectWithoutIngredienteInput | RecetaItemCreateOrConnectWithoutIngredienteInput[]
    upsert?: RecetaItemUpsertWithWhereUniqueWithoutIngredienteInput | RecetaItemUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: RecetaItemCreateManyIngredienteInputEnvelope
    set?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    disconnect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    delete?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    connect?: RecetaItemWhereUniqueInput | RecetaItemWhereUniqueInput[]
    update?: RecetaItemUpdateWithWhereUniqueWithoutIngredienteInput | RecetaItemUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: RecetaItemUpdateManyWithWhereWithoutIngredienteInput | RecetaItemUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput> | MovimientoInventarioCreateWithoutIngredienteInput[] | MovimientoInventarioUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: MovimientoInventarioCreateOrConnectWithoutIngredienteInput | MovimientoInventarioCreateOrConnectWithoutIngredienteInput[]
    upsert?: MovimientoInventarioUpsertWithWhereUniqueWithoutIngredienteInput | MovimientoInventarioUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: MovimientoInventarioCreateManyIngredienteInputEnvelope
    set?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    disconnect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    delete?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    connect?: MovimientoInventarioWhereUniqueInput | MovimientoInventarioWhereUniqueInput[]
    update?: MovimientoInventarioUpdateWithWhereUniqueWithoutIngredienteInput | MovimientoInventarioUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: MovimientoInventarioUpdateManyWithWhereWithoutIngredienteInput | MovimientoInventarioUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
  }

  export type OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteNestedInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput> | OrdenCompraDetalleCreateWithoutIngredienteInput[] | OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput | OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput[]
    upsert?: OrdenCompraDetalleUpsertWithWhereUniqueWithoutIngredienteInput | OrdenCompraDetalleUpsertWithWhereUniqueWithoutIngredienteInput[]
    createMany?: OrdenCompraDetalleCreateManyIngredienteInputEnvelope
    set?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    disconnect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    delete?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    update?: OrdenCompraDetalleUpdateWithWhereUniqueWithoutIngredienteInput | OrdenCompraDetalleUpdateWithWhereUniqueWithoutIngredienteInput[]
    updateMany?: OrdenCompraDetalleUpdateManyWithWhereWithoutIngredienteInput | OrdenCompraDetalleUpdateManyWithWhereWithoutIngredienteInput[]
    deleteMany?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
  }

  export type PlatoCreateNestedOneWithoutRecetaInput = {
    create?: XOR<PlatoCreateWithoutRecetaInput, PlatoUncheckedCreateWithoutRecetaInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutRecetaInput
    connect?: PlatoWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutRecetasInput = {
    create?: XOR<IngredienteCreateWithoutRecetasInput, IngredienteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutRecetasInput
    connect?: IngredienteWhereUniqueInput
  }

  export type PlatoUpdateOneRequiredWithoutRecetaNestedInput = {
    create?: XOR<PlatoCreateWithoutRecetaInput, PlatoUncheckedCreateWithoutRecetaInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutRecetaInput
    upsert?: PlatoUpsertWithoutRecetaInput
    connect?: PlatoWhereUniqueInput
    update?: XOR<XOR<PlatoUpdateToOneWithWhereWithoutRecetaInput, PlatoUpdateWithoutRecetaInput>, PlatoUncheckedUpdateWithoutRecetaInput>
  }

  export type IngredienteUpdateOneRequiredWithoutRecetasNestedInput = {
    create?: XOR<IngredienteCreateWithoutRecetasInput, IngredienteUncheckedCreateWithoutRecetasInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutRecetasInput
    upsert?: IngredienteUpsertWithoutRecetasInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutRecetasInput, IngredienteUpdateWithoutRecetasInput>, IngredienteUncheckedUpdateWithoutRecetasInput>
  }

  export type IngredienteCreateNestedOneWithoutMovimientosInput = {
    create?: XOR<IngredienteCreateWithoutMovimientosInput, IngredienteUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutMovimientosInput
    connect?: IngredienteWhereUniqueInput
  }

  export type IngredienteUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: XOR<IngredienteCreateWithoutMovimientosInput, IngredienteUncheckedCreateWithoutMovimientosInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutMovimientosInput
    upsert?: IngredienteUpsertWithoutMovimientosInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutMovimientosInput, IngredienteUpdateWithoutMovimientosInput>, IngredienteUncheckedUpdateWithoutMovimientosInput>
  }

  export type VentaDetalleCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput> | VentaDetalleCreateWithoutVentaInput[] | VentaDetalleUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutVentaInput | VentaDetalleCreateOrConnectWithoutVentaInput[]
    createMany?: VentaDetalleCreateManyVentaInputEnvelope
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
  }

  export type VentaDetalleUncheckedCreateNestedManyWithoutVentaInput = {
    create?: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput> | VentaDetalleCreateWithoutVentaInput[] | VentaDetalleUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutVentaInput | VentaDetalleCreateOrConnectWithoutVentaInput[]
    createMany?: VentaDetalleCreateManyVentaInputEnvelope
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
  }

  export type VentaDetalleUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput> | VentaDetalleCreateWithoutVentaInput[] | VentaDetalleUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutVentaInput | VentaDetalleCreateOrConnectWithoutVentaInput[]
    upsert?: VentaDetalleUpsertWithWhereUniqueWithoutVentaInput | VentaDetalleUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaDetalleCreateManyVentaInputEnvelope
    set?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    disconnect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    delete?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    update?: VentaDetalleUpdateWithWhereUniqueWithoutVentaInput | VentaDetalleUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaDetalleUpdateManyWithWhereWithoutVentaInput | VentaDetalleUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
  }

  export type VentaDetalleUncheckedUpdateManyWithoutVentaNestedInput = {
    create?: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput> | VentaDetalleCreateWithoutVentaInput[] | VentaDetalleUncheckedCreateWithoutVentaInput[]
    connectOrCreate?: VentaDetalleCreateOrConnectWithoutVentaInput | VentaDetalleCreateOrConnectWithoutVentaInput[]
    upsert?: VentaDetalleUpsertWithWhereUniqueWithoutVentaInput | VentaDetalleUpsertWithWhereUniqueWithoutVentaInput[]
    createMany?: VentaDetalleCreateManyVentaInputEnvelope
    set?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    disconnect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    delete?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    connect?: VentaDetalleWhereUniqueInput | VentaDetalleWhereUniqueInput[]
    update?: VentaDetalleUpdateWithWhereUniqueWithoutVentaInput | VentaDetalleUpdateWithWhereUniqueWithoutVentaInput[]
    updateMany?: VentaDetalleUpdateManyWithWhereWithoutVentaInput | VentaDetalleUpdateManyWithWhereWithoutVentaInput[]
    deleteMany?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
  }

  export type VentaCreateNestedOneWithoutDetallesInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    connect?: VentaWhereUniqueInput
  }

  export type PlatoCreateNestedOneWithoutVentasInput = {
    create?: XOR<PlatoCreateWithoutVentasInput, PlatoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutVentasInput
    connect?: PlatoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VentaUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: VentaCreateOrConnectWithoutDetallesInput
    upsert?: VentaUpsertWithoutDetallesInput
    connect?: VentaWhereUniqueInput
    update?: XOR<XOR<VentaUpdateToOneWithWhereWithoutDetallesInput, VentaUpdateWithoutDetallesInput>, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type PlatoUpdateOneRequiredWithoutVentasNestedInput = {
    create?: XOR<PlatoCreateWithoutVentasInput, PlatoUncheckedCreateWithoutVentasInput>
    connectOrCreate?: PlatoCreateOrConnectWithoutVentasInput
    upsert?: PlatoUpsertWithoutVentasInput
    connect?: PlatoWhereUniqueInput
    update?: XOR<XOR<PlatoUpdateToOneWithWhereWithoutVentasInput, PlatoUpdateWithoutVentasInput>, PlatoUncheckedUpdateWithoutVentasInput>
  }

  export type OrdenCompraDetalleCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput> | OrdenCompraDetalleCreateWithoutOrdenInput[] | OrdenCompraDetalleUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutOrdenInput | OrdenCompraDetalleCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenCompraDetalleCreateManyOrdenInputEnvelope
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
  }

  export type OrdenCompraDetalleUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput> | OrdenCompraDetalleCreateWithoutOrdenInput[] | OrdenCompraDetalleUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutOrdenInput | OrdenCompraDetalleCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenCompraDetalleCreateManyOrdenInputEnvelope
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
  }

  export type OrdenCompraDetalleUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput> | OrdenCompraDetalleCreateWithoutOrdenInput[] | OrdenCompraDetalleUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutOrdenInput | OrdenCompraDetalleCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenCompraDetalleUpsertWithWhereUniqueWithoutOrdenInput | OrdenCompraDetalleUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenCompraDetalleCreateManyOrdenInputEnvelope
    set?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    disconnect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    delete?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    update?: OrdenCompraDetalleUpdateWithWhereUniqueWithoutOrdenInput | OrdenCompraDetalleUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenCompraDetalleUpdateManyWithWhereWithoutOrdenInput | OrdenCompraDetalleUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
  }

  export type OrdenCompraDetalleUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput> | OrdenCompraDetalleCreateWithoutOrdenInput[] | OrdenCompraDetalleUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenCompraDetalleCreateOrConnectWithoutOrdenInput | OrdenCompraDetalleCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenCompraDetalleUpsertWithWhereUniqueWithoutOrdenInput | OrdenCompraDetalleUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenCompraDetalleCreateManyOrdenInputEnvelope
    set?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    disconnect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    delete?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    connect?: OrdenCompraDetalleWhereUniqueInput | OrdenCompraDetalleWhereUniqueInput[]
    update?: OrdenCompraDetalleUpdateWithWhereUniqueWithoutOrdenInput | OrdenCompraDetalleUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenCompraDetalleUpdateManyWithWhereWithoutOrdenInput | OrdenCompraDetalleUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
  }

  export type OrdenCompraCreateNestedOneWithoutDetallesInput = {
    create?: XOR<OrdenCompraCreateWithoutDetallesInput, OrdenCompraUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDetallesInput
    connect?: OrdenCompraWhereUniqueInput
  }

  export type IngredienteCreateNestedOneWithoutOrdenItemsInput = {
    create?: XOR<IngredienteCreateWithoutOrdenItemsInput, IngredienteUncheckedCreateWithoutOrdenItemsInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutOrdenItemsInput
    connect?: IngredienteWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: XOR<OrdenCompraCreateWithoutDetallesInput, OrdenCompraUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: OrdenCompraCreateOrConnectWithoutDetallesInput
    upsert?: OrdenCompraUpsertWithoutDetallesInput
    connect?: OrdenCompraWhereUniqueInput
    update?: XOR<XOR<OrdenCompraUpdateToOneWithWhereWithoutDetallesInput, OrdenCompraUpdateWithoutDetallesInput>, OrdenCompraUncheckedUpdateWithoutDetallesInput>
  }

  export type IngredienteUpdateOneRequiredWithoutOrdenItemsNestedInput = {
    create?: XOR<IngredienteCreateWithoutOrdenItemsInput, IngredienteUncheckedCreateWithoutOrdenItemsInput>
    connectOrCreate?: IngredienteCreateOrConnectWithoutOrdenItemsInput
    upsert?: IngredienteUpsertWithoutOrdenItemsInput
    connect?: IngredienteWhereUniqueInput
    update?: XOR<XOR<IngredienteUpdateToOneWithWhereWithoutOrdenItemsInput, IngredienteUpdateWithoutOrdenItemsInput>, IngredienteUncheckedUpdateWithoutOrdenItemsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUnidadMedidaFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadMedida | EnumUnidadMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadMedidaFilter<$PrismaModel> | $Enums.UnidadMedida
  }

  export type NestedEnumUnidadMedidaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnidadMedida | EnumUnidadMedidaFieldRefInput<$PrismaModel>
    in?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnidadMedida[] | ListEnumUnidadMedidaFieldRefInput<$PrismaModel>
    not?: NestedEnumUnidadMedidaWithAggregatesFilter<$PrismaModel> | $Enums.UnidadMedida
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnidadMedidaFilter<$PrismaModel>
    _max?: NestedEnumUnidadMedidaFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PlatoCreateWithoutCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    receta?: RecetaItemCreateNestedManyWithoutPlatoInput
    ventas?: VentaDetalleCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateWithoutCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    receta?: RecetaItemUncheckedCreateNestedManyWithoutPlatoInput
    ventas?: VentaDetalleUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoCreateOrConnectWithoutCategoriaInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput>
  }

  export type PlatoCreateManyCategoriaInputEnvelope = {
    data: PlatoCreateManyCategoriaInput | PlatoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PlatoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PlatoWhereUniqueInput
    update: XOR<PlatoUpdateWithoutCategoriaInput, PlatoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PlatoCreateWithoutCategoriaInput, PlatoUncheckedCreateWithoutCategoriaInput>
  }

  export type PlatoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PlatoWhereUniqueInput
    data: XOR<PlatoUpdateWithoutCategoriaInput, PlatoUncheckedUpdateWithoutCategoriaInput>
  }

  export type PlatoUpdateManyWithWhereWithoutCategoriaInput = {
    where: PlatoScalarWhereInput
    data: XOR<PlatoUpdateManyMutationInput, PlatoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PlatoScalarWhereInput = {
    AND?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
    OR?: PlatoScalarWhereInput[]
    NOT?: PlatoScalarWhereInput | PlatoScalarWhereInput[]
    id?: StringFilter<"Plato"> | string
    nombre?: StringFilter<"Plato"> | string
    descripcion?: StringNullableFilter<"Plato"> | string | null
    precio?: DecimalFilter<"Plato"> | Decimal | DecimalJsLike | number | string
    activo?: BoolFilter<"Plato"> | boolean
    createdAt?: DateTimeFilter<"Plato"> | Date | string
    categoriaId?: StringFilter<"Plato"> | string
  }

  export type CategoriaCreateWithoutPlatosInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutPlatosInput = {
    id?: string
    nombre: string
    createdAt?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutPlatosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPlatosInput, CategoriaUncheckedCreateWithoutPlatosInput>
  }

  export type RecetaItemCreateWithoutPlatoInput = {
    id?: string
    cantidad: Decimal | DecimalJsLike | number | string
    ingrediente: IngredienteCreateNestedOneWithoutRecetasInput
  }

  export type RecetaItemUncheckedCreateWithoutPlatoInput = {
    id?: string
    ingredienteId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemCreateOrConnectWithoutPlatoInput = {
    where: RecetaItemWhereUniqueInput
    create: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput>
  }

  export type RecetaItemCreateManyPlatoInputEnvelope = {
    data: RecetaItemCreateManyPlatoInput | RecetaItemCreateManyPlatoInput[]
    skipDuplicates?: boolean
  }

  export type VentaDetalleCreateWithoutPlatoInput = {
    id?: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
    venta: VentaCreateNestedOneWithoutDetallesInput
  }

  export type VentaDetalleUncheckedCreateWithoutPlatoInput = {
    id?: string
    ventaId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleCreateOrConnectWithoutPlatoInput = {
    where: VentaDetalleWhereUniqueInput
    create: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput>
  }

  export type VentaDetalleCreateManyPlatoInputEnvelope = {
    data: VentaDetalleCreateManyPlatoInput | VentaDetalleCreateManyPlatoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutPlatosInput = {
    update: XOR<CategoriaUpdateWithoutPlatosInput, CategoriaUncheckedUpdateWithoutPlatosInput>
    create: XOR<CategoriaCreateWithoutPlatosInput, CategoriaUncheckedCreateWithoutPlatosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPlatosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPlatosInput, CategoriaUncheckedUpdateWithoutPlatosInput>
  }

  export type CategoriaUpdateWithoutPlatosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutPlatosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaItemUpsertWithWhereUniqueWithoutPlatoInput = {
    where: RecetaItemWhereUniqueInput
    update: XOR<RecetaItemUpdateWithoutPlatoInput, RecetaItemUncheckedUpdateWithoutPlatoInput>
    create: XOR<RecetaItemCreateWithoutPlatoInput, RecetaItemUncheckedCreateWithoutPlatoInput>
  }

  export type RecetaItemUpdateWithWhereUniqueWithoutPlatoInput = {
    where: RecetaItemWhereUniqueInput
    data: XOR<RecetaItemUpdateWithoutPlatoInput, RecetaItemUncheckedUpdateWithoutPlatoInput>
  }

  export type RecetaItemUpdateManyWithWhereWithoutPlatoInput = {
    where: RecetaItemScalarWhereInput
    data: XOR<RecetaItemUpdateManyMutationInput, RecetaItemUncheckedUpdateManyWithoutPlatoInput>
  }

  export type RecetaItemScalarWhereInput = {
    AND?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
    OR?: RecetaItemScalarWhereInput[]
    NOT?: RecetaItemScalarWhereInput | RecetaItemScalarWhereInput[]
    id?: StringFilter<"RecetaItem"> | string
    platoId?: StringFilter<"RecetaItem"> | string
    ingredienteId?: StringFilter<"RecetaItem"> | string
    cantidad?: DecimalFilter<"RecetaItem"> | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUpsertWithWhereUniqueWithoutPlatoInput = {
    where: VentaDetalleWhereUniqueInput
    update: XOR<VentaDetalleUpdateWithoutPlatoInput, VentaDetalleUncheckedUpdateWithoutPlatoInput>
    create: XOR<VentaDetalleCreateWithoutPlatoInput, VentaDetalleUncheckedCreateWithoutPlatoInput>
  }

  export type VentaDetalleUpdateWithWhereUniqueWithoutPlatoInput = {
    where: VentaDetalleWhereUniqueInput
    data: XOR<VentaDetalleUpdateWithoutPlatoInput, VentaDetalleUncheckedUpdateWithoutPlatoInput>
  }

  export type VentaDetalleUpdateManyWithWhereWithoutPlatoInput = {
    where: VentaDetalleScalarWhereInput
    data: XOR<VentaDetalleUpdateManyMutationInput, VentaDetalleUncheckedUpdateManyWithoutPlatoInput>
  }

  export type VentaDetalleScalarWhereInput = {
    AND?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
    OR?: VentaDetalleScalarWhereInput[]
    NOT?: VentaDetalleScalarWhereInput | VentaDetalleScalarWhereInput[]
    id?: StringFilter<"VentaDetalle"> | string
    ventaId?: StringFilter<"VentaDetalle"> | string
    platoId?: StringFilter<"VentaDetalle"> | string
    cantidad?: IntFilter<"VentaDetalle"> | number
    precio?: DecimalFilter<"VentaDetalle"> | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemCreateWithoutIngredienteInput = {
    id?: string
    cantidad: Decimal | DecimalJsLike | number | string
    plato: PlatoCreateNestedOneWithoutRecetaInput
  }

  export type RecetaItemUncheckedCreateWithoutIngredienteInput = {
    id?: string
    platoId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemCreateOrConnectWithoutIngredienteInput = {
    where: RecetaItemWhereUniqueInput
    create: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput>
  }

  export type RecetaItemCreateManyIngredienteInputEnvelope = {
    data: RecetaItemCreateManyIngredienteInput | RecetaItemCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type MovimientoInventarioCreateWithoutIngredienteInput = {
    id?: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioUncheckedCreateWithoutIngredienteInput = {
    id?: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type MovimientoInventarioCreateOrConnectWithoutIngredienteInput = {
    where: MovimientoInventarioWhereUniqueInput
    create: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput>
  }

  export type MovimientoInventarioCreateManyIngredienteInputEnvelope = {
    data: MovimientoInventarioCreateManyIngredienteInput | MovimientoInventarioCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type OrdenCompraDetalleCreateWithoutIngredienteInput = {
    id?: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
    orden: OrdenCompraCreateNestedOneWithoutDetallesInput
  }

  export type OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput = {
    id?: string
    ordenId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleCreateOrConnectWithoutIngredienteInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    create: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput>
  }

  export type OrdenCompraDetalleCreateManyIngredienteInputEnvelope = {
    data: OrdenCompraDetalleCreateManyIngredienteInput | OrdenCompraDetalleCreateManyIngredienteInput[]
    skipDuplicates?: boolean
  }

  export type RecetaItemUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: RecetaItemWhereUniqueInput
    update: XOR<RecetaItemUpdateWithoutIngredienteInput, RecetaItemUncheckedUpdateWithoutIngredienteInput>
    create: XOR<RecetaItemCreateWithoutIngredienteInput, RecetaItemUncheckedCreateWithoutIngredienteInput>
  }

  export type RecetaItemUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: RecetaItemWhereUniqueInput
    data: XOR<RecetaItemUpdateWithoutIngredienteInput, RecetaItemUncheckedUpdateWithoutIngredienteInput>
  }

  export type RecetaItemUpdateManyWithWhereWithoutIngredienteInput = {
    where: RecetaItemScalarWhereInput
    data: XOR<RecetaItemUpdateManyMutationInput, RecetaItemUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type MovimientoInventarioUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: MovimientoInventarioWhereUniqueInput
    update: XOR<MovimientoInventarioUpdateWithoutIngredienteInput, MovimientoInventarioUncheckedUpdateWithoutIngredienteInput>
    create: XOR<MovimientoInventarioCreateWithoutIngredienteInput, MovimientoInventarioUncheckedCreateWithoutIngredienteInput>
  }

  export type MovimientoInventarioUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: MovimientoInventarioWhereUniqueInput
    data: XOR<MovimientoInventarioUpdateWithoutIngredienteInput, MovimientoInventarioUncheckedUpdateWithoutIngredienteInput>
  }

  export type MovimientoInventarioUpdateManyWithWhereWithoutIngredienteInput = {
    where: MovimientoInventarioScalarWhereInput
    data: XOR<MovimientoInventarioUpdateManyMutationInput, MovimientoInventarioUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type MovimientoInventarioScalarWhereInput = {
    AND?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    OR?: MovimientoInventarioScalarWhereInput[]
    NOT?: MovimientoInventarioScalarWhereInput | MovimientoInventarioScalarWhereInput[]
    id?: StringFilter<"MovimientoInventario"> | string
    ingredienteId?: StringFilter<"MovimientoInventario"> | string
    tipo?: StringFilter<"MovimientoInventario"> | string
    cantidad?: DecimalFilter<"MovimientoInventario"> | Decimal | DecimalJsLike | number | string
    motivo?: StringNullableFilter<"MovimientoInventario"> | string | null
    createdAt?: DateTimeFilter<"MovimientoInventario"> | Date | string
  }

  export type OrdenCompraDetalleUpsertWithWhereUniqueWithoutIngredienteInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    update: XOR<OrdenCompraDetalleUpdateWithoutIngredienteInput, OrdenCompraDetalleUncheckedUpdateWithoutIngredienteInput>
    create: XOR<OrdenCompraDetalleCreateWithoutIngredienteInput, OrdenCompraDetalleUncheckedCreateWithoutIngredienteInput>
  }

  export type OrdenCompraDetalleUpdateWithWhereUniqueWithoutIngredienteInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    data: XOR<OrdenCompraDetalleUpdateWithoutIngredienteInput, OrdenCompraDetalleUncheckedUpdateWithoutIngredienteInput>
  }

  export type OrdenCompraDetalleUpdateManyWithWhereWithoutIngredienteInput = {
    where: OrdenCompraDetalleScalarWhereInput
    data: XOR<OrdenCompraDetalleUpdateManyMutationInput, OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteInput>
  }

  export type OrdenCompraDetalleScalarWhereInput = {
    AND?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
    OR?: OrdenCompraDetalleScalarWhereInput[]
    NOT?: OrdenCompraDetalleScalarWhereInput | OrdenCompraDetalleScalarWhereInput[]
    id?: StringFilter<"OrdenCompraDetalle"> | string
    ordenId?: StringFilter<"OrdenCompraDetalle"> | string
    ingredienteId?: StringFilter<"OrdenCompraDetalle"> | string
    cantidadSugerida?: DecimalFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string
    cantidadFinal?: DecimalNullableFilter<"OrdenCompraDetalle"> | Decimal | DecimalJsLike | number | string | null
  }

  export type PlatoCreateWithoutRecetaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutPlatosInput
    ventas?: VentaDetalleCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateWithoutRecetaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoriaId: string
    ventas?: VentaDetalleUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoCreateOrConnectWithoutRecetaInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutRecetaInput, PlatoUncheckedCreateWithoutRecetaInput>
  }

  export type IngredienteCreateWithoutRecetasInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    movimientos?: MovimientoInventarioCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutRecetasInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutRecetasInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutRecetasInput, IngredienteUncheckedCreateWithoutRecetasInput>
  }

  export type PlatoUpsertWithoutRecetaInput = {
    update: XOR<PlatoUpdateWithoutRecetaInput, PlatoUncheckedUpdateWithoutRecetaInput>
    create: XOR<PlatoCreateWithoutRecetaInput, PlatoUncheckedCreateWithoutRecetaInput>
    where?: PlatoWhereInput
  }

  export type PlatoUpdateToOneWithWhereWithoutRecetaInput = {
    where?: PlatoWhereInput
    data: XOR<PlatoUpdateWithoutRecetaInput, PlatoUncheckedUpdateWithoutRecetaInput>
  }

  export type PlatoUpdateWithoutRecetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutPlatosNestedInput
    ventas?: VentaDetalleUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateWithoutRecetaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    ventas?: VentaDetalleUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type IngredienteUpsertWithoutRecetasInput = {
    update: XOR<IngredienteUpdateWithoutRecetasInput, IngredienteUncheckedUpdateWithoutRecetasInput>
    create: XOR<IngredienteCreateWithoutRecetasInput, IngredienteUncheckedCreateWithoutRecetasInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutRecetasInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutRecetasInput, IngredienteUncheckedUpdateWithoutRecetasInput>
  }

  export type IngredienteUpdateWithoutRecetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoInventarioUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutRecetasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteCreateWithoutMovimientosInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutMovimientosInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemUncheckedCreateNestedManyWithoutIngredienteInput
    ordenItems?: OrdenCompraDetalleUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutMovimientosInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutMovimientosInput, IngredienteUncheckedCreateWithoutMovimientosInput>
  }

  export type IngredienteUpsertWithoutMovimientosInput = {
    update: XOR<IngredienteUpdateWithoutMovimientosInput, IngredienteUncheckedUpdateWithoutMovimientosInput>
    create: XOR<IngredienteCreateWithoutMovimientosInput, IngredienteUncheckedCreateWithoutMovimientosInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutMovimientosInput, IngredienteUncheckedUpdateWithoutMovimientosInput>
  }

  export type IngredienteUpdateWithoutMovimientosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutMovimientosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUncheckedUpdateManyWithoutIngredienteNestedInput
    ordenItems?: OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type VentaDetalleCreateWithoutVentaInput = {
    id?: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
    plato: PlatoCreateNestedOneWithoutVentasInput
  }

  export type VentaDetalleUncheckedCreateWithoutVentaInput = {
    id?: string
    platoId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleCreateOrConnectWithoutVentaInput = {
    where: VentaDetalleWhereUniqueInput
    create: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput>
  }

  export type VentaDetalleCreateManyVentaInputEnvelope = {
    data: VentaDetalleCreateManyVentaInput | VentaDetalleCreateManyVentaInput[]
    skipDuplicates?: boolean
  }

  export type VentaDetalleUpsertWithWhereUniqueWithoutVentaInput = {
    where: VentaDetalleWhereUniqueInput
    update: XOR<VentaDetalleUpdateWithoutVentaInput, VentaDetalleUncheckedUpdateWithoutVentaInput>
    create: XOR<VentaDetalleCreateWithoutVentaInput, VentaDetalleUncheckedCreateWithoutVentaInput>
  }

  export type VentaDetalleUpdateWithWhereUniqueWithoutVentaInput = {
    where: VentaDetalleWhereUniqueInput
    data: XOR<VentaDetalleUpdateWithoutVentaInput, VentaDetalleUncheckedUpdateWithoutVentaInput>
  }

  export type VentaDetalleUpdateManyWithWhereWithoutVentaInput = {
    where: VentaDetalleScalarWhereInput
    data: XOR<VentaDetalleUpdateManyMutationInput, VentaDetalleUncheckedUpdateManyWithoutVentaInput>
  }

  export type VentaCreateWithoutDetallesInput = {
    id?: string
    total: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    notas?: string | null
  }

  export type VentaUncheckedCreateWithoutDetallesInput = {
    id?: string
    total: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    notas?: string | null
  }

  export type VentaCreateOrConnectWithoutDetallesInput = {
    where: VentaWhereUniqueInput
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
  }

  export type PlatoCreateWithoutVentasInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoria: CategoriaCreateNestedOneWithoutPlatosInput
    receta?: RecetaItemCreateNestedManyWithoutPlatoInput
  }

  export type PlatoUncheckedCreateWithoutVentasInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
    categoriaId: string
    receta?: RecetaItemUncheckedCreateNestedManyWithoutPlatoInput
  }

  export type PlatoCreateOrConnectWithoutVentasInput = {
    where: PlatoWhereUniqueInput
    create: XOR<PlatoCreateWithoutVentasInput, PlatoUncheckedCreateWithoutVentasInput>
  }

  export type VentaUpsertWithoutDetallesInput = {
    update: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
    create: XOR<VentaCreateWithoutDetallesInput, VentaUncheckedCreateWithoutDetallesInput>
    where?: VentaWhereInput
  }

  export type VentaUpdateToOneWithWhereWithoutDetallesInput = {
    where?: VentaWhereInput
    data: XOR<VentaUpdateWithoutDetallesInput, VentaUncheckedUpdateWithoutDetallesInput>
  }

  export type VentaUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VentaUncheckedUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatoUpsertWithoutVentasInput = {
    update: XOR<PlatoUpdateWithoutVentasInput, PlatoUncheckedUpdateWithoutVentasInput>
    create: XOR<PlatoCreateWithoutVentasInput, PlatoUncheckedCreateWithoutVentasInput>
    where?: PlatoWhereInput
  }

  export type PlatoUpdateToOneWithWhereWithoutVentasInput = {
    where?: PlatoWhereInput
    data: XOR<PlatoUpdateWithoutVentasInput, PlatoUncheckedUpdateWithoutVentasInput>
  }

  export type PlatoUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoria?: CategoriaUpdateOneRequiredWithoutPlatosNestedInput
    receta?: RecetaItemUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateWithoutVentasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    receta?: RecetaItemUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type OrdenCompraDetalleCreateWithoutOrdenInput = {
    id?: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
    ingrediente: IngredienteCreateNestedOneWithoutOrdenItemsInput
  }

  export type OrdenCompraDetalleUncheckedCreateWithoutOrdenInput = {
    id?: string
    ingredienteId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleCreateOrConnectWithoutOrdenInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    create: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenCompraDetalleCreateManyOrdenInputEnvelope = {
    data: OrdenCompraDetalleCreateManyOrdenInput | OrdenCompraDetalleCreateManyOrdenInput[]
    skipDuplicates?: boolean
  }

  export type OrdenCompraDetalleUpsertWithWhereUniqueWithoutOrdenInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    update: XOR<OrdenCompraDetalleUpdateWithoutOrdenInput, OrdenCompraDetalleUncheckedUpdateWithoutOrdenInput>
    create: XOR<OrdenCompraDetalleCreateWithoutOrdenInput, OrdenCompraDetalleUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenCompraDetalleUpdateWithWhereUniqueWithoutOrdenInput = {
    where: OrdenCompraDetalleWhereUniqueInput
    data: XOR<OrdenCompraDetalleUpdateWithoutOrdenInput, OrdenCompraDetalleUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenCompraDetalleUpdateManyWithWhereWithoutOrdenInput = {
    where: OrdenCompraDetalleScalarWhereInput
    data: XOR<OrdenCompraDetalleUpdateManyMutationInput, OrdenCompraDetalleUncheckedUpdateManyWithoutOrdenInput>
  }

  export type OrdenCompraCreateWithoutDetallesInput = {
    id?: string
    estado?: string
    createdAt?: Date | string
  }

  export type OrdenCompraUncheckedCreateWithoutDetallesInput = {
    id?: string
    estado?: string
    createdAt?: Date | string
  }

  export type OrdenCompraCreateOrConnectWithoutDetallesInput = {
    where: OrdenCompraWhereUniqueInput
    create: XOR<OrdenCompraCreateWithoutDetallesInput, OrdenCompraUncheckedCreateWithoutDetallesInput>
  }

  export type IngredienteCreateWithoutOrdenItemsInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemCreateNestedManyWithoutIngredienteInput
    movimientos?: MovimientoInventarioCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteUncheckedCreateWithoutOrdenItemsInput = {
    id?: string
    nombre: string
    unidad: $Enums.UnidadMedida
    costoUnitario: Decimal | DecimalJsLike | number | string
    stockActual?: Decimal | DecimalJsLike | number | string
    stockMinimo?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    recetas?: RecetaItemUncheckedCreateNestedManyWithoutIngredienteInput
    movimientos?: MovimientoInventarioUncheckedCreateNestedManyWithoutIngredienteInput
  }

  export type IngredienteCreateOrConnectWithoutOrdenItemsInput = {
    where: IngredienteWhereUniqueInput
    create: XOR<IngredienteCreateWithoutOrdenItemsInput, IngredienteUncheckedCreateWithoutOrdenItemsInput>
  }

  export type OrdenCompraUpsertWithoutDetallesInput = {
    update: XOR<OrdenCompraUpdateWithoutDetallesInput, OrdenCompraUncheckedUpdateWithoutDetallesInput>
    create: XOR<OrdenCompraCreateWithoutDetallesInput, OrdenCompraUncheckedCreateWithoutDetallesInput>
    where?: OrdenCompraWhereInput
  }

  export type OrdenCompraUpdateToOneWithWhereWithoutDetallesInput = {
    where?: OrdenCompraWhereInput
    data: XOR<OrdenCompraUpdateWithoutDetallesInput, OrdenCompraUncheckedUpdateWithoutDetallesInput>
  }

  export type OrdenCompraUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCompraUncheckedUpdateWithoutDetallesInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredienteUpsertWithoutOrdenItemsInput = {
    update: XOR<IngredienteUpdateWithoutOrdenItemsInput, IngredienteUncheckedUpdateWithoutOrdenItemsInput>
    create: XOR<IngredienteCreateWithoutOrdenItemsInput, IngredienteUncheckedCreateWithoutOrdenItemsInput>
    where?: IngredienteWhereInput
  }

  export type IngredienteUpdateToOneWithWhereWithoutOrdenItemsInput = {
    where?: IngredienteWhereInput
    data: XOR<IngredienteUpdateWithoutOrdenItemsInput, IngredienteUncheckedUpdateWithoutOrdenItemsInput>
  }

  export type IngredienteUpdateWithoutOrdenItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUpdateManyWithoutIngredienteNestedInput
    movimientos?: MovimientoInventarioUpdateManyWithoutIngredienteNestedInput
  }

  export type IngredienteUncheckedUpdateWithoutOrdenItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    unidad?: EnumUnidadMedidaFieldUpdateOperationsInput | $Enums.UnidadMedida
    costoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockActual?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockMinimo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recetas?: RecetaItemUncheckedUpdateManyWithoutIngredienteNestedInput
    movimientos?: MovimientoInventarioUncheckedUpdateManyWithoutIngredienteNestedInput
  }

  export type PlatoCreateManyCategoriaInput = {
    id?: string
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activo?: boolean
    createdAt?: Date | string
  }

  export type PlatoUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receta?: RecetaItemUpdateManyWithoutPlatoNestedInput
    ventas?: VentaDetalleUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receta?: RecetaItemUncheckedUpdateManyWithoutPlatoNestedInput
    ventas?: VentaDetalleUncheckedUpdateManyWithoutPlatoNestedInput
  }

  export type PlatoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecetaItemCreateManyPlatoInput = {
    id?: string
    ingredienteId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleCreateManyPlatoInput = {
    id?: string
    ventaId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUpdateWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingrediente?: IngredienteUpdateOneRequiredWithoutRecetasNestedInput
  }

  export type RecetaItemUncheckedUpdateWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUncheckedUpdateManyWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUpdateWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    venta?: VentaUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type VentaDetalleUncheckedUpdateWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUncheckedUpdateManyWithoutPlatoInput = {
    id?: StringFieldUpdateOperationsInput | string
    ventaId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemCreateManyIngredienteInput = {
    id?: string
    platoId: string
    cantidad: Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioCreateManyIngredienteInput = {
    id?: string
    tipo: string
    cantidad: Decimal | DecimalJsLike | number | string
    motivo?: string | null
    createdAt?: Date | string
  }

  export type OrdenCompraDetalleCreateManyIngredienteInput = {
    id?: string
    ordenId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type RecetaItemUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plato?: PlatoUpdateOneRequiredWithoutRecetaNestedInput
  }

  export type RecetaItemUncheckedUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RecetaItemUncheckedUpdateManyWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type MovimientoInventarioUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovimientoInventarioUncheckedUpdateManyWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cantidad?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdenCompraDetalleUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    orden?: OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput
  }

  export type OrdenCompraDetalleUncheckedUpdateWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordenId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUncheckedUpdateManyWithoutIngredienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    ordenId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type VentaDetalleCreateManyVentaInput = {
    id?: string
    platoId: string
    cantidad: number
    precio: Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUpdateWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    plato?: PlatoUpdateOneRequiredWithoutVentasNestedInput
  }

  export type VentaDetalleUncheckedUpdateWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type VentaDetalleUncheckedUpdateManyWithoutVentaInput = {
    id?: StringFieldUpdateOperationsInput | string
    platoId?: StringFieldUpdateOperationsInput | string
    cantidad?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type OrdenCompraDetalleCreateManyOrdenInput = {
    id?: string
    ingredienteId: string
    cantidadSugerida: Decimal | DecimalJsLike | number | string
    cantidadFinal?: Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUpdateWithoutOrdenInput = {
    id?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ingrediente?: IngredienteUpdateOneRequiredWithoutOrdenItemsNestedInput
  }

  export type OrdenCompraDetalleUncheckedUpdateWithoutOrdenInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type OrdenCompraDetalleUncheckedUpdateManyWithoutOrdenInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredienteId?: StringFieldUpdateOperationsInput | string
    cantidadSugerida?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cantidadFinal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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