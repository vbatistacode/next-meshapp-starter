import { sqliteTable, AnySQLiteColumn, text, integer, foreignKey } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const user = sqliteTable("user", {
	id: text("id").primaryKey().notNull(),
	name: text("name"),
	email: text("email").notNull(),
	emailVerified: integer("emailVerified"),
	image: text("image"),
});

export const computers = sqliteTable("computers", {
	id: text("id").primaryKey().notNull(),
	brand: text("brand").notNull(),
	cores: integer("cores").notNull(),
	userId: text("user_id").references(() => user.id, { onDelete: "cascade" } ),
});