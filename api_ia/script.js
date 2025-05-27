async function sendToGeminiAndMistral() {
    const inputText = document.getElementById('inputText').value;
    const responseContainer = document.getElementById('responseContainer');
    const loader = document.getElementById('loader');

    const geminiApiKey = "AIzaSyBaWo6ZC_Pr4dLNhfr5i-6esmurRYVwmUs";
    const mistralApiKey = "jjIzFVUxCjNg3ley40mrggYAek6qyAZl";

    if (!inputText.trim()) {
        responseContainer.textContent = "Por favor, ingresa algún texto.";
        return;
    }

    responseContainer.textContent = "";
    loader.style.display = 'block';

    // GEMINI 
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;
    const geminiRequest = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: inputText }] }]
        })
    };

    // MISTRAL
    const mistralUrl = "https://api.mistral.ai/v1/chat/completions";
    const mistralRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mistralApiKey}`
        },
        body: JSON.stringify({
            model: "mistral-small",
            messages: [{ role: "user", content: inputText }],
            temperature: 0.7
        })
    };

    try {
        
        const [geminiRes, mistralRes] = await Promise.all([
            fetch(geminiUrl, geminiRequest),
            fetch(mistralUrl, mistralRequest)
        ]);

        const geminiData = await geminiRes.json();
        const mistralData = await mistralRes.json();

        loader.style.display = 'none';

        let geminiOutput = "", mistralOutput = "";

        if (geminiRes.ok && geminiData?.candidates?.[0]?.content?.parts?.[0]?.text) {
            geminiOutput = geminiData.candidates[0].content.parts[0].text;
        } else {
            geminiOutput = `Error de Gemini: ${geminiData?.error?.message || "Respuesta no válida."}`;
        }

        if (mistralRes.ok && mistralData?.choices?.[0]?.message?.content) {
            mistralOutput = mistralData.choices[0].message.content;
        } else {
            mistralOutput = `Error de Mistral: ${mistralData?.error?.message || "Respuesta no válida."}`;
        }

        responseContainer.innerHTML = `
            <h3>Respuesta de Gemini:</h3>
            <p>${geminiOutput}</p>
            <h3>Respuesta de Mistral:</h3>
            <p>${mistralOutput}</p>
        `;

    } catch (error) {
        loader.style.display = 'none';
        console.error("Error general:", error);
        responseContainer.textContent = "Ocurrió un error al conectar con las APIs.";
    }
}