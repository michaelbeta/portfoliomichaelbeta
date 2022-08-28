import React from 'react';
import HeaderStyled from '../../styles/header/header.module.css';
import LogoN from "../../public/logoNavegacion.svg"
import MenuHook from "../../hooks/headerMenu/menu";
import MenuButton from "./menuButton";
import MenuDefault from "./menuDefault";

const Header = () => {

    const [open,handleClick] = MenuHook();

    return (
        <header className={HeaderStyled.header}>
            <a href='/home' className={HeaderStyled.logo}>
                <LogoN />
            </a>
            <MenuDefault open={open}/>
            <MenuButton open={open} handleClick={handleClick} />
        </header>

    )
}

export default Header