import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);
const model = genAI.getGenerativeModel({
   model: "gemini-2.5-flash-preview-04-17",
   safetySettings: safetySettings, });

export const history: string[] = [];

export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    history.push(text);
    res.json({ response: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getHistory = (_req: Request, res: Response) => {
  res.json(history);
};
