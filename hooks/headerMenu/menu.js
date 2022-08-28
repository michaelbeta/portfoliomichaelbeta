import React, { useState } from "react";

const menu = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return [open,handleClick];
}

export default menu