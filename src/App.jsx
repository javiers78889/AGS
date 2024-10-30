
import { Footer } from './components/Footer'
import { Heroe } from './widgets/HeroeItems/Heroe'
import { Slider } from './widgets/Slider/Slider'
import { ConteoPersonas } from './widgets/ConteoPersonas'
import { Planes } from './widgets/Planes'
import { Recomended } from './widgets/Recomended'
import { Servicios } from './widgets/Servicios'


function App() {

  return (
    <>
     <Heroe/>
     <Slider/>
     <Servicios/>
     <Planes/>
     <ConteoPersonas/>
     <Recomended/>
     <Footer/>
    </>
  )
}

export default App
