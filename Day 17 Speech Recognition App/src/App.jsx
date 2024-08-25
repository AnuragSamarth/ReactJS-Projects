import "./App.css";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  const startListing = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span className=" text-black">Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="container">
        <h2 className=" text-black">Speech to text Converter</h2>
        <p className=" text-black">
          React hook that converts speech from the micrephone to text and makes it available to your component.
        </p>
        <div>
        <div className="main-container w-full h-60 border-2 border-black mb-5 text-black">
          {transcript}
        </div>
        <div className="btn-style">
          <button className=" border-2 border-black text-black p-3 rounded-lg mr-3">copy</button>
          <button className="border-2 border-black text-black p-3 rounded-lg mr-3" onClick={startListing}>
            Start Lisening
          </button>
          <button className="border-2 border-black text-black p-3 rounded-lg" onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;