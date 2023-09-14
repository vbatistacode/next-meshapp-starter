import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";
import { user } from "./auth";

export const computers = sqliteTable("computers", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => nanoid()),
  brand: text("brand").notNull(),
  cores: integer("cores").notNull(),
  user: text("user_id").references(() => user.id, { onDelete: "cascade" }),
});

// Schema for CRUD - used to validate API requests
export const insertComputerSchema = createInsertSchema(computers);
export const selectComputerSchema = createSelectSchema(computers);
export const computerIdSchema = selectComputerSchema.pick({ id: true });
export const updateComputerSchema = selectComputerSchema;

export type Computer = z.infer<typeof selectComputerSchema>;
export type NewComputer = z.infer<typeof insertComputerSchema>;
export type ComputerId = z.infer<typeof computerIdSchema>["id"];
