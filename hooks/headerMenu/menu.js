import React, { useState,useEffect } from "react";

const menu = () => {

    const [nav__link, setnav__link] = useState("NoActivo");
    const [selected,setSelected] = useState(0);
    
    const cambiarClass_Y_Key = (key) => {
        setnav__link("Activo");
        setSelected(key);
    };
    useEffect(()=> {if(selected==0)setnav__link("Activo")});

    return [nav__link,selected,cambiarClass_Y_Key];
}

export default menu