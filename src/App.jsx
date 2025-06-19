import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Timer } from './Timer'

function App() {
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!load) return

    const intervalo = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [load]);

  const handleLoad = () => {
    setLoad(true);
    setTimeout(() => setVisible(true), 50);
  };

  return (
    <>
      {!load &&
        <div>
          <button onClick={handleLoad} className='bg-rose-400 text-white rounded-xl p-4 font-bold hover:bg-rose-300 '>Ver tiempo restante</button>
        </div>
      }
      {load && (
        <div
          className={
            `bg-rose-400 rounded-xl p-8 shadow-lg text-center transform transition-all duration-500 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
          }
        >
          <h1 className="font-rampart text-4xl md:text-5xl mb-6 text-black font-bold drop-shadow-md">
            Verano, vereno, verano...
          </h1>
          <Timer />
          <audio ref={audioRef} src="/manecilla-reloj.mp3" preload="auto" />
        </div>
      )}

    </>

  )
}

export default App
