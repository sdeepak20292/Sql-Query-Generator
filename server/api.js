
// import  OpenAIApi  from "openai";
// import Configuration from 'openai';
// // const { Configuration } = Configuration;
// import dotenv from "dotenv";
// dotenv.config();

// const openaiApiKey = process.env.OPENAI_API_KEY;

// if (!openaiApiKey) {
//   console.error('OPENAI_API_KEY is not set.');
//   process.exit(1);
// }

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default openai;
// import GoogleGenerativeAI from "@google/generative-ai"
import  { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const geminiConfig = {
//     temperature: 0.9,
//     maxOutputTokens: 100
//   };
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);

export default model;