# backend/utils.py

import whisper
import openai
import os

# Load Whisper model
whisper_model = whisper.load_model("small")  # Choose 'base', 'small', 'medium', 'large'

# Transcribe video file
def transcribe_video(video_path):
    result = whisper_model.transcribe(video_path)
    return result["text"]

# Summarize transcription into SOP
def summarize_text(text):
    openai.api_key = os.getenv("sk-...jZ4A")  # You need to set your API key as an env variable

    prompt = f"""
    You are a professional SOP (Standard Operating Procedure) creator.
    Given the following transcription of a recorded video, generate a clear, step-by-step SOP.

    Transcript:
    {text}

    SOP:
    """

    response = openai.ChatCompletion.create(
        model="gpt-4",  # or "gpt-3.5-turbo" if you want cheaper
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.2,
    )

    sop = response["choices"][0]["message"]["content"]
    return sop
