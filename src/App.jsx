
import { Footer } from './components/Footer'
import { Heroe } from './widgets/HeroeItems/Heroe'
import { Slider } from './widgets/Slider/Slider'
import { ConteoPersonas } from './widgets/ConteoPersonas'
import { Planes } from './widgets/Planes'
import { Recomended } from './widgets/Recomended'
import { Servicios } from './widgets/Servicios'
import { useEffect, useState } from 'react'
import ags from './img/ags.png'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Carga durante 3 segundos

    return () => clearTimeout(timer); // Limpiar el timer al desmontar
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 border-t-transparent"><img src={ags} alt="" /></div>
        </div>
      ) : (
        <div>
          <Heroe />
          <Slider />
          <Servicios />
          <Planes />
          <ConteoPersonas />
          <Recomended />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
