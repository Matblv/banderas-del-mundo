const Input = () => {
    // funcion para pasar el input a mayuscula
    const inputToUpperCase = () => {
        const input = document.getElementById("input") as HTMLInputElement;
        const inputMayus = input.value.toUpperCase();
        input.value = inputMayus;
    }

    return (
        <input id="input" onInput={inputToUpperCase} className="bg-[#000000b3] w-3/4 h-8 text-white text-2xl text-center" maxLength={22} />
    );
};

export default Input;