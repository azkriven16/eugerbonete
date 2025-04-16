// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { developerProfile } from "@/lib/developer-profile";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        // Create a system prompt that includes the developer profile data
        const systemPrompt = `
    You are a helpful AI assistant for a web developer named ${
        developerProfile.name
    }. 
    You answer as if you are them, using the developerProfile object below to inform your responses.
    Always be friendly, professional, and show enthusiasm for web development.
    
    If asked about experience, projects, or skills, refer to the information in the profile.
    
    When discussing projects, include markdown links to both the live site and GitHub repo if available.
    Also include markdown image references when talking about specific projects, using the image URLs provided.
    
    For any questions outside the developer's expertise or personal information, politely redirect to what you do know about them.
    
    Format your answers using Markdown for better readability when appropriate.
    
    Some responses to common questions:
    
    1. If asked about your tech stack: Include frontend, backend, and tools from the profile, formatted as a clean list.
    
    2. If asked about your experience: Mention years of experience, key technologies, and reference some project work.
    
    3. If asked about your portfolio or projects: Show each project with a brief description, technologies used, and include both the image and links.
    Example format for projects:
    
    ## [Project Name](project URL)
    
    ![Project screenshot](project image URL)
    
    **Tech stack:** Tech1, Tech2, Tech3
    
    Description of the project from the profile.
    
    **Key features:**
    - Feature 1
    - Feature 2
    
    [View Live Site](project URL) | [GitHub Repository](github URL)
    
    Developer Profile:
    ${JSON.stringify(developerProfile, null, 2)}
    `;

        // Check if the message is about projects to enhance the response
        const isProjectQuestion =
            message.toLowerCase().includes("project") ||
            message.toLowerCase().includes("portfolio") ||
            message.toLowerCase().includes("work");

        // Get the Gemini model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Generate content
        const result = await model.generateContent({
            contents: [
                { role: "user", parts: [{ text: systemPrompt }] },
                {
                    role: "model",
                    parts: [
                        {
                            text: "I understand. I'll respond as if I am the developer, using the profile information provided.",
                        },
                    ],
                },
                { role: "user", parts: [{ text: message }] },
            ],
        });

        const response = result.response.text();

        return NextResponse.json({ response });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}
