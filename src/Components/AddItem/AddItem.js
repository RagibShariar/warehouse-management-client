import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const AddItem = () => {
    //loading user
    const [user] = useAuthState(auth);
    //modal state
    const [modalShow, setModalShow] = useState(false);

    //adding item
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = parseInt(e.target.quantity.value);
        const supplierName = e.target.supplierName.value;
        const email = e.target.email.value;

        //adding item to database
        fetch('http://localhost:5000/products/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, img, description, price, quantity, supplierName, sold: 0 })
        })

        //adding to order too
        // fetch(`http://localhost:5000/products/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, img, description, price, quantity, supplierName, email })
        // })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        //reset form
        e.target.reset();
    }
    return (
        <div>
            <h1 className='mx-auto text-center mt-5'>Add <span className='text-primary'>Product</span> With Valid Information</h1>

            <Form className='w-50 mx-auto my-5 border p-3' onSubmit={addItem}>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Perfume Name" name='name' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Supplier Name" name='supplierName' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Product Price" name='price' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Quantity" name='quantity' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Product Image url" name='img' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control as='textarea' className='w-100' placeholder='Description about the Product' name='description' required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" name='email' value={user.email} disabled />
                </Form.Group>

                {/*  Button trigger modal  */}
                <div className='mb-3'>
                    <div className='d-flex align-items-center '>
                        What to submit &nbsp;
                        <QuestionMarkCircleIcon style={{ width: '28px' }} onClick={() => setModalShow(true)} />
                    </div>
                </div>

                <Button variant="primary" type="submit">Add Your Product</Button>
                <br />

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </Form>
        </div>
    );
};

export default AddItem;