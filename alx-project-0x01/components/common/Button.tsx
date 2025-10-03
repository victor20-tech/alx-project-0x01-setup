import { ButtonProps } from "@/interfaces";
import React from "react";

const Button: React.FC<ButtonProps> = ({ title, style}) => {
    return (
        <button
         type="button"
         className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${style}`}
        >{title}</button>
    )
}

export default Button;
