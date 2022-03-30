function Palabras({text}){

    let longitud= 0;

    if (text!="")
        //longitud=text.trim().split(" ").length;
        longitud=text.split(" ").filter(
          string => string!=="" && string!=="\n"  
        ).length;
    return(
        <>
            <p>
                Total palabras: {longitud};
            </p>
        </>

    )
}

export default Palabras;