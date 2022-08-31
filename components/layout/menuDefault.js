import React from 'react'
import HeaderLinks from "../../models/header/headerLinks";
import Link from "next/link";
import HeaderStyled from '../../styles/header/header.module.css';

const menuDefault = ({ open, nav__link,selected,cambiarClass_Y_Key }) => {
    return (
        /*En el style evaluamos el open si es false se oculta el menu*/
        <nav className={`${HeaderStyled.menu}`} open={open} style={{ right: (open ? "0" : "100%") }}>
            <ul>
                {HeaderLinks.map((links, key) => {
                    
                    return (
                        /*Definimos con el hook el li activo del menu*/
                        <li key={key} className={selected == key ? "nav__link" + nav__link : "nav__link" + !nav__link} 
                        onClick={() => cambiarClass_Y_Key(key)} >
                            <Link href={links.url} >
                                {links.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default menuDefault