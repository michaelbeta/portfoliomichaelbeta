import React, { useState } from "react";
import HeaderLinks from "../../models/header/headerLinks";
import Link from "next/link";

const menu = () => {

    const [nav__link, setnav__link] = useState("NoActivo");
    const [selected,setSelected] = useState(-1);
    
    const cambiarClass_Y_Key = (key) => {
        setnav__link("Activo");
        setSelected(key);
    };


    return [nav__link,selected,cambiarClass_Y_Key];
}

export default menu