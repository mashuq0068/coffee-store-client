import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Coffee from "./Coffee";


const Home = () => {
    const [allCoffee , setAllCoffee] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allCoffee')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setAllCoffee( data)
        })

    },[])
    return (
        <div className="px-[15%] py-[3%] text-center">
            <Link className="hover:rounded-2xl mb-16  btn  hover:bg-[#f0a038] rounded-md drop-shadow-xl shadow-xl bg-[#E3B577]" to="/addCoffee">Add coffee</Link>
            <div className="grid xl:grid-cols-1 2xl:grid-cols-2 gap-24">
            {allCoffee.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)}
            </div>
        </div>
    );
};

export default Home;