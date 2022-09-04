import React from 'react'
import HeaderLinks from "../../models/header/headerLinks";
import { Link } from 'react-scroll'
import HeaderStyled from '../../styles/header/header.module.css';
import CerrarMenu from "../../hooks/headerMenu/menuMobile";

const MenuDefault = ({ open,handleClick}) => {

    const menu=CerrarMenu();
    return (
        /*En el style evaluamos el open si es false se oculta el menu*/
        <nav className={`${HeaderStyled.menu}`} open={open} style={{ right: (open ? "0" : "100%") }}  ref={menu}>
            <ul>
                {HeaderLinks.map((links, key) => {

                    return (
                        /*Definimos con el hook el li activo del menu*/
                        <li key={key}>
                            <Link
                                to={links.url}
                                spy={true}
                                spyThrottle={500}
                                smooth={true}
                                duration={500}
                                className="link"
                                activeClass="active"
                                offset={-100}
                                absolute={true}
                                hashSpy={true}
                                onClick={()=>{menu.current.style.right ="100%";handleClick()}}
                                isDynamic={true}
                            >
                                {links.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default MenuDefault
