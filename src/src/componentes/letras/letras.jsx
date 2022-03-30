function Letras({ text }) {
    const cadena = Array.from(text).filter(
        (char)=>![" ", "\t", "\n"].includes(char));

    return (
        <>
            <p>
                Total letras: {cadena.length}
            </p>
        </>

    );
}

export default Letras;