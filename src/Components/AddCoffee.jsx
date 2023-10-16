import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, taste, details, photo, category };
        console.log(newCoffee);

        // send data to Server
        fetch('https://coffee-store-server-with-auth-qqla1tz93.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product haze been added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-center mx-auto text-5xl italic">Add New Coffee</h2>
            <p className="mx-auto w-1/2 mt-5 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eveniet dolores odio quo vel ipsam aliquam itaque laborum esse quam iste et molestiae quisquam ducimus, nihil necessitatibus, sed ratione numquam.</p>
            <form onSubmit={handleAddCoffee} >
                <div className="mt-14 justify-center mx-auto">
                    {/* Form Row name and quantity */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form Row supplier and taste  */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form Row category and details */}
                    <div className="md:flex">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Category Name" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" placeholder="Details" className="input input-bordered md:w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Form Row  photo url*/}
                    <div >
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered md:w-full mr-5" />
                            </label>
                        </div>
                    </div>
                    <div >
                        <div className="form-control w-full mt-5">
                            <input className="btn btn-block bg-[#D2B48C]" type="submit" value="Add Coffee" />

                        </div>
                    </div>

                </div>


            </form>
        </div>
    );
};

export default AddCoffee;