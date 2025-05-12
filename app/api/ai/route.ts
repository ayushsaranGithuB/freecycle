import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const config = {
    responseMimeType: 'application/json',
};
const model = 'gemini-2.0-flash-lite';

export async function POST(req: NextRequest) {
    const session = await auth();
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let prompt: string;
    try {
        const body = await req.json();
        prompt = body.prompt;
        if (typeof prompt !== "string" || !prompt.trim()) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }
    } catch {
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    try {
        const response = await ai.models.generateContent({
            model: model,
            config: config,
            contents: prompt,
        });
        // Extract the text from the Gemini response
        const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
        let result;
        if (typeof text === "string") {
            try {
                result = JSON.parse(text);
            } catch {
                result = text;
            }
        } else {
            result = text;
        }
        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
    }
}

//   "disclaimer": "These prices are estimates only and may vary based on factors such as included accessories, specific model, seller reputation, and current market conditions. The prices are based on a hypothetical example and may not be directly applicable to any real-world product. Please verify pricing with multiple sources before making a purchase or sale."