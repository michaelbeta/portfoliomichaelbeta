import React from 'react';
import PropTypes from "prop-types";
import Image from 'next/image';
//import StyledCardPresentation from "../../styles/home/carPresentation.css";

const CardPresentation = (props) => {

    return (
        <div>
            <div>
                <Image
                    src={props.image}
                    alt={props.alt}
                    width='125px'
                    height='125px'
                />
            </div>
        </div>


    )
}
/*CardPresentation.propTypes = {
    alt: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};*/
export default CardPresentation;