import Img from "./Img";
import Input from "./Input";
import Button from "./Button";
import MoreInfo from "./MoreInfo";

const Card = () => {
    return (
        <div className="flex flex-col items-center h-[600px] w-[325px] mt-5 bg-backgroundCard shadow-[#ffffff8c] shadow-lg border-[1px] border-black">
            <Img />
            <p className="text-2xl text-center text-white mt-5">ADIVINA EL PAÍS</p>
            <Input />
            <div className="flex justify-between w-full mt-4">
                <Button texto="MOSTRAR RESPUESTA" />
                <Button texto="SIGUIENTE" />
            </div>
            
            <MoreInfo />
        </div>
    )
}

export default Card