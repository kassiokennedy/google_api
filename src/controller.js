import { ReadImage } from "./vertex.js";

export async function Controller(prompt, fileBase64) {
  const path = "./src/.../nome_do_arquivo.jpg";
  try {
    // extrair de arquivo local ---------------------------------------------------
    // const base64DataInput = await convertToBase64(path);
    // const responseVertex = await ReadImage(prompt, base64DataInput);

    // extrair da requisição ---------------------------------------------------
    const responseVertex = await ReadImage(prompt, fileBase64);
    console.log("Dados extraídos da imagem:\n", responseVertex);

    return responseVertex;
  } catch (error) {
    console.error("Error BeepController:", error);
    throw new Error();
  }
}
