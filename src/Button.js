import React from "react";
import './Button.css'

function Button({children,size,color,width,handleClick,disabled}){
    const style = {
        all:'unset',
        color:'white',
        background:'tomato',
        cursor:'pointer',
        height:'50px',
        paddingLeft:'10px',
        paddingRight:'10px',
        fontWeight:'bold',
        borderRadius:'10px'
    }
    return <button className ={`Button ${size} ${color} ${width}`} onClick={handleClick} disabled={disabled}>{children}
    </button>
}
export default Button

Button.defaultProps = {
    size : 'medium',
    color : 'tomato',
    disabled: false
}