const gptPrompt = args[0];

const request = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: gptPrompt }],
    temperature: 0
}

const openAIResponse = await Functions.makeHttpRequest({
    url: "https://api.openai.com/v1/chat/completions",
    method: "POST",
    headers: {
        Authorization: `Bearer ${secrets.apiKey}`,
        "Content-Type": "application/json"
    },
    data: request
});

if(openAIResponse.error) {
    throw new Error(JSON.stringify(openAIResponse));
}

const result = openAIResponse.data.choices[0].message.content;
console.log(result);
return Functions.encodeString(result);