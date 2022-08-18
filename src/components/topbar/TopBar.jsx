import "./topbar.css"
{/**import { Link } from "react-router-dom"**/}


export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <a href="/" target=""><img className="topIconSagy" src={process.env.PUBLIC_URL + 'Sagy Logo.png'} alt="logo"/></a>
            </div>
            <div className="buttonResponsive">
                <button className="topListAhorremosButton"><a className="link"  href="https://wa.me/573243205821" target="_blank">Ahorremos</a></button>
            </div>
            <input type="checkbox" id="check"></input>
            <label for="check" className="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>
            
            <div className="secondSectionTop">
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/SoySagySect">Soy Sagy</Link>**/}
                            <a className="linkCenter" href="/#SectionSoySagy">Soy Sagy</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Cómo te ayudamos?</Link>**/}
                            <a className="linkCenter" href="/#SectionComoTeAyudo">¿Cómo te ayudamos?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Por qué elegirnos?</Link>**/}
                            <a className="linkCenter" href="/#SectionPorqueElegirme">¿Por qué elegirnos?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">Opiniones</Link>**/}
                            <a className="linkCenter" href="/#SectionOpiniones">Opiniones</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">¿Dudas?</Link>**/}
                            <a className="linkCenter" href="/#SectionDudas">¿Dudas?</a>
                        </li>
                        <li className="topListItem">
                            {/**<Link className="linkCenter" to="/">Hablemos</Link>**/}
                            <a className="linkCenter" href="/#SectionHablemos">Hablemos</a>
                        </li>
                    </ul>
                </div>
                <div className="topRight">{
                        <ul className="topListR">
                            <li className="topListItemRButton">
                                <button className="topListAhorremosButton"><a className="link"  href="https://wa.me/573243205821" target="_blank">Ahorremos</a></button>
                            </li>
                            <li className="topListItemR">
                                <a href="https://www.instagram.com/sagy.co/?igshid=YmMyMTA2M2Y%3D" target="_blank"><i className="topIcon fab fa-instagram"></i></a>
                                <a href="https://wa.me/573243205821" target="_blank"><i className="topIcon fab fa-whatsapp"></i></a>
                            </li>
                        </ul>
                    }
                </div>
            </div>
            
        </div>
    )
}
