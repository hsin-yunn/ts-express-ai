import { GoogleGenAI } from "@google/genai";
// const { GoogleGenAI } = require("@google/genai");
import type { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const GEMINI_API_KEY = process.env.API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export const generateResponse = async (req: Request, res: Response) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: "Why is the sky blue? 請回答中文",
    });
    res.status(200).json({ message: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
