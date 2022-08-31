import React, { useState } from "react";

const MenuBar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return [open,handleClick]
}

export default MenuBar
