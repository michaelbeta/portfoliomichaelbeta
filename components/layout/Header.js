import React from 'react';
import HeaderStyled from '../../styles/header/header.module.css';
import LogoN from "../../public/logoNavegacion.svg"
import MenuBar from "../../hooks/headerMenu/MenuBar";
import Menu from "../../hooks/headerMenu/Menu";
import MenuButton from "./MenuButton.js";
import MenuDefault from "./MenuDefault.js";
import Link from "next/link";

const Header = () => {

    const [open, handleClick] = MenuBar();
    const [nav__link, selected, cambiarClass_Y_Key] = Menu();

    return (
        <header className={`${HeaderStyled.header} navbar`}>
            <Link href='/home'>
                <a className={HeaderStyled.logo}>
                    <LogoN />
                </a>
            </Link>

            <MenuDefault open={open} nav__link={nav__link} selected={selected} cambiarClass_Y_Key={cambiarClass_Y_Key} />
            <MenuButton open={open} handleClick={handleClick} />
        </header>

    )
}

export default Header