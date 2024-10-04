
function Protcard({title,address,imageSrc}){
    return (
        <div>
            <img src={imageSrc} alt="logo-imag"/>
            <h3>{title}</h3>
            <p>{address}</p>


        </div>
    )
}

export default Protcard