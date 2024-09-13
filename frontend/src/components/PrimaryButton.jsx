

const PrimaryButton = ({className,text}) => {
    return (
        <>  
        <div>
            <button className={`font-roboto rounded-md bg-cardDark ${className}`}>
                {text}
            </button>
        </div>
        </>
    )
}

export default PrimaryButton