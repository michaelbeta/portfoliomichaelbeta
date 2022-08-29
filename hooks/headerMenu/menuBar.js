import React, { useState } from "react";

const menuBar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return [open,handleClick]
}

export default menuBar