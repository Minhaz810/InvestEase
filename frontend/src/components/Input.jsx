import { useState } from "react";

const InputField = ({ type, placeholder, className, required, onChange, onFocus }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="relative">
            <input
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                className={`font-roboto ${className} pr-10`}
                required={required}
                onChange={onChange}
                onFocus={onFocus}
            />
            {type === "password" && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center px-2"
                >
                    <i className={`fas ${showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}`}></i>
                </button>
            )}
        </div>
    );
};

export default InputField;
