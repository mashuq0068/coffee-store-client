import { useLoaderData } from "react-router-dom";


const Details = () => {
    const coffee = useLoaderData()
 
    return (
        <div>
            <img src={coffee.photo} alt="" />
        </div>
    );
};

export default Details;