import SoySagy from '../components/soysagy/SoySagy'
import ComoTeAyudo from '../components/comoteayudo/ComoTeAyudo'
import PorqueElegirme from '../components/porqueelegirme/PorqueElegirme'
import './home.css'
import Opiniones from '../components/opiniones/Opiniones'
import Dudas from '../components/dudas/Dudas'
import Hablemos from '../components/hablemos/Hablemos'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
    <>
        <div className="home">
            <SoySagy/>
            <ComoTeAyudo/>
            <PorqueElegirme/>
            <Opiniones/>
            <Dudas/>
            <Hablemos/>
            <Footer/>
          </div>
    </>
  )
}
