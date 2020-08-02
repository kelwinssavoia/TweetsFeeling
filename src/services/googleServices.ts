import axios from 'axios';

import {GoogleDocument, AnalyzeSentiment} from '../interfaces/Google';

const instance = axios.create({
  baseURL: 'https://language.googleapis.com/v1beta2/',
  timeout: 10000,
});

export const analyzeSentiment = (document: GoogleDocument) => {
  return instance.post<AnalyzeSentiment>(
    'documents:analyzeSentiment',
    {
      document,
    },
    {
      params: {
        key: 'AIzaSyBFs1sMBo1Fl-p-djVyaK5QhsqtdjnciS4',
      },
    },
  );
};
