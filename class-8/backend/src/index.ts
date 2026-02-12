import express, { type Request, type Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { type TranslationResponse, type TranslateRequestBody } from './types/deepl.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Esto permite que tu React (localhost:5173) se comunique con este servidor
app.use(express.json()); // Permite recibir JSON en el cuerpo de las peticiones

// Ruta de traducción
app.post('/translate', async (req: Request, res: Response): Promise<any> => {
  // Añadimos source_lang (puede venir o no)
  const { text, target_lang, source_lang } = req.body;
  const API_KEY = process.env.DEEPL_API_KEY;

  try {
    const params: any = {
      text: text,
      target_lang: target_lang
    };

    // Si el usuario eligió un idioma específico (y no "Detectar"), lo añadimos
    if (source_lang && source_lang !== 'auto') {
      params.source_lang = source_lang;
    }

    const response = await axios.post(
      'https://api-free.deepl.com/v2/translate',
      new URLSearchParams(params).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `DeepL-Auth-Key ${API_KEY}`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al traducir" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});