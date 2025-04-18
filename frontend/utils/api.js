// utils/api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:8000';  // backend URL

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${BASE_URL}/upload/`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });

  return response.data;
};

export const transcribeVideo = async (filename) => {
  const response = await axios.post(`${BASE_URL}/transcribe/`, { filename });
  return response.data;
};

export const summarizeText = async (transcription) => {
  const response = await axios.post(`${BASE_URL}/summarize/`, { transcription });
  return response.data;
};
