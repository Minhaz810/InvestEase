const Loader = ({ height = '27px', width = '27px', spinnerWidth = '4px' }) => {
    return (
        <div>
            <div className="loader"></div>
            <style>{`
                 .loader {
                     width: ${width};
                     height: ${height};
                     aspect-ratio: 1;
                     border-radius: 50%;
                     background: 
                         radial-gradient(farthest-side, rgb(31, 148, 199) 94%, #0000) top/${spinnerWidth} ${spinnerWidth} no-repeat,
                         conic-gradient(#0000 30%, rgb(31, 148, 199));
                     -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - ${spinnerWidth}), #000 0);
                     animation: l13 1s infinite linear;
                 }
                 @keyframes l13 { 
                     100% { transform: rotate(1turn); }
                 }
             `}</style>
        </div>
    )
}

export default Loader