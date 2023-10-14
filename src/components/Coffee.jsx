import { Link } from "react-router-dom";


const Coffee = ({coffee}) => {
    const {photo , name , price , chef , _id} = coffee
    console.log(coffee)
    const handleDelete = () => {
        fetch(`http://localhost:5000/allCoffee/${_id}`,{
            method:"DELETE"

        })
        .then(res => res.json())
        .then(data => {
           
            console.log(data)
        
        })

    }
    
    return (
        <div className="flex justify-between items-center drop-shadow-xl shadow-xl" >
           
         <div>
         <img className="w-[220px]" src={photo} alt="" />
         </div>
         <div className="space-y-3 text-left">
            <p>name : {name}</p>
            <p>price : {price || 1000}</p>
            <p>chef : {chef || "jaber Ahmed"}</p>
         </div>
         <div className="flex flex-col space-y-3">
            <Link to={`details/${_id}`} className="btn btn-neutral">See Details</Link>
            <Link onClick={handleDelete} className="btn btn-neutral">Delete</Link>
            <Link to={`update/${_id} `}className="btn btn-neutral">Update</Link>
           
         </div>
        </div>
    );
};

export default Coffee;