interface SpeechRecognitionResults {
  readonly length: number;
  [index: number]: {
    readonly length: number;
    [index: number]: {
      readonly transcript: string;
      readonly confidence: number;
    };
  };
}

interface SpeechRecognitionEvent extends Event {
  readonly results: SpeechRecognitionResults;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: () => void;
  onend: () => void;
  onerror: (event: unknown) => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  start: () => void;
  stop: () => void;
  abort: () => void;
}

interface Window {
  SpeechRecognition?: {
    new (): SpeechRecognition;
  };
  webkitSpeechRecognition?: {
    new (): SpeechRecognition;
  };
}