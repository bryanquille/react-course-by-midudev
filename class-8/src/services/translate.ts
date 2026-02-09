export const translateText = async (text: string, targetLang: string) => {
  const API_KEY = import.meta.env.VITE_DEEPL_API_KEY;
  const url = "https://api-free.deepl.com/v2/translate";

  const params = new URLSearchParams();
  params.append("auth_key", API_KEY);
  params.append("text", text);
  params.append("target_lang", targetLang);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    console.error("Error al traducir:", error);
  }
}