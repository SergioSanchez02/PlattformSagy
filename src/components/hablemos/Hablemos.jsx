import React from 'react'
import './hablemos.css'
import { Link } from "react-router-dom"

export default function Hablemos() {
  return (
    <div className='containerHablemos' id="SectionHablemos">
        <a></a>
        <div className='leftHablemos'>
            <img className="imgSagyTalk" src={process.env.PUBLIC_URL + 'SagyHablemos.png'} alt="SagyTalk.png"/>
        </div>
        <div className='rigthHablemos'>
            <h1 className='mainHeaderHablemos'>Hablemos</h1>
            <p className='bodyHablemos'>Cada mes que pasas sin revisar tu factura de servicios públicos es una oportunidad de ahorro que se pierde. No lo pienses más y empieza a ahorrar con Sagy.</p>
            <button className="buttonSagyHablemos"><Link className="link" to="/"><img className="wpp" src={process.env.PUBLIC_URL + 'Wpp.png'}></img>Haz click aquí</Link></button>
        </div>
    </div>
  )
}
