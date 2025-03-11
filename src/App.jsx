import { useState, useRef, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Webcam from "react-webcam";
import uploadFile from "./api/FacialExpression"


const App = () => {
  const webcamRef = useRef(null);
  
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      uploadFile(imageSrc);
    },
    [webcamRef]
  );
  
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        style={{width: 100, height: 100, position: 'absolute', opacity: 0, zIndex:-1}}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default App