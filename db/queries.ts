import { eq } from "drizzle-orm";
import { db } from "./index";
import { blogsTable, projectsTable } from "./schema";

export async function getAllBlogs() {
    return await db.select().from(blogsTable).execute();
}

export async function getBlogById(id: number) {
    const [result] = await db
        .select()
        .from(blogsTable)
        .where(eq(blogsTable.id, id))
        .execute();
    return result;
}

export async function getAllProjects() {
    return await db.select().from(projectsTable).execute();
}

export async function getProjectById(id: number) {
    const [result] = await db
        .select()
        .from(projectsTable)
        .where(eq(projectsTable.id, id))
        .execute();
    return result;
}
