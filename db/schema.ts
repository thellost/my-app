
import { serial, pgTable, varchar, timestamp, doublePrecision} from "drizzle-orm/pg-core";
export const customerTable = pgTable("customers", {
  customer_id: serial().primaryKey(),
  firstname: varchar({ length: 50 }).notNull(),
  lastname: varchar({ length: 50 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits: doublePrecision().default(0),
  createdAt: timestamp().notNull().defaultNow(),
  updateAt: timestamp().notNull().defaultNow().$onUpdate(() => new Date())

});