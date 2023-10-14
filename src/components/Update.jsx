import { useLoaderData } from "react-router-dom";


const Update = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const handleUpdateButton = (e) => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const photo = form.photo.value
        const price = form.price.value
        const chef = form.chef.value
        const details = form.details.value

       
        const updatedCoffee = {name , supplier ,category,photo, price , chef ,details}
        console.log(updatedCoffee)
        fetch(`http://localhost:5000/allCoffee/${coffee._id}`,{
            method:"PUT",
            headers: {
                "content-type":"application/json"
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
             <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleUpdateButton} className=" w-1/3">
                <div className="grid grid-cols-2 gap-8">
                <div>
                <input className="border w-full  m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]"  type="text" placeholder="COffee Name" name="name"  defaultValue={coffee.name}/>
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Supplier" name="supplier" defaultValue={coffee.supplier} />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Category" name="category"  defaultValue={coffee.category}/>
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Photo Url" name="photo" defaultValue={coffee.photo} />
                <br />
                </div>
                <div>
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Price" name="price" defaultValue={coffee.price} />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Chef" name="chef" defaultValue={coffee.chef} />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Details" name="details" defaultValue={coffee.details} />
                <br />
                </div>
                </div>
                
                <input className="hover:rounded-3xl btn w-full hover:bg-[#f0a038] rounded-md drop-shadow-xl shadow-xl bg-[#E3B577]" type="submit" value="Update"/>
            </form>
        </div>
        </div>
    );
};

export default Update;