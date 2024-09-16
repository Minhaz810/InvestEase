

const InputField = ({type, placeholder, className,required,onChange}) => {
    return (
        <>  
        <div>
            <input
                type={type}
                placeholder={placeholder}
                className={`font-roboto ${className}`}
                required = {required}
                onChange={onChange}
            />
        </div>
        </>
    )
}

export default InputField