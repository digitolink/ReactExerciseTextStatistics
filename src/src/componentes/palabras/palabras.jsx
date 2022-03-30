function Palabras({text}){
    let longitud=0;
    if (text!=""){
        //longitud=text.trim().split(" ").length;
        const palabrasArray=text.split(" ");
        const palabrasConContenido=palabrasArray.filter(
          string => string!=="" && string!=="\n"  
        );
        longitud=palabrasConContenido.length;
    }
    return(
        <>
            <p>
                Total palabras: {longitud};
            </p>
        </>

    )
}

export default Palabras;