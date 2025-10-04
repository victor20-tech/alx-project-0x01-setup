<<<<<<< HEAD
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
    <button
        className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
=======
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
    <button
        className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;
>>>>>>> d6379bda38db48aef684e355b519aaac22f9b304
