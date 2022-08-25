import React from 'react';
import HeaderStyled from '../../styles/header/header.module.css';
import Link from "next/link";
import HeaderLinks from "../../models/links/headerLinks";

const Header = () => {
    return (
        <div>
            <nav className={HeaderStyled.menu}>
                <ul>
                    {HeaderLinks.map((links, key) => {
                        return (
                            <li key={key}>
                                <Link href={links.url} >
                                {links.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>

    )
}

export default Header