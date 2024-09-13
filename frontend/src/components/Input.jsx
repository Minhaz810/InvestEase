

const InputField = ({type, placeholder, className,required}) => {
    return (
        <>  
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={`font-roboto ${className}`}
                required = {required}
            />
        </div>
        </>
    )
}

export default InputField