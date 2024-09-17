import Loader from "./Loader"

const PrimaryButton = ({ className, text, loading }) => {
    return (
        <div>
            <button className={`font-roboto rounded-md bg-cardDark ${className} flex justify-center`}>
                {loading ? <Loader /> : text}
            </button>
        </div>
    )
}

export default PrimaryButton
