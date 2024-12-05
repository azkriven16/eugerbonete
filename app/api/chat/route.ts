import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export async function POST(req: Request) {
    const { messages, systemPrompt, model } = await req.json();

    const botResponse = await streamText({
        model: google("gemini-1.5-flash"),
        system:
            systemPrompt ||
            `You are a chatbot AI assistant. You must:
- Politely decline to discuss any topics outside of our services.
- Maintain a friendly, professional tone.
- Keep responses concise and focused on solving customer inquiries.
- Keep responses to 20 words or less, but go to up to a maximum of 50 words if you are explaining something or need to in order to answer a query.`,
        messages,
    });

    return botResponse.toDataStreamResponse();
}
