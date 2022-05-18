import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <img className="topIconSagy" src={process.env.PUBLIC_URL + 'Sagy Logo.png'} alt="logo"/>  
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/SoySagySect">Soy Sagy</Link>**/}
                        <a className="linkCenter" href="#SectionSoySagy">Soy Sagy</a>
                    </li>
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/">¿Cómo te ayudamos?</Link>**/}
                        <a className="linkCenter" href="#SectionComoTeAyudo">¿Cómo te ayudamos?</a>
                    </li>
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/">¿Por qué elegirnos?</Link>**/}
                        <a className="linkCenter" href="#SectionPorqueElegirme">¿Por qué elegirnos?</a>
                    </li>
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/">Opiniones</Link>**/}
                        <a className="linkCenter" href="#SectionOpiniones">Opiniones</a>
                    </li>
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/">¿Dudas?</Link>**/}
                        <a className="linkCenter" href="#SectionDudas">¿Dudas?</a>
                    </li>
                    <li className="topListItem">
                        {/**<Link className="linkCenter" to="/">Hablemos</Link>**/}
                        <a className="linkCenter" href="#SectionHablemos">Hablemos</a>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    <ul className="topListR">
                        <li className="topListItemR">
                            <button className="topListAhorremosButton"><Link className="link" to="/">Ahorremos</Link></button>
                        </li>
                        <li className="topListItemR">
                            <i className="topIcon fab fa-instagram"></i>
                            <i className="topIcon fab fa-whatsapp"></i>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}
