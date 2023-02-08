const Button = ({texto}: {texto:string}) => {
    return(
        <button className="border-2 border-white text-xl text-white w-full m-2 p-1 bg-backgroundButton">{texto}</button>
    )
}

export default Button