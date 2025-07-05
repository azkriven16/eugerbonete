import { eq } from "drizzle-orm";
import { db } from "./index";
import { blogsTable } from "./schema";

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
