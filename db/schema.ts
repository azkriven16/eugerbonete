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

export const projectsTable = pgTable("projects", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    type: varchar({ length: 10 }).notNull(), // Add this line for type (frontend/backend)
    description: text().notNull(),
    summary: text().notNull(),
    created_at: timestamp().defaultNow(),
    image_url: varchar({ length: 255 }).notNull(),
    gallery: text().array().notNull(),
    github_url: varchar({ length: 255 }).notNull(),
    live_url: varchar({ length: 255 }).notNull(),
});

export type Project = typeof projectsTable.$inferSelect;
