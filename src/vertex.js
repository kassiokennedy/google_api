import pkg from "@google-cloud/vertexai";
const { VertexAI } = pkg;

const vertex_ai = new VertexAI({
  project: "id do projeto",
  location: "location",
});

const model = "gemini-1.5-pro";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const textsi_1 = {
  text: `
  Aqui você coloca seu prompt para instruir o Gemini sobre o que extrair de informação da imagem.
  Uma dica é que se você precisar de uma resposta num formato de JSOn, basta montar a estrutura abaixo pois o Gemini é bem assertivo.
  {
    "chave" : "valor",
    "chave2 : [
      "chave3" : "valor2"
    ]
  }
  `,
};

const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    maxOutputTokens: 8192,
    temperature: 0,
    topP: 0.95,
  },
  systemInstruction: {
    parts: [textsi_1],
  },
});
const chat = generativeModel.startChat({});

async function sendMessage(message) {
  const streamResult = await chat.sendMessageStream(message);
  const x = (await streamResult.response).candidates[0].content.parts[0].text;
  return x;
}

export async function ReadImage(fileBase64) {
  const document1_1 = {
    inlineData: {
      mimeType: "image/png",
      data: fileBase64,
    },
  };
  try {
    const message = await sendMessage([textsi_1, document1_1]);
    return message;

    // O Gemini é muito assertivo, caso ele responda com o JSON que voce pediu, basta usar esta parte abaixo para extrair o conteudo do JSON.
    // const cleanedText = message.replace(/```json|```/g, "").trim();
    // return cleanedText;
  } catch (error) {
    console.error("Catch : ", error);
    throw new Error();
  }
}

//------------------------------------------------------------------------------
