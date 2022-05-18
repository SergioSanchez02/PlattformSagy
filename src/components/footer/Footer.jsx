import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='containerFooter'>
      <div className='leftFooter'>
        <img className="imgSagyFooter" src={process.env.PUBLIC_URL + 'SagyFooter.png'} alt="SagyLogoWhite.png"/>
      </div>
      <div className='centerFooter'>
          <h3 className='mainTyCFooter'>Terminos y condiciones</h3>
          <h3 className='secondTyCFooter'>Tratamiento de datos personales</h3>
          <h3 className='lastTyCFooter'>Derechos reservados Futturing 2022</h3>
      </div>
      <div className='rigthFooter'>
          <h2 className='msjFooter'>Sigamos conectados </h2>
          <img className="imgFooterInstagram" src={process.env.PUBLIC_URL + 'InsFooter.png'} alt="IgLogoFooter.png"/>
          <img className="imgFooterWpp" src={process.env.PUBLIC_URL + 'FooterWpp.png'} alt="WppLogoFooter.png"/>
      </div>
    </div>
  )
}
