import './Button.css';
import React from "react";

function Button({onClick,text,type,className,loading}) {
    return (
        <>
            <button
                className={className}
                type={type}
                onClick={onClick}
                disabled={loading}
            >
                {text}
            </button>
        </>
    );
}

export default Button;