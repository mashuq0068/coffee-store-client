

const AddCoffee = () => {
    const addCoffee = (e) => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const supplier = form.supplier.value
        const category = form.category.value
        const photo = form.photo.value
        const price = form.price.value
        const chef = form.chef.value
        const details = form.details.value
       
        const addedCoffee = {name , supplier ,category,photo, price , chef ,details}
        console.log(addedCoffee)
        fetch('http://localhost:5000/allCoffee',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addedCoffee)
        })
        .then(res => res.json())
        .then(data => console.log(data))
      

    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={addCoffee} className=" w-1/3">
                <div className="grid grid-cols-2 gap-8">
                <div>
                <input className="border w-full  m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]"  type="text" placeholder="COffee Name" name="name" />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Supplier" name="supplier" />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Category" name="category" />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Photo Url" name="photo" />
                <br />
                </div>
                <div>
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Price" name="price" />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Chef" name="chef" />
                <br />
                <input className="border w-full m-2 px-7 py-2 rounded-md drop-shadow-xl shadow-xl border-[#E3B577]" type="text" placeholder="Details" name="details" />
                <br />
                </div>
                </div>
                
                <input className="hover:rounded-3xl btn w-full hover:bg-[#f0a038] rounded-md drop-shadow-xl shadow-xl bg-[#E3B577]" type="submit" value="Add Coffee"/>
            </form>
        </div>
    );
};

export default AddCoffee;