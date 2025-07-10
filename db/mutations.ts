import { db } from ".";
import { messagesTable } from "./schema";

export async function createMessage(
    content: string,
    name: string,
    email: string
) {
    const result = await db.insert(messagesTable).values({
        message: content,
        name: name,
        email: email,
        created_at: new Date(),
    });
    return result;
}
