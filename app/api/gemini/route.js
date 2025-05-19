import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(request) {
    if (!process.env.GOOGLE_API_KEY) {
        return Response.json(
            { error: 'API key not configured' },
            { status: 500 }
        );
    }

    try {
        const { prompt } = await request.json();
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

        const promptText = `Generate the recipe for ${prompt} in a JSON format with a single key 'recipe'. The value of 'recipe' should be a single array of strings, where each string represents an ingredient and its quantity. If the recipe has multiple components, please indicate the component name at the beginning of the ingredient string (e.g., 'Filling: 1 cup lentils'). If the recipe has only one component, do not include the component name in the ingredient strings. and only provide json response nothing else. If item is unrecognizable, please say 'Dish Name is Invalid'.`;

        const result = await model.generateContent(promptText);
        const response = await result.response;
        const text = response.text();

        // Extract the first JSON object from the response, even if extra text is present
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) {
            throw new Error('No JSON object found in response');
        }
        const jsonString = match[0];

        try {
            const jsonResponse = JSON.parse(jsonString);
            // Accept { recipe: [...] } and convert to { ingredients: [...], instructions: [] }
            if (jsonResponse.recipe) {
                return Response.json({ ingredients: jsonResponse.recipe, instructions: [] });
            } else if (jsonResponse.ingredients && jsonResponse.instructions) {
                return Response.json(jsonResponse);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (parseError) {
            console.error('Failed to parse AI response:', parseError, jsonString);
            return Response.json(
                { error: 'Failed to generate recipe format' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('API Error:', error);
        return Response.json(
            { error: error.message || 'Failed to process request' },
            { status: 500 }
        );
    }
}