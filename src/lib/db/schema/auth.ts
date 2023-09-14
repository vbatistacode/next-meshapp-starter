import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { nanoid } from "nanoid";
import { z } from "zod";

export const user = sqliteTable("User", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => nanoid()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  password: text("password").notNull(),
});

// Schema for CRUD - used to validate API requests
export const insertUserSchema = createInsertSchema(user);
export const selectUserSchema = createSelectSchema(user);
export const userIdSchema = selectUserSchema.pick({ id: true });
export const updateUserSchema = selectUserSchema;

export type User = z.infer<typeof selectUserSchema>;
export type NewUser = z.infer<typeof insertUserSchema>;
export type UserId = z.infer<typeof userIdSchema>["id"];
