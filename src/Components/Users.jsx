import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

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

                fetch(`https://coffee-store-server-with-auth-qqla1tz93.vercel.app/user/${_id}`, {
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
                            const remainingUsers = users.filter(user => user._id !== _id);
                            setUsers(remainingUsers);
                        }
                    })

            }
        })
    }

    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>last Logged n</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td>{user.LastLo}</td>
                                    <td>{user.lastLoggedAt}</td>
                                    <td>
                                        <button 
                                        onClick={() => handleDelete(user._id)} 
                                        className="btn bg-[#EA4744]"><AiFillDelete></AiFillDelete></button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;   