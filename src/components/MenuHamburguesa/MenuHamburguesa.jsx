import {useState} from "react";
import "./menuHamburguesa.css";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuHamburguesa = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}

            </div>
            <nav className={`menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="/inicio">Inicio</a></li>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/tecnicos">Tecnicos</a></li>
                    <li><a href="/cursos">Cursos</a></li>
                    <li><a href="/campusVirtual">Campus Virtual</a></li>
                    <li><a href="/noticias">Noticias</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuHamburguesa