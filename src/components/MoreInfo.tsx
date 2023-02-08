import MoreInfoItem from "./MoreInfoItem"

const MoreInfo = () => {
    return (
        <div className="w-full h-full p-2 bg-backgroundButton">
            <ul>
                <MoreInfoItem dato="este es un dato" />
                <MoreInfoItem dato="este es un dato" />
                <MoreInfoItem dato="este es un dato" />
                <MoreInfoItem dato="este es un dato" />
                <MoreInfoItem dato="este es un dato" />
            </ul>
        </div>
    )
}

export default MoreInfo