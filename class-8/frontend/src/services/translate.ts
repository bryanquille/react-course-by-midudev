export const translate = async (
  text: string,
  fromLanguage: string,
  toLanguage: string,
  signal?: AbortSignal | null | undefined
) => {
  try {
    const response = await fetch("http://localhost:3000/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        target_lang: toLanguage,
        source_lang: fromLanguage // Enviamos 'auto' o el código del idioma (ES, EN, FR...)
      }),
      signal
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const data = await response.json();
    return data.translations[0].text;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.log('Fetch abortado');
    }
    console.error("Error al conectar con el backend:", error);
    return "Error al traducir";
  }
};