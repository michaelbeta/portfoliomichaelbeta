import React from 'react'
import HeaderLinks from "../../models/header/headerLinks";
import Link from "next/link";
import HeaderStyled from '../../styles/header/header.module.css';

const menuDefault = ({ open }) => {
    return (
        /*En el style evaluamos el open si es false se oculta el menu*/
        <nav className= {`${HeaderStyled.menu}`} open={open} style={{ right: (open ? "0" : "-100%")}}>
            <ul>
                {HeaderLinks.map((links, key) => {
                    return (
                        <li key={key} className={HeaderStyled.nav__link}>
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