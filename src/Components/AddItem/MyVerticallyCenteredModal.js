import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    What to submit?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Requirements</h4>
                <p>
                    There are six input boxes. Please fill them out with valid information.
                    <ol>
                        <li>Product Name</li>
                        <li>Supplier Name</li>
                        <li>Product Price</li>
                        <li>Quantity Of Product</li>
                        <li>Product Image URL</li>
                        <li>Short description of the product</li>
                    </ol>
                    <h4 className='my-3'>While submitting image make sure your image url is valid and image size is in 1:1 ratio.</h4>
                    <h5>Here are some image link : </h5>
                    <ul>
                        <li>https://i.ibb.co/0JZH0Kq/Ajmal-Senora-75ml-EDP-for-women-1.jpg</li>
                        <li>https://i.ibb.co/k0gNb8j/Polo-Ralph-Blue.jpg</li>
                        <li>https://i.ibb.co/R6bw6Tp/Club-De-Nuit-Intense-Cologne-by-Armaf-450x450.jpg</li>
                        <li>https://i.ibb.co/mR4bKxY/Sauvage.jpg</li>
                        <li>https://i.ibb.co/hfHV06J/Armaf-Club-de-Nuit-Sillage-EDP-450x450.jpg</li>
                        <li>https://i.ibb.co/M2TpKnK/davidoff-cool-water-intense-450x450.jpg</li>
                    </ul>
                    </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;