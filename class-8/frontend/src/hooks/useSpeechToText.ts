import { useState, useEffect, useCallback, useRef } from 'react';

export const useSpeechToText = (lang: string) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  // 1. Mantenemos el Ref para la instancia
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // 2. Usamos un Effect para la creación (esto ocurre FUERA del render)
  useEffect(() => {
    // Si ya existe la instancia, no hacemos nada
    if (recognitionRef.current) return;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const instance = new SpeechRecognition();
      instance.continuous = false;
      instance.interimResults = false;
      recognitionRef.current = instance;
    }
  }, []); // Solo se ejecuta una vez al montar

  // 3. Otro Effect para configurar el idioma y los eventos
  useEffect(() => {
    // Acceso seguro al ref dentro de un Effect
    const recognition = recognitionRef.current;
    if (!recognition) return;

    recognition.lang = lang;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
    };

    return () => {
      if (recognition) {
        recognition.onstart = () => { };
        recognition.onend = () => { };
        recognition.onresult = () => { };
        recognition.onerror = () => { };
      }
    };
  }, [lang]);

  const startListening = useCallback(() => {
    // Acceso seguro al ref dentro de un Callback (evento)
    if (recognitionRef.current) {
      setTranscript('');
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error("Error al iniciar:", e);
      }
    }
  }, []);

  const resetTranscript = useCallback(() => {
  setTranscript('');
}, []);

  return { isListening, transcript, startListening, resetTranscript };
};