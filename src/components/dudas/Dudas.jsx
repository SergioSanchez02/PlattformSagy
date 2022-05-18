import React from 'react'
import './dudas.css'

export default function Dudas() {
  return (
    <div className='dudas' id="SectionDudas">
        <div className='leftDudas'>
            <div className='headerDudas'>
                <h1 className='mainHeaderDudas'>¿Dudas?</h1>
                <h2 className='secondHeaderDudas'>Aquí te ayudamos a resolverlas</h2>
            </div>
            <ul className='mainListDudas'> 
                <ul className='firstListDudas'>
                        
                    <input type='hidden' id='btn'></input>
                    <li className='firstListitem1'>
                        <div className='headDudas'>
                            <a>¿Puedo inscribir cualquier tipo <br/>de establecimiento?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                            
                        </div>
                        <ul className='subListFirstItem1'>
                            <li>Sí. Puedes registrar tu empresa o la<br/>empresa en donde trabajas, tu casa,<br/>apartamento, finca o local comercial<br/>propio o arrendado.</li>
                        </ul>
                    </li>
                    
                    <li className='firstListitem3'>
                        <div className='headDudas'>
                            <a>¿Cuánto vale el servicio de <br/>Sagy?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirstItem3'>
                            <li>Trabajamos por resultados. Nuestra<br/>remuneración corresponde al 40% del<br/>ahorro que te generemos. Es decir, con<br/>el mismo ahorro tú nos recompensas.</li>
                        </ul>
                    </li>
                    
                    <li className='firstListitem5'>
                        <div className='headDudas'>
                            <a>¿Cuántas facturas puedo <br/>inscribir?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirsttem5'>
                            <li>Puedes inscribir tantas facturas como desees.</li>
                        </ul>
                    </li>

                    <li className='secondListitem7'>
                        <div className='headDudas'>
                            <a>¿Cuándo debo pagar a Sagy <br/>por su servicio?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListFirstItem7'>
                            <li>Cuando veas reflejado el ahorro<br/>directamente en tu factura de servicios<br/>públicos. Te mostraremos todas las<br/>evidencias de que tu ahorro se debe a<br/>nuestra labor.</li>
                        </ul>
                    </li>
                    
                </ul>
                <ul className='secondListDudas'>
                    <li className='secondListitem1'>
                        <div className='headDudas'>
                            <a>¿Cómo puedo hacer la <br/>inscripción de mi factura?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem1'>
                            <li>Ingresa a www.sagy.com.co/ahorro</li>
                        </ul>
                    </li>
                    <li className='secondListitem2'>
                        <div className='headDudas'>
                            <a>¿Tengo que inscribir mi factura<br/>cada mes?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem2'>
                            <li>No. La inscripción se hace una única vez.</li>
                        </ul>
                    </li>
                    <li className='secondListitem3'>
                        <div className='headDudas'>
                            <a>¿Tengo que pagar para inscribir <br/>mi factura?</a>
                            <div>
                                <img className="imgSignalDudas" src={process.env.PUBLIC_URL + 'SignalDudas.png'} alt="SignalDudas.png"/>
                            </div>
                        </div>
                        <ul className='subListSecondItem3'>
                            <li>No. El proceso de inscripción es totalmente gratuito.</li>
                        </ul>
                    </li>
                </ul>
            </ul>
            
        </div>
        <div className='rigthDudas'>
            <img className="imgSagyDudas" src={process.env.PUBLIC_URL + 'SagyDudas.png'} alt="SagyDudas.png"/>
        </div>
    </div>
  )
}
