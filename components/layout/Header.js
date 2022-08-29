import React from 'react';
import HeaderStyled from '../../styles/header/header.module.css';
import LogoN from "../../public/logoNavegacion.svg"
import MenuBar from "../../hooks/headerMenu/menuBar";
import Menu from "../../hooks/headerMenu/menu";
import MenuButton from "./menuButton";
import MenuDefault from "./menuDefault";

const Header = () => {

    const [open,handleClick] = MenuBar();
    const [nav__link,selected,cambiarClass_Y_Key] = Menu();

    return (
        <header className={HeaderStyled.header}>
            <a href='/home' className={HeaderStyled.logo}>
                <LogoN />
            </a>
            <MenuDefault open={open} nav__link={nav__link} selected={selected} cambiarClass_Y_Key={cambiarClass_Y_Key}/>
            <MenuButton open={open} handleClick={handleClick} />
        </header>

    )
}

export default Header