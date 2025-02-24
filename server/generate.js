// import openaiClient from './api.js'

// const generate = async (queryDescription) => {
//     const response = await openaiClient.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescription}`,
//         max_tokens: 100,
//         temprature: 10
//     })
//     return response.data.choices[0].text
// }

// export default generate;
import model from './api.js'

const generate = async (queryDescription) => {
    const prompt = `Convert the natural language to a sql query: "${queryDescription}. 
    Assume the database has relevant tables with proper columns. Return only the SQL query without explanation`;
    const result = await model.generateContent(prompt);
    // const response = result.response.text;
    // return result.response?.candidates?.[0]?.content?.parts?.[0]?.text;
    return result. response.text();
}

export default generate;
