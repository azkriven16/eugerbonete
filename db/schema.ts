import {
    integer,
    pgTable,
    varchar,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const blogsTable = pgTable("blogs", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    created_at: timestamp().defaultNow(),
    author_email: varchar({ length: 255 }).notNull(),
});
