function Palabras({text}){

    let longitud= 0;

    if (text!="")
        longitud=text.trim().split(" ").length;
    return(
        <>
            <p>
                Total palabras: {longitud};
            </p>
        </>

    )
}

export default Palabras;