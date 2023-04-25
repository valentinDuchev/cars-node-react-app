import { useParams } from "react-router"


export const CarDetails = () => {

    const {id}= useParams()


    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}