export interface TranslationResponse {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
}

export interface TranslateRequestBody {
  text: string;
  target_lang: "en" | "es" | "du";
}