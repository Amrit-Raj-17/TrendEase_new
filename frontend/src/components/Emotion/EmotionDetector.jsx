import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';

const EmotionDetector = () => {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState('Loading...');
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const navigate = useNavigate();

  // Load models
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
        setModelsLoaded(true);
        console.log('✅ Models loaded');
      } catch (err) {
        console.error('❌ Failed to load models:', err);
        setEmotion('Error loading models');
      }
    };

    loadModels();
  }, []);

  // Detect emotion and navigate
  const detectEmotion = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4 &&
      modelsLoaded
    ) {
      const video = webcamRef.current.video;
      const detections = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections && detections.expressions) {
        const sorted = Object.entries(detections.expressions).sort(
          (a, b) => b[1] - a[1]
        );
        const topEmotion = sorted[0][0];
        setEmotion(topEmotion);
        
        setTimeout(() => {
          navigate(`/collection?emotion=${topEmotion}`);
        }, 5000);
      } else {
        setEmotion('No face detected');
      }
    } else {
      setEmotion('Webcam or models not ready');
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-blue-700">🎭 Emotion Detection</h1>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        className="mx-auto my-4 rounded shadow"
        width={400}
        height={300}
      />
      <button
        onClick={detectEmotion}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Detect Emotion
      </button>
      <p className="mt-4 text-lg">
        <strong>Detected Emotion:</strong> {emotion}
      </p>
    </div>
  );
};

export default EmotionDetector;
