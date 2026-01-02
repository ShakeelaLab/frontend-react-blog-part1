import './Button.css';
import React from "react";

function Button({onClick,text,type,className}) {
    return (
        <>
            <button
                className={className}
                type={type}
                onClick={onClick}>
                {text}
            </button>
        </>
    );
}

export default Button;