import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useBikes from './../../hooks/useBikes'
import './ManageItems.css';
import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ThreeDots } from 'react-loader-spinner';

const ManageItems = () => {
    //accessing all bikes from hook
    const [bikes, setBikes] = useBikes();
    const [user] = useAuthState(auth);

    //handling delete
    const removeItem = (id) => {
        const confirm = window.confirm('Click Confirm to delete');
        //removing item from database
        if (confirm) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        // console.log('deleted from ui too');
                        //filter other bikes and setting up a new state
                        const remaining = bikes.filter(user => user._id !== id);
                        setBikes(remaining);
                    }
                })
        }
    }

    //adding to order lists
    const addToOrder = (bike) => {
        const email = bike.email;
        const img = bike.img;
        const name = bike.name;
        const supplierName = bike.supplierName;
        const price = bike.price;
        const newBike = { img, name, supplierName, email, price }
        // console.log(newBike);
        fetch(`https://protected-peak-69494.herokuapp.com/add-order`, {
        // fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
    }
    return (
        <div>

            <div className='container d-flex flex-end'>

                <Button as={Link} to='/add-item' className='mt-5 ms-auto' style={{ width: '200px' }}> Add item</Button>
            </div>

            {

                bikes.length === 0 ?

                    <div className='mx-auto'>
                        <div className='mx-auto w-25  justify-content-center d-flex'>
                            <ThreeDots color="grey" strokeColor="#FF5733" className='d-block mx-auto' />
                        </div>
                    </div>
                    :

                    <Table striped bordered hover className='my-5 mx-auto custom-table'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Perfume Name</th>
                                <th>Supplier Name</th>
                                <th>Email</th>
                                <th>Manage Item</th>
                                <th className='text-center'>Update Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bikes.map(bike => <tr key={bike._id}>
                                    <td className='text-center'>
                                        <img src={bike.img} className='mx-auto custom-img' style={{ width: '70px' }} alt='not found' />
                                    </td>
                                    <td>
                                        {bike.name}
                                    </td>
                                    <td>
                                        {bike.supplierName}
                                    </td>
                                    <td>{bike.email}</td>
                                    <td className='d-flexx text-center justify-content-around align-items-center  manage-btn-container'>
                                        <button onClick={() => { removeItem(bike._id) }} className='btn manage-btn btn-danger mx-2'><TrashIcon className=" text-blue-500" style={{ width: '20px', height:'20px' }} /></button>
                                        <button onClick={() => { addToOrder(bike) }} className='btn manage-btn btn-success mx-2'>
                                            <PlusIcon className=" text-blue-500" style={{ width: '20px' }} />
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <Button as={Link} to={`/inventory/${bike._id}`} className='manage-btn' variant="primary">Update</Button>
                                    </td>
                                </tr>)
                            }
                            <tr>
                            </tr>
                        </tbody>
                    </Table>
            }
        </div>
    );
};

export default ManageItems;