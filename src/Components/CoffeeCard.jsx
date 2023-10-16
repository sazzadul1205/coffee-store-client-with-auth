import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, quantity, supplier, taste, details, photo, category } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                fetch(`https://coffee-store-server-with-auth-qqla1tz93.vercel.app/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id );
                            setCoffees(remaining);
                        }
                    })

            }
        })
    }

    return (
        <div className="mt-10">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt={name} /></figure>
                <div className="ml-5 flex justify-between w-full pr-5 py-10">
                    <div>
                        <h2 className="card-title cla">{name}</h2>
                        <p>Quantity: {quantity}</p>
                        <p>Supplier: {supplier}</p>
                        <p>Taste: {taste}</p>
                        <p>Details: {details}</p>
                        <p>Category: {category}</p>
                    </div>
                    <div className="card-actions justify-end pr-14">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn bg-[#D2B48C]"><AiFillEye></AiFillEye></button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn bg-[#3C393B]"><AiFillEdit></AiFillEdit></button>
                            </Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn bg-[#EA4744]"><AiFillDelete></AiFillDelete></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
