

const Coffee = ({coffee}) => {
    const {photo , name , price , chef} = coffee
    console.log(coffee)
    return (
        <div className="flex justify-between items-center" >
           
         <div>
         <img className="w-[220px]" src={photo} alt="" />
         </div>
         <div className="space-y-3 text-left">
            <p>name : {name}</p>
            <p>price : {price || 1000}</p>
            <p>chef : {chef || "jaber Ahmed"}</p>
         </div>
         <div className="flex flex-col space-y-3">
            <button className="btn">See Details</button>
            <button className="btn">Delete</button>
            <button className="btn">Update</button>
         </div>
        </div>
    );
};

export default Coffee;