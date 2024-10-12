

const getChatCompletion = async(userMessage) => {
    const url = "https://api.groq.com/openai/v1/chat/completions";
    const headers = {
      "Authorization": `Bearer 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`,
      "Content-Type": "application/json"
    };
  
    const body = JSON.stringify({
      messages: [
        {
          role: "user",
          content: userMessage
        }
      ],
      model: "llama3-8b-8192"
    });
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data.choices[0].message.content)
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error:', error);
    }
  }

export default getChatCompletion;
  

