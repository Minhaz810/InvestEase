import Loader from "./Loader"

const PrimaryButton = ({ className, text, loading, rounded}) => {
    return (
        <div>
            <button className={`font-roboto rounded-${rounded} bg-cardDark ${className} hover:bg-hover flex justify-center`}>
                {loading ? <Loader /> : text}
            </button>
        </div>
    )
}

export default PrimaryButton
