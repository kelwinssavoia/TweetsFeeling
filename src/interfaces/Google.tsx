export interface GoogleDocument {
  type: string;
  language: string;
  content: string;
}

export interface AnalyzeSentiment {
  documentSentiment: DocumentSentiment;
  language: string;
  sentences: Sentence[];
}

interface Sentence {
  text: Text;
  sentiment: DocumentSentiment;
}

interface Text {
  content: string;
  beginOffset: number;
}

interface DocumentSentiment {
  magnitude: number;
  score: number;
}
