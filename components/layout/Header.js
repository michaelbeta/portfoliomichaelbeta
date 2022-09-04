import React from 'react';
import HeaderStyled from '../../styles/header/header.module.css';
import LogoN from "../../public/logoNavegacion.svg"
import MenuBar from "../../hooks/headerMenu/MenuBar";
import MenuButton from "./MenuButton.js";
import MenuDefault from "./MenuDefault.js";
import Link from "next/link";

const Header = () => {

    const [open, handleClick] = MenuBar();

    return (
        <header className={`${HeaderStyled.header} navbar`}>
            <Link href='/home'>
                <a className={HeaderStyled.logo}>
                    <LogoN />
                </a>
            </Link>

            <MenuDefault open={open} handleClick={handleClick}/>
            <MenuButton open={open} handleClick={handleClick} />
        </header>

    )
}

export default Header